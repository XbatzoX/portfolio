let languageID = 0;
let manualNavigation = false;
let mobileNavActive = false;

/**
 * This function is used to initialize all data during onload
 */
function init(){
    let objData = prepareLanguageDesign();
    onFocusLanguageDesign(objData.language, objData.languageSpan);
    loadLanguageData(languageID);
    activateNavigationTab('project_0', 'project_content');
    activateMobileNavigationTab('mobile_project_0', 'mobile_project_content');
}

/**
 * This function checks the language ID of local storage and prepares strings for language data load
 * 
 * @returns - an object filled with language string data
 */
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

/**
 * This function is used to check language entry on local storage
 */
function checkLocalStorage(){
    let myLaguageId = JSON.parse(localStorage.getItem('myLanguage'));
    if(myLaguageId != null){
        languageID = myLaguageId;
    }
}

/**
 * This function is used for the logo animation on hero page
 */
function changeLogoBig(){
    const contentLogoRef = document.getElementById('main_logo');
    contentLogoRef.src = './assets/icons/Logo icon hover.svg';
}

/**
 * This function is used for the logo animation on hero page
 */
function changeLogoSmall(){
    const contentLogoRef = document.getElementById('main_logo');
    contentLogoRef.src = './assets/icons/Logo icon.svg';
}

/**
 * This global function changes the icon of an element 
 * 
 * @param {string} id - includes the id from element 
 * @param {string} path - includes the path of new icon image 
 */
function changeIcon(id, path){
    const contentIconRef = document.getElementById(id);
    contentIconRef.src = path;
}

/**
 * This function is used to design the elements of navbar during actions
 * 
 * @param {string} id - includes the id of the clicked navbar element 
 * @param {string} link_id - includes the id of clicked link element
 */
function onFocusDesign(id, link_id){
    removeFocusFromLink();
    removeFocusColor();
    if(id != '' && link_id != ''){
        document.getElementById(id).classList.add('ellipse');
        document.getElementById(link_id).style.color = '#F8F5EC';
    }
}

/**
 * This function removes the shape of all elements
 */
function removeFocusFromLink(){
    document.getElementById('why_me').classList.remove('ellipse');
    document.getElementById('skills').classList.remove('ellipse');
    document.getElementById('projects').classList.remove('ellipse');
    document.getElementById('contact').classList.remove('ellipse');
}

/**
 * This function sets the standard color on all nav links
 */
function removeFocusColor(){
    document.getElementById('link_why_me').style.color = '#262E34';
    document.getElementById('link_skills').style.color = '#262E34';
    document.getElementById('link_projects').style.color = '#262E34';
    document.getElementById('link_contact').style.color = '#262E34';
}

/**
 * This function is used to load all language data and design the language buttons
 * 
 * @param {string} id - includes the id of language button container 
 * @param {string} span_id - includes the id of language button span
 */
function loadLanguage(id, span_id){
    onFocusLanguageDesign(id, span_id);
    loadLanguageData(languageID);
    setProjectLanguage();
}

/**
 * This subfunction of loadLanguage set the languageId and designed the clicked link
 * 
 * @param {string} id - includes the id of language button container 
 * @param {string} span_id - includes the id of language button span
 */
function onFocusLanguageDesign(id, span_id){
    removeFocusFromLanguage();
    removeColorLanguage();
    setLanguageID(id);
    document.getElementById(id).classList.add('ellipse-language');
    document.getElementById(id + '_mobile').classList.add('ellipse-language');
    document.getElementById(span_id).style.color ='#F8F5EC';
    document.getElementById(span_id + '_mobile').style.color ='#F8F5EC';
}

/**
 * This function removes the focus from language buttons
 */
function removeFocusFromLanguage(){
    document.getElementById('german').classList.remove('ellipse-language');
    document.getElementById('english').classList.remove('ellipse-language');
    document.getElementById('german_mobile').classList.remove('ellipse-language');
    document.getElementById('english_mobile').classList.remove('ellipse-language');
}

/**
 * This function set the default link color
 */
function removeColorLanguage(){
    document.getElementById('german_span').style.color = '#262E34';
    document.getElementById('english_span').style.color = '#262E34';
    document.getElementById('german_span_mobile').style.color = '#262E34';
    document.getElementById('english_span_mobile').style.color = '#262E34';
}

/**
 * This function set the language ID of page and write it to local storage
 * 
 * @param {string} id - includes the clicked language as string 
 */
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

/**
 * This function is used to change the design of language design of buttons during hover
 * 
 * @param {string} id - includes the id of button which is on hover effect 
 */
