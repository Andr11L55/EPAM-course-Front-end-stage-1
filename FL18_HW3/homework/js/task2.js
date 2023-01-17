// let question = confirm(`Do you want to play a game?`)
// let max_num = 9
// let input_num
// let trying = 3
// let money = 0
// let try2 = 2
// let f_prize= 100
// let s_prize = 50
// let t_prize = 25
// if(question){
//      console.log(question)
//     let number = parseInt(Math.random()*max_num)
//     input_num = parseInt(prompt(`Choose a roulette pocket number from 0 to 8
// Attempts left: ${trying}
// Total prize: ${money}$
// Possible prize of current attempt: ${f_prize}$`))
// for(let i=trying; i!==0; i--){
//     if(number===input_num){
//       let answer = confirm( `Congratulation, you won! Your prize is: ${money}$. Do you want to continue?`)
//       if(answer){
//         console.log(answer)
//       }else{
//         a1= confirm(`Thank you for your participation. Your prize is: ${money}$. Do you want to play again?`)
//         if(a1 ? input_num : break)
//     }else{
//         // trying--;
//         input_num = parseInt(prompt(`Choose a roulette pocket number from 0 to 8
// Attempts left: ${trying}
// Total prize: ${money}$
// Possible prize of current attempt: ${f_prize/try2}$`))
//     }
// }
   
//             //     if(trying===0){
//             //         confirm(`Thank you for your participation. Your prize is: … $. 
//             //     Do you want to play again?`)
//             // }
             


  

//         console.log(trying)
      

//     // if(number===input_num){
//     //     alert(`True!`)
        
//     // }else{
//     //     alert(`False!`)
//     // }
//     // console.log(`${number} ,`)
// }else{
//     alert(`You did not become a billionaire, but can.`)
// }

let game = confirm('Do you want to play a game?');
let playAgain = true, continuePlay = true, userNumber, casinoNumber, currentMaxWin, currentWin, prize;
const two = 2, defaultMaxWin = 100, min = 0, defaultMax = 8, attempts = 3, four = 4;



if(!game) {
    alert('You did not become a billionaire, but can.' );
} else {
    while(playAgain === true) {
        let level = 0;
        prize = 0;
        continuePlay = true;
        while(continuePlay === true) {
            currentMaxWin = defaultMaxWin * Math.pow(two, level);
            currentWin = defaultMax + four * level;
            casinoNumber = randomInteger(min, currentWin);
            console.log(casinoNumber);
            for(let i = 0; i < attempts; i++){
                userNumber = +prompt(`Choose a roulette pocket number from ${min} to ${currentWin} 
                Attempts Left: ${attempts-i} 
                Total prize: ${prize} 
                Possible prize on current attempt: ${currentMaxWin / Math.pow(two, i)}`);
                if(userNumber === casinoNumber) {
                    if(i === 0) {
                        prize += currentMaxWin / Math.pow(two, i);
                        alert(`Congratulation, you won! Your prize is: ${currentMaxWin / Math.pow(two, i)}$.`);
                        break;
                    } else if(i === 1) {
                        prize += currentMaxWin / Math.pow(two, i);
                        alert(`Congratulation, you won! Your prize is: ${currentMaxWin / Math.pow(two, i)}$.`);
                        break;
                    } else if(i === two) {
                        prize += currentMaxWin / Math.pow(two, i);
                        alert(`Congratulation, you won! Your prize is: ${currentMaxWin / Math.pow(two, i)}$.`);
                        break;
                    }
                } else {
                    continue;
                }
            }
            if(userNumber === casinoNumber) {
                continuePlay = confirm('Do you want to continue?')
                if(continuePlay) {
                    level++;
                    console.log(level);
                } else {
                    alert(`Thank you for your participation. Your prize is: ${prize} $`);
                }
            } else {
                alert(`Thank you for your participation. Your prize is: ${prize} $`);
                continuePlay = false;
            }
        }
        playAgain = confirm('Do you want to play again?');
        }
    }

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }