/**
 * This function loads the language data into index.html
 * @param {number} languageId - includes the number of language ID  
 */
function loadLanguageData(languageId){
    loadCaptionData(languageId);
    loadNavData(languageId);
    loadWhyMeData(languageId);
    loadMySkillsData(languageId);
    loadMyProjectsData(languageId);
    loadContactMeData(languageId);
    loadFooterData(languageId);
}

/**
 * This function loads the job title in correct language
 * @param {string} languageId - includes the number of language ID  
 */
function loadCaptionData(languageId){
    if(languageId == 0){
        document.getElementById('job_text').innerHTML = navData[0].de[4];
    }else{
        document.getElementById('job_text').innerHTML = navData[1].en[4];
    }
}

/**
 * This function loads the nav data in the correct language
 * @param {number} languageId - includes the number of language ID  
 */
function loadNavData(languageId){
    loadGermanNavData(languageId);
    loadEnglishNavData(languageId);
    loadGermanNavDataMobile(languageId);
    loadEnglishNavDataMobile(languageId);
}

/**
 * This function loads the nav data in german
 * @param {number} languageId - includes the number of language ID  
 */
function loadGermanNavData(languageId){
    if(languageId == 0){
        document.getElementById('link_why_me').innerHTML = navData[0].de[0];
        document.getElementById('link_skills').innerHTML = navData[0].de[1];
        document.getElementById('link_projects').innerHTML = navData[0].de[2];
        document.getElementById('link_contact').innerHTML = navData[0].de[3];
        
    }
}

/**
 * This function loads the nav data in german at mobile view
 * @param {number} languageId - includes the number of language ID  
 */
function loadGermanNavDataMobile(languageId){
    if(languageId == 0){
        document.getElementById('link_why_me_mobile').innerHTML = navData[0].de[0];
        document.getElementById('link_my_skills_mobile').innerHTML = navData[0].de[1];
        document.getElementById('link_my_projects_mobile').innerHTML = navData[0].de[2];
        document.getElementById('link_contact_me_mobile').innerHTML = navData[0].de[3];
    }
}

/**
 * This function loads nav data in english
 * @param {number} languageId - includes the number of language ID  
 */
function loadEnglishNavData(languageId){
    if(languageId == 1){
        document.getElementById('link_why_me').innerHTML = navData[1].en[0];
        document.getElementById('link_skills').innerHTML = navData[1].en[1];
        document.getElementById('link_projects').innerHTML = navData[1].en[2];
        document.getElementById('link_contact').innerHTML = navData[1].en[3];
    }
}

/**
 * This function loads nav data in english in mobile view
 * @param {number} languageId - includes the number of language ID  
 */
function loadEnglishNavDataMobile(languageId){
    if(languageId == 1){
        document.getElementById('link_why_me_mobile').innerHTML = navData[1].en[0];
        document.getElementById('link_my_skills_mobile').innerHTML = navData[1].en[1];
        document.getElementById('link_my_projects_mobile').innerHTML = navData[1].en[2];
        document.getElementById('link_contact_me_mobile').innerHTML = navData[1].en[3];
    }
}

/**
 * This function loads why me section data in correct language
 * @param {number} languageId - includes the number of language ID  
 */
function loadWhyMeData(languageId){
    loadGermanWhyMeData(languageId);
    loadEnglishWhyMeData(languageId);
}

/**
 * This function loads why me section data in german
 * @param {number} languageId - includes the number of language ID  
 */
function loadGermanWhyMeData(languageId){
    if(languageId == 0){
        document.getElementById('why_me_caption').innerHTML = whyMeData.de.caption;
        document.getElementById('city_location_1').innerHTML = whyMeData.de.city_1;
        document.getElementById('city_location_2').innerHTML = whyMeData.de.city_2;
        document.getElementById('description_text').innerHTML = whyMeData.de.description;
    }
}

/**
 * This function loads why me section data in english
 * @param {number} languageId - includes the number of language ID  
 */
function loadEnglishWhyMeData(languageId){
    if(languageId == 1){
        document.getElementById('why_me_caption').innerHTML = whyMeData.en.caption;
        document.getElementById('city_location_1').innerHTML = whyMeData.en.city_1;
        document.getElementById('city_location_2').innerHTML = whyMeData.en.city_2;
        document.getElementById('description_text').innerHTML = whyMeData.en.description;
    }
}

/**
 * This function loads my skills section data in correct language
 * @param {number} languageId - includes the number of language ID  
 */
function loadMySkillsData(languageId){
    loadGermanMySkillsData(languageId);
    loadEnglishMySkillsData(languageId);
}

/**
 * This function loads my skills section data in german
 * @param {number} languageId - includes the number of language ID  
 */
function loadGermanMySkillsData(languageId){
    if(languageId == 0){
        document.getElementById('my_skills_caption').innerHTML = mySkillsData.de.caption;
        document.getElementById('actual_learning_id').innerHTML = mySkillsData.de.actualLearning;
        document.getElementById('actual_learning_text').innerHTML = mySkillsData.de.actualLearningText;
        document.getElementById('mobile_learning_id').innerHTML = mySkillsData.de.actualLearningMobile;
        document.getElementById('actual_text_mobile').innerHTML = mySkillsData.de.actualLearningText;
    }
}

/**
 * This function loads my skills section data in english
 * @param {number} languageId - includes the number of language ID  
 */
function loadEnglishMySkillsData(languageId){
    if(languageId == 1){
        document.getElementById('my_skills_caption').innerHTML = mySkillsData.en.caption;
        document.getElementById('actual_learning_id').innerHTML = mySkillsData.en.actualLearning;
        document.getElementById('actual_learning_text').innerHTML = mySkillsData.en.actualLearningText;
        document.getElementById('mobile_learning_id').innerHTML = mySkillsData.en.actualLearningMobile;
        document.getElementById('actual_text_mobile').innerHTML = mySkillsData.en.actualLearningText;
    }
}

