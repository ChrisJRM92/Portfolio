function updateCopyright() {
	const currentYear = new Date().getFullYear();

	const copyrightElement = document.querySelector('.footer__copy');

	copyrightElement.textContent = `© ${currentYear}, Todos los derechos reservados`;
}

export default updateCopyright;
