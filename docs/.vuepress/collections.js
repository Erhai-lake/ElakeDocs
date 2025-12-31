import {defineCollections} from "vuepress-theme-plume"
import fs from "node:fs"
import path from "node:path"
import {fileURLToPath, pathToFileURL} from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function loadCollections(dir) {
	const ENTRIES = fs.readdirSync(dir, {withFileTypes: true})
	const RESULT = []
	for (const ENTRY of ENTRIES) {
		const FULL_PATH = path.join(dir, ENTRY.name)
		if (ENTRY.isDirectory()) RESULT.push(...await loadCollections(FULL_PATH))
		if (ENTRY.isFile() && ENTRY.name.endsWith(".js")) {
			const mod = await import(pathToFileURL(FULL_PATH).href)
			if (mod.default) RESULT.push(mod.default)
			for (const value of Object.values(mod)) if (value && typeof value === "object") RESULT.push(value)
		}
	}
	return RESULT
}

export default defineCollections(await loadCollections(path.resolve(__dirname, "./collections")))
