function openMySSwithID() {
  const id = '1A-NnVd6u5BgkvNNhMGIEDffn_voa9grVWYrTjODuZOU';
  const ss = SpreadsheetApp.openById(id);

  const dataSheet = ss.getSheetByName("Data");
  const getLastRow = dataSheet.getLastRow();
  const getLastColumn = dataSheet.getLastColumn();
  
  console.log(dataSheet.getName());
  console.log(getLastRow);
  console.log(getLastColumn);
}
