
---
title: "Welcome to Houston's Fieldnotes"
description: "Exploring wildlife, wild places, and the stories that connect them."
layout: "index"

---

![Hero Image](/img/MTs.jpg)

## 👋 Hi, I’m Houston

Conservationist, scientist, and wanderer.  
From the rugged shores of San Clemente Island to distant landscapes across the globe, I study predators, document their stories, and share the connections that bind ecosystems together.

<div id="storymap" style="height: 400px; margin-bottom: 30px;"></div>

<script>
  var map = L.map('storymap').setView([34.05, -118.25], 8); // center to your location

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Example marker
  L.marker([34.05, -118.25]).addTo(map)
    .bindPopup('This is Los Angeles')
    .openPopup();
</script>

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
