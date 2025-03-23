# 获取CPU信息

|  属性  |               值                |
| :----: | :-----------------------------: |
| 方法名 |         `GetCpuInfo()`          |
|  描述  | 获取CPU信息数组(品牌, 型号, 主频) |
|  返回  |       CPU信息数组 字符串        |

## 例子

```C# [代码示例]
private void AuxiliaryTools()
{
    string[] CpuInfos = ElakeAuxiliaryTools.GetCpuInfo();
    foreach (string CpuInfo in CpuInfos)
    {
        Console.WriteLine(CpuInfo);
    }
}
```

``` [输出]
GenuineIntel Intel(R)Core(TM)i7-10875H CPU @ 2.30GHz
```
