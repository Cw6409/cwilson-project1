function goToLocation(location) {
  window.location = location;
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('portal_button').addEventListener('click', function () {
    goToLocation('/feed');
  });
});
