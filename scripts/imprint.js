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

function scrollToTop(){
    window.scrollTo(0,0);
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
    loadTermsData(languageId);
    loadScopeData(languageId);
    loadRightsData(languageId);
    loadUseData(languageId);
    loadDisclaimData(languageId);
    loadIndemnityData(languageId);
}

function loadCaptionData(languageId){
    loadCaptionDataGerman(languageId);
    loadCaptionDataEnglish(languageId);
}

function loadCaptionDataGerman(languageId){
    if(languageId == 0){
        document.getElementById('imprint_caption').innerHTML = imprintData.de.caption.imprintHead;
        document.getElementById('list_caption').innerHTML = imprintData.de.caption.imprintLine;
        document.getElementById('contact_span').innerHTML = imprintData.de.contact;
    }
}

function loadCaptionDataEnglish(languageId){
    if(languageId == 1){
        document.getElementById('imprint_caption').innerHTML = imprintData.en.caption.imprintHead;
        document.getElementById('list_caption').innerHTML = imprintData.en.caption.imprintLine;
        document.getElementById('contact_span').innerHTML = imprintData.en.contact;
    }
}

function loadTermsData(languageId){
    loadTermsDataGerman(languageId);
    loadTermsDataEnglish(languageId);
}

function loadTermsDataGerman(languageId){
    if(languageId == 0){
        document.getElementById('terms_span').innerHTML = imprintData.de.terms.head;
        document.getElementById('terms_content').innerHTML = imprintData.de.terms.content;
    }
}

function loadTermsDataEnglish(languageId){
    if(languageId == 1){
        document.getElementById('terms_span').innerHTML = imprintData.en.terms.head;
        document.getElementById('terms_content').innerHTML = imprintData.en.terms.content;
    }
}

function loadScopeData(languageId){
    loadScopeDataGerman(languageId);
    loadScopeDataEnglish(languageId);
}

function loadScopeDataGerman(languageId){
    if(languageId == 0){
        document.getElementById('scope_span').innerHTML = imprintData.de.scope.head;
        document.getElementById('scope_content').innerHTML = imprintData.de.scope.content;
    }
}

function loadScopeDataEnglish(languageId){
    if(languageId == 1){
        document.getElementById('scope_span').innerHTML = imprintData.en.scope.head;
        document.getElementById('scope_content').innerHTML = imprintData.en.scope.content;
    }
}

function loadRightsData(languageId){
    loadRightsDataGerman(languageId);
    loadRightsDataEnglish(languageId);
}

function loadRightsDataGerman(languageId){
    if(languageId == 0){
        document.getElementById('rights_span').innerHTML = imprintData.de.rights.head;
        document.getElementById('rights_content').innerHTML = imprintData.de.rights.content;
    }
}

function loadRightsDataEnglish(languageId){
    if(languageId == 1){
        document.getElementById('rights_span').innerHTML = imprintData.en.rights.head;
        document.getElementById('rights_content').innerHTML = imprintData.en.rights.content;
    }
}

function loadUseData(languageId){
    loadUseDataGerman(languageId);
    loadUseDataEnglish(languageId);
}

function loadUseDataGerman(languageId){
    if(languageId == 0){
        document.getElementById('use_span').innerHTML = imprintData.de.use.head;
        document.getElementById('use_content').innerHTML = imprintData.de.use.content;
    }
}

function loadUseDataEnglish(languageId){
    if(languageId == 1){
        document.getElementById('use_span').innerHTML = imprintData.en.use.head;
        document.getElementById('use_content').innerHTML = imprintData.en.use.content;
    }
}

function loadDisclaimData(languageId){
    loadDisclaimDataGerman(languageId);
    loadDisclaimDataEnglish(languageId);
}

function loadDisclaimDataGerman(languageId){
    if(languageId == 0){
        document.getElementById('disclaim_span').innerHTML = imprintData.de.disclaim.head;
        document.getElementById('disclaim_content').innerHTML = imprintData.de.disclaim.content;
    }
}

function loadDisclaimDataEnglish(languageId){
    if(languageId == 1){
        document.getElementById('disclaim_span').innerHTML = imprintData.en.disclaim.head;
        document.getElementById('disclaim_content').innerHTML = imprintData.en.disclaim.content;
    }
}

function loadIndemnityData(languageId){
    loadIndemnityDataGerman(languageId);
    loadIndemnityDataEnglish(languageId);
}

function loadIndemnityDataGerman(languageId){
    if(languageId == 0){
        document.getElementById('indemnity_span').innerHTML = imprintData.de.indemnity.head;
        document.getElementById('indemnity_content').innerHTML = imprintData.de.indemnity.content;
    }
}

function loadIndemnityDataEnglish(languageId){
    if(languageId == 1){
        document.getElementById('indemnity_span').innerHTML = imprintData.en.indemnity.head;
        document.getElementById('indemnity_content').innerHTML = imprintData.en.indemnity.content;
    }
}