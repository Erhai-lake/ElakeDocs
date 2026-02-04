---
title: 步骤
icon: streamline:steps-number
createTime: 2025/12/23 14:12:16
---

有时候, 你需要将内容划分为递进的步骤展示, 你可以使用`steps`容器实现.

在`steps`容器内, 使用有序列表(或无序列表)来表示步骤. 你可以在容器内使用任意markdown语法.

````markdown
:::: steps
1. 步骤 1

   ```ts
   console.log("Hello World!")
   ```

2. 步骤 2

   这里是步骤 2 的相关内容

3. 步骤 3

   ::: tip
   提示容器
   :::

4. 结束
::::
````

::::: demo-wrapper
:::: steps
1. 步骤 1

   ```ts
   console.log("Hello World!")
   ```

2. 步骤 2

   这里是步骤 2 的相关内容

3. 步骤 3

   ::: tip
   提示容器
   :::

4. 结束
::::
:::::
