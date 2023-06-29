function scrollToSection(targetId, offset) {
  var targetElement = document.getElementById(targetId);
  var startPosition = window.pageYOffset;
  var targetPosition = targetElement.offsetTop;
  var distance = targetPosition - startPosition + offset;
  var duration = 500; // duração da animação em milissegundos
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var progress = Math.min(timeElapsed / duration, 1);
    var ease = easeOutCubic(progress);
    window.scrollTo(0, startPosition + distance * ease);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easeOutCubic(t) {
    return (t -= 1) * t * t + 1000;
  }

  requestAnimationFrame(animation);
}