/*-----------------------------------------*\
   #Show hidden checkboxes on button click
\*-----------------------------------------*/

const filter_group = document.querySelectorAll('.filter__group');

if (filter_group.length > 0) {
    filter_group.forEach(group => {
        const hiddenFilter = group.querySelectorAll('.checkbox--hidden');
        const button = group.querySelector('.filter__button--show-all');

        if (hiddenFilter.length === 0) {
            button.style.display = 'none';
        }

        button.textContent = `Ver ${hiddenFilter.length} más`;

        button.addEventListener('click', () => {
            hiddenFilter.forEach(checkbox => checkbox.style.display = 'flex');
            button.style.display = 'none';
        })
    });
}


/*------------------------------------------------------------*\
   #Show and close dropdown with prices detail on button click
\*------------------------------------------------------------*/

const buttonsOpenDropdown = document.querySelectorAll('.card__price--show-details');
buttonsOpenDropdown.forEach(button => {
  button.addEventListener('click', () => {
    const dropdown = document.querySelector(`.dropdown[data-dropdown="${button.dataset.dropdown}"]`);
    const isOpen = !dropdown.hidden;

    document.querySelectorAll('.dropdown').forEach(d => d.hidden = true);
    buttonsOpenDropdown.forEach(btn => btn.setAttribute('aria-expanded', 'false'));

    dropdown.hidden = !dropdown.hidden;

    if (!isOpen) {
        dropdown.hidden = false;
        button.setAttribute('aria-expanded', 'true');

        if (window.innerWidth >= 500) {
            const buttonRect = button.getBoundingClientRect();
            const top = buttonRect.bottom + window.scrollY;
            const left = buttonRect.left + window.scrollX;

            dropdown.style.top = `${top - 10}px`;
            dropdown.style.left = `${left}px`;

            const dropdownRect = dropdown.getBoundingClientRect();
            const overflowRight = dropdownRect.right - window.innerWidth;

            if ( overflowRight > 0 ) {
                dropdown.style.left = `${left - overflowRight - 30}px`;
            }
        } else {
            dropdown.style.top = `0`;
            dropdown.style.left = `0`;
        }
    } 
  });
});

const closeButtons = document.querySelectorAll('.dropdown__close');
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const dropdown = button.closest('.dropdown');
        dropdown.hidden = true;
        buttonsOpenDropdown.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
    });
});