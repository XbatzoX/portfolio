let policyAccepted = false;
let submitButtonEnabled = false;
let validName = false;
let validMail = false;
let ValidMessage = false;
let contactLanguageId = 0;

/**
 * This function is used to check if mobile view is active
 * 
 * @param {string} id - includes the id of any tag if the attribute display none is active
 * @returns - a boolean feedback
 */
function isMobileActive(id){
    let mobileActive = false;
    let contentSpanRef = document.getElementById(id);
    let contentDisplayRef = window.getComputedStyle(contentSpanRef).display;
    if(contentDisplayRef == "none"){
        mobileActive = true;
    }
    return mobileActive;
}

/**
 * This function is used to check the value of input field name an gives a feedback
 */
function checkContentOfName(){
    let contentInputRef = document.getElementById('input_name');
    let contentSpanRef = document.getElementById('input_name_title');
    inputNameErrorInfo(contentSpanRef, contentInputRef);
    inputNameValidInfo(contentSpanRef, contentInputRef);
    checkInputFields();
}

/**
 * This function gives a designed feedback if the input name value is valid
 * 
 * @param {HTMLElement} contentSpanRef - includes the HTML element of info span
 * @param {HTMLElement} contentInputRef - includes the HTML element of input field 
 */
function inputNameValidInfo(contentSpanRef, contentInputRef){
    if(contentInputRef.value.length >= 3){
        contentSpanRef.innerHTML = '';
        contentInputRef.style.backgroundColor = 'transparent';
        contentInputRef.classList.add('bg-img-done');
        validName = true;
    }
}

/**
 * This function gives a designed feedback if the input name value is valid
 * 
 * @param {HTMLElement} contentSpanRef - includes the HTML element of info span
 * @param {HTMLElement} contentInputRef - includes the HTML element of input field 
 */
function inputNameErrorInfo(contentSpanRef, contentInputRef){
    if(contentInputRef.value == '' || contentInputRef.value.length < 3){
        inputNameInfoDesktop(contentSpanRef);
        inputNameInfoMobile(contentInputRef);
        contentInputRef.style.border = "1px solid #E44C36";
        contentInputRef.style.backgroundColor = 'transparent';
        validName = false;
    }
}

/**
 * This function gives the error message in desktop view of name input field in the correct language
 * 
 * @param {HTMLElement} contentSpanRef - includes the HTML element of info span
 */
function inputNameInfoDesktop(contentSpanRef){
    if(!isMobileActive('input_name_title')){
        if(contactLanguageId == 0){
            contentSpanRef.innerHTML = contactMeData.de.form.nameError;
        }else{
            contentSpanRef.innerHTML = contactMeData.en.form.nameError;
        }
    contentSpanRef.style.color = "#E44C36";
    }
}

/**
 * This function gives the error message in mobile view of name input field in the correct language
 * 
 * @param {HTMLElement} contentInputRef - includes the HTML element of info span
 */
function inputNameInfoMobile(contentInputRef){
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
}

/**
 * This function is used to set the design of input field name if the field is on focus
 */
function setContentNameOnFocus(){
    let contentInputRef = document.getElementById('input_name');
    let contentSpanRef = document.getElementById('input_name_title');
    contentInputRef.classList.remove('bg-img-done');
    contentInputRef.style.backgroundColor = "rgba(250, 250, 250, 0.1)";
    contentInputRef.style.border = "1px solid #89BCD9";
    contentSpanRef.style.color = "#89BCD9";
    inputNameFocusDesktop(contentSpanRef);
    inputNameFocusMobile(contentInputRef)
}

/**
 * This function set the correct language info in desktop view of name span (onFocus)
 * 
 * @param {HTMLElement} contentSpanRef - includes the HTML element of info span 
 */
function inputNameFocusDesktop(contentSpanRef){
    if(!isMobileActive('input_name_title')){
        if(contactLanguageId == 0){
            contentSpanRef.innerHTML = contactMeData.de.form.name;
        }else{
            contentSpanRef.innerHTML = contactMeData.en.form.name;
        }
    }
}

/**
 * This function set the correct language info in mobile view of input name placeholder
 * 
 * @param {HTMLElement} contentInputRef - includes element of input field 
 */
