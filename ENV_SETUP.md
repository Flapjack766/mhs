# Environment Variables Setup Guide

## 📋 متطلبات الإعداد

يجب إعداد متغيرات البيئة (Environment Variables) لتشغيل الموقع بشكل صحيح.

## 🔧 إعداد Environment Variables

### 1. إنشاء ملف `.env.local`

في المجلد الرئيسي للمشروع، أنشئ ملف باسم `.env.local` وأضف المتغيرات التالية:

```bash
RESEND_API_KEY=re_your_api_key_here
```

### 2. الحصول على Resend API Key

1. سجل دخول إلى [Resend](https://resend.com)
2. اذهب إلى [API Keys](https://resend.com/api-keys)
3. أنشئ مفتاح API جديد
4. انسخ المفتاح وضعّه في ملف `.env.local`

### 3. ملف .env.local مثال:

```env
RESEND_API_KEY=re_PafiSWwH_KTGR11adET5wxXFPQJQBGCLJ
```

## 🚨 تحذير أمني مهم

- **لا ترفع ملف `.env.local` إلى GitHub أبداً!**
- ملف `.env.local` موجود في `.gitignore` وسيتم تجاهله تلقائياً
- استخدم `.env.example` كمثال فقط (بدون قيم حقيقية)

## 🌐 إعداد Environment Variables في Production

عند النشر على Cloudflare Pages أو أي منصة أخرى، يجب إضافة Environment Variables:

### Cloudflare Pages:
1. اذهب إلى Settings > Environment Variables
2. أضف `RESEND_API_KEY` مع القيمة الصحيحة

### Vercel:
1. اذهب إلى Settings > Environment Variables
2. أضف `RESEND_API_KEY` مع القيمة الصحيحة

### Render / Railway / Netlify:
- نفس الخطوات: إضافة Environment Variables في إعدادات المشروع

## ✅ التحقق من الإعداد

بعد إضافة Environment Variables:
1. أعد تشغيل خادم التطوير: `npm run dev`
2. اختبر نموذج الاتصال
3. تحقق من أن الإيميلات تُرسل بنجاح

## 📝 ملاحظات

- جميع ملفات `.env*.local` موجودة في `.gitignore`
- استخدم `.env.example` كمثال للمتغيرات المطلوبة
- لا تضع قيماً حقيقية في `.env.example`

