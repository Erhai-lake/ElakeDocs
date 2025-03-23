# 初始化源

|     属性      |                           值                            |
| :-----------: | :-----------------------------------------------------: |
|    方法名     |                  `InitializeSource()`                   |
|     描述      | 将版本信息写入[`VersionJson`](../Variables/VersionJson) |
| 参数 `Source` |     源 字符串(`MoJang`, `BMCLAPI`, 默认使用`MoJang`)      |
|     返回      |                         布尔值                          |

## 例子

```C# [代码示例]
private async void Resources()
{
    string Source = await ElakeResources.AutomaticallySelectSource();
    Console.WriteLine($"更快的源是:{Source}");
    if (!await ElakeResources.InitializeSource())
    {
        Console.WriteLine("源初始化失败");
    }
    Console.WriteLine(ElakeResources.VersionJson);
}
```

``` [输出]
{版本json...}
```