/**
 * This function loads my projects section data in correct language
 * @param {number} languageId - includes the number of language ID  
 */
function loadMyProjectsData(languageId){
    loadGermanMyProjectsData(languageId);
    loadEnglishMyProjectsData(languageId);
}

/**
 * This function loads my projects section data in german
 * @param {number} languageId - includes the number of language ID  
 */
function loadGermanMyProjectsData(languageId){
    calculateAmountOfProjects();
    let ongoingProjectId = amountProjects - 1;
    if(languageId == 0){
        document.getElementById('my_projects_caption').innerHTML = myProjectsData.de.caption;
        if(false){document.getElementById('project_' + ongoingProjectId).innerHTML = myProjectsData.de.tabDescription;}
        document.getElementById('caption_comments').innerHTML = myProjectsData.de.captionComments;
        for (let index = 1; index <= 2; index++) {
            document.getElementById('project' + index + '_span').innerHTML = myProjectsData.de.projectSpan;
            document.getElementById('comment_' + index).innerHTML = myProjectsData.de['comment' + index];
            if(index < 3){document.getElementById('mobile_project_' + (index - 1)).innerHTML = `${index}. Projekt`;}          
        }
        document.getElementById('comments_mobile_caption').innerHTML = myProjectsData.de.mobileCaption;
        document.getElementById('comments_mobile_span').innerHTML = myProjectsData.de.mobileSpan;
    }
}

/**
 * This function loads my projects section data in english
 * @param {number} languageId - includes the number of language ID  
 */
function loadEnglishMyProjectsData(languageId){
    calculateAmountOfProjects();
    let ongoingProjectId = amountProjects - 1;
    if(languageId == 1){
        document.getElementById('my_projects_caption').innerHTML = myProjectsData.en.caption;
        if(false){document.getElementById('project_' + ongoingProjectId).innerHTML = myProjectsData.en.tabDescription;}
        document.getElementById('caption_comments').innerHTML = myProjectsData.en.captionComments;
        for (let index = 1; index <= 2; index++) {
            document.getElementById('project' + index + '_span').innerHTML = myProjectsData.en.projectSpan;
            document.getElementById('comment_' + index).innerHTML = myProjectsData.en['comment' + index];
            if(index < 3){document.getElementById('mobile_project_' + (index - 1)).innerHTML = `${index}. Project`;}
        }
        document.getElementById('comments_mobile_caption').innerHTML = myProjectsData.en.mobileCaption;
        document.getElementById('comments_mobile_span').innerHTML = myProjectsData.en.mobileSpan;
    }
}

/**
 * This function loads contact me section data in correct language
 * @param {number} languageId - includes the number of language ID  
 */
function loadContactMeData(languageId){
    loadGermanContactMeData(languageId);
    loadEnglishContactMeData(languageId);
}

/**
 * This function loads contact me section data in german
 * @param {number} languageId - includes the number of language ID  
 */
function loadGermanContactMeData(languageId){
    if(languageId == 0){
        document.getElementById('contact_caption').innerHTML = contactMeData.de.caption;
        document.getElementById('contact_info').innerHTML = contactMeData.de.infoText;
        if(!isMobileActive('input_name_title')){
            checkIfErrorMessageGerman();
        }else{
            checkIfErrorMessageGermanMobile();
        }
        document.getElementById('work_mobile').innerHTML = contactMeData.de.spanMobile;
        document.getElementById('privacy_policy_span').innerHTML = contactMeData.de.form.privacyPolicy;
        document.getElementById('privacy_error_text').innerHTML = contactMeData.de.form.privacyError;
        document.getElementById('submit_btn').innerHTML = contactMeData.de.form.submitButton;
    }
}

/**
 * This function loads contact me section data in english
 * @param {number} languageId - includes the number of language ID  
 */
function loadEnglishContactMeData(languageId){
    if(languageId == 1){
        document.getElementById('contact_caption').innerHTML = contactMeData.en.caption;
        document.getElementById('contact_info').innerHTML = contactMeData.en.infoText;
        if(!isMobileActive('input_name_title')){
            checkIfErrorMessageEnglish();
        }else{
            checkIfErrorMessageEnglishMobile();
        }
        document.getElementById('work_mobile').innerHTML = contactMeData.en.spanMobile;
        document.getElementById('privacy_policy_span').innerHTML = contactMeData.en.form.privacyPolicy;
        document.getElementById('privacy_error_text').innerHTML = contactMeData.en.form.privacyError;
        document.getElementById('submit_btn').innerHTML = contactMeData.en.form.submitButton;
    }
}

/**
 * This function is used to load the footer data in correct language
 * @param {number} languageId - includes the number of language ID 
 */
function loadFooterData(languageId){
    loadFooterDataGerman(languageId);
    loadFooterDataEnglish(languageId);
}

/**
 * This function loads the footer data in german
 * @param {number} languageId - includes the number of language ID  
 */
function loadFooterDataGerman(languageId){
    if(languageId == 0){
        document.getElementById('impressum_link').innerHTML = footerData.de.legalNotice;
        document.getElementById('impressum_link_mobile').innerHTML = footerData.de.legalNotice;
    }
}

/**
 * This function loads the footer data in english
 * @param {number} languageId - includes the number of language ID  
 */
function loadFooterDataEnglish(languageId){
    if(languageId == 1){
        document.getElementById('impressum_link').innerHTML = footerData.en.legalNotice;
        document.getElementById('impressum_link_mobile').innerHTML = footerData.en.legalNotice;
    }
}