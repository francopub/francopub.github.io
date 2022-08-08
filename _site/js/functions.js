$(function() {  
  var shiftWindow = function() { scrollBy(0, -135) };
  window.addEventListener("hashchange", shiftWindow);
  function load() { if (window.location.hash) shiftWindow(); }
  // contact form animations
  $('#contactme').click(function() {
    $('#form-container').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#form-container");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
});