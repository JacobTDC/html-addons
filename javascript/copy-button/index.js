/*! (c) Jacob Story | github.com/JacobTDC/html-addons/blob/master/LICENSE */
!(function() {window.addEventListener('load', () => {
  var btns = document.getElementsByClassName("copybtn");
  for (i = 0; i < btns.length; i++) { 
    btns[i].addEventListener("click", function() {
      let selection = window.getSelection();
      let range = document.createRange();
      range.selectNodeContents(this.parentElement.getElementsByClassName("copyarea")[0]);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("Copy");
      selection.removeAllRanges();
    });
  }
})}());
