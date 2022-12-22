/* fonte: https://horadecodar.com.br/2020/12/10/acionar-um-button-com-o-enter-do-teclado-em-javascript/ 
	
*/

document.addEventListener("keypress", function(e) {
  if(e.key === 'Enter') {
  
      var btn = document.querySelector('#push');
    
    btn.click();
  
  }
});