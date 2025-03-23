# 流程图

:::tabs
=== 效果

```mermaid
flowchart TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
    C --> D((This is the <br  />text<br  /> in the circle))
```

=== 示例

````md
```mermaid
flowchart TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
    C --> D((This is the <br  />text<br  /> in the circle))
```
````
:::

在写文档时, 建议压缩为一行

````md
```mermaid
flowchart TD; [Christmas] -->|Get money| B(Go shopping); B --> C{Let me think}; C -->|One| D[Laptop]; C -->|Two| E[iPhone]; C -->|Three| F[fa:fa-car Car]
```
````

[在线编辑器](https://mermaid.live/edit)
