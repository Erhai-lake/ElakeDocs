# 获取RAM信息

|  属性  |                  值                  |
| :----: | :----------------------------------: |
| 方法名 |            `GetRAMInfo()`            |
|  描述  | 获取RAM信息数组(品牌, 型号, 容量, 速度) |
|  返回  |          RAM信息数组 字符串          |

## 例子

```C# [代码示例]
private void AuxiliaryTools()
{
    string[] RAMInfos = ElakeAuxiliaryTools.GetRAMInfo();
    foreach (string RAMInfo in RAMInfos)
    {
        Console.WriteLine(RAMInfo);
    }
}
```

``` [输出]
Crucial CT16G4SFRA32A.C8FF 16GB 3200MHz
```
