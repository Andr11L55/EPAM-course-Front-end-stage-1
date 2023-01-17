
let in_money = parseFloat(prompt('Initial amount:') )
let money = in_money;
let num_years = parseInt( prompt('Number of years:') ) 
let percent = parseFloat( prompt('Percentage of year:') )  
let profit = 0
let res_prof = 0
let ex_money= 1000
let ex_perc = 100
let round = 2
if(in_money>=ex_money && num_years>=1 && percent!==0 && percent<=ex_perc){
    for(let i=1; i<=num_years; i++){
        profit=in_money*(percent/ex_perc)
        res_prof+=profit
        in_money+=profit
        
    }
    console.log(`${res_prof}, ${in_money}`)
    alert(`Initial amount: ${money}\nNumber of years: ${num_years}\nPercentage of year: ${percent}\n
Total profit: ${res_prof.toFixed(round)}\nTotal amount: ${in_money.toFixed(round)}`) 
} else{
        alert(`Invalid input data`)
}