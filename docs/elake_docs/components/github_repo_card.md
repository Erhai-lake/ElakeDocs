---
title: GitHub/Gitee 仓库卡片
icon: octicon:repo-16
createTime: 2025/12/25 00:19:14
---

Repo卡片组件用于显示GitHub/Gitee仓库信息.

```markdown
<RepoCard repo="pengzhanbo/vuepress-theme-plume" />
```

:::: field-group

::: field name="repo" type="string" required
仓库地址, 格式为`owner/repo`.
:::

::: field name="provider" type="github | gitee" optional default="github"
仓库所属平台, 当前仅支持`github`/`gitee`.
:::

::: field name="fullname" type="boolean" optional
是否显示完整的仓库名称.

完整的仓库名称为`owner/repo`.

* 如果owner为个人, 则默认不显示完整的仓库名称, 仅显示`repo`.
* 如果owner为组织, 则默认显示完整的仓库名称.
:::

::::

## 示例

### 单卡片

<RepoCard repo="Erhai-lake/ElakeDocs" />

### 多卡片

如果希望以紧凑的方式并排展示多个卡片, 可以使用`CardGrid`组件.

```markdown
<CardGrid>
	<RepoCard repo="vuepress/marketplace" />
	<RepoCard repo="pengzhanbo/vuepress-theme-plume" />
</CardGrid>
```

<CardGrid>
	<RepoCard repo="vuepress/marketplace" />
	<RepoCard repo="pengzhanbo/vuepress-theme-plume" />
</CardGrid>

```markdown
<CardGrid>
  <RepoCard repo="pengzb/vuepress-theme-plume" provider="gitee" />
  <RepoCard repo="Erhai-lake/ElakeDocs" provider="gitee" />
</CardGrid>
```

<CardGrid>
  <RepoCard repo="Erhai-lake/ElakeDocs" provider="gitee" />
  <RepoCard repo="pengzb/vuepress-theme-plume" provider="gitee" />
</CardGrid>