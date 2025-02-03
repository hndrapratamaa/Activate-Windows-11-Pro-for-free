---
layout: default
title: Dokumentasi Windows & Office
---

<div class="tab-content active" data-tab="windows">
{% capture windows_content %}{% include_relative Windows-11-Pro.md %}{% endcapture %}
{{ windows_content | markdownify }}
</div>

<div class="tab-content" data-tab="office">
{% capture office_content %}{% include_relative Panduan-Office.md %}{% endcapture %}
{{ office_content | markdownify }}
</div>
