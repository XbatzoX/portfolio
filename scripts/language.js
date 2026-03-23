function loadLanguageData(languageId){
    loadNavData(languageId);
    loadWhyMeData(languageId);
    loadMySkillsData(languageId);
    loadMyProjectsData(languageId);
    loadContactMeData(languageId);
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

function loadWhyMeData(languageId){
    loadGermanWhyMeData(languageId);
    loadEnglishWhyMeData(languageId);
}

function loadGermanWhyMeData(languageId){
    if(languageId == 0){
        document.getElementById('why_me_caption').innerHTML = whyMeData.de.caption;
        document.getElementById('city_location_1').innerHTML = whyMeData.de.city_1;
        document.getElementById('city_location_2').innerHTML = whyMeData.de.city_2;
        document.getElementById('description_text').innerHTML = whyMeData.de.description;
    }
}

function loadEnglishWhyMeData(languageId){
    if(languageId == 1){
        document.getElementById('why_me_caption').innerHTML = whyMeData.en.caption;
        document.getElementById('city_location_1').innerHTML = whyMeData.en.city_1;
        document.getElementById('city_location_2').innerHTML = whyMeData.en.city_2;
        document.getElementById('description_text').innerHTML = whyMeData.en.description;
    }
}

function loadMySkillsData(languageId){
    loadGermanMySkillsData(languageId);
    loadEnglishMySkillsData(languageId);
}

function loadGermanMySkillsData(languageId){
    if(languageId == 0){
        document.getElementById('my_skills_caption').innerHTML = mySkillsData.de.caption;
        document.getElementById('actual_learning_id').innerHTML = mySkillsData.de.actualLearning;
        document.getElementById('actual_learning_text').innerHTML = mySkillsData.de.actualLearningText;
    }
}

function loadEnglishMySkillsData(languageId){
    if(languageId == 1){
        document.getElementById('my_skills_caption').innerHTML = mySkillsData.en.caption;
        document.getElementById('actual_learning_id').innerHTML = mySkillsData.en.actualLearning;
        document.getElementById('actual_learning_text').innerHTML = mySkillsData.en.actualLearningText;
    }
}

function loadMyProjectsData(languageId){
    loadGermanMyProjectsData(languageId);
    loadEnglishMyProjectsData(languageId);
}

function loadGermanMyProjectsData(languageId){
    calculateAmountOfProjects();
    let ongoingProjectId = amountProjects - 1;
    if(languageId == 0){
        document.getElementById('my_projects_caption').innerHTML = myProjectsData.de.caption;
        document.getElementById('project_' + ongoingProjectId).innerHTML = myProjectsData.de.tabDescription;
        document.getElementById('caption_comments').innerHTML = myProjectsData.de.captionComments;
        for (let index = 1; index <= 3; index++) {
            document.getElementById('project' + index + '_span').innerHTML = myProjectsData.de.projectSpan;
            document.getElementById('comment_' + index).innerHTML = myProjectsData.de['comment' + index];
        }
    }
}

function loadEnglishMyProjectsData(languageId){
    calculateAmountOfProjects();
    let ongoingProjectId = amountProjects - 1;
    if(languageId == 1){
        document.getElementById('my_projects_caption').innerHTML = myProjectsData.en.caption;
        document.getElementById('project_' + ongoingProjectId).innerHTML = myProjectsData.en.tabDescription;
        document.getElementById('caption_comments').innerHTML = myProjectsData.en.captionComments;
        for (let index = 1; index <= 3; index++) {
            document.getElementById('project' + index + '_span').innerHTML = myProjectsData.en.projectSpan;
            document.getElementById('comment_' + index).innerHTML = myProjectsData.en['comment' + index];
        }
    }
}

function loadContactMeData(languageId){
    loadGermanContactMeData(languageId);
    loadEnglishContactMeData(languageId);
}

function loadGermanContactMeData(languageId){
    if(languageId == 0){
        document.getElementById('contact_caption').innerHTML = contactMeData.de.caption;
        document.getElementById('contact_info').innerHTML = contactMeData.de.infoText;
        if(!isMobileActive('input_name_title')){
            checkIfErrorMessageGerman();
        }else{
            checkIfErrorMessageGermanMobile();
        }
        
        document.getElementById('privacy_policy_span').innerHTML = contactMeData.de.form.privacyPolicy;
        document.getElementById('privacy_error_text').innerHTML = contactMeData.de.form.privacyError;
        document.getElementById('submit_btn').innerHTML = contactMeData.de.form.submitButton;
    }
}

function loadEnglishContactMeData(languageId){
    if(languageId == 1){
        document.getElementById('contact_caption').innerHTML = contactMeData.en.caption;
        document.getElementById('contact_info').innerHTML = contactMeData.en.infoText;
        if(!isMobileActive('input_name_title')){
            checkIfErrorMessageEnglish();
            // document.getElementById('input_name_title').innerHTML = contactMeData.en.form.name;
            // document.getElementById('input_mail_title').innerHTML = contactMeData.en.form.mail;
            // document.getElementById('input_message_title').innerHTML = contactMeData.en.form.message;
        }else{
            checkIfErrorMessageEnglishMobile();
            // document.getElementById('input_name').placeholder = contactMeData.en.form.name;
            // document.getElementById('input_mail').placeholder = contactMeData.en.form.mail;
            // document.getElementById('input_message').placeholder = contactMeData.en.form.message;
        }
        
        document.getElementById('privacy_policy_span').innerHTML = contactMeData.en.form.privacyPolicy;
        document.getElementById('privacy_error_text').innerHTML = contactMeData.en.form.privacyError;
        document.getElementById('submit_btn').innerHTML = contactMeData.en.form.submitButton;
    }
}

function checkIfErrorMessageGerman(){
    checkErrorNameGerman();
    checkErrorMailGerman();
    checkErrorMessageGerman();
}

function checkErrorNameGerman(){
    let spanName = document.getElementById('input_name_title');
    if(spanName.innerHTML == contactMeData.en.form.nameError){
        spanName.innerHTML = contactMeData.de.form.nameError;
    }else{
        spanName.innerHTML = contactMeData.de.form.name;
    }
}

function checkErrorMailGerman(){
    let spanMail = document.getElementById('input_mail_title');
    if(spanMail.innerHTML == contactMeData.en.form.mailError){
        spanMail.innerHTML = contactMeData.de.form.mailError;
    }else{
        spanMail.innerHTML = contactMeData.de.form.mail;
    }
}

function checkErrorMessageGerman(){
    let spanMessage = document.getElementById('input_message_title');
    if(spanMessage.innerHTML == contactMeData.en.form.messageError){
        spanMessage.innerHTML = contactMeData.de.form.messageError;
    }else{
        spanMessage.innerHTML = contactMeData.de.form.message;
    }
}

function checkIfErrorMessageGermanMobile(){
    checkErrorNameGermanMobile();
    checkErrorMailGermanMobile();
    checkErrorMessageGermanMobile();
}

function checkErrorNameGermanMobile(){
    let inputName = document.getElementById('input_name');
    if(inputName.placeholder == contactMeData.en.form.nameError){
        inputName.placeholder = contactMeData.de.form.nameError;
    }else{
        inputName.placeholder = contactMeData.de.form.name;
    }
}

function checkErrorMailGermanMobile(){
    let inputMail = document.getElementById('input_mail');
    if(inputMail.placeholder == contactMeData.en.form.mailError){
        inputMail.placeholder = contactMeData.de.form.mailError;
    }else{
        inputMail.placeholder = contactMeData.de.form.mail;
    }
}

function checkErrorMessageGermanMobile(){
    let inputMessage = document.getElementById('input_message');
    if(inputMessage.placeholder == contactMeData.en.form.messageError){
        inputMessage.placeholder = contactMeData.de.form.messageError;
    }else{
        inputMessage.placeholder = contactMeData.de.form.message;
    }
}

function checkIfErrorMessageEnglish(){
    checkErrorNameEnglish();
    checkErrorMailEnglish();
    checkErrorMessageEnglish();
}

function checkErrorNameEnglish(){
    let spanName = document.getElementById('input_name_title');
    if(spanName.innerHTML == contactMeData.de.form.nameError){
        spanName.innerHTML = contactMeData.en.form.nameError;
    }else{
        spanName.innerHTML = contactMeData.en.form.name;
    }
}

function checkErrorMailEnglish(){
    let spanMail = document.getElementById('input_mail_title');
    if(spanMail.innerHTML == contactMeData.de.form.mailError){
        spanMail.innerHTML = contactMeData.en.form.mailError;
    }else{
        spanMail.innerHTML = contactMeData.en.form.mail;
    }
}

function checkErrorMessageEnglish(){
    let spanMessage = document.getElementById('input_message_title');
    if(spanMessage.innerHTML == contactMeData.de.form.messageError){
        spanMessage.innerHTML = contactMeData.en.form.messageError;
    }else{
        spanMessage.innerHTML = contactMeData.en.form.message;
    }
}

function checkIfErrorMessageEnglishMobile(){
    checkErrorNameEnglishMobile();
    checkErrorMailEnglishMobile();
    checkErrorMessageEnglishMobile();
}

function checkErrorNameEnglishMobile(){
    let inputName = document.getElementById('input_name');
    if(inputName.placeholder == contactMeData.de.form.nameError){
        inputName.placeholder = contactMeData.en.form.nameError;
    }else{
        inputName.placeholder = contactMeData.en.form.name;
    }
}

function checkErrorMailEnglishMobile(){
    let inputMail = document.getElementById('input_mail');
    if(inputMail.placeholder == contactMeData.de.form.mailError){
        inputMail.placeholder = contactMeData.en.form.mailError;
    }else{
        inputMail.placeholder = contactMeData.en.form.mail;
    }
}

function checkErrorMessageEnglishMobile(){
    let inputMessage = document.getElementById('input_message');
    if(inputMessage.placeholder == contactMeData.de.form.messageError){
        inputMessage.placeholder = contactMeData.en.form.messageError;
    }else{
        inputMessage.placeholder = contactMeData.en.form.message;
    }
}