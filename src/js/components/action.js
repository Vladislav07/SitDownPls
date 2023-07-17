// const buttons = document.querySelectorAll('.card__btn');
// buttons.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     window.location.href = 'http://localhost:9500/item.html#';
//   });
// });


 const buttonsCatalog = document.querySelectorAll('.catalogue__btn');
 const cards = document.querySelectorAll('.card');

 buttonsCatalog.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      const actualDisplay = getComputedStyle(buttonsCatalog[2]).display;
      if (actualDisplay == 'none') {
        if(e.target.id === 'Page_1'){
          hiddenCards(1, 9)
        }else{
          hiddenCards(10, 18)
        }
      }
     
    });
  });

  function hiddenCards(start, end){
     for (let index = 1; index <= 18; index++) {
      const element = cards[index];
       if(index => start && index <= end){
        elem.classList.toggle("class")
       }else{
        element.style.display = 'none'
       }
     }
  }