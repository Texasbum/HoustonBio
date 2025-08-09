
---

description: "Exploring wildlife, wild places, and the stories that connect them."
layout: "index"

---


<div class="hero-image-container">
  <img src="/img/Headshot.jpg" alt="Hero Image" />
</div>


## Hi, I’m Houston

Conservationist, scientist, and wanderer.  
From the rugged shores of San Clemente Island to frozen mountains in Montana, I study unique creatures in amazing landscapes, document my stories, and share what makes these ecosystems special.

<div id="storymap" style="height: 400px; width:100%; margin-bottom: 30px;"></div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('storymap').setView([34.05, -118.25], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([34.05, -118.25]).addTo(map)
      .bindPopup('This is Los Angeles')
      .openPopup();
  });
</script>

---

###  Fieldnotes
Stories from the field, blending science, adventure, and observation.  
[Read the latest →](/fieldnotes/)

---

###  Media
Photography and articles from my journey in wildlife conservation.  
[Explore the gallery →](/media/)

---

> *"The road goes ever on and on, down from the door where it began."* – Tolkien

---

### Recent Fieldnotes
{{< recent-posts 3 >}}
