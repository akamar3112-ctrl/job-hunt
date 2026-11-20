# Job Application Tracker — web app

Ek chhota, real web app jo aap **khud use** kar sakte ho aur portfolio me dikha bhi sakte ho.

## Features
- Add applications (company, role, URL, status, notes)
- Status: Applied → Interview → Offer → Rejected (🔄 se badlein)
- Filter by status + search
- Live stats (total, interview, offers, rejected)
- CSV export (Excel me khul jayega)
- Data aapke browser me localStorage me rehta hai — koi server nahi, free

## Chalaane ke liye

### Local
`index.html` par double-click karo — bas chal jayega. Ya:
```bash
cd /home/kali/job-hunt/web-app
python3 -m http.server 8000
# browser me: http://localhost:8000
```

### Live (free)
Netlify → `web-app` folder drag-drop → URL mil gaya.
Ya GitHub Pages par `portfolio` repo ke andar `web-app/` folder daal do — dono ek hi site par ho jayenge.

## Isse portfolio me kaise dikhaayein
`portfolio/index.html` me project card me live link daalein. Client ko batayein:
> "I built a local-first job tracker with vanilla JavaScript — add, filter, search, status tracking and CSV export, all persisted in the browser."

## Code samajhne ke liye (interview me kaam aayega)
| File | Kya karta hai |
|---|---|
| `index.html` | Structure (form, stats, list) |
| `styles.css` | Design, responsive layout, status colors |
| `app.js` | Logic: add/delete/filter/search/export, localStorage |

## Badalne ke ideas (agar time ho)
- Edit button (abhi sirf status cycle hai)
- Firebase se sync (multi-device)
- Deadline reminder
- Dark mode toggle

> Ye project isliye banaya hai taaki aapke paas "maine banaya hai" bolne ke liye kuch real ho — sirf tutorial follow karna nahi.
