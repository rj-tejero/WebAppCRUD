function shDataOnChange() { 
  var id = '1A-NnVd6u5BgkvNNhMGIEDffn_voa9grVWYrTjODuZOU';
  var ss = SpreadsheetApp.openById(id);
  var dataSheet = ss.getSheetByName("Data");
  var getLastRow = dataSheet.getLastRow();
  var getLastColumn = dataSheet.getLastColumn();
  if (getLastRow > 1) 
  {
    dataSheet.setFrozenRows(0);
    dataSheet.autoResizeColumns(1, getLastColumn);
    dataSheet.setFrozenRows(1);
    dataSheet.sort(9);
  }
}