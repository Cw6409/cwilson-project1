function checkKeyPress(e) {
  if (e.keyCode == 32) {
    goToLocation('/feed');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('keydown', checkKeyPress);
});
