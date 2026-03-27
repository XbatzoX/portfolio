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
    loadCollectionData(languageId);
    loadHostingData(languageId);
    loadPolicyRightsData(languageId);
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

function loadCollectionData(languageId){
    loadCollectionDataGerman(languageId);
    loadCollectionDataEnglish(languageId);
}

function loadCollectionDataGerman(languageId){
    if(languageId == 0){
        document.getElementById('collection_span').innerHTML = policyData.de.collection.head;
        document.getElementById('collection_content').innerHTML = policyData.de.collection.content; 
    }
}

function loadCollectionDataEnglish(languageId){
    if(languageId == 1){
        document.getElementById('collection_span').innerHTML = policyData.en.collection.head;
        document.getElementById('collection_content').innerHTML = policyData.en.collection.content; 
    }
}

function loadHostingData(languageId){
    loadHostingDataGerman(languageId);
    loadHostingDataEnglish(languageId);
}

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

function loadPolicyRightsData(languageId){
    loadPolicyRightsDataGerman(languageId);
    loadPolicyRightsDataEnglish(languageId);
}

function loadPolicyRightsDataGerman(languageId){
    if(languageId ==  0){
        document.getElementById('policyRights_span').innerHTML = policyData.de.policyRights.head;
        document.getElementById('policyRights_content').innerHTML = policyData.de.policyRights.content;
    }
}

function loadPolicyRightsDataEnglish(languageId){
    if(languageId ==  1){
        document.getElementById('policyRights_span').innerHTML = policyData.en.policyRights.head;
        document.getElementById('policyRights_content').innerHTML = policyData.en.policyRights.content;
    }
}