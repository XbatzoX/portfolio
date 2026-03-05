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
    document.getElementById(id).classList.add('ellipse');
    document.getElementById(link_id).style.color = '#F8F5EC';
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
    document.getElementById(id).classList.add('ellipse-language');
    document.getElementById(span_id).style.color ='#F8F5EC';
}

function removeFocusFromLanguage(){
    document.getElementById('german').classList.remove('ellipse-language');
    document.getElementById('english').classList.remove('ellipse-language');
}