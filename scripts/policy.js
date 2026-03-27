function initPolicy(){
    checkLocalStorage();
    let objData = prepareLanguage();
    onFocusLanguageDesign(objData.language, objData.languageSpan);
    loadPolicyLanguageData(languageID);
}

function loadPolicyLanguage(id, id_span){
    onFocusLanguageDesign(id, id_span);
    loadPolicyLanguageData(languageID);
}

function loadPolicyLanguageData(languageId){
    loadNavData(languageId);
    loadCaptionAndGlanceData(languageId);
}

function loadCaptionAndGlanceData(languageId){
    loadCaptionAndGlanceDataGerman(languageId);
    loadCaptionAndGlanceDataEnglish(languageId);
}

function loadCaptionAndGlanceDataGerman(languageId){
    if(languageId == 0){
        document.getElementById('policy_caption').innerHTML = policyData.de.captionAndGlance.caption;
        document.getElementById('glance_span').innerHTML = policyData.de.captionAndGlance.head;
        document.getElementById('glance_content').innerHTML = policyData.de.captionAndGlance.content;
    }
}

function loadCaptionAndGlanceDataEnglish(languageId){
    if(languageId == 1){
        document.getElementById('policy_caption').innerHTML = policyData.en.captionAndGlance.caption;
        document.getElementById('glance_span').innerHTML = policyData.en.captionAndGlance.head;
        document.getElementById('glance_content').innerHTML = policyData.en.captionAndGlance.content;
    }
}