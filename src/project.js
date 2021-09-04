export default (function addProject() {
    const addProjectBtn = document.querySelector('#AddProjectBtn');
    const formModal = document.querySelector('#FormContainer');
    const closeFormBtn = document.querySelector('#CloseForm')
    const titleInput = document.querySelector('#TitleInput');

    addProjectBtn.addEventListener('click', () => {        
        formModal.style.display = "flex";
    })

    closeFormBtn.addEventListener('click', () => {
        formModal.style.display = "none";
    })


})();
