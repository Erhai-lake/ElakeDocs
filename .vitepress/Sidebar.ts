// 洱海文档
import { ElakeDocsSidebar } from '../Docs/ElakeDocs/Sidebar'
// 项目文档
import { ProjectSidebar } from '../Docs/Project/Sidebar'
//洱海API
import { ElakeApiSidebar } from '../Docs/Project/ElakeApi/Sidebar'
// 洱海MC启动核心
import { ElakeMinecraftLoaderCoreSidebar } from '../Docs/Project/ElakeMinecraftLoaderCore/Sidebar'
// 知识库
import { KnowledgeSidebar } from '../Docs/Knowledge/Sidebar'
// 二进制
import { BinarySidebar } from '../Docs/Knowledge/ProgrammingLanguage/Binary/Sidebar'
// 正则表达式
import { RegularExpressionSidebar } from '../Docs/Knowledge/ProgrammingLanguage/RegularExpression/Sidebar'
// Git
import { GitSidebar } from '../Docs/Knowledge/ProgrammingLanguage/Git/Sidebar'
// Python
import { PythonSidebar } from '../Docs/Knowledge/ProgrammingLanguage/Python/Sidebar'
// Html5CSS3
import { Html5CSS3Sidebar } from '../Docs/Knowledge/ProgrammingLanguage/Html5CSS3/Sidebar'
// JS
import { JavaScriptSidebar } from '../Docs/Knowledge/ProgrammingLanguage/JavaScript/Sidebar'
// Java
import { JavaSidebar } from '../Docs/Knowledge/ProgrammingLanguage/Java/Sidebar'
// Java
import { NeoForgeSidebar } from '../Docs/Knowledge/Minecraft/NeoForge/Sidebar'
// 1.21
import { NeoForgeabaSidebar } from '../Docs/Knowledge/Minecraft/NeoForge/1.21/Sidebar'

export const Sidebar: any = {
    // 洱海文档
    '/Docs/ElakeDocs/': ElakeDocsSidebar,
    // 项目文档
    '/Docs/Project/': ProjectSidebar,
    //洱海API
    '/Docs/Project/ElakeApi/': ElakeApiSidebar,
    // 洱海MC启动核心
    '/Docs/Project/ElakeMinecraftLoaderCore/': ElakeMinecraftLoaderCoreSidebar,
    // 知识库
    '/Docs/Knowledge/': KnowledgeSidebar,
    // 二进制
    '/Docs/Knowledge/ProgrammingLanguage/Binary/': BinarySidebar,
    // 正则表达式
    '/Docs/Knowledge/ProgrammingLanguage/RegularExpression/': RegularExpressionSidebar,
    // Git
    '/Docs/Knowledge/ProgrammingLanguage/Git/': GitSidebar,
    // Python
    '/Docs/Knowledge/ProgrammingLanguage/Python/': PythonSidebar,
    // Html5CSS3
    '/Docs/Knowledge/ProgrammingLanguage/Html5CSS3/': Html5CSS3Sidebar,
    // JS
    '/Docs/Knowledge/ProgrammingLanguage/JavaScript/': JavaScriptSidebar,
    // Java
    '/Docs/Knowledge/ProgrammingLanguage/Java/': JavaSidebar,
    // NeoForge
    '/Docs/Knowledge/Minecraft/NeoForge/': NeoForgeSidebar,
    // NeoForge-1.21
    '/Docs/Knowledge/Minecraft/NeoForge/1.21/': NeoForgeabaSidebar
}