function onHoverLanguageDesign(id){
    if((languageID == 0) && (id == 'english')){
        languageDesignToEnglish();
    }
    if((languageID == 1) && (id == 'german')){
        languageDesignToGerman();
    }
}

/**
 * This function changes the button design on hover to english
 */
function languageDesignToEnglish(){
    document.getElementById('german').classList.remove('ellipse-language');
    document.getElementById('german_mobile').classList.remove('ellipse-language');
    document.getElementById('german_span').style.color ='#262E34';
    document.getElementById('german_span_mobile').style.color ='#262E34';
    document.getElementById('english_span').style.color ='#F8F5EC';
    document.getElementById('english_span_mobile').style.color ='#F8F5EC';
}

/**
 * This function changes the button design on hover to german
 */
function languageDesignToGerman(){
    document.getElementById('english').classList.remove('ellipse-language');
    document.getElementById('english_mobile').classList.remove('ellipse-language');
    document.getElementById('english_span').style.color = '#262E34';
    document.getElementById('english_span_mobile').style.color = '#262E34';
    document.getElementById('german_span').style.color = '#F8F5EC';
    document.getElementById('german_span_mobile').style.color = '#F8F5EC';
}

/**
 * This function changes the design of language buttons during mouse out effect
 */
function hoverOverLanguageDesign(){
    if(languageID == 0){
        onFocusLanguageDesign('german', 'german_span')
    }else{
        onFocusLanguageDesign('english', 'english_span');
    }
}

/**
 * This function is used to change any backroundImage of classes
 * 
 * @param {string} id - includes the id of container 
 * @param {string} classRemove - includes class name with old background image
 * @param {string} classAdd - includes class name with new background image 
 */
function changeBackgroundImage(id, classRemove, classAdd){
    document.getElementById(id).classList.remove(classRemove);
    document.getElementById(id).classList.add(classAdd);
}

/**
 * This function is used scroll to a selected section
 * 
 * @param {string} id - includes the id of scroll destination 
 */
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior: "smooth"});
    if(id == 'why_me_section'){onFocusDesign('why_me', 'link_why_me');}
    if(id == 'hero_section' || id == 'my_contact_section'){
        manualNavigation = true;
        if(id == 'hero_section'){
            onFocusDesign('', '');
        }else if(id == 'my_contact_section'){
            onFocusDesign('contact', 'link_contact');
        }
        setTimeout(() => {manualNavigation = false; }, 800);
    }
}

/**
 * This event listener is used to set the correct link on navbar during manual scrolling on page
 */
document.addEventListener('DOMContentLoaded', () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.nav-links');
    let observer = new IntersectionObserver(entries => {
        if(manualNavigation) return;
        entries.forEach(entry => {if(entry.isIntersecting){setButtonOnNavbar(entry.target.id);}});
    },{threshold: 0.4});
    sections.forEach(section => {observer.observe(section);});
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            manualNavigation = true;
            setTimeout(() =>{manualNavigation = false;}, 800);
        });
    });
});

/**
 * This function set the design of the link button on navbar
 * 
 * @param {string} contentId - includes the id of the actual focus section 
 */
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

/**
 * This function is used to open a website in a new tab
 * 
 * @param {string} path - includes the path of website 
 */
function openWebsite(path){
    window.open(path, "_blank");
}

/**
 * This function is used to open and close the mobile navbar
 * 
 * @param {event} event - includes the event to close the overlay if a click on body is recognized 
 */
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

/**
 * This function is used to close the nav mobile overlay
 */
function closeNavOverlay(){
    if(mobileNavActive){
        document.getElementById('nav_mobile').classList.add('invisible');
        document.getElementById('mobile_nav_btn').src = 'assets/icons/mobile/burger_button.svg';
        mobileNavActive = false;
    }
}

/**
 * This function is used to stop event bubbling
 * 
 * @param {event} event - includes the event which is bubbling to the top layer 
 */
function stopEventBubbling(event){
    event.stopPropagation();
}

/**
 * This function is used to change the icon of github link in mobile version
 */
function githubFooterAction(){
    changeIcon('github_footer_mobile', 'assets/icons/mobile/footer_github_mobile_active.svg');
    setTimeout(() => {
        changeIcon('github_footer_mobile', 'assets/icons/mobile/footer_github_mobile.svg');
    }, 800);
    openWebsite('https://github.com/XbatzoX');
}

/** This function is used to animate the section during first scroll */
document.addEventListener('DOMContentLoaded', () => {
    const animationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
    } , {threshold: 0.4});
    document.querySelectorAll('.animate-section').forEach(section => {
        animationObserver.observe(section);
    });
});