export function calculateTip(bill: number, tipAmount: number){
    tipAmount = tipAmount / 100;
    return bill * tipAmount;
}

export function calculateTotalBill(bill: number, totalTip: number) {
    return +bill + +totalTip;
}

export function format(value:number , decimals:number) {
    return Number(Math.round(+(value+ 'e' +decimals))+'e-'+decimals).toFixed(2);
}