const addButton = document.getElementById('addButton');
const list = document.getElementById('myList');
const firstItem = list.firstElementChild;
const buttonListItem = addButton.parentNode;
var count = 1;

addButton.addEventListener('click', function() {
  const newItem = document.createElement('li');
  const newSearch = document.createElement('input');
  const newSubmit = document.createElement('input');
  const newIcon = document.createElement('img');
  
  newIcon.src = 'https://upload.wikimedia.org/wikipedia/commons/5/55/Overwatch_circle_logo.svg';
  newIcon.alt = 'Icon';
  
  newSearch.type = 'text';
  newSearch.placeholder = 'Player';
  
  newSubmit.type = 'submit';
  newSubmit.value = 'Search';
  
  newItem.textContent = '';
  
  newSearch.classList.add('searchBar');
  newSubmit.classList.add('submit');
  
  list.insertBefore(newItem, buttonListItem);
  newItem.appendChild(newIcon);
  newItem.appendChild(newSearch);
  newItem.appendChild(newSubmit);

  if (list.childElementCount == 6) {
    addButton.style.display = 'none';
  }

  var options = ["Tank", "Damage", "Support", "Flex"];
  var roleIcons = ["https://upload.wikimedia.org/wikipedia/commons/d/d0/Tank_icon.svg", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Damage_icon.svg/1200px-Damage_icon.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Support_icon.svg/1200px-Support_icon.svg.png", "https://icons.veryicon.com/png/o/business/comprehensive-budget-management/flexible.png"];

  // Loop through the options and create checkboxes
  for (var i = 0; i < options.length; i++) {
    // Create a checkbox element
    
    var container = document.createElement('div');
    container.className = 'checkboxContainer';

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = options[i] + count;

    // Create an image for the checkbox
    var roleIcon = document.createElement("img");
    roleIcon.src = roleIcons[i];
    roleIcon.alt = options[i];
    roleIcon.className = 'roleIcon';
    roleIcon.id = options[i] + count + "Icon";

    // Add the checkbox and image to the container
    container.appendChild(roleIcon);
    container.appendChild(checkbox);
    newItem.appendChild(container);
    

  }
  count++;
});
