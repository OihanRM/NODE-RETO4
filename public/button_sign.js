const agreeCheckbox = document.getElementById('agreeCheckbox');
const signupButton = document.getElementById('signupButton');

agreeCheckbox.addEventListener('change', function() {
    if (this.checked) {
        signupButton.style.backgroundColor = 'green'; 
    } else {
        signupButton.style.backgroundColor = '#a0c4eb'; 
    }
});
