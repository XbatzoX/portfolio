let languageID = 0;
let manualNavigation = false;
let mobileNavActive = false;

function init(){
    let objData = prepareLanguageDesign();
    onFocusLanguageDesign(objData.language, objData.languageSpan);
    loadLanguageData(languageID);
    activateNavigationTab('project_0', 'project_content');
    activateMobileNavigationTab('mobile_project_0', 'mobile_project_content');
}

function prepareLanguageDesign(){
    let objData = {
        "language" : "",
        "languageSpan" : ""
    };
    checkLocalStorage();
    if(languageID == 0){
        objData.language = 'german';
        objData.languageSpan = 'german_span';
    }else{
        objData.language = 'english';
        objData.languageSpan = 'english_span';
    }
    return objData;
}

function checkLocalStorage(){
    let myLaguageId = JSON.parse(localStorage.getItem('myLanguage'));
    if(myLaguageId != null){
        languageID = myLaguageId;
    }
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

function loadLanguage(id, span_id){
    onFocusLanguageDesign(id, span_id);
    loadLanguageData(languageID);
    setProjectLanguage();
}

function onFocusLanguageDesign(id, span_id){
    removeFocusFromLanguage();
    removeColorLanguage();
    setLanguageID(id);
    document.getElementById(id).classList.add('ellipse-language');
    document.getElementById(id + '_mobile').classList.add('ellipse-language');
    document.getElementById(span_id).style.color ='#F8F5EC';
    document.getElementById(span_id + '_mobile').style.color ='#F8F5EC';
}

function removeFocusFromLanguage(){
    document.getElementById('german').classList.remove('ellipse-language');
    document.getElementById('english').classList.remove('ellipse-language');
    document.getElementById('german_mobile').classList.remove('ellipse-language');
    document.getElementById('english_mobile').classList.remove('ellipse-language');
}

function removeColorLanguage(){
    document.getElementById('german_span').style.color = '#262E34';
    document.getElementById('english_span').style.color = '#262E34';
    document.getElementById('german_span_mobile').style.color = '#262E34';
    document.getElementById('english_span_mobile').style.color = '#262E34';
}

function setLanguageID(id){
    if(id == 'german'){
        languageID = 0;
        projectLanguageId = 0;
        contactLanguageId = 0;
    }else{
        languageID = 1;
        projectLanguageId = 1;
        contactLanguageId = 1;
    }
    localStorage.setItem('myLanguage', JSON.stringify(languageID));
}

function onHoverLanguageDesign(id){
    if((languageID == 0) && (id == 'english')){
        document.getElementById('german').classList.remove('ellipse-language');
        document.getElementById('german_mobile').classList.remove('ellipse-language');
        document.getElementById('german_span').style.color ='#262E34';
        document.getElementById('german_span_mobile').style.color ='#262E34';
        document.getElementById('english_span').style.color ='#F8F5EC';
        document.getElementById('english_span_mobile').style.color ='#F8F5EC';
    }
    if((languageID == 1) && (id == 'german')){
        document.getElementById('english').classList.remove('ellipse-language');
        document.getElementById('english_mobile').classList.remove('ellipse-language');
        document.getElementById('english_span').style.color = '#262E34';
        document.getElementById('english_span_mobile').style.color = '#262E34';
        document.getElementById('german_span').style.color = '#F8F5EC';
        document.getElementById('german_span_mobile').style.color = '#F8F5EC';
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
    if(id == 'hero_section' || id == 'my_contact_section'){
        manualNavigation = true;
        if(id == 'hero_section'){
            onFocusDesign('', '');
        }else if(id == 'my_contact_section'){
            onFocusDesign('contact', 'link_contact');
        }
        setTimeout(() => {
           manualNavigation = false; 
        }, 800);
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

function openWebsite(path){
    window.open(path, "_blank");
}

function toggleMobileNav(event){
    event.stopPropagation();
    let contentNavRef = document.getElementById('nav_mobile');
    let contentButtonRef = document.getElementById('mobile_nav_btn');
    if(!mobileNavActive){
        contentNavRef.classList.remove('invisible');
        contentButtonRef.src = 'assets/icons/mobile/overlay_close_button.svg';
        mobileNavActive = true;
    }else{
        contentNavRef.classList.add('invisible');
        contentButtonRef.src = 'assets/icons/mobile/burger_button.svg';
        mobileNavActive = false;
    }
}

function closeNavOverlay(){
    if(mobileNavActive){
        document.getElementById('nav_mobile').classList.add('invisible');
        document.getElementById('mobile_nav_btn').src = 'assets/icons/mobile/burger_button.svg';
        mobileNavActive = false;
    }
}

function stopEventBubbling(event){
    event.stopPropagation();
}

function githubFooterAction(){
    changeIcon('github_footer_mobile', 'assets/icons/mobile/footer_github_mobile_active.svg');
    setTimeout(() => {
        changeIcon('github_footer_mobile', 'assets/icons/mobile/footer_github_mobile.svg');
    }, 800);
    openWebsite('https://github.com/XbatzoX');
}
