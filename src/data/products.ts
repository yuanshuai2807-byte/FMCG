import { FMCGProduct, RetailerStore, CampaignHighlight } from '../types';

export const FMCG_PRODUCTS: FMCGProduct[] = [
  {
    id: 'verve-citrus-spark',
    sku: 'FMCG-BEV-001',
    name: 'Yuzu & Pink Grapefruit Sparkling Botanics',
    brandLine: 'Verve Botanics™',
    category: 'Beverages',
    tagline: 'Sun-Drenched Citrus with Wild Rosemary Essence',
    description: 'A crisp, effervescent botanical refreshment crafted with Japanese Yuzu, cold-pressed pink grapefruit, and Mediterranean rosemary extracts. Zero added sugar, naturally hydrating with pink Himalayan electrolytes.',
    price: 2.99,
    msrp: 3.49,
    packSize: '330ml Aluminum Slim Can (Pack of 12)',
    imageUrl: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=80'
    ],
    badge: 'Best Seller',
    tags: ['Organic', 'Zero Sugar', 'Vegan', 'Gluten-Free'],
    usps: ['Zero Added Sugars', 'Real Cold-Pressed Citrus', '100% Recyclable Can', 'Electrolyte Infused'],
    keyBenefits: [
      { icon: 'Zap', title: 'Cellular Hydration', desc: 'Naturally occurring potassium and pink mineral salt restore balance.' },
      { icon: 'Sparkles', title: 'Live Citrus Terpenes', desc: 'Extracted within 4 hours of harvest for peak aromatic crispness.' },
      { icon: 'Leaf', title: 'Clean Label', desc: 'No synthetic sweeteners, no artificial preservatives, non-GMO.' }
    ],
    specs: [
      { label: 'Calories', value: '5 kcal / can' },
      { label: 'Total Sugar', value: '0g' },
      { label: 'Caffeine', value: 'Naturally Caffeine-Free' },
      { label: 'Shelf Life', value: '18 Months ambient' }
    ],
    retailers: ['Whole Foods', 'Target', 'Sprouts', 'Trader Joe’s'],
    rating: 4.9,
    reviewCount: 1420,
    accentColor: '#D97706',
    inStock: true,
    shelfLife: '18 Months',
    casePack: '12 Cans / Tray',
    tasteOrAromaProfile: ['Zesty Yuzu', 'Ruby Grapefruit', 'Crisp Herbal Finish'],
    advertisingSnippet: '"Voted Most Refreshing Beverage Launch of 2026 by BevNET."'
  },
  {
    id: 'verve-nitro-oat-latte',
    sku: 'FMCG-BEV-002',
    name: 'Nitro Cold Brew & Silky Oat Milk Latte',
    brandLine: 'Origin Roasters™',
    category: 'Dairy & Cold Brew',
    tagline: 'Micro-Foamed Single Origin Cold Brew on the Go',
    description: '18-hour cold steeped Arabica coffee blended with our velvety artisanal oat milk, nitrogen-dosed for a velvety draft pour. Rich cocoa notes with a creamy vanilla finish.',
    price: 3.89,
    msrp: 4.29,
    packSize: '250ml Nitro Can',
    imageUrl: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1000&q=80'
    ],
    badge: 'New Launch',
    tags: ['Vegan', 'Plant-Based', 'Organic', 'Fair Trade'],
    usps: ['Nitrogen Charged Pour', 'Single Origin Ethiopian Beans', 'Organic Whole Grain Oats', '140mg Clean Caffeine'],
    keyBenefits: [
      { icon: 'Coffee', title: 'Barista Draft Texture', desc: 'Silky microfoam cascade upon cracking the can.' },
      { icon: 'Heart', title: 'Dairy-Free Luxury', desc: 'Creamy gluten-free oat base without gums or carrageenan.' },
      { icon: 'ShieldCheck', title: 'Direct Trade Certified', desc: 'Paying 35% above fair trade premiums directly to growers.' }
    ],
    specs: [
      { label: 'Caffeine Content', value: '140 mg' },
      { label: 'Sugars', value: '3g from oats' },
      { label: 'Dairy Free', value: '100% Plant-Based' },
      { label: 'Serving Temperature', value: 'Chill & Shake Once' }
    ],
    retailers: ['Whole Foods', 'Kroger', 'Target', 'Erewhon'],
    rating: 4.8,
    reviewCount: 890,
    accentColor: '#92400E',
    inStock: true,
    shelfLife: '12 Months',
    casePack: '12 Cans / Master Box',
    tasteOrAromaProfile: ['Dark Chocolate', 'Toasted Hazelnut', 'Silky Oat'],
    advertisingSnippet: '"Café quality velvet foam directly in your pantry."'
  },
  {
    id: 'verve-ancient-grain-granola',
    sku: 'FMCG-SNK-001',
    name: 'Wild Blueberry & Golden Turmeric Crunch',
    brandLine: 'EarthHarvest Organics™',
    category: 'Snacks & Pantry',
    tagline: 'Slow-Baked Clusters with Sprouted Ancient Seeds',
    description: 'Whole grain sprouted oats, quinoa flakes, organic wild Maine blueberries, and golden ginger-turmeric glaze. Oven-baked in small batches with virgin cold-pressed coconut oil.',
    price: 5.49,
    msrp: 6.29,
    packSize: '340g Resealable Eco Pouch',
    imageUrl: 'https://images.unsplash.com/photo-1517093709146-5e581454157d?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1517093709146-5e581454157d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1000&q=80'
    ],
    badge: 'Best Seller',
    tags: ['Organic', 'Gluten-Free', 'Vegan', 'Non-GMO'],
    usps: ['Prebiotic Fiber Rich', 'Sprouted for Easy Digestion', 'No Refined Sugar', 'Biodegradable Film Pouch'],
    keyBenefits: [
      { icon: 'Flame', title: 'Sustained Morning Energy', desc: 'Complex carbs and 8g protein per serving keep blood sugar steady.' },
      { icon: 'Smile', title: 'Gut Microbiome Support', desc: '6g prebiotic fiber from green banana flour and flaxseed.' },
      { icon: 'Award', title: 'Great Taste 2025 Winner', desc: 'Celebrated for unmistakable crunch and tart berry harmony.' }
    ],
    specs: [
      { label: 'Net Weight', value: '340g / 12oz' },
      { label: 'Dietary Fiber', value: '6g per 50g' },
      { label: 'Certified', value: 'USDA Organic, GFCO Gluten-Free' },
      { label: 'Pouch Type', value: '100% Home Compostable' }
    ],
    retailers: ['Whole Foods', 'Sprouts', 'Costco', 'Trader Joe’s'],
    rating: 4.95,
    reviewCount: 2310,
    accentColor: '#4338CA',
    inStock: true,
    shelfLife: '14 Months',
    casePack: '8 Pouches / Display Caddy',
    tasteOrAromaProfile: ['Tart Berry', 'Warm Cinnamon', 'Caramelized Quinoa'],
    advertisingSnippet: '"The fastest-growing organic cereal brand on grocery shelves."'
  },
  {
    id: 'verve-botanical-cleanser',
    sku: 'FMCG-PC-001',
    name: 'Bergamot & White Tea Body Wash Gel',
    brandLine: 'Sulis Botanical™',
    category: 'Personal Care',
    tagline: 'Hydrating Lipid-Restoring Shower Nectar',
    description: 'A sulfate-free concentrated cleansing gel made with cold-pressed Italian bergamot, antioxidant white tea extract, and plant ceramides. Leaves the skin barrier nourished, silky, and delicately scented.',
    price: 9.99,
    msrp: 12.00,
    packSize: '500ml Post-Consumer Recycled Pump Bottle',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80'
    ],
    badge: 'Award Winner',
    tags: ['Eco-Friendly', 'Cruelty-Free', 'Vegan', 'Plastic-Free'],
    usps: ['100% Post-Consumer PCR Plastic', 'No Sulfates or Parabens', 'Skin Microbiome Safe', 'Concentrated Refillable Bottle'],
    keyBenefits: [
      { icon: 'Droplets', title: 'Triple Hydration Matrix', desc: 'Hyaluronic acid and squalane replenish moisture while you shower.' },
      { icon: 'Shield', title: 'pH 5.5 Balanced', desc: 'Protects natural acid mantle against stripping and seasonal dryness.' },
      { icon: 'Sun', title: 'Spa-Grade Aromatherapy', desc: 'Calabrian bergamot essential oil calms everyday sensory fatigue.' }
    ],
    specs: [
      { label: 'Volume', value: '500ml / 16.9 fl oz' },
      { label: 'Packaging', value: '100% PCR Bottle & Locking Pump' },
      { label: 'Certifications', value: 'Leaping Bunny, EWG Verified' },
      { label: 'Formula', value: 'Biodegradable rinse-off' }
    ],
    retailers: ['Target', 'Sephora', 'Ulta', 'Nordstrom Local'],
    rating: 4.88,
    reviewCount: 3120,
    accentColor: '#059669',
    inStock: true,
    shelfLife: '24 Months',
    casePack: '6 Units / Master Shipper',
    tasteOrAromaProfile: ['Calabrian Bergamot', 'Crisp White Tea', 'Earthy Cedar'],
    advertisingSnippet: '"Elevate your daily ritual with dermatologically-backed botanicals."'
  },
  {
    id: 'verve-zero-waste-dish-tablets',
    sku: 'FMCG-HOME-001',
    name: 'Active Enzyme Dishwashing Tabs',
    brandLine: 'CleanCycle Home™',
    category: 'Home & Eco',
    tagline: 'Ultra-Concentrated Grease Cutting without Microplastics',
    description: 'Pioneering PVA-free dishwasher tablets formulated with bio-enzymes and natural oxygen bleach. Cuts stubborn 48-hour baked grease effortlessly and leaves glassware crystal clear without water spots.',
    price: 11.49,
    msrp: 13.99,
    packSize: '45 Tablets in Recyclable Tin Container',
    imageUrl: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1000&q=80'
    ],
    badge: 'Staff Pick',
    tags: ['Eco-Friendly', 'Plastic-Free', 'Non-GMO', 'Cruelty-Free'],
    usps: ['100% Plastic-Free Packaging', 'Septic & Greywater Safe', 'No Harsh Chlorine Smells', 'Zero Microplastic Residue'],
    keyBenefits: [
      { icon: 'CheckCircle2', title: 'Triple Enzyme Cleaning', desc: 'Protease, amylase, and lipase digest starch, fat, and proteins.' },
      { icon: 'Sparkles', title: 'Hard Water Spot Fighter', desc: 'Natural sodium citrate softens hard minerals automatically.' },
      { icon: 'Recycle', title: 'Refill & Reuse Forever', desc: 'Keep the embossed metal tin and purchase paper-bag refill packs.' }
    ],
    specs: [
      { label: 'Tab Count', value: '45 Loads' },
      { label: 'Packaging', value: 'Zero Plastic Embossed Tin' },
      { label: 'Safety', value: 'EPA Safer Choice Certified' },
      { label: 'Water Temp', value: 'Active from 40°C / 104°F' }
    ],
    retailers: ['Target', 'Whole Foods', 'Walmart Eco-Aisle', 'Amazon'],
    rating: 4.92,
    reviewCount: 1750,
    accentColor: '#0284C7',
    inStock: true,
    shelfLife: '36 Months',
    casePack: '8 Tins / Shelf Carton',
    tasteOrAromaProfile: ['Lemon Verbena', 'Crisp Mint', 'Odor Neutralizer'],
    advertisingSnippet: '"Zero plastic in our waterways. 100% sparkling performance."'
  },
  {
    id: 'verve-ceremonial-matcha-sparkling',
    sku: 'FMCG-BEV-003',
    name: 'Kyoto Ceremonial Sparkling Matcha Tea',
    brandLine: 'Verve Botanics™',
    category: 'Beverages',
    tagline: 'First-Harvest Shade Grown Green Tea with Gentle Bubbles',
    description: 'Directly sourced from organic family farms in Uji, Kyoto. Whisked with crystal alpine spring water and lightly infused with crisp lime essence for sustained focus without caffeine jitters.',
    price: 3.49,
    msrp: 3.99,
    packSize: '250ml Sleek Can',
    imageUrl: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80'
    ],
    badge: 'Seasonal Special',
    tags: ['Organic', 'Zero Sugar', 'Non-GMO', 'Vegan', 'Cold-Pressed'],
    usps: ['First Harvest Uji Ceremonial Grade', '60mg L-Theanine for Calm Focus', 'Zero Artificial Sweeteners', 'Pure Spring Water'],
    keyBenefits: [
      { icon: 'Zap', title: 'Sustained Calm Clarity', desc: 'Natural L-Theanine promotes alpha brainwaves without energy spikes or crashes.' },
      { icon: 'Shield', title: 'High EGCG Antioxidants', desc: '137x more antioxidants than conventional steeped green tea leaves.' },
      { icon: 'Feather', title: 'Crisp Zero Calorie Cleanliness', desc: 'No bitter aftertaste, perfected by cold acoustic blending.' }
    ],
    specs: [
      { label: 'Origin', value: 'Uji, Kyoto, Japan' },
      { label: 'Sugar', value: '0g per can' },
      { label: 'L-Theanine', value: '60mg verified' },
      { label: 'Shelf Life', value: '12 Months ambient' }
    ],
    retailers: ['Whole Foods', 'Erewhon', 'Sprouts', 'Bristol Farms'],
    rating: 4.85,
    reviewCount: 940,
    accentColor: '#15803D',
    inStock: true,
    shelfLife: '12 Months',
    casePack: '12 Cans / Pack',
    tasteOrAromaProfile: ['Umami Grassiness', 'Zesty Lime', 'Silky Green Finish'],
    advertisingSnippet: '"Ancient Japanese tea ceremony meets modern on-the-go vitality."'
  },
  {
    id: 'verve-cacao-crisps',
    sku: 'FMCG-SNK-002',
    name: 'Salted Madagascar Cacao & Quinoa Bites',
    brandLine: 'EarthHarvest Organics™',
    category: 'Snacks & Pantry',
    tagline: 'Dark 72% Single Origin Crisps with Flaky Cornish Salt',
    description: 'Crunchy popped Andean quinoa drenched in single-origin heirloom Madagascar 72% dark chocolate and dusted with Maldon flaky sea salt. Portion-controlled guilt-free indulgence.',
    price: 4.99,
    msrp: 5.79,
    packSize: '120g Standup Pouch',
    imageUrl: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1000&q=80'
    ],
    badge: 'Best Seller',
    tags: ['Fair Trade', 'Gluten-Free', 'Vegan', 'Organic'],
    usps: ['Direct Farm Partnership', 'Only 4g Coconut Sugar', '100% Plant-Based Dark Chocolate', 'Certified GFCO Gluten-Free'],
    keyBenefits: [
      { icon: 'Heart', title: 'Heart-Healthy Polyphenols', desc: 'Raw cold-ground beans retain natural flavanols and magnesium.' },
      { icon: 'Sparkles', title: 'Satisfying Airy Snap', desc: 'Popped ancient grains deliver crisp lightness without dense calories.' },
      { icon: 'Globe', title: 'Farmer Living Income Guaranteed', desc: 'Direct trade co-op in Sambirano Valley, Madagascar.' }
    ],
    specs: [
      { label: 'Cacao Content', value: '72% Single Origin' },
      { label: 'Per Serving', value: '110 Calories' },
      { label: 'Allergens', value: 'Gluten-Free, Nut-Free Facility' },
      { label: 'Bag Type', value: 'FSC Certified Paper Barrier' }
    ],
    retailers: ['Trader Joe’s', 'Target', 'Whole Foods', 'Wegmans'],
    rating: 4.93,
    reviewCount: 3890,
    accentColor: '#78350F',
    inStock: true,
    shelfLife: '15 Months',
    casePack: '10 Pouches / Counter Shipper',
    tasteOrAromaProfile: ['Bright Red Fruit', 'Toasted Quinoa', 'Flaky Sea Salt'],
    advertisingSnippet: '"The ultimate clean chocolate snack: crunch, rich cacao, and conscience."'
  },
  {
    id: 'verve-mineral-sunscreen-mist',
    sku: 'FMCG-PC-002',
    name: 'Zinc Shield Daily Mineral Sun Mist SPF 50',
    brandLine: 'Sulis Botanical™',
    category: 'Personal Care',
    tagline: 'Non-Aerosol Invisible Zinc Defense with Niacinamide',
    description: 'Breakthrough sheer non-nano mineral zinc sunscreen spray. Goes on invisible on all skin tones with zero white cast, fortified with calming niacinamide and coastal sea kelp bio-ferment.',
    price: 14.50,
    msrp: 17.00,
    packSize: '150ml Eco-Air Non-Aerosol Bottle',
    imageUrl: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80'
    ],
    badge: 'New Launch',
    tags: ['Eco-Friendly', 'Cruelty-Free', 'Vegan', 'Plastic-Free'],
    usps: ['100% Non-Nano Mineral Zinc', 'Reef-Safe Hawaii Act 104 Compliant', 'Zero Chemical Filters', 'Sweat & Water Resistant 80 Min'],
    keyBenefits: [
      { icon: 'ShieldCheck', title: 'Broad Spectrum UVA/UVB', desc: 'Pharmaceutical-grade physical block against photodamage and blue light.' },
      { icon: 'Droplets', title: 'Weightless Dewy Finish', desc: 'Infused with squalane so skin feels hydrated without stickiness.' },
      { icon: 'Sun', title: 'Gentle on Sensitive Eyes', desc: 'No stinging, fragrance-free, dermatologist tested for eczema-prone skin.' }
    ],
    specs: [
      { label: 'SPF Level', value: 'Broad Spectrum SPF 50' },
      { label: 'Active Ingredient', value: '20.4% Non-Nano Zinc Oxide' },
      { label: 'Propellant', value: 'Zero chemical propellants / Compressed Air' },
      { label: 'Water Resistance', value: '80 Minutes' }
    ],
    retailers: ['Target', 'Sephora', 'Ulta', 'CVS Health Flagship'],
    rating: 4.82,
    reviewCount: 1120,
    accentColor: '#E11D48',
    inStock: true,
    shelfLife: '24 Months',
    casePack: '6 Bottles / Shelf Carton',
    tasteOrAromaProfile: ['Fragrance Free', 'Subtle Cucumber Seed', 'Clean Velvet'],
    advertisingSnippet: '"The sunscreen you will actually look forward to applying every day."'
  }
];

