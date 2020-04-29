export const getPercent = (payoutAmount = 0, term = 0, monthlyPayment = 0) => 
	(
		Math.pow(
			amountOfPayment(monthlyPayment, term) / payoutAmount,
			1 / term
		) - 1
	) * 100;
	
export const amountOfCredit = (monthlyPayment = 0, term = 0, percent = 0) => 
	(monthlyPayment * term) / Math.pow(1 + percent / 100, term);

export const amountOfPayment = (monthlyPayment = 0, term = 0) => 
	monthlyPayment * term;

export const amountOfPaymentTerm = (monthlyPayment = 0, term = 0, amountOfCredit = 0) =>
	monthlyPayment * term + amountOfCredit;

export const getTerm = (monthlyPayment = 0, amountOfPayment = 0) => 
	amountOfPayment / monthlyPayment;

export const calcFn = {
	"payoutAmount": state => {
		const { monthlyPayment, loanTerm, interestRate } = state;

		return {
			payoutAmount: amountOfPayment(monthlyPayment, loanTerm).toFixed(2),
			creditAmount: amountOfCredit(monthlyPayment, loanTerm, interestRate).toFixed(2),
		}
	},
	"interestRate": state => {
		const { monthlyPayment, payoutAmount, loanTerm } = state;

		return {
			interestRate: getPercent(payoutAmount, loanTerm, monthlyPayment).toFixed(2),
			payoutAmount: amountOfPayment(monthlyPayment, loanTerm).toFixed(2),
		}
	},
	"loanTerm": state => {
		const { monthlyPayment, payoutAmount, creditAmount } = state;
		
		const localTerm = getTerm(monthlyPayment, payoutAmount);

		return {
			loanTerm: localTerm.toFixed(0),
			payoutAmount: amountOfPaymentTerm(monthlyPayment, localTerm, creditAmount).toFixed(0),
		}
	},
}