/**
 * Coaching CRM — Google Sheets Setup Script
 *
 * HOW TO USE:
 * 1. Open a NEW blank Google Sheet (sheets.new)
 * 2. Go to Extensions → Apps Script
 * 3. Delete any existing code, paste this entire file
 * 4. Click "Run" (▶) — select setupCRM when prompted
 * 5. Authorize when asked (it only accesses this spreadsheet)
 * 6. Wait ~15 seconds — done!
 *
 * Safe to re-run: it deletes old tabs and recreates them.
 */

function setupCRM() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.rename("Coaching CRM");

  // Delete existing tabs (safe to re-run)
  var tabNames = ["Sessions", "Payments", "Dashboard"];
  for (var t = 0; t < tabNames.length; t++) {
    var existing = ss.getSheetByName(tabNames[t]);
    if (existing) ss.deleteSheet(existing);
  }

  // Rename first sheet to Clients (or reuse if already named)
  var clientsSheet = ss.getSheets()[0];
  clientsSheet.setName("Clients");
  clientsSheet.clear();
  clientsSheet.clearConditionalFormatRules();

  var sessionsSheet = ss.insertSheet("Sessions");
  var paymentsSheet = ss.insertSheet("Payments");
  var dashboardSheet = ss.insertSheet("Dashboard");

  setupClients(clientsSheet);
  setupSessions(sessionsSheet);
  setupPayments(paymentsSheet);
  setupDashboard(dashboardSheet);

  clientsSheet.activate();
  SpreadsheetApp.flush();

  SpreadsheetApp.getUi().alert(
    "CRM Ready!",
    "4 tabs created: Clients, Sessions, Payments, Dashboard.\n\n" +
    "Start by adding a client in the Clients tab.",
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}

// ─────────────────────────────────────────────
// Tab 1: Clients
// ─────────────────────────────────────────────
function setupClients(sheet) {
  var headers = [
    ["Name", "Email", "Telegram", "Tier", "Monthly Rate", "Start Date", "Status", "End Date", "Source"]
  ];
  var widths = [180, 220, 140, 120, 120, 120, 100, 120, 150];

  sheet.getRange(1, 1, 1, 9).setValues(headers);
  formatHeader(sheet, 9, "#4a86c8");
  setWidths(sheet, widths);

  // Tier dropdown
  sheet.getRange("D2:D100")
    .setDataValidation(SpreadsheetApp.newDataValidation()
      .requireValueInList(["$150", "$250", "$450", "$700"], true)
      .setAllowInvalid(false).build());

  // Status dropdown
  sheet.getRange("G2:G100")
    .setDataValidation(SpreadsheetApp.newDataValidation()
      .requireValueInList(["Active", "Paused", "Ended"], true)
      .setAllowInvalid(false).build());

  // Monthly Rate = plain number, user types it
  sheet.getRange("E2:E100").setNumberFormat("$#,##0");
  sheet.getRange("F2:F100").setNumberFormat("yyyy-MM-dd");
  sheet.getRange("H2:H100").setNumberFormat("yyyy-MM-dd");

  // Status colors
  var r = sheet.getRange("G2:G100");
  sheet.setConditionalFormatRules([
    SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("Active").setBackground("#d9ead3").setRanges([r]).build(),
    SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("Paused").setBackground("#fff2cc").setRanges([r]).build(),
    SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("Ended").setBackground("#f4cccc").setRanges([r]).build()
  ]);

  sheet.setFrozenRows(1);
}

