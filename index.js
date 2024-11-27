const form = document.getElementById('login-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const emailPhone = document.getElementById('email-phone').value;
            const password = document.getElementById('password').value;
            const formData = {
                emailPhone: emailPhone,
                password: password
            };
            console.log(formData);
        });