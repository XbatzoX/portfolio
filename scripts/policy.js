/** This function is used to load the data in correct language on private policy site */
function initPolicy(){
    checkLocalStorage();
    let objData = prepareLanguage();
    onFocusLanguageDesign(objData.language, objData.languageSpan);
    loadPolicyLanguageData(languageID);
}

/**
 * This function load the correct languge data an designs the language buttons
 * @param {string} id - includes the id of language button container 
 * @param {string} id_span - includes the id of language button text 
 */
function loadPolicyLanguage(id, id_span){
    onFocusLanguageDesign(id, id_span);
    loadPolicyLanguageData(languageID);
}

/**
 * This function loads the data of policy page in the correct language
 * @param {number} languageId - includes the number of language ID 
 */
function loadPolicyLanguageData(languageId){
    loadNavData(languageId);
    loadCaptionAndGlanceData(languageId);
    loadCollectionData(languageId);
    loadHostingData(languageId);
    loadPolicyRightsData(languageId);
    loadPolicyFooterData(languageId);
}

/**
 * This function loads caption and glance data in correct language
 * @param {number} languageId - includes the number of language ID  
 */
function loadCaptionAndGlanceData(languageId){
    loadCaptionAndGlanceDataGerman(languageId);
    loadCaptionAndGlanceDataEnglish(languageId);
}

/**
 * This function loads caption and glance data in german
 * @param {number} languageId - includes the number of language ID  
 */
function loadCaptionAndGlanceDataGerman(languageId){
    if(languageId == 0){
        document.getElementById('policy_caption').innerHTML = policyData.de.captionAndGlance.caption;
        document.getElementById('glance_span').innerHTML = policyData.de.captionAndGlance.head;
        document.getElementById('glance_content').innerHTML = policyData.de.captionAndGlance.content;
    }
}

/**
 * This function loads caption and glane data in english
 * @param {number} languageId - includes the number of language ID  
 */
function loadCaptionAndGlanceDataEnglish(languageId){
    if(languageId == 1){
        document.getElementById('policy_caption').innerHTML = policyData.en.captionAndGlance.caption;
        document.getElementById('glance_span').innerHTML = policyData.en.captionAndGlance.head;
        document.getElementById('glance_content').innerHTML = policyData.en.captionAndGlance.content;
    }
}

/**
 * This function loads collection data in the correct language
 * @param {number} languageId - includes the number of language ID  
 */
function loadCollectionData(languageId){
    loadCollectionDataGerman(languageId);
    loadCollectionDataEnglish(languageId);
}

/**
 * This function loads collection data in german
 * @param {number} languageId - includes the number of language ID  
 */
function loadCollectionDataGerman(languageId){
    if(languageId == 0){
        document.getElementById('collection_span').innerHTML = policyData.de.collection.head;
        document.getElementById('collection_content').innerHTML = policyData.de.collection.content; 
    }
}

/**
 * This function loads collection data in english
 * @param {number} languageId - includes the number of language ID  
 */
function loadCollectionDataEnglish(languageId){
    if(languageId == 1){
        document.getElementById('collection_span').innerHTML = policyData.en.collection.head;
        document.getElementById('collection_content').innerHTML = policyData.en.collection.content; 
    }
}

/**
 * This function loads hosting data in correct langauage
 * @param {number} languageId - includes the number of language ID  
 */
function loadHostingData(languageId){
    loadHostingDataGerman(languageId);
    loadHostingDataEnglish(languageId);
}

/**
 * This function loads hosting data in german
 * @param {number} languageId - includes the number of language ID  
 */
function loadHostingDataGerman(languageId){
    if(languageId == 0){
        document.getElementById('hosting_span').innerHTML = policyData.de.hosting.head;
        document.getElementById('hosting_content').innerHTML = policyData.de.hosting.content;
        for (let index = 0; index < 6; index++) {
            document.getElementById('li_' + (index + 1)).innerHTML = policyData.de.hosting.list[index];
        }
        document.getElementById('hosting_content_end').innerHTML = policyData.de.hosting.contentEnd;
    }
}

/**
 * This function loads hosting data in english 
 * @param {number} languageId - includes the number of language ID  
 */
function loadHostingDataEnglish(languageId){
    if(languageId == 1){
        document.getElementById('hosting_span').innerHTML = policyData.en.hosting.head;
        document.getElementById('hosting_content').innerHTML = policyData.en.hosting.content;
        for (let index = 0; index < 6; index++) {
            document.getElementById('li_' + (index + 1)).innerHTML = policyData.en.hosting.list[index];
        }
        document.getElementById('hosting_content_end').innerHTML = policyData.en.hosting.contentEnd;
    }
}

/**
 * This function loads policy rights data in correct language
 * @param {number} languageId - includes the number of language ID  
 */
function loadPolicyRightsData(languageId){
    loadPolicyRightsDataGerman(languageId);
    loadPolicyRightsDataEnglish(languageId);
}

/**
 * This function loads policy rights data in german
 * @param {number} languageId - includes the number of language ID  
 */
function loadPolicyRightsDataGerman(languageId){
    if(languageId ==  0){
        document.getElementById('policyRights_span').innerHTML = policyData.de.policyRights.head;
        document.getElementById('policyRights_content').innerHTML = policyData.de.policyRights.content;
    }
}

/**
 * This function loads policy rights data in english
 * @param {number} languageId - includes the number of language ID  
 */
function loadPolicyRightsDataEnglish(languageId){
    if(languageId ==  1){
        document.getElementById('policyRights_span').innerHTML = policyData.en.policyRights.head;
        document.getElementById('policyRights_content').innerHTML = policyData.en.policyRights.content;
    }
}

/**
 * This function loads footer data in correct language
 * @param {number} languageId - includes the number of language ID  
 */
function loadPolicyFooterData(languageId){
    loadPolicyFooterDataGerman(languageId);
    loadPolicyFooterDataEnglish(languageId);
}

/**
 * This function loads footer data in german
 * @param {number} languageId - includes the number of language ID  
 */
function loadPolicyFooterDataGerman(languageId){
    if(languageId == 0){
        document.getElementById('impressum_link').innerHTML = policyData.de.footer;
        document.getElementById('impressum_link_mobile').innerHTML = policyData.de.footer;
    }
}

/**
 * This function loads footer data in english language
 * @param {number} languageId - includes the number of language ID  
 */
function loadPolicyFooterDataEnglish(languageId){
    if(languageId == 1){
        document.getElementById('impressum_link').innerHTML = policyData.en.footer;
        document.getElementById('impressum_link_mobile').innerHTML = policyData.en.footer;
    }
}
