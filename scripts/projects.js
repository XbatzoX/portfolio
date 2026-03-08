let projectId = 0;
let amountProjects = 0;
let maxAmountOfProjects = 10;

function activateNavigationTab(id){
    calculateAmountOfProjects();
    removeBackgroundsFromTabs();
    setBackgroundFromActiveTab(id);
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