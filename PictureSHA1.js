import {fileURLToPath} from "url"
import fs from "fs"
import path from "path"
import crypto from "crypto"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const DOCS_DIRECTORY = path.join(__dirname, "docs")

/**
 * 递归遍历目录, 获取所有 Markdown 文件
 */
const walkDirectory = (dir) => {
	let filesList = []
	const EXCLUDED_DIRS = new Set([
		".vuepress"
	])
	const walk = (currentDir) => {
		const DIR_NAME = path.basename(currentDir)
		// 命中排除目录, 直接跳过
		if (EXCLUDED_DIRS.has(DIR_NAME)) return
		const ITEMS = fs.readdirSync(currentDir)
		for (const item of ITEMS) {
			const ITEM_PATH = path.join(currentDir, item)
			const STAT = fs.statSync(ITEM_PATH)
			if (STAT.isDirectory()) {
				walk(ITEM_PATH)
			} else if (path.extname(item) === ".md") {
				filesList.push(ITEM_PATH)
			}
		}
	}
	walk(dir)
	if (filesList.length > 0) console.log(`在目录 ${dir} 中找到 ${filesList.length} 个 Markdown 文件`)
	return filesList
}

/**
 * 判断文件名是否已经是 SHA1
 */
const isSHA1Filename = (filename) => {
	return /^[a-f0-9]{40}$/i.test(path.parse(filename).name)
}

/**
 * 生成文件 SHA1
 */
const generateSHA1 = (filePath) => {
	const BUFFER = fs.readFileSync(filePath)
	return crypto.createHash("sha1").update(BUFFER).digest("hex")
}

/**
 * 重命名图片并更新 Markdown 引用
 */
const renameImageAndUpdateMarkdown = (markdownPath, fullMatch, imageRelativePath) => {
	const MARKDOWN_DIR = path.dirname(markdownPath)
	const IMAGE_PATH = path.resolve(MARKDOWN_DIR, imageRelativePath)
	if (!fs.existsSync(IMAGE_PATH)) {
		console.warn(`图像文件不存在: ${IMAGE_PATH}`)
		return
	}
	// 已处理过的图片直接跳过
	if (isSHA1Filename(path.basename(IMAGE_PATH))) return
	const IMAGE_EXT = path.extname(IMAGE_PATH)
	const SHA1_NAME = generateSHA1(IMAGE_PATH)
	const NEW_IMAGE_PATH = path.join(path.dirname(IMAGE_PATH), `${SHA1_NAME}${IMAGE_EXT}`)
	// 避免重复重命名
	if (!fs.existsSync(NEW_IMAGE_PATH)) fs.renameSync(IMAGE_PATH, NEW_IMAGE_PATH)
	let markdownContent = fs.readFileSync(markdownPath, "utf8")
	const NEW_IMAGE_LINK = `![${SHA1_NAME}](${path.relative(MARKDOWN_DIR, NEW_IMAGE_PATH).replace(/\\/g, "/")})`
	markdownContent = markdownContent.replace(fullMatch, NEW_IMAGE_LINK)
	fs.writeFileSync(markdownPath, markdownContent)
}

/**
 * 进度条
 */
const updateProgress = (current, total) => {
	const PERCENT = Math.floor((current / total) * 100)
	const BAR = "=".repeat(PERCENT) + " ".repeat(100 - PERCENT)
	if (process.stdout?.clearLine) {
		process.stdout.clearLine(0)
		process.stdout.cursorTo(0)
	}
	process.stdout.write(`[${BAR}] ${PERCENT}%`)
}

/**
 * 主流程
 */
const main = () => {
	console.log("开始转换图片为 SHA1 命名...")
	const MARKDOWN_FILES = walkDirectory(DOCS_DIRECTORY)
	const IMAGE_REGEX = /!\[(.*?)\]\((assets\/.*?)\)/g
	MARKDOWN_FILES.forEach((file, index) => {
		const CONTENT = fs.readFileSync(file, "utf8")
		let Match
		while ((Match = IMAGE_REGEX.exec(CONTENT)) !== null) renameImageAndUpdateMarkdown(file, Match[0], Match[2])
		updateProgress(index + 1, MARKDOWN_FILES.length)
	})
	if (process.stdout?.clearLine) {
		process.stdout.clearLine(0)
		process.stdout.cursorTo(0)
	}
	console.log("转换完成 ✔")
}

main()
