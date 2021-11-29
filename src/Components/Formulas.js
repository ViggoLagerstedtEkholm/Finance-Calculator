//https://financeformulas.net/Annual_Percentage_Yield.html
export const AnnualPercentageYield = (statedAnnualInterestRate, numberOfTimesCompounded) =>{
    return Math.pow(1 + (statedAnnualInterestRate / numberOfTimesCompounded), numberOfTimesCompounded) - 1;
}

