let projectId = 0;
let amountProjects = 0;
let maxAmountOfProjects = 10;

function activateNavigationTab(id, divId){
    calculateAmountOfProjects();
    removeBackgroundsFromTabs();
    setBackgroundFromActiveTab(id);
    setProjectId(id);
    
}

function calculateAmountOfProjects(){
    amountProjects = 0;
    let spanProject;
    for (let index = 0; index < maxAmountOfProjects; index++) {
        spanProject = document.getElementById(`project_${index}`);
        if(spanProject){
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
        if(id == 'project_' + index){
            projectId = index;
            break;
        }else{
            projectId = 0;
        }
    }
}

function checkIfOngoingProject(){
    if(projectId == (amountProjects - 1)){
        renderOngoingProject(projectId, divId);
    }else{
        renderProjectInfos(projectId, divId);
    }
}

function renderProjectInfos(projectId, divId){
    let contentRef = document.getElementById(divId);
    contentRef.innerHTML = '';
    contentRef.innerHTML = getProjectTemplate(projectId);
}

function renderOngoingProject(projectId, divId){
    let contentRef = document.getElementById(divId);
    contentRef.innerHTML = '';
    contentRef.innerHTML = getOngoingProjectTemplate(projectId);
}