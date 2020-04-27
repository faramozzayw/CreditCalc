const getPercent = (payoutAmount, loadTerm) => (Math.pow(AmountOfPayment() / payoutAmount, 1 / loadTerm) - 1) * 100;
const AmountOfPayment = () => {}

// mock real computation
export const calcFn = {
	"payoutAmount": () => 1,
	"interestRate": () => 2,
	"loanTerm": () => 3,
}