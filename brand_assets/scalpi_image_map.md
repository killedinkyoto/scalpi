# Scalpi Lander — Image Asset Map

All 21 images for the lander, with their semantic reference names and exact placement in `index.html`.

The `@name` convention means: when you replace placeholders in the HTML, search the original `placehold.co` URL on each line and swap it with the actual file referenced as `@name`. Filenames in `/images/` shown for reference (rename your files to match the `@name` if you want clean URLs).

---

## 1. Hero Section

### `@hero-bottle`
- **File:** `hf_20260616_103044_b48cfa38-5c7a-4a78-8489-d7187c9be32c.png`
- **Location:** `index.html` line **385**, inside `.hero-right`
- **Replaces:** `https://placehold.co/800x900/1C3A2A/3D6B52?text=.`
- **Also update:** `<link rel="preload">` on line **11**
- **Recommended render size:** 800×900
- **Notes:** Gets `opacity: 0.7` + `mix-blend-mode: luminosity` applied. High contrast intentional.

---

## 2. Problem Carousel — "What is really happening beneath your scalp"

> The carousel renders each card twice for the seamless infinite scroll, so each image appears at TWO line numbers. Update both.

### `@problem-trapped-barrier`
- **File:** `hf_20260616_103113_2b0b334e-9477-4121-91fe-59cd26880663.png`
- **Location:** `index.html` lines **429** AND **462**
- **Replaces:** `https://placehold.co/340x150/1C3A2A0D/3D6B52?text=Trapped+Barrier`
- **Card title:** "The Plastic Wrap Over Your Scalp"
- **Recommended render size:** 340×150

### `@problem-premature-aging`
- **File:** `hf_20260616_103120_25b2d282-cd2c-45ac-ab77-8937b24bcebb.png`
- **Location:** `index.html` lines **437** AND **470**
- **Replaces:** `https://placehold.co/340x150/1C3A2A0D/3D6B52?text=Premature+Aging`
- **Card title:** "Your Follicles Are Aging Too Fast"
- **Recommended render size:** 340×150

### `@problem-dkk1-signal`
- **File:** `hf_20260616_103126_27a2a908-f574-4dcd-b27b-fd92a7e3dc2c.png`
- **Location:** `index.html` lines **445** AND **478**
- **Replaces:** `https://placehold.co/340x150/1C3A2A0D/3D6B52?text=DKK-1+Signal`
- **Card title:** "The Protein Shutting Down Your Growth"
- **Recommended render size:** 340×150

### `@problem-surface-only`
- **File:** `hf_20260616_103132_1fee444d-9df2-403f-91cc-70f357fd6bad.png`
- **Location:** `index.html` lines **453** AND **486**
- **Replaces:** `https://placehold.co/340x150/1C3A2A0D/3D6B52?text=Surface+Only`
- **Card title:** "Why Nothing Has Worked"
- **Recommended render size:** 340×150

---

## 3. Ingredient Accordion — "Seven actives. One delivery system."

### `@ingredient-niacinamide`
- **File:** `hf_20260616_103139_9b912710-5f27-41de-b591-483884da3624.png`
- **Location:** `index.html` line **613**
- **Replaces:** `https://placehold.co/160x130/1C3A2A0D/3D6B52?text=Niacinamide`
- **Ingredient:** Niacinamide (Vitamin B3)
- **Recommended render size:** 160×130

### `@ingredient-retinol`
- **File:** `hf_20260616_103144_32efba30-ef1b-4a90-8d09-09627ca9b97b.png`
- **Location:** `index.html` line **632**
- **Replaces:** `https://placehold.co/160x130/1C3A2A0D/3D6B52?text=Retinol`
- **Ingredient:** Retinol (Vitamin A)
- **Recommended render size:** 160×130

### `@ingredient-egcg`
- **File:** `hf_20260616_103149_41dc4565-b625-488b-8356-4d0601db07da.png`
- **Location:** `index.html` line **651**
- **Replaces:** `https://placehold.co/160x130/1C3A2A0D/3D6B52?text=EGCG`
- **Ingredient:** EGCG (Green Tea Extract)
- **Recommended render size:** 160×130

### `@ingredient-ginseng`
- **File:** `hf_20260616_103154_5034a509-512c-4cc6-8d9d-24e551a00ff4.png`
- **Location:** `index.html` line **670**
- **Replaces:** `https://placehold.co/160x130/1C3A2A0D/3D6B52?text=Ginseng`
- **Ingredient:** Panax Ginseng (Root Extract)
- **Recommended render size:** 160×130

### `@ingredient-vitamin-e`
- **File:** `hf_20260616_103159_e248f91f-9b2d-43dd-9f32-d2c1403689b2.png`
- **Location:** `index.html` line **689**
- **Replaces:** `https://placehold.co/160x130/1C3A2A0D/3D6B52?text=Vitamin+E`
- **Ingredient:** Tocopheryl Acetate (Vitamin E)
- **Recommended render size:** 160×130

### `@ingredient-vitamin-c`
- **File:** `hf_20260616_103205_19296d01-22a1-4028-b478-1398075854c6.png`
- **Location:** `index.html` line **708**
- **Replaces:** `https://placehold.co/160x130/1C3A2A0D/3D6B52?text=Vitamin+C`
- **Ingredient:** Ascorbyl Palmitate (Vitamin C)
- **Recommended render size:** 160×130

### `@ingredient-calendula`
- **File:** `hf_20260616_103210_919d3d3b-43af-4985-a84d-b8da0507341e.png`
- **Location:** `index.html` line **727`
- **Replaces:** `https://placehold.co/160x130/1C3A2A0D/3D6B52?text=Calendula`
- **Ingredient:** Calendula (Flower Extract)
- **Recommended render size:** 160×130

