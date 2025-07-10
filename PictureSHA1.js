import { fileURLToPath } from "url"
import fs from "fs"
import path from "path"
import crypto from "crypto"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const DocsDirectory = path.join(__dirname, "Docs")

// 递归遍历目录以获取所有 .md 文件路径
const WalkDirectory = (Dir) => {
    let FilesList = []
    const Items = fs.readdirSync(Dir)
    Items.forEach(Item => {
        const ItemPath = path.join(Dir, Item)
        const Stat = fs.statSync(ItemPath)
        if (Stat.isDirectory()) {
            FilesList = FilesList.concat(WalkDirectory(ItemPath))
        } else if (path.extname(Item) === ".md") {
            FilesList.push(ItemPath);
        }
    })
    return FilesList
}

// 生成文件的SHA1哈希值
const GenerateSHA1 = (FilePath) => {
    const FileBuffer = fs.readFileSync(FilePath)
    const HashSum = crypto.createHash("sha1")
    HashSum.update(FileBuffer)
    return HashSum.digest("hex")
}

// 重命名图片并替换Markdown文件中的图片链接
const RenameImageAndUpdateMarkdown = (MarkdownPath, ImageLink) => {
    const ImageRegex = /!\[(.*?)\]\((.*?)\)/
    const Match = ImageLink.match(ImageRegex)
    if (!Match) return
    const ImagePath = path.resolve(path.dirname(MarkdownPath), Match[2])
    const ImageExt = path.extname(ImagePath).substring(1)
    if (!fs.existsSync(ImagePath)) {
        console.error(`图像文件不存在: ${ImagePath}`)
        return
    }
    const NewImageName = GenerateSHA1(ImagePath);
    const NewImagePath = path.join(path.dirname(ImagePath), `${NewImageName}.${ImageExt}`)
    const NewImageLink = `![${NewImageName}](${path.relative(path.dirname(MarkdownPath), NewImagePath)})`
    // 重命名图片文件
    fs.renameSync(ImagePath, NewImagePath)
    // 读取Markdown文件内容
    let MarkdownContent = fs.readFileSync(MarkdownPath, "utf8")
    // 替换Markdown文件中的图片链接
    MarkdownContent = MarkdownContent.replace(ImageLink, NewImageLink.replace(/\\/g, "/"))
    // 写回Markdown文件
    fs.writeFileSync(MarkdownPath, MarkdownContent)
}

// 进度条更新函数
const UpdateProgress = (Current, Total) => {
    const Percentage = (Current / Total) * 100
    const Progress = Math.round(Percentage)
    const ProgressBar = "=".repeat(Progress) + " ".repeat(100 - Progress)
    if (process.stdout && process.stdout.clearLine) {
        process.stdout.clearLine()
        process.stdout.cursorTo(0)
    }
    process.stdout.write(`[${ProgressBar}] ${Progress}%\r`)
}

// 主函数
const Main = async () => {
    console.log("开始转换图片SHA1...")
    const Files = WalkDirectory(DocsDirectory)
    const ImageRegex = /!\[(.*?)\]\((Assets\/.*?)\)/g
    Files.forEach((File, Index) => {
        let MarkdownContent = fs.readFileSync(File, "utf8")
        let Match
        while ((Match = ImageRegex.exec(MarkdownContent)) !== null) {
            RenameImageAndUpdateMarkdown(File, Match[0])
        }
        UpdateProgress(Index + 1, Files.length)
    })
    if (process.stdout && process.stdout.clearLine) {
        process.stdout.clearLine()
        process.stdout.cursorTo(0)
    }
    console.log("转换完成")
}

Main().catch(console.error)
