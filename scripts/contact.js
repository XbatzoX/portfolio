let policyAccepted = false;
let submitButtonEnabled = false;
let validName = false;
let validMail = false;
let ValidMessage = false;
let contactLanguageId = 0;

function isMobileActive(id){
    let mobileActive = false;
    let contentSpanRef = document.getElementById(id);
    let contentDisplayRef = window.getComputedStyle(contentSpanRef).display;
    if(contentDisplayRef == "none"){
        mobileActive = true;
    }
    return mobileActive;
}

function checkContentOfName(){
    let contentInputRef = document.getElementById('input_name');
    let contentSpanRef = document.getElementById('input_name_title');
    let contentDivRef = document.getElementById('name_input_box');
    if(contentInputRef.value == '' || contentInputRef.value.length < 3){
        if(!isMobileActive('input_name_title')){
            if(contactLanguageId == 0){
                contentSpanRef.innerHTML = contactMeData.de.form.nameError;
            }else{
                contentSpanRef.innerHTML = contactMeData.en.form.nameError;
            }
            contentSpanRef.style.color = "#E44C36";
        }
        if(isMobileActive('input_name_title')){
            if(contactLanguageId == 0){
                contentInputRef.value = '';
                contentInputRef.placeholder = contactMeData.de.form.nameError;
            }else{
                contentInputRef.value = '';
                contentInputRef.placeholder = contactMeData.en.form.nameError;
            }
            contentInputRef.classList.add('input-error');
        }
        
        contentInputRef.style.border = "1px solid #E44C36";
        contentInputRef.style.backgroundColor = 'transparent';
        validName = false;
    }
    if(contentInputRef.value.length >= 3){
        contentSpanRef.innerHTML = '';
        contentInputRef.style.backgroundColor = 'transparent';
        contentInputRef.classList.add('bg-img-done');
        // contentDivRef.classList.add('input-height');
        validName = true;
    }
    checkInputFields();
}

function setContentNameOnFocus(){
    let contentInputRef = document.getElementById('input_name');
    let contentSpanRef = document.getElementById('input_name_title');
    let contentDivRef = document.getElementById('name_input_box');
    contentInputRef.classList.remove('bg-img-done');
    contentInputRef.style.backgroundColor = "rgba(250, 250, 250, 0.1)";
    contentInputRef.style.border = "1px solid #89BCD9";
    contentSpanRef.style.color = "#89BCD9";
    // contentDivRef.classList.remove('input-height');
    if(!isMobileActive('input_name_title')){
        if(contactLanguageId == 0){
            contentSpanRef.innerHTML = contactMeData.de.form.name;
        }else{
            contentSpanRef.innerHTML = contactMeData.en.form.name;
        }
    }
    if(isMobileActive('input_name_title')){
        if((contentInputRef.placeholder == contactMeData.de.form.nameError) || (contentInputRef.placeholder == contactMeData.en.form.nameError)){
            contentInputRef.value = '';
        }
        contentInputRef.classList.remove('input-error');
        if(contactLanguageId == 0){
            contentInputRef.placeholder = contactMeData.de.form.name;
        }else{
            contentInputRef.placeholder = contactMeData.en.form.name;
        }
    }
}

function checkMailInput(){
    let contentInputRef = document.getElementById('input_mail');
    let contentSpanRef = document.getElementById('input_mail_title');
    let contentDivRef = document.getElementById('mail_input_box');
    validMail = checkValidEmail(String(contentInputRef.value));
    if(validMail){
        contentSpanRef.innerHTML = '';
        contentInputRef.style.backgroundColor = 'transparent';
        contentInputRef.classList.add('bg-img-done');
    }else{
        if(!isMobileActive('input_mail_title')){
            if(contactLanguageId == 0){
                contentSpanRef.innerHTML = contactMeData.de.form.mailError;
            }else{
                contentSpanRef.innerHTML = contactMeData.en.form.mailError;
            }
            contentSpanRef.style.color = "#E44C36";
        }
        if(isMobileActive('input_mail_title')){
            contentInputRef.value = '';
            if(contactLanguageId == 0){
                contentInputRef.placeholder = contactMeData.de.form.mailError
            }else{
                contentInputRef.placeholder = contactMeData.en.form.mailError;
            }
            contentInputRef.classList.add('input-error');
        }
    
        contentInputRef.style.border = "1px solid #E44C36";
        contentInputRef.style.backgroundColor = 'transparent';
    }
    checkInputFields();
}

function checkValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function setContentMailOnFocus(){
    let contentInputRef = document.getElementById('input_mail');
    let contentSpanRef = document.getElementById('input_mail_title');
    let contentDivRef = document.getElementById('mail_input_box');
    contentInputRef.classList.remove('bg-img-done');
    contentInputRef.style.backgroundColor = "rgba(250, 250, 250, 0.1)";
    contentInputRef.style.border = "1px solid #89BCD9";
    contentSpanRef.style.color = "#89BCD9";
    if(!isMobileActive('input_mail_title')){
        if(contactLanguageId == 0){
            contentSpanRef.innerHTML = contactMeData.de.form.mail;
        }else{
            contentSpanRef.innerHTML = contactMeData.en.form.mail;
        }
    }
    if(isMobileActive('input_mail_title')){
        if(contactLanguageId == 0){
            contentInputRef.placeholder = contactMeData.de.form.mail;
        }else{
            contentInputRef.placeholder = contactMeData.en.form.mail;
        }
        contentInputRef.classList.remove('input-error');
    }
}

