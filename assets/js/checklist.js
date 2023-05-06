$(document).ready(function() {
  $('input[type="checkbox"]').on('keypress', function(event) {
    if (event.which === 13) {
      this.checked = !this.checked;
    }
  });
});