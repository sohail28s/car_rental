emailjs.init('zAwudlSUcZQfCgDCE');
        document.getElementById('emailForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const btn = document.getElementById('button');
            btn.textContent = 'Sending...'; 
            const serviceID = 'service_9gx59kh';
            const templateID = 'template_h297otb';
            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.textContent = 'Subscribe';
                    alert('Subscription successful! Check your inbox.');
                })
                .catch((err) => {
                    btn.textContent = 'Subscribe';
                    alert('Failed to subscribe: ' + JSON.stringify(err));
                });
        });