const addButton = document.getElementById('addButton');
const list = document.getElementById('myList');
const buttonListItem = addButton.parentNode;
let count = 0;
const maxRows = 5;

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

    container.appendChild(roleIcon);
    container.appendChild(checkbox);
    newItem.appendChild(container);
  }

  list.insertBefore(newItem, buttonListItem);

  count++;

  if (count >= maxRows) {
    addButton.style.display = 'none';
  }
});

// Event listener for checkbox change
function handleCheckboxChange() {
  const current = this.id;

  if (current.startsWith('Flex')) {
    const row = this.closest('li');
    const checkboxes = row.querySelectorAll('.checkboxContainer input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
      if (checkbox.id !== current) {
        checkbox.checked = current.checked;
      }
    });
  }
}

// Initially load the first row
addButton.click();
