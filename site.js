(function () {
  var btn = document.getElementById("copy-mail");
  if (!btn) return;
  btn.addEventListener("click", function () {
    var text = "contact@minesy.app";
    function done() {
      btn.textContent = "Copié";
      setTimeout(function () { btn.textContent = "Copier"; }, 1800);
    }
    function select() {
      var node = btn.previousElementSibling;
      var range = document.createRange();
      range.selectNodeContents(node);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
    try {
      navigator.clipboard.writeText(text).then(done, select);
    } catch (e) { select(); }
  });
})();
