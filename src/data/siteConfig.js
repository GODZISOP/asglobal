import defaultLogo from '../images/as-global-trading-logo.svg';

/**
 * =========================================================================
 * 🌟 GLOBAL SITE CONFIGURATION (CENTRAL CONTROL PANEL)
 * =========================================================================
 * AS GLOBAL TRADING LLC — Central Brand, Contact & Color Settings
 * =========================================================================
 */

export const siteConfig = {

  // ─────────────────────────────────────────────
  // 🏢 COMPANY IDENTITY
  // ─────────────────────────────────────────────
  companyName:     "AS GLOBAL TRADING LLC",
  shortName:       "AS GLOBAL TRADING",
  legalName:       "AS GLOBAL TRADING LLC",
  ownerFirstName:  "Aamir Hussain",
  ownerLastName:   "Ibrahim",
  ownerFullName:   "Aamir Hussain Ibrahim",
  tagline:         "Premium Wholesale, General Trading & Global Distribution",
  heroSubtitle:    "Direct manufacturer sourcing, dependable bulk supply chains, and exceptional consumer essentials curated by AS GLOBAL TRADING LLC.",
  eyebrowStandard: "THE AS GLOBAL TRADING STANDARD OF EXCELLENCE",

  // ─────────────────────────────────────────────
  // 📞 PHONE, WHATSAPP & EMAIL
  // ─────────────────────────────────────────────
  phonePrimary:    "+1 3025872947",        // Top nav display
  phonePrimaryTel: "+13025872947",         // tel: dial link
  phoneDirect:     "+1 3025872947",        // Contact page direct line
  phoneDirectTel:  "+13025872947",         // tel: dial link
  whatsappNumber:  "13025872947",          // Numbers only (no + or spaces)
  whatsappDisplay: "+1 3025872947",
  email:           "info@asglobaltradingllc.com",
  emailSecondary:  "asglobaltradingllc@gmail.com",
  website:         "www.asglobaltradingllc.com",

  // ─────────────────────────────────────────────
  // 📍 ADDRESS & HUBS
  // ─────────────────────────────────────────────
  address: {
    line1:        "B 102, New Dhoraji Housing, Block 4",
    line2:        "Gulshan Iqbal, Karachi",
    full:         "B 102 New Dhoraji Housing Block 4, Gulshan Iqbal, Karachi",
    cityStateZip: "Gulshan Iqbal, Karachi",
    jurisdiction: "Commercial LLC Registered"
  },
  hubs: {
    originText:   "Dispatched via Global Logistics & Freight Hubs",
    dispatchNote: "Dispatched from our primary international distribution hubs and regional fulfillment centers."
  },

  // ─────────────────────────────────────────────
  // 📖 ABOUT US PAGE
  // ─────────────────────────────────────────────
  about: {
    // Main paragraphs
    mission:      "At AS GLOBAL TRADING LLC, our mission is to deliver exceptional wholesale value, connecting premier international manufacturers with retailers, commercial distributors, and online merchants worldwide. Founded on the principles of trust, transparency, and trade excellence, we serve as a reliable bridge between global suppliers and growing businesses.",
    b2bNote:      "Whether you operate independent retail stores, supermarket chains, or e-commerce marketplaces, AS GLOBAL TRADING LLC provides flexible minimums, volume price tiers, and dependable fulfillment. Our team ensures every order meets the highest quality and delivery standards you can count on.",
    sourcingNote: "We pride ourselves on thoughtful sourcing — choosing products that deliver genuine performance, high customer satisfaction, and dependable quality for retail and wholesale partners worldwide.",

    // 3 value cards shown on the About Us page
    cards: [
      {
        title:       "Integrity First",
        description: "Transparent pricing, transparent communication, and verified product authenticity."
      },
      {
        title:       "Logistics Agility",
        description: "Fast customs turnaround, reliable carrier contracts, and multi-hub fulfillment."
      },
      {
        title:       "Partner Centric",
        description: "Dedicated trade managers ready to accommodate customer requirements and custom schedules."
      }
    ],

    // CTA button text on About page
    ctaButton: "Contact Management Desk"
  },

  // ─────────────────────────────────────────────
  // 📞 CONTACT US PAGE — Labels & helper texts
  // ─────────────────────────────────────────────
  contact: {
    sectionTag:   "GET IN TOUCH",
    tagline:      "We are at your service for catalog requests, partnership discussions, or general inquiries.",
    cardTitle:    "Direct Coordinates",
    formTitle:    "Send Us a Message",
    formSuccess:  "Thank you! Your message has been received by AS GLOBAL TRADING LLC. We will reply within 24 hours.",
    labels: {
      email:      "Email",
      phone:      "Phone Number",
      hub:        "Operating Trade Hub",
      whatsapp:   "WhatsApp Chat",
      management: "Management"
    }
  },

  // ─────────────────────────────────────────────
  // 🦶 FOOTER
  // ─────────────────────────────────────────────
  footer: {
    description:        "Quality products online. Sourcing and distribution dedicated to supplying top tier merchandise with transparent global logistics.",
    operationsLabel:    "Global Distribution & Wholesale Trade Hub",
    newsletterTagline:  "Receive exclusive price updates, catalog drops, and seasonal availability lists.",
    newsletterSuccess:  "✓ Thank you for subscribing to our wholesale bulletin!",
    copyrightSuffix:    "All rights reserved.",
    managedByLabel:     "Global Logistics & Distribution Hub",
    websiteUrl:         "https://www.asglobaltradingllc.com",
    domain:             "asglobaltradingllc.com",

    // Social media
    socials: [
      { label: "Facebook",  url: "https://facebook.com/" },
      { label: "Instagram", url: "https://instagram.com/" },
      { label: "TikTok",    url: "https://tiktok.com/" }
    ],

    // Footer navigation menu
    menu: [
      { label: "Home",    tab: "home" },
      { label: "Shop",    tab: "home", scrollTo: "featured-products-section" },
      { label: "About",   tab: "about" },
      { label: "Contact", tab: "contact" }
    ]
  },

  // ─────────────────────────────────────────────
  // ⭐ TESTIMONIAL
  // ─────────────────────────────────────────────
  testimonial: {
    quote:  "Partnering with AS GLOBAL TRADING LLC transformed our wholesale inventory turnover. Top-tier product authenticity, fast fulfillment, and flawless communication.",
    author: "Verified Commercial Trade Partner"
  },

  // ─────────────────────────────────────────────
  // 💰 CURRENCY SYMBOL
  // ─────────────────────────────────────────────
  currencySymbol: "$",

  // ─────────────────────────────────────────────
  // 🖼️ LOGO
  // ─────────────────────────────────────────────
  logo: defaultLogo,

  // ─────────────────────────────────────────────
  // 🎨 COLOR THEME (Luxury Gold & Deep Royal Navy)
  // ─────────────────────────────────────────────
  theme: {
    primaryNavy:   "#04201a",
    secondaryTeal: "#0b3a2e",
    accentTeal:    "#059669",
    accentHover:   "#047857",
    accentGold:    "#10b981",
    bgLight:       "#f8fafc"
  }
};
