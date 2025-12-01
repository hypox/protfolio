document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. INITIALISEER ANIMATIES (AOS) ---
    // We checken eerst of AOS geladen is om foutmeldingen te voorkomen
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true
        });
    }

    // --- 2. HEADER LADEN & DARK MODE LOGICA ---
    fetch('shared/header.html')
        .then(response => {
            if (!response.ok) throw new Error("Header not found");
            return response.text();
        })
        .then(data => {
            document.getElementById('header').innerHTML = data;

            // Nu de header er is, kunnen we de Dark Mode knop zoeken
            const toggleSwitch = document.querySelector('#checkbox');
            const currentTheme = localStorage.getItem('theme');

            // Check eerdere keuze uit localStorage
            if (currentTheme) {
                document.body.classList.add(currentTheme);
                // Zet het schuifje goed als light mode aan staat
                if (currentTheme === 'light-mode' && toggleSwitch) {
                    toggleSwitch.checked = true;
                }
            }

            // Luister naar klik op de schakelaar
            if (toggleSwitch) {
                toggleSwitch.addEventListener('change', function (e) {
                    if (e.target.checked) {
                        document.body.classList.add('light-mode');
                        localStorage.setItem('theme', 'light-mode');
                    } else {
                        document.body.classList.remove('light-mode');
                        localStorage.setItem('theme', null);
                    }
                });
            }
        })
        .catch(error => console.error('Error loading header:', error));

    // --- 3. FOOTER LADEN ---
    fetch('shared/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer').innerHTML = data);


    // --- 4. CONTACT FORMULIER LOGICA ---
    const form = document.getElementById('myForm');
    const submitBtn = document.getElementById('submitButton');
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('confirmationModal');
    const confirmBtn = document.getElementById('confirmButton');
    const cancelBtn = document.getElementById('cancelButton');

    // Alleen uitvoeren als het formulier op de pagina bestaat (voorkomt fouten op andere pagina's)
    if (form) {
        submitBtn.addEventListener('click', (e) => {
            if (form.checkValidity()) {
                e.preventDefault();
                overlay.style.display = 'block';
                modal.style.display = 'block';
            } else {
                // Forceer de browser om validatie foutmeldingen te tonen
                form.reportValidity();
            }
        });

        cancelBtn.addEventListener('click', () => {
            overlay.style.display = 'none';
            modal.style.display = 'none';
        });

        confirmBtn.addEventListener('click', () => {
            alert('Bericht verstuurd! (Simulatie)');
            // form.submit(); // Uncomment dit als je het echt wilt versturen
            overlay.style.display = 'none';
            modal.style.display = 'none';
            form.reset(); // Maak formulier leeg na verzenden
        });
    }
});