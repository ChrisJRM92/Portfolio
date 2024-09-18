function updateCopyright() {
	const currentYear = new Date().getFullYear();

	const copyrightElement = document.querySelector('.year_update');

	copyrightElement.textContent = `© ${currentYear}. `;
}

export default updateCopyright;