export const CAMPAIGNS: CampaignHighlight[] = [
  {
    id: 'campaign-2026-summer-revival',
    title: 'THE CRISP AWAKENING',
    subtitle: 'National TV & Digital Campaign 2026',
    mediaType: 'video_mock',
    mediaUrl: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=1600&q=80',
    duration: '0:30 Commercial Spot',
    headline: 'Real fruit. Zero empty sugars. Maximum crispness.',
    ctaText: 'Claim 30% Off Retail Coupon',
    promoCode: 'VERVE30',
    discountPercentage: 30,
    featuredProductIds: ['verve-citrus-spark', 'verve-ceremonial-matcha-sparkling']
  },
  {
    id: 'campaign-clean-home-pact',
    title: 'ZERO PLASTIC, PURE SHINE',
    subtitle: 'Home & Personal Care Commercial',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1600&q=80',
    headline: 'Cleaning power tested against grease, gentle on the oceans.',
    ctaText: 'Request Wholesale Retail Kit',
    promoCode: 'CLEANECO',
    discountPercentage: 25,
    featuredProductIds: ['verve-zero-waste-dish-tablets', 'verve-botanical-cleanser']
  }
];

export const RETAILER_STORES: RetailerStore[] = [
  {
    id: 'store-1',
    name: 'Whole Foods Market - Downtown Organic',
    logo: '🌿',
    address: '450 Grand Avenue, Suite 100',
    city: 'San Francisco, CA 94107',
    distance: '0.8 miles away',
    inStockBrands: ['Verve Botanics™', 'Origin Roasters™', 'EarthHarvest Organics™', 'Sulis Botanical™'],
    isOpenNow: true
  },
  {
    id: 'store-2',
    name: 'Target Supercenter - Market St.',
    logo: '🎯',
    address: '789 Mission Street',
    city: 'San Francisco, CA 94103',
    distance: '1.4 miles away',
    inStockBrands: ['Verve Botanics™', 'CleanCycle Home™', 'Sulis Botanical™'],
    isOpenNow: true
  },
  {
    id: 'store-3',
    name: 'Sprouts Farmers Market',
    logo: '🌱',
    address: '1200 Folsom Blvd',
    city: 'San Francisco, CA 94105',
    distance: '2.1 miles away',
    inStockBrands: ['EarthHarvest Organics™', 'Verve Botanics™', 'Origin Roasters™'],
    isOpenNow: true
  },
  {
    id: 'store-4',
    name: 'Trader Joe’s - Central Market',
    logo: '⚓',
    address: '555 9th Street',
    city: 'San Francisco, CA 94103',
    distance: '2.6 miles away',
    inStockBrands: ['EarthHarvest Organics™', 'CleanCycle Home™'],
    isOpenNow: false
  }
];

export const BRAND_STATS = [
  { label: 'Retail Doors Nationwide', value: '14,200+', change: '+38% YoY' },
  { label: 'Units Sold in 2026', value: '6.8M+', change: 'Top 1% Velocity' },
  { label: 'Consumer Repeat Purchase Rate', value: '74.2%', change: 'Industry Avg: 36%' },
  { label: 'Plastic Bottles Diverted', value: '3.4M lbs', change: '100% Circular Goal' }
];

export const WHOLESALE_CATEGORIES = [
  { title: 'Grocery & Specialty Food', desc: 'Aisle-ready shelf-stable beverages, snacks & pantry staples with high scan velocity.' },
  { title: 'Beauty & Apothecary', desc: 'Dermatologist-tested, clean luxury personal care with compact countertop footprints.' },
  { title: 'Eco-Living & Home Goods', desc: 'Circular refillable household cleaning pods with zero plastic packaging.' }
];
