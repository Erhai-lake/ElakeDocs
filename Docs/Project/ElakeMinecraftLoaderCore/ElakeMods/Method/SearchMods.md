# 搜索模组

|        属性         |                                 值                                 |
| :-----------------: | :----------------------------------------------------------------: |
|       方法名        |                           `SearchMods()`                           |
|        描述         |                              搜索模组                              |
|  参数 `CategoryId`  |              类别ID 数值(默认为空, 目前只有CF需要传入)              |
| 参数 `CategoryName` |            类别名称 字符串(默认为空, 目前只有MR需要传入)            |
| 参数 `GameVersion`  |                     游戏版本 字符串(默认为空)                      |
| 参数 `SearchFilter` |                    搜索过滤器 字符串(默认为空)                     |
|    参数 `Index`     | 页码 数值(默认为空, 偏移量自动计算, 偏移量 = (Index - 1) * PageSize) |
|   参数 `PageSize`   |        每页数量(CF最大50, MR最大100) 数值(默认为平台最大值)         |
|        返回         |  模组搜索信息列表 列表([`ModsInfoList`](../Return/ModsInfoList))   |

## 例子

```C# [代码示例]
private static async void Mods()
{
    Console.WriteLine("CF");
    ElakeMods.InitializeSearcher(0);
    try
    {
        var SearchMods = await ElakeMods.SearchMods(null, null, null, "Create", 1, 5);
        if (SearchMods == null || SearchMods.Count == 0)
        {
            Console.WriteLine("没有模组");
        }
        else
        {
            foreach (var Info in SearchMods)
            {
                Console.WriteLine($"模组ID: {Info.ID}");
                Console.WriteLine($"版本名称: {Info.Name}");
                Console.WriteLine($"CF链接: {Info.WebsiteUrl}");
                Console.WriteLine($"介绍: {Info.Summary}");
                Console.WriteLine($"下载量: {Info.DownloadCount}");
                String AuthorName = string.Join(", ", Info.Authors.Select(a => a.Name));
                Console.WriteLine($"作者: {AuthorName}");
                Console.WriteLine($"缩略图: {Info.LogoThumbnailUrl}");
                Console.WriteLine($"Logo: {Info.LogoUrl}");
                Console.WriteLine($"创建时间: {Info.DateCreated}");
                Console.WriteLine($"修改时间: {Info.DateModified}");
                Console.WriteLine($"发布时间: {Info.DateReleased}");
                Console.WriteLine();
            }
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"发生错误: {ex.Message}");
    }

    Console.WriteLine("MR");
    ElakeMods.InitializeSearcher(1);
    try
    {
        var SearchMods = await ElakeMods.SearchMods(null, null, null, "Create", 1, 5);
        if (SearchMods == null || SearchMods.Count == 0)
        {
            Console.WriteLine("没有模组");
        }
        else
        {
            foreach (var Info in SearchMods)
            {
                Console.WriteLine($"模组ID: {Info.ID}");
                Console.WriteLine($"版本名称: {Info.Name}");
                Console.WriteLine($"MR链接: {Info.WebsiteUrl}");
                Console.WriteLine($"介绍: {Info.Summary}");
                Console.WriteLine($"下载量: {Info.DownloadCount}");
                String AuthorName = string.Join(", ", Info.Authors.Select(a => a.Name));
                Console.WriteLine($"作者: {AuthorName}");
                Console.WriteLine($"缩略图: {Info.LogoThumbnailUrl}");
                Console.WriteLine($"Logo: {Info.LogoUrl}");
                Console.WriteLine($"创建时间: {Info.DateCreated}");
                Console.WriteLine($"修改时间: {Info.DateModified}");
                Console.WriteLine();
            }
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"发生错误: {ex.Message}");
    }
}
```

