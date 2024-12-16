---
layout: default
class: markdown-body
title: "Section 1 - Helpers"
permalink: /section1/
---

# Example Markdown File

## Introduction

Quick explanation of how the thing works. This helper page has different fetaures "ready-to-implement" we can of course change the formatting afterwrads for the style. But copy pasting this methods will make the site homogenous whatever the style is afterwards.

You have the method to include markdowns in index.markdown(index.md).
Markdowns have to be placed in /_include/parts/name.md

For importing html files refer to plotly method for 3d object. Don't forget to copy paste the div with it. Also the file.html (your figure) should be placed in /_includes/data/

For importing toehr types, png, mp4, probably pdf and gifs. Place them in /assets/data.

Lastly never. NEVER touch to anything in /_site. This is a folder created automatically when building.

## Text Formatting

**Bold Text**

*Italic Text*

~~Strikethrough Text~~

## Lists

### Unordered List
- Item 1
- Item 2
    - Subitem 2.1
    - Subitem 2.2

### Ordered List
1. First item
2. Second item
     1. Subitem 2.1
     2. Subitem 2.2

## Links

[GitHub](https://github.com)

## Local Image

![Local Image]({{ site.baseurl }}/assets/data/screen.png)

## Local GIF

<video width="320" height="240" controls>
  <source src="../../assets/data/gif_matrix.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Code Blocks

```python
def hello_world():
        print("Hello, world!")
```

## Blockquotes

> This is a blockquote.

## Tables

| Header 1 | Header 2 |
|----------|----------|
| Row 1    | Data 1   |
| Row 2    | Data 2   |

## Graphs

### Plotly 3D Plot Example

```python
import plotly.graph_objects as go

fig = go.Figure(data=[go.Surface(z=[[1, 2, 3], [4, 5, 6], [7, 8, 9]])])
fig.update_layout(title='3D Plot', autosize=False,
                                    width=500, height=500,
                                    margin=dict(l=65, r=50, b=65, t=90))

fig.show()
```

<div class="plotly-container">
  {% include data/3d_plot.html %}
</div>


## Conclusion

This is an example markdown file showcasing various elements you can include. Feel free to customize it as needed.