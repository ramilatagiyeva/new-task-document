const form = document.getElementById('signup-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const day = document.getElementById('day').value;
            const month = document.getElementById('month').value;
            const year = document.getElementById('year').value;
            const gender = document.querySelector('input[name="gender"]:checked')?.value;
            const formData = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                birthday: {
                    day: day,
                    month: month,
                    year: year
                },
                gender: gender
            };
            console.log(formData);
        });