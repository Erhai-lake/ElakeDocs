import { fileURLToPath } from "url"
import { execSync } from "child_process"
import fs from "fs"
import path from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const DocsDirectory = path.join(__dirname, "Docs")
const OutputFile = "public/CommitRecords/"

// 递归遍历目录以获取所有 .md 文件路径
const WalkDirectory = (Dir) => {
    let FilePathList = []
    const Items = fs.readdirSync(Dir)
    Items.forEach(Item => {
        const ItemPath = path.join(Dir, Item)
        const Stat = fs.statSync(ItemPath)
        if (Stat.isDirectory()) {
            FilePathList = FilePathList.concat(WalkDirectory(ItemPath))
        } else if (path.extname(Item) === ".md") {
            FilePathList.push(ItemPath);
        }
    })
    return FilePathList
}

// 执行 git log 并解析输出
const GetGitLog = (File) => {
    try {
        const GitLog = execSync(`git log --pretty=format:"%H%n%s%n%an%n%at%n" --reverse ${File}`)
        const LogLines = GitLog.toString().trim().split("\n")
        if (LogLines.length === 0) {
            return [{
                Sha: "",
                Name: "",
                Message: "无历史记录",
                Time: ""
            }]
        }
        const Commits = []
        for (let i = 0; i < LogLines.length; i += 5) {
            const timestamp = parseInt(LogLines[i + 3], 10)
            let formattedDate = ""
            if (!isNaN(timestamp) && timestamp > 0) {
                try {
                    formattedDate = new Date(timestamp * 1000).toISOString().split("T")[0]
                } catch (error) {
                    console.error(`格式化日期时出错 ${File}:`, error)
                }
            }
            Commits.push({
                Sha: LogLines[i],
                Name: LogLines[i + 2],
                Message: LogLines[i + 1],
                Time: formattedDate
            })
        }
        return Commits
    } catch (Error) {
        console.error(`获取文件GitLog时出错 ${File}:`, Error)
        return [{
            Sha: "",
            Name: "",
            Message: "获取历史记录时出错",
            Time: ""
        }]
    }
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
const Main = () => {
    if (process.stdout && process.stdout.clearLine) {
        process.stdout.clearLine()
        process.stdout.cursorTo(0)
    }
    console.log("检查目录...")
    if (!fs.existsSync(OutputFile)) {
        console.log(`创建目录 ${OutputFile}...`)
        fs.mkdirSync(OutputFile, { recursive: true })
    }
    console.log("清空目录...")
    fs.readdirSync(OutputFile).forEach(file => {
        fs.unlinkSync(path.join(OutputFile, file))
    })
    console.log("开始获取提交记录...")
    const FilePathList = WalkDirectory(DocsDirectory)
    console.log(`共找到 ${FilePathList.length} 个文件`)
    FilePathList.forEach((File, Index) => {
        const RelativePath = path.relative(DocsDirectory, File).replace(/\\/g, "/").replace(/\//g, "_").replace(".md", ".json")
        fs.writeFileSync(`${OutputFile}${RelativePath}`, JSON.stringify(GetGitLog(File)))
        UpdateProgress(Index + 1, FilePathList.length)
    })
    console.log(`提交记录已写入${OutputFile}`)
    console.log("所有操作已完成.")
}
Main()
