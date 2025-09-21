import fs from "fs"
import path from "path"

function collectSidebars(baseDir: string) {
  const SIDEBAR: any = {}
  const ROOT_PATH = path.resolve(__dirname, baseDir)
  function walk(dir: string) {
    const ENTRIES = fs.readdirSync(dir, { withFileTypes: true })
    for (const ENTRY of ENTRIES) {
      const FULL_PATH = path.join(dir, ENTRY.name)
      if (ENTRY.isDirectory()) {
        walk(FULL_PATH)
      } else if (ENTRY.isFile() && ENTRY.name === "Sidebar.json") {
        const REL_PATH = path.relative(ROOT_PATH, FULL_PATH)
        const REL_DIR = path.dirname(REL_PATH).replace(/\\/g, "/")
        const ROUTE = "/Docs/" + REL_DIR + "/"
        const CONTENT = fs.readFileSync(FULL_PATH, "utf-8")
        SIDEBAR[ROUTE] = JSON.parse(CONTENT)
      }
    }
  }
  walk(ROOT_PATH)
  return SIDEBAR
}
export const Sidebar: any = collectSidebars("../Docs")
