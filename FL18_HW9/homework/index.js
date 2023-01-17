/* START TASK 1: Your code goes here */
function toYellow(el){
    console.log(el)
     el.style.backgroundColor = 'yellow'
     return el
}
function toBlue(el){
    el.style.backgroundColor='blue'
    console.log(el)
    return el
}
function toGreen(el){
    el.parentElement.parentElement.style.background='green'
    el.backgroundColor='blue'
    return el
}
/* END TASK 1 */
/* START TASK 2: Your code goes here */
    const reg = /\+380[0-9]{9}/gi
    const inp = document.querySelector('#phone-input'),
    btn = document.querySelector('#send-valid-phone'),
    message = document.querySelector('#message');
    const fourteen = 14

    inp.addEventListener('keyup', (e) => {
        if(e.target.value.match(reg) && e.target.value.length < fourteen){
            inp.classList.remove('red-border')
            console.log('NICE')
            btn.removeAttribute('disabled')
            message.style.display = 'none'
            btn.addEventListener('click', (e) => {
                message.style.display = 'block'
                message.classList.add('green')
                if(document.querySelector('#error')) {
                    document.querySelector('#error').remove()
                }
                message.insertAdjacentHTML('afterbegin', '<h4 id="error">Data was successfully sent</h4>')
                e.preventDefault();
                console.log('DATA')
            })
        } else {
            if(document.querySelector('#error')) {
                document.querySelector('#error').remove()
            }
            message.style.display = 'block';
            if(message.classList.contains('green')){
                message.classList.remove('green')
            }
            message.classList.add('red')
            message.insertAdjacentHTML('afterbegin', 
            '<h4 id="error">Type number does not follow format +380*********</h4>')
            inp.classList.add('red-border')
            btn.setAttribute('disabled', 'disabled')
        }
    })

/* END TASK 2 */

/* START TASK 3: Your code goes here */
const court = document.querySelector('#task3'),
ball = document.querySelector('#ball'),
scoreLeft = document.querySelector('#score-left'),
scoreRight = document.querySelector('#score-right')
let points = {
    leftPlayer: 0,
    rightPlayer: 0
}, turn = 'Team A';

const removeNotification = () => {
    let notification = document.querySelector('#notification')
    notification.remove()
}

const showNotification = (team) => {
    scoreLeft.insertAdjacentHTML('afterend', `<h3 id="notification">${team} win point</h3>`)
    setTimeout(removeNotification, 3000)
}




court.addEventListener('click', (e) => {
    if(e.pageY < 587 && e.pageX < 577 && e.pageX > 20 && e.pageY > 302) {
    ball.style.left = e.pageX + 'px';
    ball.style.top = e.pageY - 285 + 'px';
    

    if(e.target.id === 'right-hoop' && turn === 'Team A') {
        points.leftPlayer++
        scoreLeft.innerHTML = 'Team A: ' + points.leftPlayer;
        showNotification(turn)
        turn = 'Team B';
        ball.style.left = '50%'
        ball.style.top = '50%'
        ball.style.transform = 'translate(-50%,-50%)'
    }
    if(e.target.id === 'left-hoop' && turn === 'Team B') {
        points.rightPlayer++;
        scoreRight.innerHTML = 'Team B: ' + points.rightPlayer;
        showNotification(turn)
        turn = 'Team A';
        ball.style.left = '50%'
        ball.style.top = '50%'
        ball.style.transform = 'translate(-50%,-50%)'
    }
    
    
}
})

/* END TASK 3 */
