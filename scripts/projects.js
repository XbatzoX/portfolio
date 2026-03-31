let projectId = 0;
let amountProjects = 0;
let maxAmountOfProjects = 10;
let projectLanguageId = 0;

/**
 * This function is used to activate the navigation bar on my projects section
 * @param {string} id - includes the id of project text
 * @param {string} divId - includes the id of project tab container
 */
function activateNavigationTab(id, divId){
    calculateAmountOfProjects();
    removeBackgroundsFromTabs();
    setBackgroundFromActiveTab(id);
    setProjectId(id);
    checkIfOngoingProject(projectId, divId);
}

/**
 * This function is used to set the correct language on my projects section
 */
function setProjectLanguage(){
    checkIfOngoingProject(projectId, 'project_content');
    checkIfOngoingProjectMobile(projectId, 'mobile_project_content');
}

/** This function is used to calculate the amount of projects in projectObj */
function calculateAmountOfProjects(){
    amountProjects = 0;
    let spanProject;
    let spanProjectMobile;
    for (let index = 0; index < maxAmountOfProjects; index++) {
        spanProject = document.getElementById(`project_${index}`);
        spanProjectMobile = document.getElementById(`mobile_project_${index}`);
        if(spanProject || spanProjectMobile){
            amountProjects += 1;
        }else{
            break;
        }
    }
}

/*** This function remove background designs from navigation tab*/
function removeBackgroundsFromTabs(){
    let contentSpanRef;
    for (let index = 0; index < amountProjects; index++) {
        contentSpanRef = document.getElementById(`project_${index}`);
        contentSpanRef.style.color = '#89BCD9';
        contentSpanRef.parentElement.classList.remove('tab-bg');
    }
}

/**
 * This function is used to set the design from active tab
 * @param {string} id - includes id from project tab text 
 */
function setBackgroundFromActiveTab(id){
    let contentSpanRef = document.getElementById(id);
    contentSpanRef.style.color = '#F8F5EC';
    contentSpanRef.parentElement.classList.add('tab-bg');
}

/** This function sets the projectId */
function setProjectId(id){
    for (let index = 0; index < amountProjects; index++) {
        if((id == 'project_' + index) || (id == 'mobile_project_' + index)){
            projectId = index;
            break;
        }else{
            projectId = 0;
        }
    }
}

/** This function is used to check if ongoing project is clicked */
function checkIfOngoingProject(projectId, divId){
    if(projectId == (amountProjects - 1)){
        // renderOngoingProject(projectId, divId);
    }else{
        renderProjectInfos(projectId, divId);
    }
}

/**
 * This function renders the project content in correct language
 * @param {number} projectId - includes the projectId from active project 
 * @param {string} divId - includes the id from container where content will be rendered 
 */
function renderProjectInfos(projectId, divId){
    let contentRef = document.getElementById(divId);
    contentRef.innerHTML = '';
    if(projectLanguageId == 0){
        contentRef.innerHTML = getProjectTemplate(projectId);
    }else{
        contentRef.innerHTML = getProjectTemplateEnglish(projectId);
    }
}

/**
 * This function renders the content of ongoing project in correct language
 * @param {string} projectId - includes the projectId from active project  
 * @param {string} divId - includes the id from container where content will be rendered 
 */
function renderOngoingProject(projectId, divId){
    let contentRef = document.getElementById(divId);
    contentRef.innerHTML = '';
    if(projectLanguageId == 0){
        contentRef.innerHTML = getOngoingProjectTemplate(projectId);
    }else{
        contentRef.innerHTML = getOngoingProjectTemplateEnglish(projectId);
    }
}

const slider = document.querySelector('.comment-container');

let isDown = false;
let isDragging = false;
let startX;
let scrollLeft;

/** event listener for slider function at comments container */
slider.addEventListener('mousedown', (e) => {
    if (e.target.closest('.comment-text')) return;
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

/** event listener for slider function at comments container */
slider.addEventListener('mouseleave', () => {
    isDown = false;
});

/** event listener for slider function at comments container */
slider.addEventListener('mouseup', () => {
    isDown = false;
});

/** event listener for slider function at comments container */
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;

    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5; 
    e.preventDefault();
  
    slider.scrollLeft = scrollLeft - walk;
});

/**
 * This function is used to activate the navigation tab in mobile view
 * @param {string} id - includes the id of project text 
 * @param {string} divId - includes the id of navigation tab container 
 */
function activateMobileNavigationTab(id, divId){
    calculateAmountOfProjects();
    removeBackgroundsFromMobileTabs();
    setBackgroundFromActiveMobileTab(id);
    setProjectId(id);
    checkIfOngoingProjectMobile(projectId, divId);
}

/**
 * This function removes the backround design from mobile navigation tabs
 */
function removeBackgroundsFromMobileTabs(){
    let contentSpanRef;
    for (let index = 0; index < amountProjects; index++) {
        contentSpanRef = document.getElementById(`mobile_project_${index}`);
        contentSpanRef.style.color = '#F8F5EC';
        contentSpanRef.parentElement.classList.remove('mobile-tab-bg');
    }
}

/**
 * This function set the design of active project tab
 * @param {string} id - includes the id of active navigation tab on my projects section 
 */
function setBackgroundFromActiveMobileTab(id){
    let contentSpanRef = document.getElementById(id);
    contentSpanRef.style.color = '#89BCD9';
    contentSpanRef.parentElement.classList.add('mobile-tab-bg');
    setBorderRadiusOfBox(id);
}

/**
 * This function sets the border in differnt situations of mobile project navigation section
 * @param {string} id - includes the id of active navigation tab on my projects section 
 */
function setBorderRadiusOfBox(id){
    document.getElementById('mobile_content_frame').style.borderTopRightRadius = "30px";
    document.getElementById('mobile_content_frame').style.borderTopLeftRadius = "30px";
    let lastProject = amountProjects - 1;
    if(id == `mobile_project_${lastProject}`){
        document.getElementById('mobile_content_frame').style.borderTopRightRadius = "0px";
    }else if(id == 'mobile_project_0'){
        document.getElementById('mobile_content_frame').style.borderTopLeftRadius = "0px";
    }
}

/**
 * 
 * @param {number} projectId - includes the projectId of active project 
 * @param {string} divId - includes the id of div container where the data will be rendered 
 */
function checkIfOngoingProjectMobile(projectId, divId){
    if(projectId == (amountProjects - 1)){
        // renderOngoingProjectMobile(projectId, divId);
    }else{
        renderProjectInfosMobile(projectId, divId);
    }
}

/**
 * This function renders the project content at mobile view in the correct language
 * @param {number} projectId  - includes the projectId of active project 
 * @param {string} divId - includes the id of div container where the data will be rendered 
 */
function renderProjectInfosMobile(projectId, divId){
    let contentRef = document.getElementById(divId);
    contentRef.innerHTML = '';
    if(projectLanguageId == 0){
        contentRef.innerHTML = getMobileProjectTemplate(projectId);
    }else{
        contentRef.innerHTML = getMobileProjectTemplateEnglish(projectId);
    }
}

/**
 * This function renders the content of ongoing project in correct language (mobile view)
 * @param {number} projectId - includes the projectId of active project 
 * @param {string} divId - includes the id of div container where the data will be rendered 
 */
function renderOngoingProjectMobile(projectId, divId){
    let contentRef = document.getElementById(divId);
    contentRef.innerHTML = '';
    if(projectLanguageId == 0){
        contentRef.innerHTML = getMobileOngoingProjectTemplate(projectId);
    }else{
        contentRef.innerHTML = getMobileOngoingProjectTemplateEnglish(projectId);
    }
}