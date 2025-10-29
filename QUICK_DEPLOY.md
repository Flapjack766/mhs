# 🚀 النشر السريع على Cloudflare Pages

## خطوات بسيطة (5 دقائق)

### 1. ارفع الكود إلى GitHub

```bash
git init
git add .
git commit -m "Initial deployment"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 2. اذهب إلى Cloudflare

1. افتح: https://dash.cloudflare.com/
2. Workers & Pages → Create → Pages → Connect to Git
3. اختر repository الخاص بك

### 3. إعدادات البناء

```
Framework: Next.js
Build command: npm run build
Output directory: .next
Node version: 18
```

### 4. متغيرات البيئة

أضف هذا المتغير:
```
RESEND_API_KEY = re_PafiSWwH_KTGR11adET5wxXFPQJQBGCLJ
```

### 5. اضغط Deploy! ✨

---

## 🌐 إضافة Domain مخصص (اختياري)

بعد النشر:
1. Custom domains → Set up a domain
2. أدخل الدومين (مثل: www.yoursite.com)
3. اتبع التعليمات

---

## ⚡ الأداء

سرعة الموقع على Cloudflare:
- ⚡ تحميل < 1 ثانية
- 🌍 CDN عالمي
- 🔒 HTTPS تلقائي
- 🛡️ حماية DDoS

---

**تم! موقعك الآن على الإنترنت! 🎉**
