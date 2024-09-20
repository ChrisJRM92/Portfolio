
    function changeLanguage() {
        // Obtener el checkbox
        var checkbox = document.getElementById('language-toggle');
        
        // Obtener el idioma seleccionado
        var language = checkbox.checked ? 'en' : 'es';
        
        // Cargar el archivo JSON correspondiente
        fetch('../assets/lang/' + language + '.json')
        .then(response => response.json())
        .then(data => {
            // Actualizar el texto según las traducciones
            // var content = data.content;
            // document.getElementById('content').textContent = content;
            document.getElementById('nav_home').textContent = data.nav_home;
            document.getElementById('nav_about').textContent = data.nav_about;
            document.getElementById('nav_skills').textContent = data.nav_skills;
            document.getElementById('nav_portfolio').textContent = data.nav_portfolio;
            document.getElementById('nav_contact').textContent = data.nav_contact;
            
            document.getElementById('home__title').textContent = data.home__title;
            document.getElementById('home__description').textContent = data.home__description;
            document.getElementById('download__CV').textContent = data.download__CV;
            
            document.getElementById('about__me').textContent = data.about__me;
            document.getElementById('about__description').textContent = data.about__description;
            
            document.getElementById('skills_title').textContent = data.skills_title;
            document.getElementById('skills__description').textContent = data.skills__description;
            document.getElementById('skills_html5').textContent = data.skills_html5;
            document.getElementById('skills_css').textContent = data.skills_css;
            document.getElementById('skills_js').textContent = data.skills_js;
            document.getElementById('skills_react').textContent = data.skills_react;
            document.getElementById('soft_skills').textContent = data.soft_skills;
            document.getElementById('skill_1').textContent = data.skill_1;
            document.getElementById('skill_2').textContent = data.skill_2;
            document.getElementById('skill_3').textContent = data.skill_3;
            document.getElementById('skill_4').textContent = data.skill_4;
            document.getElementById('skill_5').textContent = data.skill_5;
            document.getElementById('skill_6').textContent = data.skill_6;
            
            document.getElementById('projects_title').textContent = data.projects_title;
            document.getElementById('project_1').textContent = data.project_1;
            document.getElementById('project_1_description').textContent = data.project_1_description;
            document.getElementById('see_demo').textContent = data.see_demo;
            document.getElementById('see_code').textContent = data.see_code;
            document.getElementById('project_2').textContent = data.project_2;
            document.getElementById('project_2_description').textContent = data.project_2_description;
            
            document.getElementById('contact_title').textContent = data.contact_title;
            document.getElementById('contact_information').textContent = data.contact_information;
            document.getElementById('contact_description').textContent = data.contact_description;
            document.getElementById('whatsapp_message').textContent = data.whatsapp_message;
            document.getElementById('send_message').textContent = data.send_message;
            document.getElementById('name_name').textContent = data.name_name;
            document.getElementById('email_email').textContent = data.email_email;
            document.getElementById('subject_subject').textContent = data.subject_subject;
            document.getElementById('message_message').textContent = data.message_message;
            document.getElementById('form_dialog').textContent = data.form_dialog;
            document.getElementById('btn_close-modal').textContent = data.btn_close-modal;
            document.getElementById('send_send').textContent = data.send_send;

            document.getElementById('footer__description').textContent = data.footer__description;
            document.getElementById('social_title').textContent = data.social_title;
            document.getElementById('copyright').textContent = data.copyright;

        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
    }
    // Event listener para el checkbox
    document.getElementById('language-toggle').addEventListener('change', function() {
        changeLanguage();
    });

    // Llamar a la función al cargar la página para establecer el idioma inicial
    changeLanguage();

export default changeLanguage;