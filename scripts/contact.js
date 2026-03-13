function checkContentOfName(){
    let contentInputRef = document.getElementById('input_name');
    let contentSpanRef = document.getElementById('input_name_title');
    let contentDivRef = document.getElementById('name_input_box');
    if(contentInputRef.value == '' || contentInputRef.value.length < 3){
        contentDivRef.classList.remove('input-height');
        contentSpanRef.innerHTML = 'Dein Name ist erforderlich';
        contentSpanRef.style.color = "#E44C36";
        contentInputRef.style.border = "1px solid #E44C36";
        contentInputRef.style.backgroundColor = 'transparent';
    }
    if(contentInputRef.value.length >= 3){
        contentSpanRef.innerHTML = '';
        contentInputRef.style.backgroundColor = 'transparent';
        contentInputRef.classList.add('bg-img-done');
        contentDivRef.classList.add('input-height');
    }
}

function setContentNameOnFocus(){
    let contentInputRef = document.getElementById('input_name');
    let contentSpanRef = document.getElementById('input_name_title');
    let contentDivRef = document.getElementById('name_input_box');
    contentInputRef.classList.remove('bg-img-done');
    contentInputRef.style.backgroundColor = "rgba(250, 250, 250, 0.1)";
    contentInputRef.style.border = "1px solid #89BCD9";
    contentSpanRef.style.color = "#89BCD9";
    contentDivRef.classList.remove('input-height');
    contentSpanRef.innerHTML = 'Dein Name';
}