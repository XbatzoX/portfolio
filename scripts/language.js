function loadLanguageData(languageId){
    loadNavData(languageId);
}

function loadNavData(languageId){
    loadGermanNavData(languageId);
    loadEnglishNavData(languageId);
}

function loadGermanNavData(languageId){
    if(languageId == 0){
        document.getElementById('link_why_me').innerHTML = navData[0].de[0];
        document.getElementById('link_skills').innerHTML = navData[0].de[1];
        document.getElementById('link_projects').innerHTML = navData[0].de[2];
        document.getElementById('link_contact').innerHTML = navData[0].de[3];
    }
}

function loadEnglishNavData(languageId){
    if(languageId == 1){
        document.getElementById('link_why_me').innerHTML = navData[1].en[0];
        document.getElementById('link_skills').innerHTML = navData[1].en[1];
        document.getElementById('link_projects').innerHTML = navData[1].en[2];
        document.getElementById('link_contact').innerHTML = navData[1].en[3];
    }
}