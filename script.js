let income = 0;
let housing = 0;
let debt = 0;
let frontEnd = 0;
let twentyEightPercent = 0;
let totalDebt = 0;
let backEnd = 0;
let thirtyEightPercent = 0;
let twentyPercent = 0;

let frontEndTxt = document.getElementById('frontEndTxt')
let backEndTxt = document.getElementById('backEndTxt')
let twentyPercentTxt = document.getElementById('twentyTxt')
let approvedDeniedTxt =  document.getElementById('approvedDenied')



const ruleTwentyEight = (income, housing) => {            
    frontEnd = (housing / income) * 100
    frontEnd = parseFloat(frontEnd).toFixed(2)    
    twentyEightPercent = (.28 * income)
    twentyEightPercent = parseFloat(twentyEightPercent).toFixed(2)   
    return frontEnd, twentyEightPercent
}


const ruleThirtyEight = (income, debt, housing) => {
    totalDebt = Number(debt) + Number(housing)
    backEnd = (totalDebt / income) * 100;
    backEnd = parseFloat(backEnd).toFixed(2)
    thirtyEightPercent = (.38 * income)
    thirtyEightPercent = parseFloat(thirtyEightPercent).toFixed(2)
    return backEnd, thirtyEightPercent
}

const ruleTwenty = (income) => {
    twentyPercent = (.2 * income)
    twentyPercent = parseFloat(twentyPercent).toFixed(2)
    return twentyPercent
}

const renderResults = () => {
    document.getElementById('monthlyIncomeTxt').innerHTML = `Gross or Net Income: ${income}`   
    document.getElementById('housingCostTxt').innerHTML = `Monthly Housing: ${housing}`    
    frontEndTxt.innerHTML = `Front-End ratio: ${frontEnd}%`
    document.getElementById('twentyEightTxt').innerHTML = `28% of income: ${twentyEightPercent}`
    document.getElementById('debtTxt').innerHTML = `Monthly Debt: ${debt}`
    document.getElementById('totalDebt').innerHTML = `Debt & Housing: ${totalDebt}`    
    backEndTxt.innerHTML = `Back-End ratio: ${backEnd}%`
    document.getElementById('thirtyEightTxt').innerHTML = `38% of income: ${thirtyEightPercent}`    
    twentyPercentTxt.innerHTML = `20% of income: ${twentyPercent}`
    checkResults()
}

const checkResults = () => {
    
    if((frontEnd * income)/100 > twentyEightPercent){
        frontEndTxt.style.color = 'red'
       
    } else if((frontEnd * income)/100 < twentyEightPercent){
        frontEndTxt.style.color = 'green'
    }
    if((backEnd * income)/100 > thirtyEightPercent) {
        backEndTxt.style.color = 'red'
        approvedDeniedTxt.innerText = 'DENIED'
        approvedDeniedTxt.style.color = 'red'
    } else if((backEnd * income)/100 < thirtyEightPercent){
        backEndTxt.style.color = 'green'
        approvedDeniedTxt.innerText = 'APPROVED'
        approvedDeniedTxt.style.color = 'green'
    }
    if(totalDebt > twentyPercent){
        twentyPercentTxt.style.color = 'red'
    } else if(totalDebt < twentyPercent){
        twentyPercentTxt.style.color = 'green'
        approvedDeniedTxt.innerText = 'Dave Ramsey Approved'
        approvedDeniedTxt.style.color = 'green'
    }
    if(income == 0){
        frontEndTxt.style.color = 'black'
        backEndTxt.style.color = 'black'
        twentyPercentTxt.style.color = 'black'
        approvedDeniedTxt.innerText = ''
    }
}



const calculateBtn = document.getElementById('calculate')
calculateBtn.addEventListener('click', () => {
    income = document.getElementById('incomeInput').value
    housing = document.getElementById('housingCostInput').value
    debt = document.getElementById('debtInput').value
    ruleTwentyEight(income, housing)
    ruleThirtyEight(income, debt, housing)
    ruleTwenty(income)
    renderResults()

})

const clearBtn = document.getElementById('clear')
clearBtn.addEventListener('click', () => {
    income = 0;
    housing = 0;
    debt = 0;
    frontEnd = 0;
    twentyEightPercent = 0;
    totalDebt = 0;
    backEnd = 0;
    thirtyEightPercent = 0;
    twentyPercent = 0;
    document.getElementById('incomeInput').value = ''
    document.getElementById('housingCostInput').value = ''
    document.getElementById('debtInput').value = ''

   renderResults()
})

window.onload = renderResults()