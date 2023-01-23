




    let email = document.getElementById('Email');
    let password = document.getElementById('Password');

function validated() {
    // e.preventDefault();

    if (email.value.length < 8) {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
	}
    else if (email.value.length >= 9) {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
		
	}
	if (password.value.length < 5) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}
    else if (password.value.length >= 6) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
    
}
