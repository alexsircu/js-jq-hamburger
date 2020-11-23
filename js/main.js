// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
// Partite come base del vostro esercizio dallo zip in allegato.
// Ricordate di scrivere solo il codice JavaScript con jQuery e non modificare HTML e CSS.
var hamburgerIcon = $('.fa-bars');
console.log(hamburgerIcon);

hamburgerIcon.click(
  function() {
  $('.hamburger-menu').fadeIn(2000);
  }
)

var closeIcon = $('.fa-times');

closeIcon.click(
  function() {
  $('.hamburger-menu').fadeOut(2000);
  }
)
