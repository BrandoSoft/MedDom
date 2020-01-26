document.querySelectorAll('.leftIcon').forEach(element => {
    element.addEventListener('click', (e) => {
        const menu = (e.target.parentNode).parentNode;

        console.log(element)
        element.classList.toggle('activeColorLeft')
        menu.classList.toggle('activeLeft')
    })

});

const spanParts = document.querySelector('.leftMenuBig span');
const spanContent = document.querySelector('.leftMenuContent');
const partList = PSM50.getParts();

spanParts.addEventListener('click', () => {
    const ul = document.createElement('ul');

    if (!document.querySelector('.leftMenuContent ul')) {
        spanContent.appendChild(ul);

        for (let i = 0; i < partList.length; i++) {
            const li = document.createElement('li')
            li.textContent = partList[i];
            ul.appendChild(li);

        }
    } else {
        const remover = document.querySelector('.leftMenuContent ul');
        remover.remove();
    }
})