let languageID = 0;

function init(){
    onFocusLanguageDesign('german', 'german_span');
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