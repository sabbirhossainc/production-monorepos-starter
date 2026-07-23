import { DatabaseSync } from 'node:sqlite';
const db = new DatabaseSync('C:\\Users\\Techgeen-Lap-01\\.local\\share\\mimocode\\mimocode.db', { open: true, readOnly: true });

// Get assistant text messages from turbo lint session (later part)
console.log("=== ses_07c633f90ffe4BsCCLGwsWRQ4Z - Later assistant messages ===");
const rows = db.prepare(`SELECT m.id, substr(p.data, 1, 2000) as preview
  FROM message m JOIN part p ON p.message_id = m.id
  WHERE m.session_id = 'ses_07c633f90ffe4BsCCLGwsWRQ4Z'
    AND json_extract(m.data, '$.role') = 'assistant'
    AND json_extract(p.data, '$.type') = 'text'
  ORDER BY m.time_created DESC, p.time_created DESC LIMIT 10`).all();
rows.forEach(r => console.log(`[${r.id}] ${r.preview}\n---`));

// Get tool results from later in the session
console.log("\n=== ses_07c633f90ffe4BsCCLGwsWRQ4Z - Later tool results ===");
const rows2 = db.prepare(`SELECT m.id, substr(p.data, 1, 3000) as preview
  FROM message m JOIN part p ON p.message_id = m.id
  WHERE m.session_id = 'ses_07c633f90ffe4BsCCLGwsWRQ4Z'
    AND json_extract(m.data, '$.role') = 'assistant'
    AND json_extract(p.data, '$.type') = 'tool'
  ORDER BY m.time_created DESC, p.time_created DESC LIMIT 15`).all();
rows2.forEach(r => console.log(`[${r.id}] ${r.preview}\n---`));

db.close();
