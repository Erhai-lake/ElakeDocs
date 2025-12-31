---
title: Npm 徽章
icon: akar-icons:npm-fill
createTime: 2025/12/25 01:15:52
---

Npm徽章组件用于显示npm包信息, 并提供相关的链接.

徽章由<https://shields.io>提供支持.

## `<NpmBadge />`

单个 npm badge.

### 属性

:::: field-group

::: field name="name" type="string" optional
npm包名, 为空则从`repo`中获取.
:::

::: field name="repo" type="string" optional
包github仓库地址, 格式为`owner/repo`, 当`name`为空时必填.
:::

::: field name="type" type="NpmBadgeType" optional
徽章类型.
:::

::: field name="theme" type="NpmBadgeTheme" optional default="flat"
徽章主题.
:::

::: field name="label" type="string" optional
徽章标签.
:::

::: field name="color" type="string" optional default="#32A9C3"
徽章颜色.
:::

::: field name="labelColor" type="string" optional default="#1B3C4A"
徽章标签颜色.
:::

::: field name="branch" type="string" optional default="main"
仓库分支.
:::

::: field name="dir" type="string" optional
包所在仓库目录, 适用于monorepo项目.
:::

::::

#### NpmBadgeType

* github
	* `source`: github source.
	* `stars`: github stars.
	* `forks`: github forks.
	* `license`: github license.
* npm
	* `version`: npm version.
	* `dt`: alias d18m.
	* `d18m`: npm最近18个月下载量.
	* `dw`: npm每周下载量.
	* `dm`: npm每月下载量.
	* `dy`: npm每年下载量.

#### NpmBadgeTheme

* `flat`: 扁平主题.
* `flat-square`: 扁平方形主题.
* `plastic`: 塑料主题.
* `for-the-badge`: 为徽章添加边框.
* `social`: 社交主题.

### 示例

Github 徽章

* `<NpmBadge repo="Erhai-lake/ElakeDocs" type="source"/>` - <NpmBadge repo="Erhai-lake/ElakeDocs" type="source"/>
* `<NpmBadge repo="Erhai-lake/ElakeDocs" type="stars"/>` - <NpmBadge repo="Erhai-lake/ElakeDocs" type="stars"/>
* `<NpmBadge repo="Erhai-lake/ElakeDocs" type="forks"/>` - <NpmBadge repo="Erhai-lake/ElakeDocs" type="forks"/>
* `<NpmBadge repo="Erhai-lake/ElakeDocs" type="license"/>` - <NpmBadge repo="Erhai-lake/ElakeDocs" type="license"/>

Npm 徽章

* `<NpmBadge name="vuepress-theme-plume" type="version"/>` - <NpmBadge name="vuepress-theme-plume" type="version"/>
* `<NpmBadge name="vuepress-theme-plume" type="dt"/>` - <NpmBadge name="vuepress-theme-plume" type="dt"/>
* `<NpmBadge name="vuepress-theme-plume" type="d18m"/>` - <NpmBadge name="vuepress-theme-plume" type="d18m"/>
* `<NpmBadge name="vuepress-theme-plume" type="dy"/>` - <NpmBadge name="vuepress-theme-plume" type="dy"/>
* `<NpmBadge name="vuepress-theme-plume" type="dm"/>` - <NpmBadge name="vuepress-theme-plume" type="dm"/>
* `<NpmBadge name="vuepress-theme-plume" type="dw"/>` - <NpmBadge name="vuepress-theme-plume" type="dw"/>

## `<NpmBadgeGroup />`

### 属性

:::: field-group

::: field name="name" type="string" optional
npm包名, 为空则从`repo`中获取.
:::

::: field name="repo" type="string" optional
包github仓库地址, 格式为`owner/repo`, 当`name`为空时必填.
:::

::: field name="items" type="string | NpmBadgeType[]" optional default="[]"
徽章类型列表, 传入`string`时用`','`分隔, 会自动转换为`NpmBadgeType[]`.
:::

::: field name="theme" type="NpmBadgeTheme" optional
徽章主题.
:::

::: field name="color" type="string" optional
徽章颜色.
:::

::: field name="labelColor" type="string" optional
徽章标签颜色.
:::

::: field name="branch" type="string" optional
仓库分支.
:::

::: field name="dir" type="string" optional
包所在仓库目录, 适用于monorepo项目.
:::

::::

### 插槽

* `<NpmBadgeGroup />`支持传入多个`<NpmBadge />`组件.
* `<NpmBadgeGroup />`声明的属性将被注入到`<NpmBadge />`组件中. 通过这种方式来实现和简化徽章组合.

### 示例

```markdown
<NpmBadgeGroup
repo="pengzhanbo/vuepress-theme-plume"
items="stars,version,dm,source"/>
```

<NpmBadgeGroup
repo="pengzhanbo/vuepress-theme-plume"
items="stars,version,dm,source"/>

使用`<slot />`灵活定义徽章组合

```markdown
<NpmBadgeGroup repo="pengzhanbo/vuepress-theme-plume">
  <NpmBadge type="stars" />
  <NpmBadge type="version" label="npm" />
  <NpmBadge type="dm" />
  <NpmBadge type="source" />
</NpmBadgeGroup>
```

<NpmBadgeGroup repo="pengzhanbo/vuepress-theme-plume">
  <NpmBadge type="stars" />
  <NpmBadge type="version" label="npm" />
  <NpmBadge type="dm" />
  <NpmBadge type="source" />
</NpmBadgeGroup>