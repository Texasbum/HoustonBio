
---
title: "Welcome to Houston's Fieldnotes"
description: "Exploring wildlife, wild places, and the stories that connect them."
---

![Hero Image](/img/MTs.jpg)

## 👋 Hi, I’m Houston

Conservationist, scientist, and wanderer.  
From the rugged shores of San Clemente Island to distant landscapes across the globe, I study predators, document their stories, and share the connections that bind ecosystems together.

---

### 📓 Fieldnotes
Stories from the field, blending science, adventure, and observation.  
[Read the latest →](/fieldnotes/)

---

### 📷 Media
Photography and video from my journeys in wildlife conservation.  
[Explore the gallery →](/media/)

---

> *"The road goes ever on and on, down from the door where it began."* – Tolkien

---

### Recent Fieldnotes

{{< recent-posts 3 >}}
{{ define "main" }}
<div class="homepage-wrapper" style="display: flex; gap: 30px;">

  <main class="homepage-content" style="flex: 1;">
    {{ .Content }}
  </main>

  <aside class="homepage-sidebar" style="width: 300px;">
    {{ partial "sidebar.html" . }}
  </aside>

</div>
{{ end }}