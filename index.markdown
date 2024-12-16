---
layout: default
title: Home
---

<!--Method to include markdown-->
{% capture markdown_content %}
    {% include parts/introduction.md %}
{% endcapture %}
{{ markdown_content | strip | markdownify }}

# Welcome to My Jekyll Site

This is the homepage of my awesome site!

## About the Site

This is where you can introduce your website and what it's about.

You can use Markdown syntax for formatting text, adding links, images, etc.


### Example Section