function checkContentOfMessage(){
    let contentInputRef = document.getElementById('input_message');
    let contentSpanRef = document.getElementById('input_message_title');
    let contentDivRef = document.getElementById('message_input_box');
    if(contentInputRef.value == '' || contentInputRef.value.length < 3){
        if(!isMobileActive('input_message_title')){
            if(contactLanguageId == 0){
                contentSpanRef.innerHTML = contactMeData.de.form.messageError;
            }else{
                contentSpanRef.innerHTML = contactMeData.en.form.messageError;
            }
            contentSpanRef.style.color = "#E44C36";
            contentDivRef.classList.remove('input-height-message');
        }
        if(isMobileActive('input_message_title')){
            contentInputRef.value = '';
            if(contactLanguageId == 0){
                contentInputRef.placeholder = contactMeData.de.form.messageError;
            }else{
                contentInputRef.placeholder = contactMeData.en.form.messageError;
            }
            contentInputRef.classList.add('input-error');
        }
        
        
        contentInputRef.style.border = "1px solid #E44C36";
        contentInputRef.style.backgroundColor = 'transparent';
        ValidMessage = false;
    }
    if(contentInputRef.value.length >= 3){
        contentSpanRef.innerHTML = '';
        contentInputRef.style.backgroundColor = 'transparent';
        contentInputRef.classList.add('bg-img-done');
        contentDivRef.classList.add('input-height-message');
        ValidMessage = true;
    }
    checkInputFields();
}

function setContentMessageOnFocus(){
    let contentInputRef = document.getElementById('input_message');
    let contentSpanRef = document.getElementById('input_message_title');
    let contentDivRef = document.getElementById('message_input_box');
    contentInputRef.classList.remove('bg-img-done');
    contentInputRef.style.backgroundColor = "rgba(250, 250, 250, 0.1)";
    contentInputRef.style.border = "1px solid #89BCD9";
    contentSpanRef.style.color = "#89BCD9";
    
    if(!isMobileActive('input_message_title')){
        if(contactLanguageId == 0){
            contentSpanRef.innerHTML = contactMeData.de.form.message;
        }else{
            contentSpanRef.innerHTML = contactMeData.en.form.message;
        }
        contentDivRef.classList.remove('input-height-message');
    }
    if(isMobileActive('input_message_title')){
        if((contentInputRef.placeholder == contactMeData.de.form.messageError) || (contentInputRef.placeholder == contactMeData.en.form.messageError)){
            contentInputRef.value = '';
        }
        if(contactLanguageId == 0){
            contentInputRef.placeholder = contactMeData.de.form.message;
        }else{
            contentInputRef.placeholder = contactMeData.en.form.message;
        }
        contentInputRef.classList.remove('input-error');
    }
    
}

function changePrivacyIcon(id, path){
    if(!policyAccepted){
        const contentIconRef = document.getElementById(id);
        contentIconRef.src = path;
    }
}

function toggleButtonPrivacyPolicy(){
    let policyButton = document.getElementById('privacy_btn');
    if(!policyAccepted){
        policyButton.src = 'assets/icons/privacy_checkbox_accepted.svg';
        policyAccepted = true;
        document.getElementById('privacy_container').classList.add('privacy-height');
        document.getElementById('privacy_error_text').classList.add('invisible');
    }else{
        policyButton.src = 'assets/icons/privacy_checkbox_hover.svg';
        policyAccepted = false;
    }
}

function checkInputFields(){
    let submitButton = document.getElementById('submit_btn');
    if(validName && validMail && ValidMessage){
        submitButton.disabled = false;
        submitButton.classList.remove('btn-disabled');
        submitButton.classList.add('btn-enabled');
    }else{
        submitButton.disabled = true;
        submitButton.classList.remove('btn-enabled');
        submitButton.classList.add('btn-disabled');
    }
}

function sendMessage(){
    let sendPermission = checkIfPrivacyPolicyAccepted();
    if(sendPermission){
        let inputDataObj = getInputData();
        sendForm(inputDataObj);
    }
}

function getInputData(){
    let inputData = {
        "name" : "",
        "email" : "",
        "message" : ""
    };
    inputData.name = document.getElementById('input_name').value;
    inputData.email = document.getElementById('input_mail').value;
    inputData.message = document.getElementById('input_message').value;
    return inputData;
}

