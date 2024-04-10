import parallax from './components/parallax.js';
import activeMenu from './components/selected_menu.js';
import updateCopyright from './helpers/date_updater.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';
import changeLanguage from './helpers/lang.js';

document.addEventListener('DOMContentLoaded', function() {

    parallax();

    activeMenu();

    resetToHome();

    updateCopyright();

    sendEmail();

    changeLanguage();
});