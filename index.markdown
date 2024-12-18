---
layout: default
title: Home
---

<!--Method to include markdown-->
{% capture markdown_content %}
    {% include parts/introduction.md %}
{% endcapture %}
{{ markdown_content | strip | markdownify }}

{% capture markdown_content %}
    {% include parts/best_finding_1.md %}
{% endcapture %}
{{ markdown_content | strip | markdownify }}

{% capture markdown_content %}
    {% include parts/best_finding_2.md %}
{% endcapture %}
{{ markdown_content | strip | markdownify }}






