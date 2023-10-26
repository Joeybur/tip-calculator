const tipBtns = document.querySelectorAll('.tip-btn');
const custom = document.getElementById('custom');
const bill = document.getElementById('bill');
const people = document.getElementById('party-members');
const resetBtn = document.getElementById('resetbtn');

const billInputError = document.getElementById('error-bill');
const peopleInputError = document.getElementById('error-people');

let tipResult = document.getElementById('tip-per');
let billResult = document.getElementById('bill-per');

let tipvalue;
let billvalue;
let peopleValue;

tipBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    tipvalue = e.currentTarget.value;
  });
});

custom.addEventListener('input', (e) => {
  e.preventDefault();

  tipvalue = custom.value / 100;
});

const validateInputs = function () {
  if (billvalue === '' || billvalue < 0) {
    billInputError.textContent = 'Not a valid input';
  }

  if (peopleValue === '' || peopleValue < 0) {
    peopleInputError.textContent = 'Not a valid input';
  }
};

const calculateTip = function () {
  billvalue = +bill.value;
  peopleValue = +people.value;

  let tip = billvalue * tipvalue;
  let personalTip = tip / peopleValue;
  let personalBill = billvalue / peopleValue + personalTip;

  tipResult.textContent = `$${personalTip.toFixed(2)}`;
  billResult.textContent = `$${personalBill.toFixed(2)}`;
};

window.addEventListener('keydown', (e) => {
  validateInputs();
  if (e.key === 'Enter') {
    calculateTip();
  }
});

const resetInputs = function () {
  tipBtns.value = '';
  custom.value = '';
  bill.value = '';
  people.value = '';
  billInputError.textContent = '';
  peopleInputError.textContent = '';
  tipResult.textContent = '$00';
  billResult.textContent = '$00';
};

resetBtn.addEventListener('click', resetInputs);
