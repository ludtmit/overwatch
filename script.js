const addButton = document.getElementById('addButton');
const list = document.getElementById('myList');
const buttonListItem = addButton.parentNode;
let count = 0;
const maxRows = 5;


//add Button creates a new line for a new player
addButton.addEventListener('click', function() {
  if (count >= maxRows) {
    addButton.style.display = 'none';
    return; // Stop adding rows if the maximum limit is reached
  }

  const newItem = document.createElement('li');
  const newIcon = document.createElement('img');
  const newForm = document.createElement('form');
  const newSearch = document.createElement('input');
  const newSubmit = document.createElement('input');

  newForm.addEventListener('submit', function(event) {
    event.preventDefault();
  });
  
  newIcon.src = 'https://upload.wikimedia.org/wikipedia/commons/5/55/Overwatch_circle_logo.svg';
  newIcon.alt = 'Icon';

  newSearch.type = 'text';
  newSearch.name = 'search';
  newSearch.placeholder = 'Player';
  newSearch.classList.add('searchBar');

  newSubmit.type = 'submit';
  newSubmit.value = 'Search';
  newSubmit.classList.add('submit');

  newForm.appendChild(newSearch);
  newForm.appendChild(newSubmit);

  newItem.appendChild(newIcon);
  newItem.appendChild(newForm);

  var options = ['Tank', 'Damage', 'Support', 'Flex'];
  var roleIcons = [
    'https://upload.wikimedia.org/wikipedia/commons/d/d0/Tank_icon.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Damage_icon.svg/1200px-Damage_icon.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Support_icon.svg/1200px-Support_icon.svg.png',
    'https://icons.veryicon.com/png/o/business/comprehensive-budget-management/flexible.png'
  ];
  
  const checkboxNest = document.createElement('div');
  checkboxNest.className = 'checkboxNest';
  newItem.appendChild(checkboxNest);
//creating the checkboxes and the surrounding area
  for (let i = 0; i < options.length; i++) {
    const container = document.createElement('div');
    container.className = 'checkboxContainer';
  
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = options[i] + count;
    checkbox.addEventListener('change', handleCheckboxChange); // Add event listener
  
    const roleIcon = document.createElement('img');
    roleIcon.src = roleIcons[i];
    roleIcon.alt = options[i];
    roleIcon.className = 'roleIcon';
    roleIcon.id = options[i] + count + 'Icon';
  
    
  
    container.addEventListener('click', function() {
      checkbox.click();
    });
  
    container.appendChild(roleIcon);
    container.appendChild(checkbox);
    checkboxNest.appendChild(container);
    
  }
  

  list.insertBefore(newItem, buttonListItem);

  const xIconDiv = document.createElement('div');
  xIconDiv.className = 'xIconDiv';
  
  const xIcon = document.createElement('img');
  xIcon.src = "https://cdn0.iconfinder.com/data/icons/octicons/1024/x-512.png";
  xIcon.className = 'xIcon'
  xIconDiv.appendChild(xIcon);
  newItem.appendChild(xIconDiv);

  count++;

  if (count >= maxRows) {
    addButton.style.display = 'none';
  }
});

// Event listener for checkbox change -ChatGpt
function handleCheckboxChange() {
  const current = this.id;

  if (current.startsWith('Flex')) {
    const row = this.closest('li');
    const checkboxes = row.querySelectorAll('.checkboxContainer input[type="checkbox"]');
    const flexCheckbox = row.querySelector('#' + current);

    checkboxes.forEach(function(checkbox) {
      if (checkbox !== flexCheckbox) {
        checkbox.checked = flexCheckbox.checked;
      }
    });
  }
}



// Initially load the first row
addButton.click();
//gives checkbox change to all of the checkboxes
for (i = 0; i<count; i++){
  for (j = 0; j<4; j++){
    options[count]+j.addEventListener('change', handleCheckboxChange);
  
  }
}



