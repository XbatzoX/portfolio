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