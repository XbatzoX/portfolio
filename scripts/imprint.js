function initImprint(){
    onFocusLanguageDesign('german', 'german_span');
}

function goToHeroPage(){
    window.location.href = '../index.html#hero_section';
}

function goToContactSection(){
    window.location.href = '../index.html#my_contact_section';
}

function githubImprintFooterAction(){
    changeIcon('github_footer_mobile', '../assets/icons/mobile/footer_github_mobile_active.svg');
    setTimeout(() => {
        changeIcon('github_footer_mobile', '../assets/icons/mobile/footer_github_mobile.svg');
    }, 800);
    openWebsite('https://github.com/XbatzoX');
}