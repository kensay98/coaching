/**
 * Recreate Dashboard — simplified balance model.
 * 1 payment = 4 sessions.
 * Balance = (total paid / monthly rate × 4) − sessions done.
 *
 * Run: recreateDashboard
 */
function recreateDashboard() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  var old = ss.getSheetByName("Dashboard");
  if (old) ss.deleteSheet(old);

  var sheet = ss.insertSheet("Dashboard");

  // ── Per-Client Summary ──
  var headers = [
    "Client", "Status", "Rate", "Sessions Done",
    "Sessions Paid For", "Balance", "Total Paid",
    "Last Session", "Last Payment"
  ];
  sheet.getRange(1, 1, 1, 9).setValues([headers]);
  sheet.getRange(1, 1, 1, 9).setFontWeight("bold").setBackground("#674ea7").setFontColor("white").setFontSize(10);
  var widths = [180, 90, 90, 120, 130, 90, 110, 120, 120];
  for (var w = 0; w < widths.length; w++) sheet.setColumnWidth(w + 1, widths[w]);

  // Row 2 formulas — semicolons for Russian locale
  // A: Client
  sheet.getRange("A2").setFormula('=IFERROR(IF(Clients!A2="";"";Clients!A2);"")');
  // B: Status
  sheet.getRange("B2").setFormula('=IFERROR(IF(A2="";"";Clients!G2);"")');
  // C: Monthly Rate
  sheet.getRange("C2").setFormula('=IFERROR(IF(A2="";"";Clients!E2);"")');
  // D: Sessions Done (count of sessions logged)
  sheet.getRange("D2").setFormula('=IFERROR(IF(A2="";"";COUNTIF(Sessions!B:B;A2));"")');
  // E: Sessions Paid For = (total paid / rate) × 4
  sheet.getRange("E2").setFormula('=IFERROR(IF(OR(A2="";C2="";C2=0);"";SUMIF(Payments!B:B;A2;Payments!C:C)/C2*4);"")');
  // F: Balance = sessions paid for − sessions done (positive = has sessions left, negative = owes)
  sheet.getRange("F2").setFormula('=IFERROR(IF(A2="";"";E2-D2);"")');
  // G: Total Paid
  sheet.getRange("G2").setFormula('=IFERROR(IF(A2="";"";SUMIF(Payments!B:B;A2;Payments!C:C));"")');
  // H: Last Session
  sheet.getRange("H2").setFormula('=IFERROR(IF(A2="";"";MAXIFS(Sessions!A:A;Sessions!B:B;A2));"")');
  // I: Last Payment
  sheet.getRange("I2").setFormula('=IFERROR(IF(A2="";"";MAXIFS(Payments!A:A;Payments!B:B;A2));"")');

  // Copy row 2 → rows 3-30
  sheet.getRange("A2:I2").copyTo(sheet.getRange("A3:I30"));

  // Formatting
  sheet.getRange("C2:C30").setNumberFormat("$#,##0");
  sheet.getRange("D2:D30").setNumberFormat("0");
  sheet.getRange("E2:E30").setNumberFormat("0");
  sheet.getRange("F2:F30").setNumberFormat("0");
  sheet.getRange("G2:G30").setNumberFormat("$#,##0");
  sheet.getRange("H2:H30").setNumberFormat("yyyy-MM-dd");
  sheet.getRange("I2:I30").setNumberFormat("yyyy-MM-dd");

  // Balance colors: red if owes sessions, green if has sessions left
  var bal = sheet.getRange("F2:F30");
  sheet.setConditionalFormatRules([
    SpreadsheetApp.newConditionalFormatRule().whenNumberLessThan(0).setBackground("#f4cccc").setFontColor("#cc0000").setRanges([bal]).build(),
    SpreadsheetApp.newConditionalFormatRule().whenNumberGreaterThanOrEqualTo(0).setBackground("#d9ead3").setFontColor("#38761d").setRanges([bal]).build()
  ]);

  // ── ICF Tracker ──
  sheet.getRange("A33").setValue("ICF CREDENTIAL TRACKER");
  sheet.getRange("A33:C33").merge();
  sheet.getRange("A33").setBackground("#351c75").setFontColor("white").setFontSize(12).setFontWeight("bold");

  sheet.getRange("A35").setValue("Total Paid Coaching Hours");
  sheet.getRange("B35").setFormula('=IFERROR(SUMPRODUCT(--(Sessions!D2:D500="Paid");Sessions!C2:C500)/60;0)');
  sheet.getRange("B35").setNumberFormat('0.0" hrs"');

  sheet.getRange("A36").setValue("Total Pro Bono Hours");
  sheet.getRange("B36").setFormula('=IFERROR(SUMPRODUCT(--(Sessions!D2:D500="Pro Bono");Sessions!C2:C500)/60;0)');
  sheet.getRange("B36").setNumberFormat('0.0" hrs"');

  sheet.getRange("A37").setValue("Total Coaching Hours (All)");
  sheet.getRange("B37").setFormula("=B35+B36");
  sheet.getRange("B37").setNumberFormat('0.0" hrs"');

  sheet.getRange("A38").setValue("Total Clients Coached");
  sheet.getRange("B38").setFormula('=IFERROR(COUNTA(UNIQUE(FILTER(Sessions!B2:B500;Sessions!D2:D500="Paid";Sessions!B2:B500<>"")));0)');
  sheet.getRange("B38").setNumberFormat("0");

  sheet.getRange("A40").setValue("ACC Progress (100 hrs)");
  sheet.getRange("B40").setFormula("=IFERROR(MIN(B35/100;1);0)");
  sheet.getRange("B40").setNumberFormat("0%");

  sheet.getRange("A41").setValue("PCC Progress (500 hrs)");
  sheet.getRange("B41").setFormula("=IFERROR(MIN(B35/500;1);0)");
  sheet.getRange("B41").setNumberFormat("0%");

  sheet.getRange("A35:A41").setFontWeight("bold");

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
  sheet.getRange("B46").setFormula('=COUNTIF(Clients!G2:G100;"Active")');
  sheet.getRange("B46").setNumberFormat("0");

  sheet.getRange("A47").setValue("Current MRR");
  sheet.getRange("B47").setFormula('=IFERROR(SUMPRODUCT(--(Clients!G2:G100="Active");Clients!E2:E100);0)');
  sheet.getRange("B47").setNumberFormat("$#,##0");

  sheet.getRange("A48").setValue("Total Revenue (All Time)");
  sheet.getRange("B48").setFormula("=SUM(Payments!C2:C500)");
  sheet.getRange("B48").setNumberFormat("$#,##0");

  sheet.getRange("A49").setValue("Avg Revenue Per Client");
  sheet.getRange("B49").setFormula("=IFERROR(B48/COUNTA(Clients!A2:A100);0)");
  sheet.getRange("B49").setNumberFormat("$#,##0");

  sheet.getRange("A46:A49").setFontWeight("bold");
  sheet.setFrozenRows(1);

  SpreadsheetApp.flush();
  SpreadsheetApp.getUi().alert("Dashboard recreated!");
}
