let projectId = 0;
let amountProjects = 0;
let maxAmountOfProjects = 10;
let projectLanguageId = 0;

function activateNavigationTab(id, divId){
    calculateAmountOfProjects();
    removeBackgroundsFromTabs();
    setBackgroundFromActiveTab(id);
    setProjectId(id);
    checkIfOngoingProject(projectId, divId);
}

function setProjectLanguage(){
    checkIfOngoingProject(projectId, 'project_content');
}

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

function removeBackgroundsFromTabs(){
    let contentSpanRef;
    for (let index = 0; index < amountProjects; index++) {
        contentSpanRef = document.getElementById(`project_${index}`);
        contentSpanRef.style.color = '#89BCD9';
        contentSpanRef.parentElement.classList.remove('tab-bg');
    }
}

function setBackgroundFromActiveTab(id){
    let contentSpanRef = document.getElementById(id);
    contentSpanRef.style.color = '#F8F5EC';
    contentSpanRef.parentElement.classList.add('tab-bg');
}

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

function checkIfOngoingProject(projectId, divId){
    if(projectId == (amountProjects - 1)){
        renderOngoingProject(projectId, divId);
    }else{
        renderProjectInfos(projectId, divId);
    }
}

function renderProjectInfos(projectId, divId){
    let contentRef = document.getElementById(divId);
    contentRef.innerHTML = '';
    if(projectLanguageId == 0){
        contentRef.innerHTML = getProjectTemplate(projectId);
    }else{
        contentRef.innerHTML = getProjectTemplateEnglish(projectId);
    }
}

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
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5; 
  slider.scrollLeft = scrollLeft - walk;
});

function activateMobileNavigationTab(id, divId){
    calculateAmountOfProjects();
    removeBackgroundsFromMobileTabs();
    setBackgroundFromActiveMobileTab(id);
    setProjectId(id);
}

function removeBackgroundsFromMobileTabs(){
    let contentSpanRef;
    for (let index = 0; index < amountProjects; index++) {
        contentSpanRef = document.getElementById(`mobile_project_${index}`);
        contentSpanRef.style.color = '#F8F5EC';
        contentSpanRef.parentElement.classList.remove('mobile-tab-bg');
    }
}

function setBackgroundFromActiveMobileTab(id){
    let contentSpanRef = document.getElementById(id);
    contentSpanRef.style.color = '#89BCD9';
    contentSpanRef.parentElement.classList.add('mobile-tab-bg');
    setBorderRadiusOfBox(id);
}

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

function checkIfOngoingProjectMobile(projectId, divId){
    if(projectId == (amountProjects - 1)){
        renderOngoingProjectMobile(projectId, divId);
    }else{
        renderProjectInfosMobile(projectId, divId);
    }
}

function renderProjectInfosMobile(projectId, divId){
    let contentRef = document.getElementById(divId);
    contentRef.innerHTML = '';
    if(projectLanguageId == 0){
        contentRef.innerHTML = getMobileProjectTemplate(projectId);
    }else{
        contentRef.innerHTML = getMobileProjectTemplateEnglish(projectId);
    }
}