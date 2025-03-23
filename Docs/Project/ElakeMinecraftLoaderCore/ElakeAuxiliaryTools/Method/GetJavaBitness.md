# 获取Java位长

|      属性       |                值                |
| :-------------: | :------------------------------: |
|     方法名      |        `GetJavaBitness()`        |
|      描述       | 通过输入Java路径来获取Java的位长 |
| 参数 `JavaPath` |         Java路径 字符串          |
|      返回       |      位数 字符串(`32`, `64`)      |

## 例子

```C#
private void AuxiliaryTools()
{
    Console.WriteLine(ElakeAuxiliaryTools.GetJavaBitness("D:/java/JDK21"));
}
```

```[输出]
64
```
