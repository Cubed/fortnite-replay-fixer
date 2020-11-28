/* Simple script to fix corrupted replay files
Developed by Twitter @FNBRUnreleased */
const fs = require ("fs");
var ReplayFileNew = fs.readFileSync("./ReplayNew.replay")

var ReplayFileRef = fs.readFileSync("./ReplayRef.replay", "hex")
ReplayFileRefResult = ReplayFileRef.substring(0, 104)


ReplayFileNew.write(`${ReplayFileRefResult}`, 0, 51, "hex")
fs.writeFileSync("./ReplayNew.replay", ReplayFileNew)