function inputNameFocusMobile(contentInputRef){
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

/**
 * This function checks the input value of mail if the input is valid
 */
function checkMailInput(){
    let contentInputRef = document.getElementById('input_mail');
    let contentSpanRef = document.getElementById('input_mail_title');
    validMail = checkValidEmail(String(contentInputRef.value));
    if(validMail){
        contentSpanRef.innerHTML = '';
        contentInputRef.classList.add('bg-img-done');
    }else{
        inputMailErrorInfoDesktop(contentSpanRef);
        inputMailErrorInfoMobile(contentInputRef);
        contentInputRef.style.border = "1px solid #E44C36";
    }
    contentInputRef.style.backgroundColor = 'transparent';
    checkInputFields();
}

/**
 * This function gives an error designed info in correct language of mail input field in desktop view
 * 
 * @param {HTMLElement} contentSpanRef - includes the html element of info span 
 */
function inputMailErrorInfoDesktop(contentSpanRef){
    if(!isMobileActive('input_mail_title')){
        if(contactLanguageId == 0){
            contentSpanRef.innerHTML = contactMeData.de.form.mailError;
        }else{
            contentSpanRef.innerHTML = contactMeData.en.form.mailError;
        }
        contentSpanRef.style.color = "#E44C36";
    }
}

/**
 * This function gives an error designed info in correct language of mail input field in mobile view
 * 
 * @param {HTMLElement} contentInputRef - - includes the html element of input field 
 */
function inputMailErrorInfoMobile(contentInputRef){
    if(isMobileActive('input_mail_title')){
        contentInputRef.value = '';
        if(contactLanguageId == 0){
            contentInputRef.placeholder = contactMeData.de.form.mailError
        }else{
            contentInputRef.placeholder = contactMeData.en.form.mailError;
        }
        contentInputRef.classList.add('input-error');
    }
}

/**
 * This function checks if the input value is a valid mail address
 * 
 * @param {string} email - includes the value of input field 
 * @returns - a boolean feedback
 */
function checkValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * This function designed the mail input box if the input field is on focus
 */
function setContentMailOnFocus(){
    let contentInputRef = document.getElementById('input_mail');
    let contentSpanRef = document.getElementById('input_mail_title');
    contentInputRef.classList.remove('bg-img-done');
    contentInputRef.style.backgroundColor = "rgba(250, 250, 250, 0.1)";
    contentInputRef.style.border = "1px solid #89BCD9";
    contentSpanRef.style.color = "#89BCD9";
    inputMailFocusDesktop(contentSpanRef);
    inputMailFocusMobile(contentInputRef);
}

/**
 * This function set the correct language info into span in desktop view
 * 
 * @param {HTMLElement} contentSpanRef - includes html element of info span 
 */
function inputMailFocusDesktop(contentSpanRef){
    if(!isMobileActive('input_mail_title')){
        if(contactLanguageId == 0){
            contentSpanRef.innerHTML = contactMeData.de.form.mail;
        }else{
            contentSpanRef.innerHTML = contactMeData.en.form.mail;
        }
    }
}

/**
 * This function set the correct language info into placeholder in mobile view of mail input field
 * 
 * @param {HTMLElement} contentInputRef - includes html element of input field 
 */
function inputMailFocusMobile(contentInputRef){
    if(isMobileActive('input_mail_title')){
        if(contactLanguageId == 0){
            contentInputRef.placeholder = contactMeData.de.form.mail;
        }else{
            contentInputRef.placeholder = contactMeData.en.form.mail;
        }
        contentInputRef.classList.remove('input-error');
    }
}

/**
 * This function is used to check the input value of message box
 */
function checkContentOfMessage(){
    let contentInputRef = document.getElementById('input_message');
    let contentSpanRef = document.getElementById('input_message_title');
    let contentDivRef = document.getElementById('message_input_box');
    if(contentInputRef.value == '' || contentInputRef.value.length < 3){
        inputMessageErrorData(contentSpanRef, contentInputRef, contentDivRef);
    }
    if(contentInputRef.value.length >= 3){
        inputMessageValidData(contentSpanRef, contentInputRef, contentDivRef);
    }
    checkInputFields();
}

/**
 * This function is used to set the error message of message input value
 * 
 * @param {HTMLElement} contentSpanRef - includes the html element of span info 
 * @param {HTMLElement} contentInputRef - includes the html element of placeholder from textarea 
 */
function inputMessageErrorData(contentSpanRef, contentInputRef, contentDivRef){
    inputMessageErrorDesktop(contentSpanRef, contentDivRef);
    inputMessageErrorMobile(contentInputRef);
    contentInputRef.style.border = "1px solid #E44C36";
    contentInputRef.style.backgroundColor = 'transparent';
    ValidMessage = false;
}

/**
 * This function creates a design info of valid input data of message text area
 * 
 * @param {HTMLElement} contentSpanRef - includes html element of info span
 * @param {HTMLElement} contentInputRef - includes html element of textarea (placeholder)
 * @param {HTMLElement} contentDivRef - includes html element of message container
 */
function inputMessageValidData(contentSpanRef, contentInputRef, contentDivRef){
    contentSpanRef.innerHTML = '';
    contentInputRef.style.backgroundColor = 'transparent';
    contentInputRef.classList.add('bg-img-done');
    contentDivRef.classList.add('input-height-message');
    ValidMessage = true;
}

/**
 * This function set the correct language error info of input message in desktop view
 * 
 * @param {HTMLElement} contentSpanRef - includes the html element of info span
 * @param {HTMLElement} contentDivRef  - includes the html element of message container
 */
function inputMessageErrorDesktop(contentSpanRef, contentDivRef){
    if(!isMobileActive('input_message_title')){
        if(contactLanguageId == 0){
            contentSpanRef.innerHTML = contactMeData.de.form.messageError;
        }else{
            contentSpanRef.innerHTML = contactMeData.en.form.messageError;
        }
        contentSpanRef.style.color = "#E44C36";
        contentDivRef.classList.remove('input-height-message');
    }
}

/**
 * This function set the correct language error info of input message in mobile view
 * 
 * @param {HTMLElement} contentInputRef - includes html element of textarea tag 
 */
function inputMessageErrorMobile(contentInputRef){
    if(isMobileActive('input_message_title')){
        contentInputRef.value = '';
        if(contactLanguageId == 0){
            contentInputRef.placeholder = contactMeData.de.form.messageError;
        }else{
            contentInputRef.placeholder = contactMeData.en.form.messageError;
        }
        contentInputRef.classList.add('input-error');
    }
}

/**
 * This function is used to gives designed feedback if the input field is on focus
 */
function setContentMessageOnFocus(){
    let contentInputRef = document.getElementById('input_message');
    let contentSpanRef = document.getElementById('input_message_title');
    let contentDivRef = document.getElementById('message_input_box');
    contentInputRef.classList.remove('bg-img-done');
    contentInputRef.style.backgroundColor = "rgba(250, 250, 250, 0.1)";
    contentInputRef.style.border = "1px solid #89BCD9";
    contentSpanRef.style.color = "#89BCD9";
    inputMessageFocusDesktop(contentSpanRef, contentDivRef);
    inputMessageFocusMobile(contentInputRef);
}

/**
 * This function gives on Focus feedback in desktop view
 * 
 * @param {HTMLElement} contentSpanRef - includes html element of info span 
 * @param {HTMLElement} contentDivRef - includes html element of message container 
 */
function inputMessageFocusDesktop(contentSpanRef, contentDivRef){
    if(!isMobileActive('input_message_title')){
        if(contactLanguageId == 0){
            contentSpanRef.innerHTML = contactMeData.de.form.message;
        }else{
            contentSpanRef.innerHTML = contactMeData.en.form.message;
        }
        contentDivRef.classList.remove('input-height-message');
    }
}

/**
 * This function gives on focus feedback in mobile view
 * 
 * @param {HTMLElement} contentInputRef - includes html element of textarea field 
 */
function inputMessageFocusMobile(contentInputRef){
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

/**
 * This function is used to change the privacy button image after user action
 * 
 * @param {string} id - includes id of privacy policy button container 
 * @param {string} path - includes path of image 
 */
function changePrivacyIcon(id, path){
    if(!policyAccepted){
        const contentIconRef = document.getElementById(id);
        contentIconRef.src = path;
    }
}

/**
 * This function changes the image of privacy button after clicked actions
 */
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

/**
 * This function activate/deactivate the submit button after checking all values of input fields
 */
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

/**
 * This function is used to checks if privacy policy is accepted and send the formular to domain
 */
function sendMessage(){
    let sendPermission = checkIfPrivacyPolicyAccepted();
    if(sendPermission){
        let inputDataObj = getInputData();
        sendForm(inputDataObj);
    }
}

/**
 * This function creates an object filled with input values
 * 
 * @returns - an object filled with input values
 */
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

/**
 * This function send the formular to damoin
 * 
 * @param {object} dataObj - includes an object with input values
 */
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

/**
 * This function is used to gives the user a feedback if formular was sent
 * 
 * @param {json} resp - includes a json with response feedback
 */
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

/**
 * This function is used to clear the input fields of formular
 */
function clearInputs(){
    document.getElementById('input_name').value = '';
    document.getElementById('input_mail').value = '';
    document.getElementById('input_message').value = '';
}

/**
 * This function checks if privacy policy is accepted
 * 
 * @returns - a boolean feedback
 */
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
            setInputInfoGerman(inputMail, 'input_mail_title', 'mail');
            setInputInfoGerman(inputMessage, 'input_message_title', 'message');
        }else{
            setInputInfoEnglish(inputName, 'input_name_title', 'name');
            setInputInfoEnglish(inputMail, 'input_mail_title', 'mail');
            setInputInfoEnglish(inputMessage, 'input_message_title', 'message');
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