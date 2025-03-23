# 网络请求

|    属性    |            值            |
| :--------: | :----------------------: |
|   方法名   |      `GETRequest()`      |
|    描述    | 请求URL链接, 返回请求结果 |
| 参数 `URL` |       链接 字符串        |
|    返回    |    RAM信息数组 字符串    |

## 例子

```C# [代码示例]
private void AuxiliaryTools()
{
    Console.WriteLine(await ElakeAuxiliaryTools.GETRequest("https://api.elake.top/"));
}
```

``` [输出]
{"Code":2000,"Message":"\u975e\u6cd5\u8bf7\u6c42","Data":"15.95ms",
"Tips":"API\u63a5\u53e3\u7531\u6d31\u6d77\u5de5\u4f5c\u5ba4(https:\/\/www.elake.top)\u514d\u8d39\u63d0\u4f9b","Version":"3.
1.6","Timestamp":1725799399}
```
