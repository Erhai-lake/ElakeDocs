export const ElakeMinecraftLoaderCoreSidebar: any[] = [
    {
        text: "洱海MC启动核心",
        items: [
            {
                text: "前言",
                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeMinecraftLoaderCore"
            },
            {
                text: "快速使用",
                link: "/Docs/Project/ElakeMinecraftLoaderCore/QuicklyUse"
            },
            {
                text: "辅助工具类",
                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeAuxiliaryTools/ElakeAuxiliaryTools",
                collapsed: true,
                items: [
                    {
                        text: "方法",
                        collapsed: true,
                        items: [
                            {
                                text: "获取Java的版本号",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeAuxiliaryTools/Method/GetJavaVersion"
                            },
                            {
                                text: "获取Java位长",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeAuxiliaryTools/Method/GetJavaBitness"
                            },
                            {
                                text: "获取Java的列表",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeAuxiliaryTools/Method/GetJavaList"
                            },
                            {
                                text: "获取CPU信息",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeAuxiliaryTools/Method/GetCpuInfo"
                            },
                            {
                                text: "获取GPU信息",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeAuxiliaryTools/Method/GetGpuInfo"
                            },
                            {
                                text: "获取RAM信息",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeAuxiliaryTools/Method/GetRAMInfo"
                            },
                            {
                                text: "网络请求",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeAuxiliaryTools/Method/GETRequest"
                            }
                        ]
                    },
                    {
                        text: "返回",
                        collapsed: true,
                        items: [
                            {
                                text: "Java信息列表",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeAuxiliaryTools/Return/JavaInfoList"
                            }
                        ]
                    }
                ]
            },
            {
                text: "资源类",
                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeResources/ElakeResources",
                collapsed: true,
                items: [
                    {
                        text: "方法",
                        collapsed: true,
                        items: [
                            {
                                text: "自动选择延迟更低的源",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeResources/Method/AutomaticallySelectSource"
                            },
                            {
                                text: "初始化源",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeResources/Method/InitializeSource"
                            },
                            {
                                text: "获取最新的快照版本",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeResources/Method/GetNewSnapshot"
                            },
                            {
                                text: "获取最新的正式版本",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeResources/Method/GetNewRelease"
                            },
                            {
                                text: "获取版本列表",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeResources/Method/GetVersionList"
                            }
                        ]
                    },
                    {
                        text: "变量",
                        collapsed: true,
                        items: [
                            {
                                text: "版本信息",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeResources/Variables/VersionJson"
                            }
                        ]
                    },
                    {
                        text: "返回",
                        collapsed: true,
                        items: [
                            {
                                text: "版本信息列表",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeResources/Return/VersionInfoList"
                            }
                        ]
                    }
                ]
            },
            {
                text: "模组类",
                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeMods/ElakeMods",
                collapsed: true,
                items: [
                    {
                        text: "方法",
                        collapsed: true,
                        items: [
                            {
                                text: "初始化搜索器",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeMods/Method/InitializeSearcher"
                            },
                            {
                                text: "搜索模组",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeMods/Method/SearchMods"
                            },
                            {
                                text: "获取模组分类",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeMods/Method/GetModsCategories"
                            },
                            {
                                text: "获取游戏版本",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeMods/Method/GetVersions"
                            }
                        ]
                    },
                    {
                        text: "变量",
                        collapsed: true,
                        items: [
                            {
                                text: "CurseforgeAPIKey",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeMods/Variables/CurseforgeAPIKey"
                            }
                        ]
                    },
                    {
                        text: "返回",
                        collapsed: true,
                        items: [
                            {
                                text: "类别信息列表",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeMods/Return/CategoriesInfoList"
                            },
                            {
                                text: "版本信息列表",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeMods/Return/VersionsInfoList"
                            },
                            {
                                text: "Mods信息列表",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeMods/Return/ModsInfoList"
                            },
                            {
                                text: "作者信息列表",
                                link: "/Docs/Project/ElakeMinecraftLoaderCore/ElakeMods/Return/AuthorInfoList"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
