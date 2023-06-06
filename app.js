const error = document.getElementById('error');
const errorMessage = document.getElementById('error-message');



function getValue() {
    const inputElement = document.getElementById('input');
    const value = inputElement.value;
    validateEmail(value)


}



function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        console.log('dogru')
        return true
    } else {
        error.classList.add('active')
        errorMessage.classList.add('active')
        console.log('yanlis')
     
        return false
    }
}