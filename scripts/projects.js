let projectId = 0;
let amountProjects = 0;
let maxAmountOfProjects = 10;

function activateNavigationTab(id){
    calculateAmountOfProjects();
}

function calculateAmountOfProjects(){
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
        
    }
} 