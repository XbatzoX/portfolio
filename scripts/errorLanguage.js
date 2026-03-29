/*** This function is used to change the error messages of input fields into german*/
function checkIfErrorMessageGerman(){
    checkErrorNameGerman();
    checkErrorMailGerman();
    checkErrorMessageGerman();
}

/*** This function changes name error into german*/
function checkErrorNameGerman(){
    let spanName = document.getElementById('input_name_title');
    if(spanName.innerHTML == contactMeData.en.form.nameError){
        spanName.innerHTML = contactMeData.de.form.nameError;
    }else{
        spanName.innerHTML = contactMeData.de.form.name;
    }
}

/*** This function changes mail error into german*/
function checkErrorMailGerman(){
    let spanMail = document.getElementById('input_mail_title');
    if(spanMail.innerHTML == contactMeData.en.form.mailError){
        spanMail.innerHTML = contactMeData.de.form.mailError;
    }else{
        spanMail.innerHTML = contactMeData.de.form.mail;
    }
}

/*** This function changes message error into german*/
function checkErrorMessageGerman(){
    let spanMessage = document.getElementById('input_message_title');
    if(spanMessage.innerHTML == contactMeData.en.form.messageError){
        spanMessage.innerHTML = contactMeData.de.form.messageError;
    }else{
        spanMessage.innerHTML = contactMeData.de.form.message;
    }
}

/*** This function changes the error messages of placeholders in mobile view into german*/
function checkIfErrorMessageGermanMobile(){
    checkErrorNameGermanMobile();
    checkErrorMailGermanMobile();
    checkErrorMessageGermanMobile();
}

/*** This function changes the error message of placeholder into german*/
function checkErrorNameGermanMobile(){
    let inputName = document.getElementById('input_name');
    if(inputName.placeholder == contactMeData.en.form.nameError){
        inputName.placeholder = contactMeData.de.form.nameError;
    }else{
        inputName.placeholder = contactMeData.de.form.name;
    }
}

/*** This function changes the error message of placeholder into german*/
function checkErrorMailGermanMobile(){
    let inputMail = document.getElementById('input_mail');
    if(inputMail.placeholder == contactMeData.en.form.mailError){
        inputMail.placeholder = contactMeData.de.form.mailError;
    }else{
        inputMail.placeholder = contactMeData.de.form.mail;
    }
}

/*** This function changes the error message of placeholder into german*/
function checkErrorMessageGermanMobile(){
    let inputMessage = document.getElementById('input_message');
    if(inputMessage.placeholder == contactMeData.en.form.messageError){
        inputMessage.placeholder = contactMeData.de.form.messageError;
    }else{
        inputMessage.placeholder = contactMeData.de.form.message;
    }
}

/*** This function changes the error messages of input fields into english*/
function checkIfErrorMessageEnglish(){
    checkErrorNameEnglish();
    checkErrorMailEnglish();
    checkErrorMessageEnglish();
}

/** This function changes the name error message into english */
function checkErrorNameEnglish(){
    let spanName = document.getElementById('input_name_title');
    if(spanName.innerHTML == contactMeData.de.form.nameError){
        spanName.innerHTML = contactMeData.en.form.nameError;
    }else{
        spanName.innerHTML = contactMeData.en.form.name;
    }
}

/** This function changes the mail error message into english */
function checkErrorMailEnglish(){
    let spanMail = document.getElementById('input_mail_title');
    if(spanMail.innerHTML == contactMeData.de.form.mailError){
        spanMail.innerHTML = contactMeData.en.form.mailError;
    }else{
        spanMail.innerHTML = contactMeData.en.form.mail;
    }
}

/** This function changes the teaxtarea field error message into english */
function checkErrorMessageEnglish(){
    let spanMessage = document.getElementById('input_message_title');
    if(spanMessage.innerHTML == contactMeData.de.form.messageError){
        spanMessage.innerHTML = contactMeData.en.form.messageError;
    }else{
        spanMessage.innerHTML = contactMeData.en.form.message;
    }
}

/** This function changes the error messages from placeholders in mobile view */
function checkIfErrorMessageEnglishMobile(){
    checkErrorNameEnglishMobile();
    checkErrorMailEnglishMobile();
    checkErrorMessageEnglishMobile();
}

/** This function changes the error message of placeholder into english */
function checkErrorNameEnglishMobile(){
    let inputName = document.getElementById('input_name');
    if(inputName.placeholder == contactMeData.de.form.nameError){
        inputName.placeholder = contactMeData.en.form.nameError;
    }else{
        inputName.placeholder = contactMeData.en.form.name;
    }
}

/** This function changes the error message of placeholder into english */
function checkErrorMailEnglishMobile(){
    let inputMail = document.getElementById('input_mail');
    if(inputMail.placeholder == contactMeData.de.form.mailError){
        inputMail.placeholder = contactMeData.en.form.mailError;
    }else{
        inputMail.placeholder = contactMeData.en.form.mail;
    }
}

/** This function changes the error message of placeholder into english */
function checkErrorMessageEnglishMobile(){
    let inputMessage = document.getElementById('input_message');
    if(inputMessage.placeholder == contactMeData.de.form.messageError){
        inputMessage.placeholder = contactMeData.en.form.messageError;
    }else{
        inputMessage.placeholder = contactMeData.en.form.message;
    }
}