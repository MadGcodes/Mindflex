document.getElementById('signupForm').addEventListener('submit', function(event) {
    
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;
    
    if (password !== confirmpassword) {
        alert("Passwords do not match!");
    } else {
        alert("Account created successfully!");
    }
});

function togglePassword() {
    var passwordInput = document.getElementById('password');
    var confirmpassword = document.getElementById("confirmpassword");
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        confirmpassword.type = "text";
    } else {
        passwordInput.type = 'password';
        confirmpassword.type = "password";
    }
}

