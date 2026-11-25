import { mkdirSync, writeFileSync } from "node:fs";

// One Wi-Fi network name, 32 characters or fewer, that lands a joke and
// implies a whole story in the few words a passer-by sees in a phone's
// network list. Fresh lane: a dad who installed the router, then left.
// The network outlived the man who set it up — sad, funny, and a whole
// family history in 29 characters. Revision: "This" swapped for "WiFi"
// so the name points at the thing itself instead of a vague pronoun.
const NAME = "Dad Installed WiFi, Then Left";

if (NAME.length > 32) {
  throw new Error(`Name is ${NAME.length} characters, over the 32 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", NAME + "\n", "utf8");
console.log(NAME);
