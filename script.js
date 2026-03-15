let languageID = 0;
let manualNavigation = false;

function init(){
    onFocusLanguageDesign('german', 'german_span');
    activateNavigationTab('project_0', 'project_content');
}

function changeLogoBig(){
    const contentLogoRef = document.getElementById('main_logo');
    contentLogoRef.src = './assets/icons/Logo icon hover.svg';
}

function changeLogoSmall(){
    const contentLogoRef = document.getElementById('main_logo');
    contentLogoRef.src = './assets/icons/Logo icon.svg';
}

function changeIcon(id, path){
    const contentIconRef = document.getElementById(id);
    contentIconRef.src = path;
}

function onFocusDesign(id, link_id){
    removeFocusFromLink();
    removeFocusColor();
    if(id != '' && link_id != ''){
        document.getElementById(id).classList.add('ellipse');
        document.getElementById(link_id).style.color = '#F8F5EC';
    }
}

function removeFocusFromLink(){
    document.getElementById('why_me').classList.remove('ellipse');
    document.getElementById('skills').classList.remove('ellipse');
    document.getElementById('projects').classList.remove('ellipse');
    document.getElementById('contact').classList.remove('ellipse');
}

function removeFocusColor(){
    document.getElementById('link_why_me').style.color = '#262E34';
    document.getElementById('link_skills').style.color = '#262E34';
    document.getElementById('link_projects').style.color = '#262E34';
    document.getElementById('link_contact').style.color = '#262E34';
}

function onFocusLanguageDesign(id, span_id){
    removeFocusFromLanguage();
    removeColorLanguage();
    setLanguageID(id);
    document.getElementById(id).classList.add('ellipse-language');
    document.getElementById(span_id).style.color ='#F8F5EC';
}

function removeFocusFromLanguage(){
    document.getElementById('german').classList.remove('ellipse-language');
    document.getElementById('english').classList.remove('ellipse-language');
}

function removeColorLanguage(){
    document.getElementById('german_span').style.color = '#262E34';
    document.getElementById('english_span').style.color = '#262E34';
}

function setLanguageID(id){
    if(id == 'german'){
        languageID = 0;
    }else{
        languageID = 1;
    }
}

function onHoverLanguageDesign(id){
    if((languageID == 0) && (id == 'english')){
        document.getElementById('german').classList.remove('ellipse-language');
        document.getElementById('german_span').style.color ='#262E34';
        document.getElementById('english_span').style.color ='#F8F5EC';
    }
    if((languageID == 1) && (id == 'german')){
        document.getElementById('english').classList.remove('ellipse-language');
        document.getElementById('english_span').style.color = '#262E34';
        document.getElementById('german_span').style.color = '#F8F5EC';
    }
}

function hoverOverLanguageDesign(){
    if(languageID == 0){
        onFocusLanguageDesign('german', 'german_span')
    }else{
        onFocusLanguageDesign('english', 'english_span');
    }
}

function changeBackgroundImage(id, classRemove, classAdd){
    document.getElementById(id).classList.remove(classRemove);
    document.getElementById(id).classList.add(classAdd);
}

function scrollToSection(id){
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
    if(id == 'why_me_section'){
        onFocusDesign('why_me', 'link_why_me');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.nav-links');

    let observer = new IntersectionObserver(entries => {
        if(manualNavigation) return;
        entries.forEach(entry => {
            if(entry.isIntersecting){
                // console.log(entry.target.id);
                setButtonOnNavbar(entry.target.id);
            }
        });
    },{
        threshold: 0.4
    });
    sections.forEach(section => {
        observer.observe(section);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            manualNavigation = true;
            setTimeout(() =>{
                manualNavigation = false;
            }, 800);
        });
    });
});

function setButtonOnNavbar(contentId){
    switch(contentId){
        case 'hero_section':
            onFocusDesign('', '');
            break;
        case 'why_me_section':
            onFocusDesign('why_me', 'link_why_me');
            break;
        case 'my_skills_section':
            onFocusDesign('skills', 'link_skills');
            break;
        case 'my_projects_section':
        case 'my_colleagues_section':
            onFocusDesign('projects', 'link_projects');
            break;
        case 'my_contact_section':
            onFocusDesign('contact', 'link_contact');
            break;
        default:
            onFocusDesign('why_me', 'link_why_me');
    }
}