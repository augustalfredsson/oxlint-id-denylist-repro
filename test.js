// These should NOT be flagged — using the global Number, not declaring an identifier.
// However, they are flagged by oxlint IF the config contains
// "env": {
//  "browser": true
//}
const max = Number.MAX_SAFE_INTEGER;
const valid = Number.isFinite(42);
