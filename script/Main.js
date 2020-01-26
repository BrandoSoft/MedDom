document.querySelectorAll('.leftIcon').forEach(element => {
    element.addEventListener('click', (e) => {
        const menu = (e.target.parentNode).parentNode;

        // console.log(element)
        element.classList.toggle('activeColorLeft')
        menu.classList.toggle('activeLeft')
    })

});

const spanParts = document.querySelector('.leftMenuBig span');
const spanContent = document.querySelector('.leftMenuContent');
const partList = PSM50.getParts();
const sectionVisibility = document.querySelector('section');


spanParts.addEventListener('click', () => {
    const ul = document.createElement('ul');

    if (!document.querySelector('.leftMenuContent ul')) {
        spanContent.appendChild(ul);

        for (let i = 0; i < partList.length; i++) {
            const li = document.createElement('li')
            li.textContent = partList[i];
            ul.appendChild(li);

            sectionVisibility.classList.toggle('visible')
        }
    } else {
        const remover = document.querySelector('.leftMenuContent ul');
        remover.remove();
        sectionVisibility.classList.toggle('visible')
    }
    addListenerToMenu();
    addListenerToParts();
})

const addListenerToMenu = () => {
    document.querySelectorAll('.leftMenuContent li').forEach(item => {
        item.addEventListener('click', () => {
            moveAll();
            showNameOfPart(item.textContent);
        })
    })
}

const partName = document.querySelector('.partName');

const showNameOfPart = (name) => {
    partName.textContent = name;
}



const addListenerToParts = () => {
    document.querySelectorAll('.psm div').forEach(item => {
        item.addEventListener('click', () => {
            console.log("to jest" + item.textContent);
            showNameOfPart(item.id);
        })
    })
}
