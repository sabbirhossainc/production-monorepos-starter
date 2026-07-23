import { DatabaseSync } from 'node:sqlite';
const db = new DatabaseSync('C:\\Users\\Techgeen-Lap-01\\.local\\share\\mimocode\\mimocode.db', { open: true, readOnly: true });

// pnpm test failure session
console.log("=== ses_07241388dffej0Mysl7Etvyh71 (pnpm test) - All messages ===");
const rows = db.prepare(`SELECT m.id, json_extract(m.data, '$.role') as role, substr(p.data, 1, 2000) as preview
  FROM message m JOIN part p ON p.message_id = m.id
  WHERE m.session_id = 'ses_07241388dffej0Mysl7Etvyh71'
    AND json_extract(p.data, '$.type') = 'text'
  ORDER BY m.time_created, p.time_created LIMIT 15`).all();
rows.forEach(r => console.log(`[${r.id}] ${r.role}: ${r.preview}\n---`));

// Also search for user messages about "pnpm test" or "test failure" in this project
console.log("\n=== User messages mentioning 'pnpm test' or 'test failure' ===");
const rows2 = db.prepare(`SELECT m.session_id, m.id, substr(p.data, 1, 800) as preview
  FROM message m JOIN part p ON p.message_id = m.id
  WHERE json_extract(m.data, '$.role') = 'user'
    AND json_extract(p.data, '$.type') = 'text'
    AND (json_extract(p.data, '$.text') LIKE '%pnpm test%' OR json_extract(p.data, '$.text') LIKE '%test fail%')
    AND m.session_id LIKE 'ses_%'
  ORDER BY m.time_created DESC LIMIT 5`).all();
rows2.forEach(r => console.log(`[${r.session_id}] ${r.preview}\n---`));

db.close();
