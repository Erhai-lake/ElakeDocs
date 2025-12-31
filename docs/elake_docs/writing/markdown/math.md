---
title: 数学公式
icon: tabler:math
createTime: 2025/12/23 00:22:50
---

该文档使用 `KateX` 渲染数学公式

内联模式

```markdown
Euler's identity $e^{i\pi}+1=0$ is a beautiful formula in $\mathbb{R}^2$.
```

::: demo-wrapper
Euler's identity $e^{i\pi}+1=0$ is a beautiful formula in $\mathbb{R}^2$.
:::

块级模式

```markdown
$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^ Ir \cdots (r-i+1) (\log y)^{ri}} {\omega^i} \right\}
$$
```

::: demo-wrapper
$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^ Ir \cdots (r-i+1) (\log y)^{ri}} {\omega^i} \right\}
$$
:::

不会写数学公式? 没事, 我也不会...所以[可视化编辑器](https://www.latexlive.com/)可以帮助你快速生成数学公式.

[KateX 支持功能](https://katex.org/docs/supported.html)

[KateX 支持列表](https://katex.org/docs/support_table.html)
