'use strict';

// write code here
const allForms = [...document.querySelectorAll('input')];

for (const value of allForms) {
  value.placeholder = value.name[0].toUpperCase()
    + value.name.slice(1);

  if (value.name === 'firstName') {
    value.placeholder = 'First Name';

    value.insertAdjacentHTML('beforebegin', `
    <label class='field-label' for='${value.id}'>
      FIRST NAME
    </label>
  `);
  } else if (value.name === 'lastName') {
    value.placeholder = 'Last Name';

    value.insertAdjacentHTML('beforebegin', `
    <label class='field-label' for='${value.id}'>
      LAST NAME
    </label>
  `);
  } else {
    value.insertAdjacentHTML('beforebegin', `
    <label class='field-label' for='${value.id}'>
      ${value.name}
    </label>
  `);
  }
}