``` [输出]
CF
模组ID: 328085
版本名称: Create
CF链接: https://www.curseforge.com/minecraft/mc-mods/create
介绍: Aesthetic Technology that empowers the Player
下载量: 92360871
作者: simibubi
缩略图: https://media.forgecdn.net/avatars/thumbnails/1065/184/256/256/638598725500886388.png
Logo: https://media.forgecdn.net/avatars/1065/184/638598725500886388.png
创建时间: 2019-07-18T10:01:42.003Z
修改时间: 2024-09-03T14:03:06.45Z
发布时间: 2024-09-03T13:58:43.703Z

模组ID: 439890
版本名称: Create Crafts & Additions
CF链接: https://www.curseforge.com/minecraft/mc-mods/createaddition
介绍: Electrifying the Create mod!
下载量: 47845134
作者: MRHminer
缩略图: https://media.forgecdn.net/avatars/thumbnails/405/250/256/256/637616939209778882.png
Logo: https://media.forgecdn.net/avatars/405/250/637616939209778882.png
创建时间: 2021-01-25T11:54:02.637Z
修改时间: 2024-08-24T10:32:44.037Z
发布时间: 2024-08-24T10:29:04.587Z

模组ID: 688231
版本名称: Create: Steam 'n' Rails
CF链接: https://www.curseforge.com/minecraft/mc-mods/create-steam-n-rails
介绍: Adding depth to Create's rail network & steam system
下载量: 23670851
作者: IThundxr, slimeistdev, spottytheturtle
缩略图: https://media.forgecdn.net/avatars/thumbnails/1065/609/256/256/638599304770885171.webp
Logo: https://media.forgecdn.net/avatars/1065/609/638599304770885171.webp
创建时间: 2022-10-13T08:40:01.797Z
修改时间: 2024-09-03T15:22:42.1Z
发布时间: 2024-09-03T15:18:09.913Z

模组ID: 659674
版本名称: Create Slice & Dice
CF链接: https://www.curseforge.com/minecraft/mc-mods/slice-and-dice
介绍: Making automation for Farmers Delight more sensible
下载量: 18169913
作者: possible_triangle
缩略图: https://media.forgecdn.net/avatars/thumbnails/1076/930/256/256/638614872387774853.png
Logo: https://media.forgecdn.net/avatars/1076/930/638614872387774853.png
创建时间: 2022-08-14T17:06:55.783Z
修改时间: 2024-09-23T16:36:03.707Z
发布时间: 2024-09-23T16:32:56.657Z

模组ID: 688768
版本名称: Create Enchantment Industry
CF链接: https://www.curseforge.com/minecraft/mc-mods/create-enchantment-industry
介绍: Automatic Enchanting, with Create.
下载量: 14339917
作者: DragonsPlus, RaymondBlaze, MarbleGate
缩略图: https://media.forgecdn.net/avatars/thumbnails/624/857/256/256/638021175448741701.png
Logo: https://media.forgecdn.net/avatars/624/857/638021175448741701.png
创建时间: 2022-10-15T14:06:31.977Z
修改时间: 2024-05-14T03:09:17.297Z
发布时间: 2024-05-14T03:01:19.837Z

MR
模组ID: LNytGWDc
版本名称: Create
MR链接: https://modrinth.com/mod/create
介绍: Aesthetic Technology that empowers the Player
下载量: 1450601
作者: simibubi
缩略图: https://cdn.modrinth.com/data/LNytGWDc/61d716699bcf1ec42ed4926a9e1c7311be6087e2_96.webp
Logo: https://cdn.modrinth.com/data/LNytGWDc/61d716699bcf1ec42ed4926a9e1c7311be6087e2_96.webp
创建时间: 2022-07-07T21:24:43.018879Z
修改时间: 2024-09-03T14:04:29.137824Z

模组ID: Xbc0uyRg
版本名称: Create Fabric
MR链接: https://modrinth.com/mod/create-fabric
介绍: Building Tools and Aesthetic Technology
下载量: 2030427
作者: tropheusj
缩略图: https://cdn.modrinth.com/data/Xbc0uyRg/2dac58a3aeb55877f88021d0d4b1221df09a837c_96.webp
Logo: https://cdn.modrinth.com/data/Xbc0uyRg/2dac58a3aeb55877f88021d0d4b1221df09a837c_96.webp
创建时间: 2022-05-17T01:52:23.290587Z
修改时间: 2024-04-08T05:14:05.421821Z

模组ID: ZzjhlDgM
版本名称: Create: Steam 'n' Rails
MR链接: https://modrinth.com/mod/create-steam-n-rails
介绍: Adding depth to Create's rail network & steam system
下载量: 1614550
作者: IThundxr
缩略图: https://cdn.modrinth.com/data/ZzjhlDgM/efac0150d612ab52768620dd53a7e8c27ce2fb0d_96.webp
Logo: https://cdn.modrinth.com/data/ZzjhlDgM/efac0150d612ab52768620dd53a7e8c27ce2fb0d_96.webp
创建时间: 2023-05-27T15:40:33.153650Z
修改时间: 2024-09-03T15:18:11.919779Z

模组ID: kU1G12Nn
版本名称: Create Crafts & Additions
MR链接: https://modrinth.com/mod/createaddition
介绍: Create Crafts & Additions extends Create and acts as a bridge between electricity and kinetic energy
下载量: 1161251
作者: mrh0
缩略图: https://cdn.modrinth.com/data/kU1G12Nn/d8d1ec226747a800ba175f70ad00a80f37047cb6_96.webp
Logo: https://cdn.modrinth.com/data/kU1G12Nn/d8d1ec226747a800ba175f70ad00a80f37047cb6_96.webp
创建时间: 2023-04-22T17:47:15.944057Z
修改时间: 2024-08-24T10:31:13.963983Z

模组ID: GmjmRQ0A
版本名称: Create Slice & Dice
MR链接: https://modrinth.com/mod/slice-and-dice
介绍: Making automation for Farmers Delight more sensible
下载量: 988527
作者: possible_triangle
缩略图: https://cdn.modrinth.com/data/GmjmRQ0A/d2d4a1a5cfc7f1ececf50dc977021c62654ccdc8_96.webp
Logo: https://cdn.modrinth.com/data/GmjmRQ0A/d2d4a1a5cfc7f1ececf50dc977021c62654ccdc8_96.webp
创建时间: 2022-08-14T17:09:40.957018Z
修改时间: 2024-09-23T16:33:00.345171Z
```
