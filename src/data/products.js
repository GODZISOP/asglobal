export const categories = [
  {
    id: 'home-living',
    name: 'Home & Modern Living',
    description: 'Ceramic ultrasonic aroma systems, architectural task illumination, and curated residential decor.',
    buttonText: 'Shop Home & Living',
    link: '#',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  },
  {
    id: 'personal-care',
    name: 'Personal Care & Fragrances',
    description: 'Dermatologist-grade peptide skincare, luxury botanical elixirs, and signature royal oud perfumes.',
    buttonText: 'Shop Personal Care',
    link: '#',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  },
  {
    id: 'smart-electronics',
    name: 'Smart Tech & Gadgets',
    description: 'High-fidelity spatial audio headsets, 100W GaN fast desktop charging stations, and modern consumer tech.',
    buttonText: 'Shop Electronics',
    link: '#',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  },
  {
    id: 'gourmet-pantry',
    name: 'Gourmet & Pantry Staples',
    description: 'Single-estate cold extracted olive reserves, Grade A+ wild mountain Sidr honey, and artisanal provisions.',
    buttonText: 'Shop Gourmet',
    link: '#',
    image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  }
];

export const products = [
  {
    id: 1,
    name: 'RYP PureBreeze Artisan Ceramic Ultrasonic Aroma Diffuser (450ml)',
    category: 'home-living',
    categoryName: 'Home & Modern Living',
    sku: 'RYP-HOM-101',
    price: '$ 38',
    priceNumeric: 38,
    packSize: 'Hand-Crafted Ceramic Stoneware Diffuser (450ml Tank)',
    availability: 'In Stock (Ready to Dispatch)',
    stockUnits: 3200,
    minOrder: '1 Master Unit',
    rating: 5.0,
    reviewCount: 96,
    priceNote: 'Direct Factory & Bulk Wholesale Tier Available',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Whisper-quiet matte ceramic ultrasonic aroma diffuser with warm ambient LED ring, dual continuous/intermittent mist modes, and safety auto-off.',
    longDescription: 'Curated and distributed globally by AS GLOBAL TRADING LLC for boutique lifestyle retailers and executive residential suites. Hand-finished matte ceramic stoneware casing with ultra-fine cold-vapor atomization to preserve pure essential oil therapeutic properties across rooms up to 500 sq. ft.',
    features: [
      'Hand-crafted artisan ceramic cover with whisper-quiet ultrasonic atomization (<20dB)',
      'Dual continuous and intermittent mist settings with up to 12-hour continuous runtime',
      'Warm ambient LED glow ring with independent brightness and breathing light modes',
      'Waterless auto shut-off sensor ensures complete safety for residential and commercial suites',
      'BPA-free medical grade internal reservoir compatible with 100% pure essential oils'
    ],
    tiers: [
      { range: '1 - 19 Units', price: '$ 38', discount: 'Retail Base' },
      { range: '20 - 99 Units', price: '$ 31', discount: '18% Wholesale' },
      { range: '100+ Units', price: '$ 24', discount: '37% Commercial Pallet' }
    ],
    specs: [
      { label: 'Reservoir Capacity', value: '450 ml' },
      { label: 'Mist Output', value: '35-55 ml/hour' },
      { label: 'Casing Material', value: 'Matte Ceramic & Eco-ABS' },
      { label: 'Coverage Area', value: 'Up to 500 sq. ft.' },
      { label: 'Warranty', value: '2 Year Commercial Replacement Guarantee' }
    ]
  },
  {
    id: 2,
    name: 'RYP Lumina Arc Brushed Brass Architectural Task Desk Lamp',
    category: 'home-living',
    categoryName: 'Home & Modern Living',
    sku: 'RYP-HOM-102',
    price: '$ 46',
    priceNumeric: 46,
    packSize: 'Brushed Brass Task Lamp with Integrated 15W Qi Fast Charging Base',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 2700,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 78,
    priceNote: 'Volume Tier Pricing',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Brushed brass finish task lamp with full-spectrum eye-care illumination, 5 warmth presets, and integrated 15W Qi fast wireless charging.',
    longDescription: 'Supplied directly by AS GLOBAL TRADING LLC for modern corporate workstations and executive suites. Built with a weighted anti-tip base, smooth touch-slide dimming, memory function, zero blue-light hazard certification, and dual-axis folding hinges.',
    features: [
      'Full-spectrum LED panel delivers CRI > 95 natural daylight simulation',
      'Built-in 15W Qi fast wireless charging pad + additional 5V/2A USB-A output port',
      '5 color temperature modes (2700K Warm Gold to 6500K Crisp Daylight)',
      'Solid brushed brass & anodized aircraft aluminum chassis with silicone anti-slip base',
      'Automatic 45-minute auto-off sleep timer and smart brightness memory'
    ],
    tiers: [
      { range: '1 - 24 Units', price: '$ 46', discount: 'Standard Price' },
      { range: '25 - 99 Units', price: '$ 37', discount: '20% Bulk Discount' },
      { range: '100+ Units', price: '$ 29', discount: '37% Master Carton' }
    ],
    specs: [
      { label: 'Chassis Material', value: 'Brushed Brass & Aircraft Aluminum' },
      { label: 'Wireless Charging', value: '15W Qi Fast Standard' },
      { label: 'Color Temperature', value: '2700K - 6500K Adjustable' },
      { label: 'LED Lifespan', value: '50,000+ Hours Rated' }
    ]
  },
  {
    id: 3,
    name: 'RYP Velvet Oud & Imperial Amber Extrait de Parfum (100ml)',
    category: 'personal-care',
    categoryName: 'Personal Care & Fragrances',
    sku: 'RYP-PRF-201',
    price: '$ 52',
    priceNumeric: 52,
    packSize: '100ml Heavy Crystal Flacon with Magnetic Metallic Atomizer',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 3600,
    minOrder: '1 Unit',
    rating: 5.0,
    reviewCount: 114,
    priceNote: 'Boutique & Perfumery Wholesale Available',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Regal oriental fragrance with top notes of saffron and Calabrian bergamot, heart of aged Cambodian agarwood, and a velvety ambergris base.',
    longDescription: 'Handcrafted and batch-matured under the highest artisanal fragrance standards for AS GLOBAL TRADING LLC. A long-lasting 28% Extrait concentration designed for high-end boutique perfumeries and discerning retailers worldwide, presented in an embossed luxury gift box.',
    features: [
      '28% Extrait de Parfum concentration delivering 16+ hours of lasting sillage',
      'Masterfully blended with natural aged Cambodian oud, amber resin, and wild roses',
      'Custom magnetic atomizer cap with ultra-fine micro-mist nozzle dispersion',
      'Free from synthetic parabens, phthalates, and animal testing',
      'Luxury gift-ready packaging with individual authenticity batch certificate'
    ],
    tiers: [
      { range: '1 - 29 Units', price: '$ 52', discount: 'Base Price' },
      { range: '30 - 119 Units', price: '$ 42', discount: '19% Salon Tier' },
      { range: '120+ Units', price: '$ 33', discount: '37% Wholesale MOQ' }
    ],
    specs: [
      { label: 'Volume', value: '100ml / 3.4 fl. oz.' },
      { label: 'Fragrance Family', value: 'Warm Oriental Woody & Amber Oud' },
      { label: 'Concentration', value: 'Extrait de Parfum (28%)' },
      { label: 'Shelf Life', value: '36 Months' }
    ]
  },
  {
    id: 4,
    name: 'RYP Bio-Active Multi-Peptide Cellular Skin Recovery Elixir',
    category: 'personal-care',
    categoryName: 'Personal Care & Fragrances',
    sku: 'RYP-SKN-202',
    price: '$ 34',
    priceNumeric: 34,
    packSize: 'Clinical Hydration Treatment Kit with Niacinamide & Squalane',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 4100,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 98,
    priceNote: 'Dermatologist Tested & Approved',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Clinical dermatological formulation combining 5 bio-identical peptides, squalane, and triple molecular hyaluronic acid for intensive barrier repair.',
    longDescription: 'Formulated for clinical skincare distributors and beauty retailers under AS GLOBAL TRADING LLC standards. Dermatologist-tested, non-comedogenic, and 100% cruelty-free formulation packaged in amber dropper bottles to preserve active ingredient stability.',
    features: [
      'Bio-identical 5-Ceramide complex (EOP, NS, NP, AS, AP) repairs damaged skin barriers',
      'Botanical olive squalane and 5% niacinamide reduce redness and even skin tone',
      'Triple molecular weight hyaluronic acid delivers continuous 72-hour deep cellular hydration',
      'Hypoallergenic, fragrance-free formula certified safe for highly sensitive skin',
      'UV-protective pharmaceutical glass dropper bottle preserves active peptides'
    ],
    tiers: [
      { range: '1 - 19 Units', price: '$ 34', discount: 'Single Unit Price' },
      { range: '20 - 79 Units', price: '$ 27', discount: '21% Retailer Tier' },
      { range: '80+ Units', price: '$ 21', discount: '38% Master Carton' }
    ],
    specs: [
      { label: 'Kit Components', value: '50ml Recovery Serum + 50g Lipid Cream' },
      { label: 'Active Ingredients', value: 'Multi-Peptides, Niacinamide, Squalane' },
      { label: 'Certification', value: 'Dermatologist Tested, Hypoallergenic' },
      { label: 'Origin', value: 'Certified GMP & ISO-22716 Facility' }
    ]
  },
  {
    id: 5,
    name: 'RYP ApexSound Hybrid ANC Spatial Audio Wireless Headphones',
    category: 'smart-electronics',
    categoryName: 'Smart Tech & Gadgets',
    sku: 'RYP-AUD-301',
    price: '$ 64',
    priceNumeric: 64,
    packSize: 'Hi-Res Spatial Audio Over-Ear Headset with Hard Travel Case',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 2400,
    minOrder: '1 Unit',
    rating: 5.0,
    reviewCount: 135,
    priceNote: 'Wholesale Electronics Tier Available',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Studio-grade acoustic clarity with hybrid active noise cancellation, custom 40mm titanium drivers, and 45-hour continuous playback.',
    longDescription: 'Curated and distributed globally by AS GLOBAL TRADING LLC. Built with dual transparency mode, spatial audio head tracking, Bluetooth 5.3 multi-point streaming, and memory-foam ear cushions wrapped in breathable protein leather for acoustic luxury.',
    features: [
      'Hybrid ANC with 6 dedicated feedforward/feedback mics cancels up to 42dB ambient noise',
      'Titanium-coated 40mm acoustic drivers deliver crystalline highs and punchy bass depth',
      '45 hours playback on single charge (10-minute USB-C quick charge provides 5 hours)',
      'Bluetooth 5.3 Multipoint seamlessly pairs with laptop, tablet, and smartphone',
      'Built-in AI beamforming ENC microphone ensures studio-grade voice calls'
    ],
    tiers: [
      { range: '1 - 14 Units', price: '$ 64', discount: 'Base Wholesale' },
      { range: '15 - 59 Units', price: '$ 53', discount: '17% Distributor' },
      { range: '60+ Units', price: '$ 42', discount: '34% Bulk Pallet' }
    ],
    specs: [
      { label: 'Bluetooth Protocol', value: 'Bluetooth 5.3 with LDAC & AAC' },
      { label: 'Battery Capacity', value: '850 mAh (Up to 45h Playback)' },
      { label: 'Noise Reduction', value: 'Up to 42dB Hybrid Active ANC' },
      { label: 'Warranty', value: '1 Year Full Replacement Guarantee' }
    ]
  },
  {
    id: 6,
    name: 'RYP TurboVolt 100W GaN III Quad-Port Desktop Fast Charger',
    category: 'smart-electronics',
    categoryName: 'Smart Tech & Gadgets',
    sku: 'RYP-PWR-302',
    price: '$ 32',
    priceNumeric: 32,
    packSize: 'High-Speed 4-Port GaN Desktop Charger (3x USB-C + 1x USB-A)',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 4900,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 88,
    priceNote: 'High Velocity Retail Ready',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'High-speed Gallium Nitride (GaN III) power hub capable of charging laptops, tablets, and phones simultaneously with smart dynamic power routing.',
    longDescription: 'Sourced by AS GLOBAL TRADING LLC for tech distributors and corporate bulk orders. 50% smaller than standard chargers, featuring multi-point thermal safeguards, foldaway prongs, and international travel voltage compatibility (100-240V).',
    features: [
      'Next-generation Gallium Nitride (GaN III) architecture operates 30% cooler',
      '100W single port max output charges 16" laptops to 50% in just 30 minutes',
      'Dynamic power balancing intelligently allocates power across 4 connected devices',
      'Foldable US plug with interchangeable UK & EU adapters included in package',
      'Multi-layer safety: over-voltage, over-temperature, and short-circuit protection'
    ],
    tiers: [
      { range: '1 - 29 Units', price: '$ 32', discount: 'Retail Base' },
      { range: '30 - 119 Units', price: '$ 25', discount: '22% Volume' },
      { range: '120+ Units', price: '$ 19', discount: '40% Wholesale Carton' }
    ],
    specs: [
      { label: 'Total Output', value: '100W Max' },
      { label: 'Ports', value: '3x USB-C (PD 3.0/PPS) + 1x USB-A (QC 4.0)' },
      { label: 'Input Voltage', value: '100-240V ~ 50/60Hz 2.0A' },
      { label: 'Certifications', value: 'CE, FCC, RoHS, UL Tested' }
    ]
  },
  {
    id: 7,
    name: 'RYP Royal Highland Raw Sidr Honey Reserve (Grade A+ 500g)',
    category: 'gourmet-pantry',
    categoryName: 'Gourmet & Pantry Staples',
    sku: 'RYP-HNY-401',
    price: '$ 29',
    priceNumeric: 29,
    packSize: '500g Hexagonal Glass Hex-Jar with Hand-Carved Olivewood Dipper',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 5600,
    minOrder: '1 Master Unit',
    rating: 5.0,
    reviewCount: 156,
    priceNote: 'Export Grade Certified 100% Raw & Halal',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Unfiltered monofloral raw mountain Sidr honey harvested from pristine wild highlands, rich in active natural enzymes and rich caramel notes.',
    longDescription: 'Procured direct from certified highland apiaries by AS GLOBAL TRADING LLC. Laboratory-verified 100% pure raw honey packaged in gold-foil embossed hexagonal glass jars with an included handcrafted wooden honey dipper.',
    features: [
      '100% pure raw unheated mountain Sidr honey with zero additive sugars',
      'Abundant in natural enzymes, antioxidants, and immune-supporting bio-nutrients',
      'Heavy hexagonal glass jar with gold-embossed tamper-evident security seal',
      'Includes complimentary handcrafted natural olivewood honey dipper',
      'Certified 100% Halal, Non-GMO, and batch tested for purity'
    ],
    tiers: [
      { range: '1 - 39 Units', price: '$ 29', discount: 'Standard Price' },
      { range: '40 - 149 Units', price: '$ 23', discount: '20% Retail Pack' },
      { range: '150+ Units', price: '$ 18', discount: '38% Export Tier' }
    ],
    specs: [
      { label: 'Net Weight', value: '500g / 17.6 oz' },
      { label: 'Floral Source', value: 'Wild Sidr Tree (Ziziphus spina-christi)' },
      { label: 'Processing', value: 'Cold-Extracted, Unfiltered Raw' },
      { label: 'Shelf Life', value: 'Indefinite (Best within 36 Months)' }
    ]
  },
  {
    id: 8,
    name: 'RYP First Cold-Pressed Extra Virgin Olive Oil Reserve (750ml)',
    category: 'gourmet-pantry',
    categoryName: 'Gourmet & Pantry Staples',
    sku: 'RYP-OIL-402',
    price: '$ 25',
    priceNumeric: 25,
    packSize: '750ml Dark UV-Protected Marasca Glass with Precision Pourer',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 4500,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 108,
    priceNote: 'Restaurant & Wholesale Bulk Rates',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Single-estate first cold mechanical extraction with ultra-low acidity (<0.2%), delicate herbal notes, and a peppery polyphenol finish.',
    longDescription: 'Brought directly to commercial gourmet grocers and fine dining establishments by AS GLOBAL TRADING LLC. Harvested by hand within 24 hours of pressing, bottled in UV-protective dark Marasca glass with an integrated anti-drip pour spout.',
    features: [
      'First cold mechanical extraction under 24°C preserves delicate polyphenols',
      'Certified ultra-low acidity (<0.2%) ranking in the top international EVOO grade',
      'Dark UV-coated Marasca glass bottle with integrated anti-drip pourer spout',
      'High polyphenol count (>450 mg/kg) providing proven cellular wellness benefits',
      'Traceable single-estate harvest with complete laboratory analysis certificates'
    ],
    tiers: [
      { range: '1 - 24 Units', price: '$ 25', discount: 'Single Bottle' },
      { range: '25 - 99 Units', price: '$ 20', discount: '20% Wholesale Case' },
      { range: '100+ Units', price: '$ 15.50', discount: '38% Commercial Pallet' }
    ],
    specs: [
      { label: 'Net Volume', value: '750ml / 25.4 fl. oz.' },
      { label: 'Acidity', value: '< 0.2% at harvest' },
      { label: 'Extraction Method', value: 'Mechanical First Cold Press' },
      { label: 'Harvest Profile', value: 'Single-Estate Early Harvest' }
    ]
  }
];
