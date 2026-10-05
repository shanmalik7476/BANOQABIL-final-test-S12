# MEA'S SHOELLE &ndash; Multi-Page Shopify Theme

> **Step in Style** &bull; High-end E-Commerce footwear store & Shopify OS 2.0 Theme.

Designed and developed with 1:1 pixel accuracy based on the concept design.

---

## 🛍️ Theme Architecture & Features

This repository contains both a **Shopify OS 2.0 Theme** and a **Standalone Live Preview**:

- **Header / Navigation**: Sticky top navigation bar with brand logo, quick category navigation (`HOME`, `SHOP`, `PAGES`, `BLOG`, `ELEMENT`, `BUY`), and utility buttons (Account, Wishlist, Search, Cart badge).
- **Hero Banner ("STEP INTO CONFIDENCE")**: 3D lilac arch alcove background, Playfair serif typography, purple pill CTA button, video trigger, and running sneaker visual.
- **Floating Category Bar**: Pill card featuring 7 categories (`Heels`, `sandals`, `sneakers`, `Boots`, `new arrivals`, `best Sellers`, `sales`) with custom icons.
- **Best Sellers Section**: Responsive 5-column product card layout:
  1. *Pink Fur-Lined Winter Boot* &ndash; $59.99 (5.0 ★)
  2. *Puple Fur-Lined Winter Boot* &ndash; $49.99 (5.0 ★)
  3. *Red Fur-Lined Winter Boot* &ndash; $44.99 (5.0 ★)
  4. *Beige Fur-Lined Winter Boot* &ndash; $69.99 (5.0 ★)
  5. *Brown Fur-Lined Winter Boot* &ndash; $54.99 (5.0 ★)
- **Promo Banners**:
  - *New Arrivals*: "Fresh Styles Just In" with `NEW` badge.
  - *Special Offer*: "Get 15% Off On Your First Order" with `welcome 15` coupon and circular `15% OFF` badge.
- **Features Bar**: 5 key value propositions (`Free Shipping`, `Easy Returns`, `Secure Payment`, `Premium Quality`, `24/7 Support`).
- **Brand Logos**: Official partner logos (`Adidas`, `Puma`, `Steve Madden`, `Aldo Outlet`, `Zara`, `Converse`, `New Balance`).
- **Footer**: Newsletter 10% discount subscription, categorized links (`Shop`, `Help`, `About`), social links (`Facebook`, `Instagram`, `TikTok`, `Pinterest`), and payment methods (`Visa`, `MasterCard`, `PayPal`, `Apple Pay`).

---

## 📁 Repository Directory Structure

```text
├── assets/
│   ├── theme.css            # Production CSS with responsive tokens & variables
│   └── theme.js             # Cart counter, wishlist toggle & newsletter logic
├── config/
│   ├── settings_schema.json # Shopify customizer settings
│   └── settings_data.json   # Theme presets and default color tokens
├── layout/
│   └── theme.liquid         # Primary Shopify HTML layout wrapper
├── locales/
│   └── en.default.json      # English translations
├── sections/
│   ├── header.liquid
│   ├── hero-banner.liquid
│   ├── category-pills.liquid
│   ├── best-sellers.liquid
│   ├── promo-banners.liquid
│   ├── features-bar.liquid
│   ├── brand-logos.liquid
│   └── footer.liquid
├── snippets/
│   └── product-card.liquid  # Modular product card snippet
├── templates/
│   ├── index.json           # Shopify OS 2.0 homepage section configuration
│   ├── collection.liquid    # Category collection page
│   ├── product.liquid       # Single product details page
│   ├── page.liquid          # Static CMS page template
│   ├── cart.liquid          # Cart page template
│   └── 404.liquid           # 404 not found page
├── index.html               # 1:1 Live standalone browser preview
└── README.md
```

---

## 🚀 How to Import into Shopify

1. Select all the files/folders (`assets`, `config`, `layout`, `locales`, `sections`, `snippets`, `templates`).
2. Compress them into a `.zip` file (e.g., `meas-shoelle-theme.zip`).
3. Log in to your **Shopify Admin** dashboard.
4. Navigate to **Online Store** &rarr; **Themes**.
5. Click **Add theme** &rarr; **Upload zip file**.
6. Select your `meas-shoelle-theme.zip` and click **Upload file**.
7. Preview or Publish the theme!
