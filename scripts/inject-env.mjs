import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

dotenv.config({ path: join(root, ".env") });
dotenv.config({ path: join(root, ".env.local") });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const tableName = process.env.SUPABASE_TABLE || "email";

if (!supabaseUrl || !supabaseKey) {
  console.warn(
    "[labnlobs] SUPABASE_URL or SUPABASE_ANON_KEY is missing. Copy .env.example to .env and set values, or set the variables in your host’s build environment."
  );
}

const payload = {
  SUPABASE_URL: supabaseUrl || "",
  SUPABASE_ANON_KEY: supabaseKey || "",
  SUPABASE_TABLE: tableName,
};

const out =
  "/* Auto-generated from .env or CI env; do not commit. */\n" +
  `window.__APP_ENV__ = ${JSON.stringify(payload, null, 0)};\n`;

writeFileSync(join(root, "config.js"), out, "utf8");
console.log("[labnlobs] Wrote config.js");
