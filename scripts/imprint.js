/**This function is used to intialize imrint page on load**/
function initImprint(){
    checkLocalStorage();
    let objData = prepareLanguage();
    onFocusLanguageDesign(objData.language, objData.languageSpan);
    loadImprintLanguageData(languageID);
}

/**
 * This function prepares language data from int to string
 * @returns - an object with two strings
 */
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

/*** This function is used to scroll to top of page*/
function scrollToTop(){
    window.scrollTo(0,0);
}

/**
 * This function loads the iprint data in the correct language if language button is clicked
 * @param {string} id -includes id of language button container 
 * @param {*} id_span - includes id of language button text
 */
function loadImprintLanguage(id, id_span){
    onFocusLanguageDesign(id, id_span);
    loadImprintLanguageData(languageID);
}

/*** This function loads the hero page of index.html*/
function goToHeroPage(){
    window.location.href = '../index.html#hero_section';
}

/*** This function scroll to contact section of index.html*/
function goToContactSection(){
    window.location.href = '../index.html#my_contact_section';
}

/*** This function changes the icon after click action on github button*/
function githubImprintFooterAction(){
    changeIcon('github_footer_mobile', '../assets/icons/mobile/footer_github_mobile_active.svg');
    setTimeout(() => {
        changeIcon('github_footer_mobile', '../assets/icons/mobile/footer_github_mobile.svg');
    }, 800);
    openWebsite('https://github.com/XbatzoX');
}

/**
 * This function loads all data of imprint page in the correct language
 * @param {number} languageId - includes the number of language ID 
 */
function loadImprintLanguageData(languageId){
    loadNavData(languageId);
    loadCaptionData(languageId);
    loadTermsData(languageId);
    loadScopeData(languageId);
    loadRightsData(languageId);
    loadUseData(languageId);
    loadDisclaimData(languageId);
    loadIndemnityData(languageId);
    loadImprintFooterData(languageId);
}

/**
 * This function load the caption data
 * @param {number} languageId - includes the number of language ID  
 */
function loadCaptionData(languageId){
    loadCaptionDataGerman(languageId);
    loadCaptionDataEnglish(languageId);
}

/**
 * This function loads caption data in german
 * @param {number} languageId - includes the number of language ID 
 */
function loadCaptionDataGerman(languageId){
    if(languageId == 0){
        document.getElementById('imprint_caption').innerHTML = imprintData.de.caption.imprintHead;
        document.getElementById('list_caption').innerHTML = imprintData.de.caption.imprintLine;
        document.getElementById('contact_span').innerHTML = imprintData.de.contact;
    }
}

/**
 * This function loads caption data in english
 * @param {number} languageId - includes the number of language ID  
 */
function loadCaptionDataEnglish(languageId){
    if(languageId == 1){
        document.getElementById('imprint_caption').innerHTML = imprintData.en.caption.imprintHead;
        document.getElementById('list_caption').innerHTML = imprintData.en.caption.imprintLine;
        document.getElementById('contact_span').innerHTML = imprintData.en.contact;
    }
}

/**
 * This function loads the terms data in the correct language
 * @param {number} languageId - includes the number of language ID  
 */
function loadTermsData(languageId){
    loadTermsDataGerman(languageId);
    loadTermsDataEnglish(languageId);
}

/**
 * This function loads terms data in german
 * @param {number} languageId - includes the number of language ID  
 */
function loadTermsDataGerman(languageId){
    if(languageId == 0){
        document.getElementById('terms_span').innerHTML = imprintData.de.terms.head;
        document.getElementById('terms_content').innerHTML = imprintData.de.terms.content;
    }
}

/**
 * This function loads terms data in english
 * @param {number} languageId - includes the number of language ID  
 */
function loadTermsDataEnglish(languageId){
    if(languageId == 1){
        document.getElementById('terms_span').innerHTML = imprintData.en.terms.head;
        document.getElementById('terms_content').innerHTML = imprintData.en.terms.content;
    }
}

/**
 * This function loads the scope data in correct language
 * @param {number} languageId - includes the number of language ID  
 */
function loadScopeData(languageId){
    loadScopeDataGerman(languageId);
    loadScopeDataEnglish(languageId);
}

/**
 * This function loads the scope dat in german
 * @param {number} languageId - includes the number of language ID  
 */
function loadScopeDataGerman(languageId){
    if(languageId == 0){
        document.getElementById('scope_span').innerHTML = imprintData.de.scope.head;
        document.getElementById('scope_content').innerHTML = imprintData.de.scope.content;
    }
}

/**
 * This function loads the scope data in english
 * @param {number} languageId - includes the number of language ID  
 */
function loadScopeDataEnglish(languageId){
    if(languageId == 1){
        document.getElementById('scope_span').innerHTML = imprintData.en.scope.head;
        document.getElementById('scope_content').innerHTML = imprintData.en.scope.content;
    }
}

/**
 * This function loads the rights data in correct language
 * @param {number} languageId - includes the number of language ID  
 */
function loadRightsData(languageId){
    loadRightsDataGerman(languageId);
    loadRightsDataEnglish(languageId);
}

/**
 * This function loads the rights data in german
 * @param {number} languageId - includes the number of language ID  
 */
function loadRightsDataGerman(languageId){
    if(languageId == 0){
        document.getElementById('rights_span').innerHTML = imprintData.de.rights.head;
        document.getElementById('rights_content').innerHTML = imprintData.de.rights.content;
    }
}