// ─────────────────────────────────────────────
// Tab 2: Sessions
// ─────────────────────────────────────────────
function setupSessions(sheet) {
  sheet.getRange(1, 1, 1, 4).setValues([["Date", "Client", "Duration (min)", "Type"]]);
  formatHeader(sheet, 4, "#6aa84f");
  setWidths(sheet, [120, 180, 130, 120]);

  // Client dropdown linked to Clients tab
  sheet.getRange("B2:B500")
    .setDataValidation(SpreadsheetApp.newDataValidation()
      .requireValueInRange(
        SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Clients").getRange("A2:A100"), true)
      .setAllowInvalid(false).build());

  // Type dropdown
  sheet.getRange("D2:D500")
    .setDataValidation(SpreadsheetApp.newDataValidation()
      .requireValueInList(["Paid", "Free", "Pro Bono"], true)
      .setAllowInvalid(false).build());

  sheet.getRange("A2:A500").setNumberFormat("yyyy-MM-dd");
  sheet.getRange("C2:C500").setNumberFormat("0");
  sheet.setFrozenRows(1);
}

// ─────────────────────────────────────────────
// Tab 3: Payments
// ─────────────────────────────────────────────
function setupPayments(sheet) {
  sheet.getRange(1, 1, 1, 5).setValues([["Date", "Client", "Amount ($)", "Month Covered", "Method"]]);
  formatHeader(sheet, 5, "#e69138");
  setWidths(sheet, [120, 180, 120, 130, 140]);

  // Client dropdown
  sheet.getRange("B2:B500")
    .setDataValidation(SpreadsheetApp.newDataValidation()
      .requireValueInRange(
        SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Clients").getRange("A2:A100"), true)
      .setAllowInvalid(false).build());

  // Method dropdown
  sheet.getRange("E2:E500")
    .setDataValidation(SpreadsheetApp.newDataValidation()
      .requireValueInList(["Bank Transfer", "Card", "Crypto", "Cash"], true)
      .setAllowInvalid(false).build());

  sheet.getRange("A2:A500").setNumberFormat("yyyy-MM-dd");
  sheet.getRange("C2:C500").setNumberFormat("$#,##0.00");
  sheet.setFrozenRows(1);
}

// ─────────────────────────────────────────────
// Tab 4: Dashboard
// ─────────────────────────────────────────────
function setupDashboard(sheet) {
  var headers = [
    "Client", "Status", "Monthly Rate", "Total Sessions", "Total Hours",
    "Total Paid", "Total Expected", "Balance", "Last Session", "Last Payment"
  ];
  sheet.getRange(1, 1, 1, 10).setValues([headers]);
  formatHeader(sheet, 10, "#674ea7");
  setWidths(sheet, [180, 100, 120, 120, 110, 120, 130, 120, 120, 120]);

  // ── Per-Client formulas: set row 2, then copy down ──
  // Using individual setFormula() calls — most reliable across all locales

  // A2: Client name
  sheet.getRange("A2").setFormula('=IFERROR(IF(Clients!A2="","",Clients!A2),"")');
  // B2: Status
  sheet.getRange("B2").setFormula('=IFERROR(IF(A2="","",Clients!G2),"")');
  // C2: Monthly Rate
  sheet.getRange("C2").setFormula('=IFERROR(IF(A2="","",Clients!E2),"")');
  // D2: Total Sessions
  sheet.getRange("D2").setFormula('=IFERROR(IF(A2="","",COUNTIF(Sessions!B:B,A2)),"")');
  // E2: Total Hours
  sheet.getRange("E2").setFormula('=IFERROR(IF(A2="","",SUMIF(Sessions!B:B,A2,Sessions!C:C)/60),"")');
  // F2: Total Paid
  sheet.getRange("F2").setFormula('=IFERROR(IF(A2="","",SUMIF(Payments!B:B,A2,Payments!C:C)),"")');
  // G2: Total Expected = rate × months since start
  sheet.getRange("G2").setFormula('=IFERROR(IF(OR(A2="",C2="",Clients!F2=""),"",IF(B2="Ended",C2*MAX(1,DATEDIF(Clients!F2,Clients!H2,"M")),C2*MAX(1,DATEDIF(Clients!F2,TODAY(),"M")))),"")');
  // H2: Balance = paid - expected
  sheet.getRange("H2").setFormula('=IFERROR(IF(A2="","",F2-G2),"")');
  // I2: Last Session
  sheet.getRange("I2").setFormula('=IFERROR(IF(A2="","",MAXIFS(Sessions!A:A,Sessions!B:B,A2)),"")');
  // J2: Last Payment
  sheet.getRange("J2").setFormula('=IFERROR(IF(A2="","",MAXIFS(Payments!A:A,Payments!B:B,A2)),"")');

  // Copy row 2 formulas down to row 30 (handles relative refs automatically)
  sheet.getRange("A2:J2").copyTo(sheet.getRange("A3:J30"));

  // Formatting
  sheet.getRange("C2:C30").setNumberFormat("$#,##0");
  sheet.getRange("E2:E30").setNumberFormat("0.0");
  sheet.getRange("F2:F30").setNumberFormat("$#,##0");
  sheet.getRange("G2:G30").setNumberFormat("$#,##0");
  sheet.getRange("H2:H30").setNumberFormat("$#,##0");
  sheet.getRange("I2:I30").setNumberFormat("yyyy-MM-dd");
  sheet.getRange("J2:J30").setNumberFormat("yyyy-MM-dd");

  // Balance: red if negative, green if zero or positive
  var bal = sheet.getRange("H2:H30");
  var rules = [
    SpreadsheetApp.newConditionalFormatRule().whenNumberLessThan(0).setBackground("#f4cccc").setFontColor("#cc0000").setRanges([bal]).build(),
    SpreadsheetApp.newConditionalFormatRule().whenNumberGreaterThanOrEqualTo(0).setBackground("#d9ead3").setFontColor("#38761d").setRanges([bal]).build()
  ];
  sheet.setConditionalFormatRules(rules);

  // ── ICF Credential Tracker ──
  sheet.getRange("A33").setValue("ICF CREDENTIAL TRACKER");
  sheet.getRange("A33:C33").merge();
  sheet.getRange("A33").setBackground("#351c75").setFontColor("white").setFontSize(12).setFontWeight("bold");

  sheet.getRange("A35").setValue("Total Paid Coaching Hours");
  sheet.getRange("B35").setFormula('=IFERROR(SUMPRODUCT(--(Sessions!D2:D500="Paid"),Sessions!C2:C500)/60,0)');
  sheet.getRange("B35").setNumberFormat('0.0" hrs"');

  sheet.getRange("A36").setValue("Total Pro Bono Hours");
  sheet.getRange("B36").setFormula('=IFERROR(SUMPRODUCT(--(Sessions!D2:D500="Pro Bono"),Sessions!C2:C500)/60,0)');
  sheet.getRange("B36").setNumberFormat('0.0" hrs"');

  sheet.getRange("A37").setValue("Total Coaching Hours (All)");
  sheet.getRange("B37").setFormula("=B35+B36");
  sheet.getRange("B37").setNumberFormat('0.0" hrs"');

  sheet.getRange("A38").setValue("Total Clients Coached");
  sheet.getRange("B38").setFormula('=IFERROR(COUNTA(UNIQUE(FILTER(Sessions!B2:B500,Sessions!D2:D500="Paid",Sessions!B2:B500<>""))),0)');
  sheet.getRange("B38").setNumberFormat("0");

  sheet.getRange("A40").setValue("ACC Progress (100 hrs)");
  sheet.getRange("B40").setFormula("=IFERROR(MIN(B35/100,1),0)");
  sheet.getRange("B40").setNumberFormat("0%");

  sheet.getRange("A41").setValue("PCC Progress (500 hrs)");
  sheet.getRange("B41").setFormula("=IFERROR(MIN(B35/500,1),0)");
  sheet.getRange("B41").setNumberFormat("0%");

  sheet.getRange("A35:A41").setFontWeight("bold");

  // Progress colors
  var prog = sheet.getRange("B40:B41");
  var allRules = sheet.getConditionalFormatRules();
  allRules.push(SpreadsheetApp.newConditionalFormatRule().whenNumberGreaterThanOrEqualTo(1).setBackground("#d9ead3").setRanges([prog]).build());
  allRules.push(SpreadsheetApp.newConditionalFormatRule().whenNumberLessThan(1).setBackground("#fff2cc").setRanges([prog]).build());
  sheet.setConditionalFormatRules(allRules);

  // ── Business Summary ──
  sheet.getRange("A44").setValue("BUSINESS SUMMARY");
  sheet.getRange("A44:C44").merge();
  sheet.getRange("A44").setBackground("#351c75").setFontColor("white").setFontSize(12).setFontWeight("bold");

  sheet.getRange("A46").setValue("Active Clients");
  sheet.getRange("B46").setFormula('=COUNTIF(Clients!G2:G100,"Active")');
  sheet.getRange("B46").setNumberFormat("0");

  sheet.getRange("A47").setValue("Current MRR");
  sheet.getRange("B47").setFormula('=IFERROR(SUMPRODUCT(--(Clients!G2:G100="Active"),Clients!E2:E100),0)');
  sheet.getRange("B47").setNumberFormat("$#,##0");

  sheet.getRange("A48").setValue("Total Revenue (All Time)");
  sheet.getRange("B48").setFormula("=SUM(Payments!C2:C500)");
  sheet.getRange("B48").setNumberFormat("$#,##0");

  sheet.getRange("A49").setValue("Avg Revenue Per Client");
  sheet.getRange("B49").setFormula("=IFERROR(B48/COUNTA(Clients!A2:A100),0)");
  sheet.getRange("B49").setNumberFormat("$#,##0");

  sheet.getRange("A46:A49").setFontWeight("bold");
  sheet.setFrozenRows(1);
}

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────
function formatHeader(sheet, numCols, bgColor) {
  var r = sheet.getRange(1, 1, 1, numCols);
  r.setFontWeight("bold");
  r.setBackground(bgColor);
  r.setFontColor("white");
  r.setFontSize(10);
}

function setWidths(sheet, widths) {
  for (var i = 0; i < widths.length; i++) {
    sheet.setColumnWidth(i + 1, widths[i]);
  }
}
