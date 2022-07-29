document.addEventListener("DOMContentLoaded", () => {
    navScrolling();
    toggleButton();
    activeLink();
    formSubmit();
});

const navScrolling = () => {
    let nav = document.querySelector('nav');

    window.addEventListener('scroll', (e) => {
        if (window.pageYOffset > 100) {
            nav.classList.add('nav-scrolling');
        } else {
            nav.classList.remove('nav-scrolling');
        }
    });
} 

const toggleButton = () => {
    const icon = document.querySelector('.toggle');

    icon.addEventListener('click', (e) => {
        document.querySelectorAll('.nav-menu-mobile').forEach(nav => nav.classList.toggle('toggle-show'));
    
        if (icon.classList.contains('teste')) {
            icon.innerHTML = '<i class="fa fa-angle-down"></i>';
            icon.classList.remove('teste');
        } else {
            icon.innerHTML ='<i class="fa fa-angle-up"> </i>';
            icon.classList.add('teste');
        }
    });
}

const activeLink = () => {
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.pageYOffset
    
        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 300;

            sectionId = current.getAttribute('id');
    
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
            } else {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
            }
        });
    }

    window.addEventListener('scroll', scrollActive);
}

const formSubmit = () => {
    const form = document.querySelector('#contactForm');
    const button = document.querySelector('#btnForm');
    let name = document.getElementById('contactName');
    let subject = document.getElementById('contactSubject');
    let email = document.getElementById('contactEmail');
    let message = document.getElementById('contactMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        button.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>';

        let formData = {
            name: name.value,
            subject: subject.value,
            email: email.value,
            message: message.value,
        }

        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onload = function() {
            button.innerHTML = '<i class="fas fa-paper-plane"></i>';

            if (xhr.status == 200) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Email enviado!',
                    showConfirmButton: false,
                    timer: 1500
                });

                name.value = '';
                subject.value = '';
                email.value = '';
                message.value = '';
            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Ocorreu um erro, tente novamente mais tarde.',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

        xhr.send(JSON.stringify(formData));
    });
}