---

## 4. Before / After Testimonials — "They'd tried everything. Then they tried Scalpi."

> Each testimonial slide has two paired images (before + after at N months).

### Slide 1 — Margaret, 52 · Post-menopause · 3 Months

#### `@margaret-before`
- **File:** `hf_20260616_103222_507820c2-cce8-42b2-9e79-a2faaf6253ad.png`
- **Location:** `index.html` line **808**
- **Replaces:** `https://placehold.co/400x533/C9BFA3/5C5547?text=Before`
- **Recommended render size:** 400×533

#### `@margaret-after`
- **File:** `hf_20260616_103240_743d6ec3-0cb9-4382-a5a7-c8bc6bdab766.png`
- **Location:** `index.html` line **812**
- **Replaces:** `https://placehold.co/400x533/1C3A2A/6B8F79?text=3+Months`
- **Recommended render size:** 400×533

### Slide 2 — Diane, 47 · Perimenopause · 4 Months

#### `@diane-before`
- **File:** `hf_20260616_103246_9ff1a63c-327f-4247-af20-36e1f93b69d2.png`
- **Location:** `index.html` line **834**
- **Replaces:** `https://placehold.co/400x533/C9BFA3/5C5547?text=Before`
- **Recommended render size:** 400×533

#### `@diane-after`
- **File:** `hf_20260616_103252_56195454-e059-4634-bc69-78dbdc70fca1.png`
- **Location:** `index.html` line **838**
- **Replaces:** `https://placehold.co/400x533/1C3A2A/6B8F79?text=4+Months`
- **Recommended render size:** 400×533

### Slide 3 — Carol, 55 · Post-menopause · 6 Months

#### `@carol-before`
- **File:** `hf_20260616_103258_69cb7481-7cf4-4ff1-8270-d2221ee85ea6.png`
- **Location:** `index.html` line **860**
- **Replaces:** `https://placehold.co/400x533/C9BFA3/5C5547?text=Before`
- **Recommended render size:** 400×533

#### `@carol-after`
- **File:** `hf_20260616_103304_e5edd4eb-4f2c-40f9-8a4a-08d4be5b7907.png`
- **Location:** `index.html` line **864**
- **Replaces:** `https://placehold.co/400x533/1C3A2A/6B8F79?text=6+Months`
- **Recommended render size:** 400×533

> ⚠️ **Compliance reminder:** These AI-generated before/afters paired with named, aged testimonials carry Meta ad-policy risk (personal-attribute restriction) and FTC disclosure risk. Treat as placeholder until real customer photos exist, or remove the before/after frames and keep the quote-only testimonial format.

---

## 5. Purchase Section — "Your follicles have been waiting long enough"

### `@purchase-1-bottle`
- **File:** `hf_20260616_103051_ece7c918-38d6-4aee-9148-537f282eff40.png`
- **Location:** `index.html` line **974**
- **Replaces:** `https://placehold.co/360x180/F5F0E608/6B8F79?text=1+Bottle`
- **Product card:** 1 Bottle — 30 Day Supply — $79
- **Recommended render size:** 360×180

### `@purchase-3-bottles`
- **File:** `hf_20260616_103059_c60b7cb0-281a-4afa-9e7e-240b3e0c1478.png`
- **Location:** `index.html` line **989**
- **Replaces:** `https://placehold.co/360x180/F5F0E608/B87A3D?text=3+Bottles`
- **Product card:** 3 Bottles — 90 Day Supply — $199 (Most Popular)
- **Recommended render size:** 360×180

### `@purchase-6-bottles`
- **File:** `hf_20260616_103105_bd1fc150-4bc3-4b76-b257-d30db524a96d.png`
- **Location:** `index.html` line **1004**
- **Replaces:** `https://placehold.co/360x180/F5F0E608/6B8F79?text=6+Bottles`
- **Product card:** 6 Bottles — 180 Day Supply — $349
- **Recommended render size:** 360×180

---

## Quick-Reference Table

| `@name` | Line(s) | Size | Section |
|---|---|---|---|
| `@hero-bottle` | 11, 385 | 800×900 | Hero |
| `@problem-trapped-barrier` | 429, 462 | 340×150 | Problem carousel |
| `@problem-premature-aging` | 437, 470 | 340×150 | Problem carousel |
| `@problem-dkk1-signal` | 445, 478 | 340×150 | Problem carousel |
| `@problem-surface-only` | 453, 486 | 340×150 | Problem carousel |
| `@ingredient-niacinamide` | 613 | 160×130 | Ingredients |
| `@ingredient-retinol` | 632 | 160×130 | Ingredients |
| `@ingredient-egcg` | 651 | 160×130 | Ingredients |
| `@ingredient-ginseng` | 670 | 160×130 | Ingredients |
| `@ingredient-vitamin-e` | 689 | 160×130 | Ingredients |
| `@ingredient-vitamin-c` | 708 | 160×130 | Ingredients |
| `@ingredient-calendula` | 727 | 160×130 | Ingredients |
| `@margaret-before` | 808 | 400×533 | Testimonials |
| `@margaret-after` | 812 | 400×533 | Testimonials |
| `@diane-before` | 834 | 400×533 | Testimonials |
| `@diane-after` | 838 | 400×533 | Testimonials |
| `@carol-before` | 860 | 400×533 | Testimonials |
| `@carol-after` | 864 | 400×533 | Testimonials |
| `@purchase-1-bottle` | 974 | 360×180 | Purchase |
| `@purchase-3-bottles` | 989 | 360×180 | Purchase |
| `@purchase-6-bottles` | 1004 | 360×180 | Purchase |

**Total:** 21 unique images, 23 HTML replacements (problem carousel duplicates each card once for the infinite loop).