async function sendForm(dataObj){
    let data = dataObj;
    let response = await fetch('https://benjamin-mahalbasic.de/contact.php', {
        method : 'POST',
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    let responseAsJson = await response.json();
    checkResponseOfPost(responseAsJson);
}

function checkResponseOfPost(resp){
    if(resp.success){
        if(contactLanguageId == 0){
            alert('mail erfolgreich gesendet');
        }else{
            alert('message sent successfully');
        }
        clearInputs();
    }else{
        if(contactLanguageId == 0){
            alert('Fehler: ' + resp.error);
        }else{
            alert('Error: ' + resp.error);
        } 
    }
}

function clearInputs(){
    document.getElementById('input_name').value = '';
    document.getElementById('input_mail').value = '';
    document.getElementById('input_message').value = '';
}

function checkIfPrivacyPolicyAccepted(){
    let sendPermission = true;
    let contentDivRef = document.getElementById('privacy_container');
    let contentImgRef = document.getElementById('privacy_btn');
    let contentSpanRef = document.getElementById('privacy_error_text');
    if(!policyAccepted){
        contentDivRef.classList.remove('privacy-height');
        contentImgRef.src = 'assets/icons/privacy_checkbox_error.svg';
        contentSpanRef.classList.remove('invisible');
        sendPermission = false;
    }
    return sendPermission;
}

function updatePlaceholder(){
    let inputName = document.getElementById('input_name');
    let inputMail = document.getElementById('input_mail');
    let inputMessage = document.getElementById('input_message');
    if(isMobileActive('input_name_title')){
        document.getElementById('message_input_box').classList.add('input-height-message');
        if(contactLanguageId == 0){
            setInputInfoGerman(inputName, 'input_name_title', 'name');
            // inputName.placeholder = contactMeData.de.form.name;
            setInputInfoGerman(inputMail, 'input_mail_title', 'mail');
            // inputMail.placeholder = contactMeData.de.form.mail;
            setInputInfoGerman(inputMessage, 'input_message_title', 'message');
            // inputMessage.placeholder = contactMeData.de.form.message;
        }else{
            setInputInfoEnglish(inputName, 'input_name_title', 'name');
            // inputName.placeholder = contactMeData.en.form.name;
            setInputInfoEnglish(inputMail, 'input_mail_title', 'mail');
            // inputMail.placeholder = contactMeData.en.form.mail;
            setInputInfoEnglish(inputMessage, 'input_message_title', 'message');
            // inputMessage.placeholder = contactMeData.en.form.message;
        }
        
    }else{
        if(contactLanguageId == 0){
            setDesktopInputInfoGerman(inputName, 'input_name_title', 'name');
            setDesktopInputInfoGerman(inputMail, 'input_mail_title', 'mail');
            setDesktopInputInfoGerman(inputMessage, 'input_message_title', 'message');
        }else{
            setDesktopInputInfoEnglish(inputName, 'input_name_title', 'name');
            setDesktopInputInfoEnglish(inputMail, 'input_mail_title', 'mail');
            setDesktopInputInfoEnglish(inputMessage, 'input_message_title', 'message');
        }
        inputName.placeholder = '';
        inputMail.placeholder = '';
        inputMessage.placeholder = '';
    }
}

function setInputInfoGerman(input, spanId, objName){
    let spanText = document.getElementById(spanId);
    if(spanText.innerHTML == contactMeData.de.form[objName] || (spanText.innerHTML == '' && input.placeholder != contactMeData.de.form[objName + 'Error'])){
        input.placeholder = contactMeData.de.form[objName];
        input.classList.remove('input-error');
    }else{
        input.placeholder = contactMeData.de.form[objName + 'Error'];
        input.classList.add('input-error');
    }
}

function setDesktopInputInfoGerman(input, spanId, objName){
    let spanText = document.getElementById(spanId);
    if(input.placeholder == contactMeData.de.form[objName] || (input.placeholder == '' && spanText.innerHTML != contactMeData.de.form[objName + 'Error'])){
        spanText.innerHTML = contactMeData.de.form[objName];
    }else{
        spanText.innerHTML = contactMeData.de.form[objName + 'Error'];
        spanText.style.color = '#E44C36';
    }
}

function setInputInfoEnglish(input, spanId, objName){
    let spanText = document.getElementById(spanId);
    if(spanText.innerHTML == contactMeData.en.form[objName] || (spanText.innerHTML == '' && input.placeholder != contactMeData.en.form[objName + 'Error'])){
        input.placeholder = contactMeData.en.form[objName];
        input.classList.remove('input-error');
    }else{
        input.placeholder = contactMeData.en.form[objName + 'Error'];
        input.classList.add('input-error');
    }
}

function setDesktopInputInfoEnglish(input, spanId, objName){
    let spanText = document.getElementById(spanId);
    if(input.placeholder == contactMeData.en.form[objName] || (input.placeholder == '' && spanText.innerHTML != contactMeData.en.form[objName + 'Error'])){
        spanText.innerHTML = contactMeData.en.form[objName];
    }else{
        spanText.innerHTML = contactMeData.en.form[objName + 'Error'];
        spanText.style.color = '#E44C36';
    }
}


window.addEventListener('resize', updatePlaceholder);
window.addEventListener('load', updatePlaceholder);