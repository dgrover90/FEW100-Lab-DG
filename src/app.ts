import { calculateTip, calculateTotalBill, format } from "./utils";

let tipButtons: NodeList;
let preBill: HTMLElement;
let totalBill: HTMLElement;
let tipPercent: HTMLElement;
let tip: HTMLElement;
let finalBill: HTMLElement;
let tipDisplay: HTMLElement;
let tipAmount: number;

export function runApp() {
    setup();

    function setup() {
        tipButtons = document.querySelectorAll('.btn'); //all buttons
        preBill = document.getElementById('billInput'); //input from bill amount
        totalBill = document.getElementById('totalBill'); // total bill display
        tipPercent = document.getElementById('tipPercentage'); // tipPercent display
        tip = document.getElementById('tipAmount'); // tip amount display
        finalBill = document.getElementById('finalBill'); // final bill information display
        tipDisplay = document.getElementById('tipDisplay'); // tip display for verbiage

        tipButtons.forEach((button: HTMLButtonElement, index) => {
            if (button.disabled === true) {
                tipAmount = Number(button.value);
                tipDisplay.innerText = button.value;
            }

            button.addEventListener('click', handleTipChange);
        })

        preBill.addEventListener('keyup', handleKeyUpEventForBillInput);
    }
}

function handleTipChange(evt) {
    const that = this as HTMLButtonElement;

    that.disabled = true;

    tipAmount = Number(that.value);
    tipDisplay.innerText = that.value;

    tipButtons.forEach((button: HTMLButtonElement) => {
        if (button !== that){
            button.disabled = false;
        }
    })
}

function handleKeyUpEventForBillInput(evt) {
    const bill: number = this.value;

    if (bill > 0)
    {
        this.classList.remove('error');
        const calcTip = calculateTip(bill, tipAmount);
        const calcBill = calculateTotalBill(bill, calcTip);

        totalBill.innerText = `$${format(this.value,2)}`;
        tipPercent.innerText = `${tipAmount}%`;
        tip.innerText = `$${format(calcTip,2)}`;
        finalBill.innerText = `$${format(calcBill,2)}`;
    } else {
        this.classList.add('error');
    }

}