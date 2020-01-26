const psm = document.querySelector('.psm');
const uziemiacz = document.querySelector('.uziemiacz')
const czarmander = document.querySelector('.czarmander')
const trafoDuze = document.querySelector('.trafoDuze')
const kondziol = document.querySelector('.kondziol')
const dlawik1 = document.querySelector('.dlawik1')
const dlawik2 = document.querySelector('.dlawik2')
const moduly = document.querySelector('.moduly')


const moveAll = () => {
    if (!document.querySelector('#psm').classList.contains('psmActive')) {
        console.log('nie posada')
        moveItems(psm);
        moveItems(uziemiacz);
        moveItems(czarmander);
        moveItems(trafoDuze);
        moveItems(kondziol);
        moveItems(dlawik1);
        moveItems(dlawik2);
        moveItems(moduly);
    }
}


const moveItems = (param) => {
    param.classList.add(param.className + 'Active');

}