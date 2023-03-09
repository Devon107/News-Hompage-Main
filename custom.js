const btn = document.querySelector('button')
const linkbtn = [...document.querySelectorAll('a')]
const menu = document.querySelector('#menu-brg')
const closemenu = document.querySelector('#close-menu')

for(let i= 0; i < linkbtn.length;i++)
{   
    linkbtn[i].addEventListener('click', setActive)
}
btn.addEventListener('click',setActive)
menu.addEventListener('click',dropDown)
closemenu.addEventListener('click',dropDown)

function setActive(ev)
{
    const unsetA = document.querySelectorAll('.active')
    for(let i= 0; i < unsetA.length;i++)
    {   
        unsetA[i].classList.remove('active');
    }
    ev.currentTarget.classList.add('active');
}
function dropDown(ev)
{
    const mobilemenu = document.querySelector('.mobile__menu--dropdown')
    mobilemenu.classList.toggle('visible');
}