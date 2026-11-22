import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Behind the atlas shelf there is a door no one remembers building. " +
  "No handle, only a small brass keyhole. " +
  "Each morning the dust before it is disturbed, as if someone passed through in the night. " +
  "The librarian leaves a cup of tea beside it. " +
  "Each morning it is empty.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
