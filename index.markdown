---
layout: default
title: Home
---

<!--Method to include markdown-->
{% capture markdown_content %}
    {% include parts/introduction.md %}
{% endcapture %}
{{ markdown_content | strip | markdownify }}






