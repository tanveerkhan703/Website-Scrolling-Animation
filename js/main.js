const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)


function checkBoxes(){
    const triggerpoint = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerpoint) {
             box.classList.add('show')
        } else{
            box.classList.remove('show')
        }
    })
}