/**
 * This function loads the rights data in english
 * @param {number} languageId - includes the number of language ID  
 */
function loadRightsDataEnglish(languageId){
    if(languageId == 1){
        document.getElementById('rights_span').innerHTML = imprintData.en.rights.head;
        document.getElementById('rights_content').innerHTML = imprintData.en.rights.content;
    }
}

/**
 * This function loads the use data in correct language
 * @param {number} languageId - includes the number of language ID  
 */
function loadUseData(languageId){
    loadUseDataGerman(languageId);
    loadUseDataEnglish(languageId);
}

/**
 * This function loads the use data in german
 * @param {number} languageId - includes the number of language ID  
 */
function loadUseDataGerman(languageId){
    if(languageId == 0){
        document.getElementById('use_span').innerHTML = imprintData.de.use.head;
        document.getElementById('use_content').innerHTML = imprintData.de.use.content;
    }
}

/**
 * This function loads the use data in english
 * @param {number} languageId - includes the number of language ID  
 */
function loadUseDataEnglish(languageId){
    if(languageId == 1){
        document.getElementById('use_span').innerHTML = imprintData.en.use.head;
        document.getElementById('use_content').innerHTML = imprintData.en.use.content;
    }
}

/**
 * This function loads the discliam dat in correct language
 * @param {number} languageId - includes the number of language ID  
 */
function loadDisclaimData(languageId){
    loadDisclaimDataGerman(languageId);
    loadDisclaimDataEnglish(languageId);
}

/**
 * This function loads disclaim data in german
 * @param {number} languageId - includes the number of language ID  
 */
function loadDisclaimDataGerman(languageId){
    if(languageId == 0){
        document.getElementById('disclaim_span').innerHTML = imprintData.de.disclaim.head;
        document.getElementById('disclaim_content').innerHTML = imprintData.de.disclaim.content;
    }
}

/**
 * This function loads disclaim data in english
 * @param {number} languageId - includes the number of language ID  
 */
function loadDisclaimDataEnglish(languageId){
    if(languageId == 1){
        document.getElementById('disclaim_span').innerHTML = imprintData.en.disclaim.head;
        document.getElementById('disclaim_content').innerHTML = imprintData.en.disclaim.content;
    }
}

/**
 * This function loads indemnity data in correct language
 * @param {number} languageId - includes the number of language ID  
 */
function loadIndemnityData(languageId){
    loadIndemnityDataGerman(languageId);
    loadIndemnityDataEnglish(languageId);
}

/**
 * This function loads indemnity data in german
 * @param {number} languageId - includes the number of language ID  
 */
function loadIndemnityDataGerman(languageId){
    if(languageId == 0){
        document.getElementById('indemnity_span').innerHTML = imprintData.de.indemnity.head;
        document.getElementById('indemnity_content').innerHTML = imprintData.de.indemnity.content;
    }
}

/**
 * This function loads indemnity data in english
 * @param {number} languageId - includes the number of language ID  
 */
function loadIndemnityDataEnglish(languageId){
    if(languageId == 1){
        document.getElementById('indemnity_span').innerHTML = imprintData.en.indemnity.head;
        document.getElementById('indemnity_content').innerHTML = imprintData.en.indemnity.content;
    }
}

/**
 * This function loads footer data in correct language
 * @param {number} languageId - includes the number of language ID  
 */
function loadImprintFooterData(languageId){
    loadImprintFooterDataGerman(languageId);
    loadImprintFooterDataEnglish(languageId);
}

/**
 * This function loads footer data in german
 * @param {number} languageId - includes the number of language ID  
 */
function loadImprintFooterDataGerman(languageId){
    if(languageId == 0){
        if(!isMobileActive('footer_container')){
            document.getElementById('impressum_link').innerHTML = imprintData.de.footer;
        }else{
            document.getElementById('impressum_link_mobile').innerHTML = imprintData.de.footer;
        }
    }
}

/**
 * This function loads footer data in english
 * @param {number} languageId - includes the number of language ID  
 */
function loadImprintFooterDataEnglish(languageId){
    if(languageId == 1){
        if(!isMobileActive('footer_container')){
            document.getElementById('impressum_link').innerHTML = imprintData.en.footer;
        }else{
            document.getElementById('impressum_link_mobile').innerHTML = imprintData.en.footer;
        }
    }
}

/**
 * This function is used to activate/deactivate the mobile navbar
 * @param {event} event - includes the bubbling event to close the overlay
 */
function toggleMobileNavImprint(event){
    event.stopPropagation();
    let contentNavRef = document.getElementById('nav_mobile');
    let contentButtonRef = document.getElementById('mobile_nav_btn');
    if(!mobileNavActive){
        contentNavRef.classList.remove('invisible');
        contentButtonRef.src = '../assets/icons/mobile/overlay_close_button.svg';
        mobileNavActive = true;
    }else{
        contentNavRef.classList.add('invisible');
        contentButtonRef.src = '../assets/icons/mobile/burger_button.svg';
        mobileNavActive = false;
    }
}

/**
 * This function closes the mobile navbar overlay
 */
function closeNavOverlayImprint(){
    if(mobileNavActive){
        document.getElementById('nav_mobile').classList.add('invisible');
        document.getElementById('mobile_nav_btn').src = '../assets/icons/mobile/burger_button.svg';
        mobileNavActive = false;
    }
}