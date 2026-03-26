function initImprint(){
    checkLocalStorage();
    let objData = prepareLanguage();
    onFocusLanguageDesign(objData.language, objData.languageSpan);
    loadImprintLanguageData(languageID);
}

function prepareLanguage(){
    let objData = {
        "language" : "",
        "languageSpan" : ""
    };
    if(languageID == 0){
        objData.language = 'german';
        objData.languageSpan = 'german_span';
    }else{
        objData.language = 'english';
        objData.languageSpan = 'english_span';
    }
    return objData;
}

function loadImprintLanguage(id, id_span){
    onFocusLanguageDesign(id, id_span);
    loadImprintLanguageData(languageID);
}

function goToHeroPage(){
    window.location.href = '../index.html#hero_section';
}

function goToContactSection(){
    window.location.href = '../index.html#my_contact_section';
}

function githubImprintFooterAction(){
    changeIcon('github_footer_mobile', '../assets/icons/mobile/footer_github_mobile_active.svg');
    setTimeout(() => {
        changeIcon('github_footer_mobile', '../assets/icons/mobile/footer_github_mobile.svg');
    }, 800);
    openWebsite('https://github.com/XbatzoX');
}

function loadImprintLanguageData(languageId){
    loadNavData(languageId);
    loadCaptionData(languageId);

}

function loadCaptionData(languageId){
    loadCaptionDataGerman(languageId);
    loadCaptionDataEnglish(languageId);
}

function loadCaptionDataGerman(languageId){
    if(languageId == 0){
        document.getElementById('imprint_caption').innerHTML = imprintData.de.caption.imprintHead;
        document.getElementById('list_caption').innerHTML = imprintData.de.caption.imprintLine;
    }
}

function loadCaptionDataEnglish(languageId){
    if(languageId == 1){
        document.getElementById('imprint_caption').innerHTML = imprintData.en.caption.imprintHead;
        document.getElementById('list_caption').innerHTML = imprintData.en.caption.imprintLine;
    }
}