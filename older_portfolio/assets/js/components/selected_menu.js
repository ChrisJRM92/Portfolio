const navbarListDOM = document.querySelector('.navbar__list');
const navbarLinks = document.querySelectorAll('.navbar__link');
const sections = document.querySelectorAll('section');

function activeMenu() {
	const scrollPosition = window.scrollY + 100;

	sections.forEach((section, index) => {
		if (
			scrollPosition >= section.offsetTop &&
			scrollPosition < section.offsetTop + section.offsetHeight
		) {
			const activeLink = navbarListDOM.querySelector('.navbar__link.active');

			if (activeLink) {
				activeLink.classList.remove('active');
			}

			navbarLinks[index].classList.add('active');
		}
	});
}

window.addEventListener('scroll', activeMenu);

export default activeMenu;
