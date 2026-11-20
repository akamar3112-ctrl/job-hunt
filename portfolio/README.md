# Portfolio website + Design assets

**🔴 LIVE:** https://portfolio-two-theta-39.vercel.app
**GitHub:** https://github.com/akamar3112-ctrl/job-hunt/tree/main/portfolio

Ye aapka online "shop window" hai. Client yahi dekhega ki aap kaam kar sakte ho.

---

## 🎨 Design assets (Inkscape SVGs)

Ye folder me 3 ready-to-use SVG files hain jo aap **Upwork portfolio**, **Fiverr gallery**, aur **profile thumbnails** me use kar sakte hain:

| File | Size | Use case |
|---|---|---|
| `services-showcase.svg` | 1200×1600 | Full portfolio piece — services grid + process + CTA |
| `fiverr-gallery-banner.svg` | 1280×769 | **Fiverr gallery image** (recommended size) |
| `upwork-thumbnail.svg` | 800×800 | **Upwork portfolio thumbnail** / profile card |

### Inkscape me kaise edit karein

1. **Install:** `sudo apt install inkscape` (already installed on Kali)
2. **Open:** `inkscape services-showcase.svg`
3. **Edit karne wali cheezein:**
   - Apna naam (text select karke type karein)
   - Skills badges (double-click → text badlein)
   - Colors (Fill & Stroke panel → gradients change kar sakte hain)
   - Portfolio URL (bottom text)
4. **Export PNG:** File → Export PNG Image → Page → Export

### Quick CLI export (no GUI)

```bash
cd /home/kali/job-hunt/portfolio
chmod +x export-pngs.sh
./export-pngs.sh
```
Ye `exported-pngs/` folder me 3 PNG files bana dega — ready to upload.

---

## 📝 Apni details badlein (HTML)

`index.html` me ye jagahain **EDIT** comments ke saath mark hain:

| Kya badalna hai | Kahaan |
|---|---|
| Naam (3 jagah: title, h1, footer) | `<title>`, `<h1>`, footer |
| Logo ("A.") | `.logo` |
| GitHub / Email links | `.socials` aur `#contact` |
| About apni kahani | `#about` section |
| Project links (live demo, source) | `#projects` section |

Sabse aasan: `index.html` kholein → `EDIT:` search karke sab jagah badlein.

---

## 🚀 Free hosting (Netlify - 10 sec)

1. https://app.netlify.com/drop kholein
2. `portfolio` folder drag-drop karein
3. URL mil jayega: `https://yourname.netlify.app`
4. Site settings → Change site name → `https://akamar.netlify.app`

GitHub Pages chahiye to repo Settings → Pages → Source: main/root.

---

## ✅ Checklist pehle proposal se pehle

- [ ] Naam aur email sahi hain
- [ ] GitHub link kaam karta hai
- [ ] `services-showcase.svg` me apna naam/badge update kiya
- [ ] PNG export kiya (`./export-pngs.sh`)
- [ ] Upwork portfolio me `upwork-thumbnail.png` upload kiya
- [ ] Fiverr gallery me `fiverr-gallery-banner.png` upload kiya
- [ ] Mobile par portfolio check kiya

> ⚠️ Email/phone galat mat daalein — client seedhi baat karega to reply aana chahiye.

## 1. Apni details badlein

`index.html` me ye jagahain **EDIT** comments ke saath mark hain:

| Kya badalna hai | Kahaan |
|---|---|
| Naam (3 jagah: title, h1, footer) | `<title>`, `<h1>`, footer |
| Logo ("YN") | `.logo` |
| GitHub / LinkedIn / Email links | `.socials` aur `#contact` |
| About apni kahani | `#about` section |
| Project links (live demo, source) | `#projects` section |

Sabse aasan tarika: `index.html` kholein aur `EDIT:` search karke sab jagah badlein.

## 2. Free me live karein (Netlify — sabse aasan)

1. https://app.netlify.com/drop kholein
2. `portfolio` folder ko browser me drag-drop karein
3. 10 second me URL mil jayega: `https://random-name.netlify.app`
4. Site settings → **Change site name** se apna naam de sakte ho: `https://yourname.netlify.app`

GitHub Pages chahiye to:
1. GitHub par naya public repo banaayein (name: `portfolio`)
2. `portfolio` folder ki 3 files upload karein
3. Repo → Settings → Pages → Source: `main` / `root` → Save
4. URL: `https://yourusername.github.io/portfolio/`

## 3. Live link ko doosri jagahon par lagayein

- Upwork/Fiverr profile me "Portfolio" link
- Proposal me: "You can see my work here: [link]"
- `web-app/` ka live link bhi project card me daalein

## Checklist

- [ ] Naam aur email sachcha hai
- [ ] GitHub link kaam karta hai (empty account bhi chalega, par 2-3 repo zaroor banaayein)
- [ ] Mobile par check kiya (browser devtools ya apna phone)
- [ ] Live URL copy karke propose karne ke liye ready

> ⚠️ Email/phone galat mat daalein — client seedhi baat karega to reply aana chahiye.
