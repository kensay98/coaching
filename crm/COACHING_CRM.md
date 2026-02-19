# Coaching CRM — Google Sheets Template

Complete specification for a 4-tab Google Sheets CRM. Follow this guide to build it in ~15 minutes.

---

## Quick Start

1. Open [Google Sheets](https://sheets.google.com) → **Blank spreadsheet**
2. Rename it **"Coaching CRM"**
3. Create 4 tabs (click **+** at bottom): **Clients**, **Sessions**, **Payments**, **Dashboard**
4. Follow each tab setup below in order

---

## Tab 1: Clients

### Column Layout

| Column | Header (Row 1) | Width |
|--------|----------------|-------|
| A | Name | 180px |
| B | Email | 220px |
| C | Telegram | 140px |
| D | Tier | 120px |
| E | Monthly Rate | 120px |
| F | Start Date | 120px |
| G | Status | 100px |
| H | End Date | 120px |
| I | Source | 150px |

### Row 1 Formatting
- **Bold** all headers
- Background: `#4a86c8` (medium blue)
- Text color: **white**
- Freeze Row 1: **View → Freeze → 1 row**

### Data Validation

**Column D (Tier)** — Select `D2:D100`, then **Data → Data validation → Add rule**:
- Criteria: **Dropdown (from a list of items)**
- Items: `$150, $250, $450, $700`

**Column G (Status)** — Select `G2:G100`:
- Criteria: **Dropdown (from a list of items)**
- Items: `Active, Paused, Ended`

### Formulas

**Column E (Monthly Rate)** — In cell `E2`, enter:
```
=IF(D2="$150", 150, IF(D2="$250", 250, IF(D2="$450", 450, IF(D2="$700", 700, ""))))
```
Then drag down to `E100` (or use the fill handle).

### Column Formatting
- **Column E**: Format → Number → Currency (USD)
- **Column F**: Format → Number → Date
- **Column H**: Format → Number → Date

### Conditional Formatting

**Status column (G2:G100)** — **Format → Conditional formatting**:
- Rule 1: Text is exactly `Active` → Background `#d9ead3` (light green)
- Rule 2: Text is exactly `Paused` → Background `#fff2cc` (light yellow)
- Rule 3: Text is exactly `Ended` → Background `#f4cccc` (light red)

---

## Tab 2: Sessions

### Column Layout

| Column | Header (Row 1) | Width |
|--------|----------------|-------|
| A | Date | 120px |
| B | Client | 180px |
| C | Duration (min) | 120px |
| D | Type | 120px |

### Row 1 Formatting
- **Bold** all headers
- Background: `#6aa84f` (green)
- Text color: **white**
- Freeze Row 1

### Data Validation

**Column B (Client)** — Select `B2:B500`:
- Criteria: **Dropdown (from a range)**
- Range: `Clients!A2:A100`

**Column D (Type)** — Select `D2:D500`:
- Criteria: **Dropdown (from a list of items)**
- Items: `Paid, Free, Pro Bono`

### Column Formatting
- **Column A**: Format → Number → Date
- **Column C**: Format → Number → Number (0 decimal places)

### Default Value Note
When logging sessions, default Duration to **60** unless the session was shorter/longer.

---

## Tab 3: Payments

### Column Layout

| Column | Header (Row 1) | Width |
|--------|----------------|-------|
| A | Date | 120px |
| B | Client | 180px |
| C | Amount ($) | 120px |
| D | Month Covered | 120px |
| E | Method | 140px |

### Row 1 Formatting
- **Bold** all headers
- Background: `#e69138` (orange)
- Text color: **white**
- Freeze Row 1

### Data Validation

**Column B (Client)** — Select `B2:B500`:
- Criteria: **Dropdown (from a range)**
- Range: `Clients!A2:A100`

**Column E (Method)** — Select `E2:E500`:
- Criteria: **Dropdown (from a list of items)**
- Items: `Bank Transfer, Card, Crypto, Cash`

### Column Formatting
- **Column A**: Format → Number → Date
- **Column C**: Format → Number → Currency (USD)
- **Column D**: Plain text — enter as `Jan 2026`, `Feb 2026`, etc.

---

## Tab 4: Dashboard

This tab is **fully auto-calculated**. No manual entry needed.

### Section 1: Per-Client Summary (starts at Row 1)

#### Headers (Row 1)

| Column | Header |
|--------|--------|
| A | Client |
| B | Status |
| C | Monthly Rate |
| D | Total Sessions |
| E | Total Hours |
| F | Total Paid |
| G | Total Expected |
| H | Balance |
| I | Last Session |
| J | Last Payment |

#### Row 1 Formatting
- **Bold** all headers
- Background: `#674ea7` (purple)
- Text color: **white**
- Freeze Row 1

#### Formulas (Row 2) — Enter in each cell, then drag down to Row 30

**A2 (Client):**
```
=IF(Clients!A2="", "", Clients!A2)
```

**B2 (Status):**
```
=IF(A2="", "", Clients!G2)
```

**C2 (Monthly Rate):**
```
=IF(A2="", "", Clients!E2)
```

**D2 (Total Sessions):**
```
=IF(A2="", "", COUNTIF(Sessions!B:B, A2))
```

**E2 (Total Hours):**
```
=IF(A2="", "", SUMIF(Sessions!B:B, A2, Sessions!C:C) / 60)
```

**F2 (Total Paid):**
```
=IF(A2="", "", SUMIF(Payments!B:B, A2, Payments!C:C))
```

**G2 (Total Expected):**
```
=IF(A2="", "", IF(B2="Ended", C2 * MAX(1, DATEDIF(Clients!F2, Clients!H2, "M")), C2 * MAX(1, DATEDIF(Clients!F2, TODAY(), "M"))))
```

**H2 (Balance):**
```
=IF(A2="", "", F2 - G2)
```

**I2 (Last Session):**
```
=IF(A2="", "", IFERROR(MAXIFS(Sessions!A:A, Sessions!B:B, A2), "—"))
```

**J2 (Last Payment):**
```
=IF(A2="", "", IFERROR(MAXIFS(Payments!A:A, Payments!B:B, A2), "—"))
```

#### Column Formatting
- **Column C**: Currency (USD)
- **Column E**: Number, 1 decimal place
- **Column F**: Currency (USD)
- **Column G**: Currency (USD)
- **Column H**: Currency (USD)
- **Column I**: Date
- **Column J**: Date

#### Conditional Formatting on Balance (H2:H30)

**Format → Conditional formatting**, apply to range `H2:H30`:
- Rule 1: **Custom formula** `=H2<0` → Background `#f4cccc` (light red), text `#cc0000` (dark red)
- Rule 2: **Custom formula** `=H2>=0` → Background `#d9ead3` (light green), text `#38761d` (dark green)

---

### Section 2: ICF Tracker (starts at Row 33)

Leave Row 32 empty as a spacer.

#### Layout

| Cell | Content |
|------|---------|
| A33 | **ICF CREDENTIAL TRACKER** (bold, merge A33:C33, background `#351c75` dark purple, white text, font size 12) |

| Cell | Label | Cell | Formula |
|------|-------|------|---------|
| A35 | Total Paid Coaching Hours | B35 | `=SUMPRODUCT((Sessions!D2:D500="Paid") * Sessions!C2:C500) / 60` |
| A36 | Total Pro Bono Hours | B36 | `=SUMPRODUCT((Sessions!D2:D500="Pro Bono") * Sessions!C2:C500) / 60` |
| A37 | Total Coaching Hours (All) | B37 | `=B35 + B36` |
| A38 | Total Clients Coached | B38 | `=COUNTA(UNIQUE(FILTER(Sessions!B2:B500, Sessions!D2:D500="Paid", Sessions!B2:B500<>"")))` |
| A39 | | | |
| A40 | ACC Progress (100 hrs) | B40 | `=MIN(B35 / 100, 1)` |
| A41 | PCC Progress (500 hrs) | B41 | `=MIN(B35 / 500, 1)` |

#### Formatting
- **A35:A41**: Bold labels
- **B35:B37**: Number, 1 decimal place, append " hrs" (use custom format `0.0" hrs"`)
- **B38**: Number, 0 decimal places
- **B40:B41**: Format → Number → Percent (0 decimal places)

#### Conditional Formatting on Progress (B40:B41)
- `=B40>=1` → Background `#d9ead3` (light green) — credential threshold met
- `=B40<1` → Background `#fff2cc` (light yellow) — in progress

---

### Section 3: Business Summary (starts at Row 44)

Leave Row 43 empty as a spacer.

#### Layout

| Cell | Content |
|------|---------|
| A44 | **BUSINESS SUMMARY** (bold, merge A44:C44, background `#351c75` dark purple, white text, font size 12) |

| Cell | Label | Cell | Formula |
|------|-------|------|---------|
| A46 | Active Clients | B46 | `=COUNTIF(Clients!G2:G100, "Active")` |
| A47 | Current MRR | B47 | `=SUMPRODUCT((Clients!G2:G100="Active") * Clients!E2:E100)` |
| A48 | Total Revenue (All Time) | B48 | `=SUM(Payments!C2:C500)` |
| A49 | Avg Revenue Per Client | B49 | `=IFERROR(B48 / COUNTA(Clients!A2:A100), 0)` |

#### Formatting
- **A46:A49**: Bold labels
- **B46**: Number, 0 decimal places
- **B47:B49**: Currency (USD)

---

## Verification Checklist

After building the sheet, test with this sample data:

### 1. Add a Test Client (Clients tab)
| Name | Email | Telegram | Tier | Start Date | Status | Source |
|------|-------|----------|------|------------|--------|--------|
| Jane Doe | jane@example.com | @janedoe | $250 | 01/01/2026 | Active | Twitter |

**Verify:** Monthly Rate auto-fills to `$250.00`

### 2. Log a Session (Sessions tab)
| Date | Client | Duration (min) | Type |
|------|--------|-----------------|------|
| 01/15/2026 | Jane Doe | 60 | Paid |

**Verify:** Client dropdown shows "Jane Doe"

### 3. Log a Payment (Payments tab)
| Date | Client | Amount ($) | Month Covered | Method |
|------|--------|------------|---------------|--------|
| 01/05/2026 | Jane Doe | 250 | Jan 2026 | Bank Transfer |

**Verify:** Client dropdown shows "Jane Doe"

### 4. Check Dashboard
- **Per-Client Summary** should show:
  - Jane Doe | Active | $250 | 1 session | 1.0 hrs | $250 paid | Balance $0 or near $0
- **ICF Tracker** should show:
  - 1.0 paid coaching hours | ACC 1% | PCC 0%
- **Business Summary** should show:
  - 1 active client | $250 MRR | $250 total revenue

---

## Tips

- **Adding new clients:** Just fill in the next empty row on the Clients tab. Dashboard auto-updates.
- **Sorting:** You can sort any tab by any column without breaking formulas.
- **Filtering:** Use **Data → Create a filter** on Sessions/Payments tabs to filter by client or date range.
- **Monthly review:** Check the Dashboard Balance column — red rows need payment follow-up.
- **ICF audit:** The ICF Tracker section gives you everything needed for credential applications. Keep session logs consistent.
- **Backup:** Google Sheets auto-saves, but you can also **File → Download → .xlsx** for a local backup.
