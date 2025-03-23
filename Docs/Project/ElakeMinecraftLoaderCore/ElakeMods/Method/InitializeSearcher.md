# 初始化搜索器

|      属性       |                                                  值                                                   |
| :-------------: | :---------------------------------------------------------------------------------------------------: |
|     方法名      |                                        `InitializeSearcher()`                                         |
|      描述       |                                               选择平台                                                |
| 参数 `Platform` | 平台 数值(默认使用0, 0:[curseforge](//www.curseforge.com/minecraft), 1:[modrinth](//modrinth.com/mods)) |
|      返回       |                                                  无                                                   |

## 例子

```C# [代码示例]
private void Mods()
{
    Console.WriteLine("CF:");
    ElakeMods.InitializeSearcher(0);
    Console.WriteLine("MR:");
    ElakeMods.InitializeSearcher(1);
}
```
