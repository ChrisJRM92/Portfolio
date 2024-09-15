import axios from 'axios';

function change_languaje() {

  const checkbox = document.getElementById('chekbox_lang');
  if (checkbox) {
    const languaje = checkbox.checked ? 'en' : 'es';
    console.log(languaje);
    
    // axios.get('./lang/' + languaje + '.json')
    //   .then(response => {
    //     console.log(response.data); // Aquí tienes el contenido de las traducciones
    //   })
    //   .catch(error => {
    //     console.error('Error al cargar el archivo JSON:', error);
    //   });
  } else {
    console.error('No se encontró el checkbox con el ID "chekbox_lang"');
  }

  window.onload = function() {
    document.getElementById('chekbox_lang').addEventListener('change', change_languaje);
  };
  

  // const checkbox = document.getElementById('chekbox_lang');
  // const languaje = checkbox.checked ? 'en' : 'es';
  // console.log(languaje)
  // axios.get('./lang/' + languaje + '.json')
  //   .then(response => {
  //     console.log(response.data); // Aquí tienes el contenido de las traducciones
  //   })
  //   .catch(error => {
  //     console.error('Error al cargar el archivo JSON:', error);
  //   });

}

export default change_languaje
