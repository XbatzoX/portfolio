function loadLanguageData(languageId){
    loadNavData(languageId);
    loadWhyMeData(languageId);
    loadMySkillsData(languageId);
    loadMyProjectsData(languageId);
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

}

function loadGermanContactMeData(languageId){
    if(languageId == 0){
        document.getElementById('contact_caption').innerHTML = contactMeData.de.caption;
        document.getElementById('contact_info').innerHTML = contactMeData.de.infoText;
        document.getElementById('input_name_title').innerHTML = contactMeData.de.form.name;
        document.getElementById
    }
}