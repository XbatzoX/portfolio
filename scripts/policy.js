function initPolicy(){
    checkLocalStorage();
    let objData = prepareLanguage();
    onFocusLanguageDesign(objData.language, objData.languageSpan);
    // loadImprintLanguageData(languageID);
}