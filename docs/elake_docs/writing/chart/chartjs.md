---
title: chart.js
icon: solar:chart-bold
createTime: 2025/12/24 15:36:15
---

[chart.js](https://www.chartjs.org/)是一个简单的图表库.

但是正如我说的, 他很简单, 如果需要复杂图表, 建议使用上一篇文档的组件[echarts](echarts.md).

图表配置请查看[chart.js文档](https://www.chartjs.org/docs/latest/).

## 语法

````markdown
::: chartjs 标题

```json
{
  // 此处为图表配置
}
```

:::
````

## 示例

### 条形图

:::: details 查看代码

````markdown
::: chartjs 块状图案例

```json
{
    "type": "bar",
    "data": {
        "labels": [
            "红色",
            "蓝色",
            "黄色",
            "绿色",
            "紫色",
            "橙色"
        ],
        "datasets": [
            {
                "label": "投票数",
                "data": [
                    12,
                    19,
                    3,
                    5,
                    2,
                    3
                ],
                "backgroundColor": [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)"
                ],
                "borderColor": [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)"
                ],
                "borderWidth": 1
            }
        ]
    },
    "options": {
        "scales": {
            "y": {
                "beginAtZero": true
            }
        }
    }
}
```

:::
````

::::

::: chartjs 块状图案例

```json
{
	"type": "bar",
	"data": {
		"labels": [
			"红色",
			"蓝色",
			"黄色",
			"绿色",
			"紫色",
			"橙色"
		],
		"datasets": [
			{
				"label": "投票数",
				"data": [
					12,
					19,
					3,
					5,
					2,
					3
				],
				"backgroundColor": [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)"
				],
				"borderColor": [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)"
				],
				"borderWidth": 1
			}
		]
	},
	"options": {
		"scales": {
			"y": {
				"beginAtZero": true
			}
		}
	}
}
```

:::

### 气泡图

:::: details 查看代码

````markdown
::: chartjs 气泡图案例

```json
{
	"type": "bubble",
	"data": {
		"datasets": [
			{
				"label": "第一个数据集",
				"data": [
					{
						"x": 20,
						"y": 30,
						"r": 15
					},
					{
						"x": 40,
						"y": 10,
						"r": 10
					}
				],
				"backgroundColor": "rgb(255, 99, 132)"
			},
			{
				"label": "第二个数据集",
				"data": [
					{
						"x": 10,
						"y": 20,
						"r": 20
					},
					{
						"x": 20,
						"y": 20,
						"r": 10
					}
				],
				"backgroundColor": "rgb(255, 255, 132)"
			}
		]
	}
}
```

:::
````

::::

::: chartjs 气泡图案例

```json
{
	"type": "bubble",
	"data": {
		"datasets": [
			{
				"label": "第一个数据集",
				"data": [
					{
						"x": 20,
						"y": 30,
						"r": 15
					},
					{
						"x": 40,
						"y": 10,
						"r": 10
					}
				],
				"backgroundColor": "rgb(255, 99, 132)"
			},
			{
				"label": "第二个数据集",
				"data": [
					{
						"x": 10,
						"y": 20,
						"r": 20
					},
					{
						"x": 20,
						"y": 20,
						"r": 10
					}
				],
				"backgroundColor": "rgb(255, 255, 132)"
			}
		]
	}
}
```

:::

### 折线图

:::: details 查看代码

````markdown
::: chartjs 折线图案例

```json
{
	"type": "line",
	"data": {
		"labels": [
			"一月",
			"二月",
			"三月",
			"四月",
			"五月",
			"六月",
			"七月"
		],
		"datasets": [
			{
				"label": "我的第一个数据集",
				"data": [
					65,
					59,
					80,
					81,
					56,
					55,
					40
				],
				"fill": false,
				"borderColor": "rgb(75, 192, 192)",
				"tension": 0.1
			}
		]
	}
}
```

:::
````

::::

::: chartjs 折线图案例

```json
{
	"type": "line",
	"data": {
		"labels": [
			"一月",
			"二月",
			"三月",
			"四月",
			"五月",
			"六月",
			"七月"
		],
		"datasets": [
			{
				"label": "我的第一个数据集",
				"data": [
					65,
					59,
					80,
					81,
					56,
					55,
					40
				],
				"fill": false,
				"borderColor": "rgb(75, 192, 192)",
				"tension": 0.1
			}
		]
	}
}
```

:::

### 玫瑰图

:::: details 查看代码

````markdown
::: chartjs 玫瑰图案例

```json
{
	"type": "polarArea",
	"data": {
		"labels": [
			"红色",
			"绿色",
			"黄色",
			"灰色",
			"蓝色"
		],
		"datasets": [
			{
				"label": "我的第一个数据集",
				"data": [
					11,
					16,
					7,
					3,
					14
				],
				"backgroundColor": [
					"rgb(255, 99, 132)",
					"rgb(75, 192, 192)",
					"rgb(255, 205, 86)",
					"rgb(201, 203, 207)",
					"rgb(54, 162, 235)"
				]
			}
		]
	}
}
```

:::
````

::::

::: chartjs 玫瑰图案例

```json
{
	"type": "polarArea",
	"data": {
		"labels": [
			"红色",
			"绿色",
			"黄色",
			"灰色",
			"蓝色"
		],
		"datasets": [
			{
				"label": "我的第一个数据集",
				"data": [
					11,
					16,
					7,
					3,
					14
				],
				"backgroundColor": [
					"rgb(255, 99, 132)",
					"rgb(75, 192, 192)",
					"rgb(255, 205, 86)",
					"rgb(201, 203, 207)",
					"rgb(54, 162, 235)"
				]
			}
		]
	}
}
```

:::

### 雷达图

:::: details 查看代码

````markdown
::: chartjs 雷达图案例

```json
{
	"type": "radar",
	"data": {
		"labels": [
			"吃饭",
			"喝水",
			"睡觉",
			"设计",
			"编程",
			"骑车",
			"跑步"
		],
		"datasets": [
			{
				"label": "我的第一个数据集",
				"data": [
					65,
					59,
					90,
					81,
					56,
					55,
					40
				],
				"fill": true,
				"backgroundColor": "rgba(255, 99, 132, 0.2)",
				"borderColor": "rgb(255, 99, 132)",
				"pointBackgroundColor": "rgb(255, 99, 132)",
				"pointBorderColor": "#fff",
				"pointHoverBackgroundColor": "#fff",
				"pointHoverBorderColor": "rgb(255, 99, 132)"
			},
			{
				"label": "我的第二个数据集",
				"data": [
					28,
					48,
					40,
					19,
					96,
					27,
					100
				],
				"fill": true,
				"backgroundColor": "rgba(54, 162, 235, 0.2)",
				"borderColor": "rgb(54, 162, 235)",
				"pointBackgroundColor": "rgb(54, 162, 235)",
				"pointBorderColor": "#fff",
				"pointHoverBackgroundColor": "#fff",
				"pointHoverBorderColor": "rgb(54, 162, 235)"
			}
		]
	},
	"options": {
		"elements": {
			"line": {
				"borderWidth": 3
			}
		}
	}
}
```

:::
````

::::

::: chartjs 雷达图案例

```json
{
	"type": "radar",
	"data": {
		"labels": [
			"吃饭",
			"喝水",
			"睡觉",
			"设计",
			"编程",
			"骑车",
			"跑步"
		],
		"datasets": [
			{
				"label": "我的第一个数据集",
				"data": [
					65,
					59,
					90,
					81,
					56,
					55,
					40
				],
				"fill": true,
				"backgroundColor": "rgba(255, 99, 132, 0.2)",
				"borderColor": "rgb(255, 99, 132)",
				"pointBackgroundColor": "rgb(255, 99, 132)",
				"pointBorderColor": "#fff",
				"pointHoverBackgroundColor": "#fff",
				"pointHoverBorderColor": "rgb(255, 99, 132)"
			},
			{
				"label": "我的第二个数据集",
				"data": [
					28,
					48,
					40,
					19,
					96,
					27,
					100
				],
				"fill": true,
				"backgroundColor": "rgba(54, 162, 235, 0.2)",
				"borderColor": "rgb(54, 162, 235)",
				"pointBackgroundColor": "rgb(54, 162, 235)",
				"pointBorderColor": "#fff",
				"pointHoverBackgroundColor": "#fff",
				"pointHoverBorderColor": "rgb(54, 162, 235)"
			}
		]
	},
	"options": {
		"elements": {
			"line": {
				"borderWidth": 3
			}
		}
	}
}
```

:::

### 散点图

:::: details 查看代码

````markdown
::: chartjs 散点图案例

```json
{
	"type": "scatter",
	"data": {
		"datasets": [
			{
				"label": "散点数据集",
				"data": [
					{
						"x": -10,
						"y": 0
					},
					{
						"x": 0,
						"y": 10
					},
					{
						"x": 10,
						"y": 5
					},
					{
						"x": 0.5,
						"y": 5.5
					}
				],
				"backgroundColor": "rgb(255, 99, 132)"
			}
		]
	},
	"options": {
		"scales": {
			"x": {
				"type": "linear",
				"position": "bottom"
			}
		}
	}
}
```

:::
````

::::

::: chartjs 散点图案例

```json
{
	"type": "scatter",
	"data": {
		"datasets": [
			{
				"label": "散点数据集",
				"data": [
					{
						"x": -10,
						"y": 0
					},
					{
						"x": 0,
						"y": 10
					},
					{
						"x": 10,
						"y": 5
					},
					{
						"x": 0.5,
						"y": 5.5
					}
				],
				"backgroundColor": "rgb(255, 99, 132)"
			}
		]
	},
	"options": {
		"scales": {
			"x": {
				"type": "linear",
				"position": "bottom"
			}
		}
	}
}
```

:::