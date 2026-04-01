/**
 * This function is used to open and close the form dialog after submit
 * 
 * @param {string} text - includes content of dialog message 
 */
function openFormDialog(text){
    let contentDialogRef = document.getElementById('form_dialog');
    let contentSpanRef = document.getElementById('dialog_message');
    contentSpanRef.innerHTML = text;
    contentDialogRef.showModal();
    contentDialogRef.classList.add('opened');
    setTimeout(() => {
        closeFormDialog(contentDialogRef);
    }, 2000);
}

/**
 * This function is used to close the dialog
 * 
 * @param {HTMLElement} element - includes the html element from dialog 
 */
function closeFormDialog(element){
    const contentDialogRef = element;
    contentDialogRef.close();
    contentDialogRef.classList.remove('opened');
}