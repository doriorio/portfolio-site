const modalToggle = document.querySelector(".button"),
      modal = document.querySelector(".modal"),
      closeButton = document.querySelector(".close");

// If there is a modal button, open the modal when it's clicked
// and close it if someone clicks the close button, or if they
// hit escape
if (modalToggle) {
    
  modalToggle.addEventListener("click", () => openModal());
  closeButton.addEventListener("click", () => closeModal());
  document.onkeydown = (e) => {
    if (e.keyCode == 27) {
      // keyCode 27 is esc
      closeModal();
    }
  };
  
  function openModal() {
    fadeIn(modal);
  };
  
  function closeModal() {
    fadeOut(modal);
  };
  
  function fadeOut(element) {
    var opacity = 1;
    function decrease() {
      opacity -= 0.05;
      if (opacity <=0) {
        //complete
        element.style.opacity = 0;
        element.classList.remove('is-open');
        return true;
      }
      element.style.opacity = opacity;
      requestAnimationFrame(decrease);
    }
    decrease();
  };
  
  function fadeIn(element) {
    var opacity = 0;
    element.classList.add('is-open');
    function increase() {
      opacity += 0.05;
      if (opacity >=1) {
        //complete
        element.style.opacity = 1;
        return true;
      }
      element.style.opacity = opacity;
      requestAnimationFrame(increase);
    }
    increase();
  };

}
