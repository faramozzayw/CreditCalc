export const getPercent = (payoutAmount = 0, loadTerm = 0) => (Math.pow(amountOfPayment() / payoutAmount, 1 / loadTerm) - 1) * 100;
export const amountOfCredit = (monthlyPayment = 0, term = 0, percent = 0) => (monthlyPayment * term) / Math.pow(1 + percent / 100, term);

export const amountOfPayment = (monthlyPayment = 0, term) => monthlyPayment * term;
export const amountOfPaymentTerm = (monthlyPayment = 0, term = 0, amountOfCredit = 0) => monthlyPayment * term + amountOfCredit;
export const getTerm = (monthlyPayment = 0, amountOfPayment = 0) => amountOfPayment / monthlyPayment;

// mock real computation
export const calcFn = {
	"payoutAmount": () => (1.11111).toFixed(2),
	"interestRate": () => (2.11111).toFixed(2),
	"loanTerm": () => (3.11111).toFixed(0),
	"creditAmount": () => (3.11111).toFixed(4),
}