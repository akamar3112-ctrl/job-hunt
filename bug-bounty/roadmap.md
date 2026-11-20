# Bug bounty / VDP roadmap (beginner → paid)

> ⚠️ **Sabse pehle rule:** Sirf un targets par test karein jinka aapko **likhit permission** ho (program scope, ya aapki apni site/lab). Kisi bhi site par bina permission ke scanning/test karna illegal hai. Ye roadmap usi ko follow karta hai.

## Reality check (pehle ye padhein)

- Bug bounty se **jaldi paise nahi** milte. Pehle 3-6 mahine skill banana padta hai.
- Isliye isko **primary income mat banayein** — aapki primary income freelance dev gigs hain.
- Iska fayda: (1) real security skill, (2) resume par "VDP Hall of Fame", (3) freelance me "web app testing" gigs karne ka confidence.

## Stage 0 — Setup (1 din)

Aapki Kali machine par pehle se hai: Burp Suite (setup pending), Firefox, browser, obscura.
- [ ] Burp + Firefox proxy setup complete karein (aapka pending task)
- [ ] Browser me **FoxyProxy** ya manual proxy: `127.0.0.1:8080`
- [ ] Burp ka CA certificate browser me install karein (HTTPS dekhne ke liye)
- [ ] Ek chhota VM ya Docker lab (DVWA / OWASP Juice Shop) local par chalayein

## Stage 1 — Free labs (2-4 hafte)

**PortSwigger Web Security Academy** — free, best, beginner-friendly:
https://portswigger.net/web-security

Order me karein:
1. **Burp basics** (Burp suite ka use, proxy, intercept, repeater)
2. **SQL injection** (labs)
3. **XSS** (reflected, stored, DOM)
4. **CSRF**
5. **Broken authentication**
6. **SSRF**
7. **Business logic flaws**

> "All topics" path: https://portswigger.net/web-security/all-labs — **Practitioner** level tak target karein.

**Extra (free):**
- OWASP Juice Shop: https://owasp.org/www-project-juice-shop/
- DVWA (local): https://github.com/digininja/DVWA
- HackTheBox **Starting Point** (free): https://www.hackthebox.com/
- TryHackMe **pre-security** path (kuch free): https://tryhackme.com/

## Stage 2 — Likha hua samjho (1 hafte)

- OWASP Top 10: https://owasp.org/www-project-top-ten/
- PortSwigger research blog (read 2-3 articles): https://portswigger.net/research
- Ek report template banayein:
  - Summary
  - Steps to reproduce
  - Request/response (screenshots)
  - Impact
  - Suggested fix

> Clear reporting = zyada accept rate. Technical logo se zyada clarity matter karti hai.

## Stage 3 — VDPs (1-3 mahine)

**VDP = Vulnerability Disclosure Program.** Inme paise nahi hote, par:
- Scope clear hota hai (permission mil jati hai)
- Competition kam
- Hall of Fame milta hai → proof for freelance "testing" gigs

Beginner-friendly places:
- Intigriti VDPs: https://app.intigriti.com/researcher/programs (filter: "responsible disclosure")
- Bugcrowd public VDP list: https://www.bugcrowd.com/bug-bounty-list/
- HackerOne public programs: https://hackerone.com/programs (VDP-type pehle)

**Rules:**
- Scope ka **har line** padhein (which domains, which vulns allowed)
- Sirf in-scope targets par test karein
- Kabhi bhi destructive test nahi (DELETE, mass requests, data dump)
- Koi personal data na nikalein
- Report politely, 1 clear bug at a time

## Stage 4 — Paid programs (3-6 mahine ke baad)

Jab 5-10 valid reports ho gaye hon (VDP se bhi chalega):
- Bugcrowd / Intigriti / HackerOne par **publicpaid** programs chunin
- Pehle low-competition programs (naye programs) try karein
- Apne strong area par focus karein (jaise XSS ya business logic)

**Income expectation:** pehle 6 mahine ₹0–5,000 / month bhi normal hai. Regular side income banana hai to freelance testing gigs zyada reliable hain (`leads/job-leads.md` me listed).

## Stage 5 — Freelance me convert (sabse smart move)

Security skill ko paise me badalne ka fastest tarika:
- Upwork/Fiverr par **"web app testing (OWASP)"** gigs (template `profiles/upwork-fiverr.md` me hai)
- Clients ko bolein: "I'll test your app for common OWASP issues and send a clear report"
- Ye gigs dev gigs se kam competitive hain aur aapke security skills ka use hote hain

## Weekly routine (2-3 ghante/week)

| Din | Kaam |
|---|---|
| Mon | 1 PortSwigger lab + notes |
| Wed | 1 lab ya Juice Shop challenge |
| Fri | 1 VDP scope padhein + 1-2 ghante testing |
| Sun | Report likhne ka practice (ek purane lab ko report format me likhein) |

## Tools (free)

| Tool | Kaam ke liye |
|---|---|
| Burp Suite Community | Proxy, intercept, repeater |
| Firefox + FoxyProxy | Proxy switching |
| ffuf | Directory fuzzing (sirf authorized targets par) |
| nuclei | Template-based checks (careful, scope me hi) |
| obscura | Headless browser for JS-heavy pages / scraping |
| browser (OpenCode tool) | Live page inspect |

## Pehla milestone

> 14 din me: Burp setup + 10 PortSwigger labs (Practitioner) + 1 sample report.

Uske baad VDPs par first report try karein. Main aapko labs ke saath step-by-step help kar sakta hoon — bas batayein kaunsa label phasa hai.
