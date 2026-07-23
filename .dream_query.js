import { DatabaseSync } from 'node:sqlite';
const db = new DatabaseSync('C:\\Users\\Techgeen-Lap-01\\.local\\share\\mimocode\\mimocode.db', { open: true, readOnly: true });

// 1. User messages from lint investigation session
console.log("=== ses_09abe90a4ffe5XldiF5KszTvfc (pnpm lint failure) - User messages ===");
const u1 = db.prepare(`SELECT m.id, json_extract(m.data, '$.role') as role, substr(p.data, 1, 2000) as preview
  FROM message m JOIN part p ON p.message_id = m.id
  WHERE m.session_id = 'ses_09abe90a4ffe5XldiF5KszTvfc'
    AND json_extract(m.data, '$.role') = 'user'
    AND json_extract(p.data, '$.type') = 'text'
  ORDER BY m.time_created LIMIT 10`).all();
u1.forEach(r => console.log(`[${r.id}] ${r.preview}\n`));

// 2. Tool results from lint investigation session
console.log("=== ses_09abe90a4ffe5XldiF5KszTvfc (pnpm lint failure) - Tool results ===");
const u2 = db.prepare(`SELECT m.id, substr(p.data, 1, 3000) as preview
  FROM message m JOIN part p ON p.message_id = m.id
  WHERE m.session_id = 'ses_09abe90a4ffe5XldiF5KszTvfc'
    AND json_extract(m.data, '$.role') = 'assistant'
    AND json_extract(p.data, '$.type') = 'tool'
  ORDER BY m.time_created, p.time_created LIMIT 20`).all();
u2.forEach(r => console.log(`[${r.id}] ${r.preview}\n`));

// 3. User messages from turbo lint session
console.log("\n=== ses_07c633f90ffe4BsCCLGwsWRQ4Z (turbo lint) - User messages ===");
const u3 = db.prepare(`SELECT m.id, json_extract(m.data, '$.role') as role, substr(p.data, 1, 2000) as preview
  FROM message m JOIN part p ON p.message_id = m.id
  WHERE m.session_id = 'ses_07c633f90ffe4BsCCLGwsWRQ4Z'
    AND json_extract(m.data, '$.role') = 'user'
    AND json_extract(p.data, '$.type') = 'text'
  ORDER BY m.time_created LIMIT 10`).all();
u3.forEach(r => console.log(`[${r.id}] ${r.preview}\n`));

// 4. Tool results (bash) from turbo lint session
console.log("=== ses_07c633f90ffe4BsCCLGwsWRQ4Z (turbo lint) - Tool results ===");
const u4 = db.prepare(`SELECT m.id, substr(p.data, 1, 3000) as preview
  FROM message m JOIN part p ON p.message_id = m.id
  WHERE m.session_id = 'ses_07c633f90ffe4BsCCLGwsWRQ4Z'
    AND json_extract(m.data, '$.role') = 'assistant'
    AND json_extract(p.data, '$.type') = 'tool'
  ORDER BY m.time_created, p.time_created LIMIT 20`).all();
u4.forEach(r => console.log(`[${r.id}] ${r.preview}\n`));

// 5. Check the current session (Auto Dream)
console.log("\n=== ses_07241382fffeXkebgp8pfQFf3V (Auto Dream) - All messages ===");
const u5 = db.prepare(`SELECT m.id, json_extract(m.data, '$.role') as role, substr(p.data, 1, 1500) as preview
  FROM message m JOIN part p ON p.message_id = m.id
  WHERE m.session_id = 'ses_07241382fffeXkebgp8pfQFf3V'
    AND json_extract(p.data, '$.type') = 'text'
  ORDER BY m.time_created, p.time_created LIMIT 10`).all();
u5.forEach(r => console.log(`[${r.id}] ${r.role}: ${r.preview}\n`));

// 6. Search for user statements with keywords across all sessions
console.log("\n=== Keyword search across all sessions ===");
const keywords = ['always', 'never', 'remember', 'rule', 'decision', 'workflow', 'convention'];
for (const kw of keywords) {
  const rows = db.prepare(`SELECT m.session_id, m.id, substr(p.data, 1, 500) as preview
    FROM message m JOIN part p ON p.message_id = m.id
    WHERE json_extract(m.data, '$.role') = 'user'
      AND json_extract(p.data, '$.type') = 'text'
      AND json_extract(p.data, '$.text') LIKE '%${kw}%'
    ORDER BY m.time_created DESC LIMIT 3`).all();
  if (rows.length > 0) {
    console.log(`--- keyword: ${kw} ---`);
    rows.forEach(r => console.log(`  [${r.session_id}] ${r.preview}\n`));
  }
}

db.close();
