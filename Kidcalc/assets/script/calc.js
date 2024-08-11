// changeBackground code
function changeBackground() {
  const backgroundOption = document.getElementById('background-option').value;
  const bodyOfTheCalc = document.querySelector('.body_of_the_calc');
  bodyOfTheCalc.style.backgroundImage = `url(${backgroundOption})`;
}
// claulator code
function toggleClass(element, className) {
  element.classList.toggle(className);
}
function hasClass(element, className) {
  return element.classList.contains(className);
}
function removeClass(element, className) {
  element.classList.remove(className);
}
function addClass(element, className) {
  element.classList.add(className);
}


function getScreen() {
  return document.getElementById('screen');
}
function getContainer() {
  return document.getElementById('container');
}
const buttons = getContainer().querySelectorAll('input[type="button"]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.value;
    const screen = getScreen();

    if (buttonValue === 'AC') {
      screen.value = '';
    } else if (buttonValue === 'DC') {
      screen.value = screen.value.slice(0, -1);
    } else if (buttonValue === '=') {
      try {
        screen.value = eval(screen.value);
      } catch (error) {
        screen.value = 'Error';
      }
    } else {
      screen.value += buttonValue;
    }
  });
});