let policyAccepted = false;

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

/**
 * This function is used to update the placeholders of input field if the screen changes in size or load new
 */
function updatePlaceholder(){
    let inputName = document.getElementById('input_name');
    let inputMail = document.getElementById('input_mail');
    let inputMessage = document.getElementById('input_message');
    if(isMobileActive('input_name_title')){
        updatePlaceholderMobile(inputName, inputMail, inputMessage);
    }else{
        updatePlaceholderDesktop(inputName, inputMail, inputMessage);
    }
}

/**
 * This function places the correct infos in mobile view
 * 
 * @param {HTMLElement} inputName - includes the html element of name input field 
 * @param {HTMLElement} inputMail - includes the html element of mail input field
 * @param {HTMLElement} inputMessage - includes the html element of message field
 */
function updatePlaceholderMobile(inputName, inputMail, inputMessage){
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
}

/**
 * 
 * @param {HTMLElement} inputName - includes the html element of name input field
 * @param {HTMLElement} inputMail - includes the html element of mail input field
 * @param {HTMLElement} inputMessage - includes the html element of message field
 */
function updatePlaceholderDesktop(inputName, inputMail, inputMessage){
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

/**
 * This function is used to set the correct info data of input field in german
 * 
 * @param {HTMLElement} input - includes the html element of input field
 * @param {string} spanId - includes the id of span info tag
 * @param {string} objName - includes the name of destination to load data from data object
 */
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

/**
 * This function set input value infos in german at desktop view
 * 
 * @param {HTMLElement} input - includes the html element of input field
 * @param {string} spanId - includes the id of span info tag
 * @param {string} objName - includes the name of destination to load data from data object
 */
function setDesktopInputInfoGerman(input, spanId, objName){
    let spanText = document.getElementById(spanId);
    if(input.placeholder == contactMeData.de.form[objName] || (input.placeholder == '' && spanText.innerHTML != contactMeData.de.form[objName + 'Error'])){
        spanText.innerHTML = contactMeData.de.form[objName];
    }else{
        spanText.innerHTML = contactMeData.de.form[objName + 'Error'];
        spanText.style.color = '#E44C36';
    }
}

/**
 * This function is used to set the correct info data of input field in english
 * 
 * @param {HTMLElement} input - includes the html element of input field
 * @param {string} spanId - includes the id of span info tag
 * @param {string} objName - includes the name of destination to load data from data object
 */
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

/**
 * This function set input value infos in english at desktop view
 * 
 * @param {HTMLElement} input - includes the html element of input field
 * @param {string} spanId - includes the id of span info tag
 * @param {string} objName - includes the name of destination to load data from data object
 */
function setDesktopInputInfoEnglish(input, spanId, objName){
    let spanText = document.getElementById(spanId);
    if(input.placeholder == contactMeData.en.form[objName] || (input.placeholder == '' && spanText.innerHTML != contactMeData.en.form[objName + 'Error'])){
        spanText.innerHTML = contactMeData.en.form[objName];
    }else{
        spanText.innerHTML = contactMeData.en.form[objName + 'Error'];
        spanText.style.color = '#E44C36';
    }
}

/**
 * This event listeners are used to set the function update placeholder if the window is load or resized
 */
window.addEventListener('resize', updatePlaceholder);
window.addEventListener('load', updatePlaceholder);