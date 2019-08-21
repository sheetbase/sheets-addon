function jsonEditorSidebar() {
  return SpreadsheetApp.getUi().showSidebar(
    HtmlService
    .createHtmlOutputFromFile('JSONEditor')
    .setTitle('JSON Editor'),
  );
}

function htmlEditorSidebar() {
  return SpreadsheetApp.getUi().showSidebar(
    HtmlService
    .createHtmlOutputFromFile('HTMLEditor')
    .setTitle('HTML Editor'),
  );
}
function settingsDialog() {
  return SpreadsheetApp.getUi().showModalDialog(
    HtmlService
    .createHtmlOutputFromFile('Settings').setWidth(700).setHeight(500),
    'Project settings',
  );
}

function onOpen(e) {
  return SpreadsheetApp.getUi().createMenu('Sheetbase')
  .addItem('JSON Editor', 'jsonEditorSidebar')
  .addItem('HTML Editor', 'htmlEditorSidebar')
  .addSeparator()
  .addItem('Settings', 'settingsDialog')
  .addToUi();
}

function onInstall(e) {
  return onOpen(e);
}
