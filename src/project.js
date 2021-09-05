export default (function addProject() {
    const addProjectBtn = document.querySelector('#AddProjectBtn');
    const deleteProjectBtn = document.querySelectorAll('.ProjectDelete');
    const formModal = document.querySelector('#FormContainer');
    const closeFormBtn = document.querySelector('#CloseForm');
    const formSubmitBtn = document.querySelector('#FormSubmitBtn');

    const rightContainer = document.querySelector('#RightContainer')
    const sideBarul = document.querySelector('#SideBarul');
    const titleInput = document.querySelector('#TitleInput');
    const descriptionInput = document.querySelector('#DescriptionInput');
    const dateInput = document.querySelector('#DateInput');
    

    addProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();    //prevents page refresh. Fix once localstorage is implemented    
        formModal.style.display = "flex";
    })

    closeFormBtn.addEventListener('click', (e) => {
        e.preventDefault();    //prevents page refresh. Fix once localstorage is implemented  
        formModal.style.display = "none";
    })

    formSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();   //prevents page refresh. Fix once localstorage is implemented  

        //Save all form data/Title first
        let title = titleInput.value;

        //Create new form card 
        let newProjectli = document.createElement('li');
        newProjectli.classList.add('Projectli');
        newProjectli.textContent = title;
        sideBarul.prepend(newProjectli);

        let newCard = document.createElement('div');
        newCard.classList.add('CardContainer');
        rightContainer.appendChild(newCard);

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('ProjectDelete');
        deleteBtn.textContent = 'Delete';
        newCard.appendChild(deleteBtn);

        let cardHeader = document.createElement('div');
        cardHeader.classList.add('CardHeader');
        newCard.appendChild(cardHeader);

        let cardh3 = document.createElement('h3');
        cardh3.textContent = title;
        cardHeader.appendChild(cardh3);

        let projectDescription = document.createElement('p');
        projectDescription.textContent = descriptionInput.value;
        newCard.appendChild(projectDescription);

        let dateP = document.createElement('p');
        dateP.textContent = 'Due Date: ';
        newCard.appendChild(dateP);
        let newDate = document.createElement('input');
        newDate.setAttribute('type', 'date');
        newDate.defaultValue = dateInput.value;
        dateP.appendChild(newDate);

        //Place new form card onto DOM
    })

})();
