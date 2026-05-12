const image = document.getElementById('img');
const button = document.getElementById('btn');



button.addEventListener('click', () =>{
    const rand = Math.floor(Math.random() * 6 + 1)
    image.src = `img/dice_${rand}.jpg`
})