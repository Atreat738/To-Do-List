export default (function addProject() {
    const addProjectBtn = document.querySelector('#AddProjectBtn');
    const formModal = document.querySelector('#FormContainer');
    const closeFormBtn = document.querySelector('#CloseForm');
    const formSubmitBtn = document.querySelector('#FormSubmitBtn');
    const titleInput = document.querySelector('#TitleInput');

    addProjectBtn.addEventListener('click', () => {        
        formModal.style.display = "flex";
    })

    closeFormBtn.addEventListener('click', () => {
        formModal.style.display = "none";
    })

    formSubmitBtn.addEventListener('click', () => {
        //Save all form data/Title first
        //Create new form card 
        //Place new form card onto DOM
    })

})();
