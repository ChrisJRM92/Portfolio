import change_languaje from "./scripts/translate.js";

document.addEventListener('DOMContentLoaded', function() {
  
  document.getElementById('chekbox_lang').addEventListener('change', change_languaje);

});