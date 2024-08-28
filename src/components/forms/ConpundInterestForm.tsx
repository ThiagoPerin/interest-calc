import { FormEvent, useState } from "react";
import SimpleInputLabel from "../Inputs/SimpleInputLabel";
import DefaultInput from "../Inputs/DefaultInput";
import { calculateCompoundInterest } from "../../utils/Calculations";

interface CompoundInterestFormProps {
	onCalculate: (result: {
		totalAmount: string;
		totalInvestment: string;
		totalInterest: string;
		investmentOverTime: Array<{ month: number; monthInterest: number; totalInvestment: number; totalAmount: number; totalInterest: number; }>;
	}) => void;
}

function CompoundInterestForm({ onCalculate }: CompoundInterestFormProps) {
	const [initialValue, setInitialValue] = useState<number | string>('');
	const [monthlyValue, setMonthlyValue] = useState<number | string>('');
	const [interestRate, setInterestRate] = useState<number | string>('');
	const [interestPeriod, setInterestPeriod] = useState<number | string>('');
	const [interestRatePeriod, setInterestRatePeriod] = useState<string>('Yearly');
	const [interestPeriodUnit, setInterestPeriodUnit] = useState<string>('Years');

	const handleInitialValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInitialValue(event.target.value);
	};

	const handleMonthlyValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMonthlyValue(event.target.value);
	};

	const handleInterestRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInterestRate(event.target.value);
	};

	const handleInterestPeriodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInterestPeriod(event.target.value);
	};

	const handleInterestRatePeriodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setInterestRatePeriod(event.target.value);
	};

	const handleInterestPeriodUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setInterestPeriodUnit(event.target.value);
	};

	function handleCalculate(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const principal = parseFloat(initialValue as string);
		const rate = parseFloat(interestRate as string) / 100;
		const time = parseFloat(interestPeriod as string);
		const monthlyContribution = parseFloat(monthlyValue as string) || 0;

		const compoundInterestResult = calculateCompoundInterest(
			principal,
			rate,
			time,
			monthlyContribution,
			interestRatePeriod,
			interestPeriodUnit
		);
		onCalculate(compoundInterestResult);
	};

	return (
		<>
			<form onSubmit={(e) => { handleCalculate(e) }} className="h-full w-full flex flex-col items-center justify-evenly">
				<div className="h-fit w-full flex flex-wrap items-center justify-evenly">
					<DefaultInput>
						<SimpleInputLabel htmlFor="initial-value">
							Initial value
						</SimpleInputLabel>
						<div className="relative mt-2 rounded-md shadow-sm">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<span className="text-gray-500 sm:text-sm">$</span>
							</div>
							<input
								id="initial-value"
								name="initial-value"
								type="number"
								placeholder="0.00"
								value={initialValue}
								onChange={handleInitialValueChange}
								className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-textfield no-spin-buttons"
								required
							/>
						</div>
					</DefaultInput>

					<DefaultInput>
						<SimpleInputLabel htmlFor="monthly-value">
							Monthly value
						</SimpleInputLabel>
						<div className="relative mt-2 rounded-md shadow-sm">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<span className="text-gray-500 sm:text-sm">$</span>
							</div>
							<input
								id="monthly-value"
								name="monthly-value"
								type="number"
								placeholder="0.00"
								value={monthlyValue}
								onChange={handleMonthlyValueChange}
								className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-textfield no-spin-buttons"
								required
							/>
						</div>
					</DefaultInput>

					<DefaultInput>
						<SimpleInputLabel htmlFor="interest-rate">
							Interest rate
						</SimpleInputLabel>
						<div className="relative mt-2 rounded-md shadow-sm">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<span className="text-gray-500 sm:text-sm">%</span>
							</div>
							<input
								id="interest-rate"
								name="interest-rate"
								type="number"
								placeholder="0.00"
								value={interestRate}
								onChange={handleInterestRateChange}
								className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-textfield no-spin-buttons"
								required
							/>
							<div className="absolute inset-y-0 right-0 flex items-center">
								<select
									id="interest-rate-period"
									name="interest-rate-period"
									value={interestRatePeriod}
									onChange={handleInterestRatePeriodChange}
									className="h-full rounded-md border-0 bg-transparent py-0 px-2 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
									required
								>
									<option value="Yearly">Yearly</option>
									<option value="Monthly">Monthly</option>
								</select>
							</div>
						</div>
					</DefaultInput>

					<DefaultInput>
						<SimpleInputLabel htmlFor="interest-period">
							Interest period
						</SimpleInputLabel>
						<div className="relative mt-2 rounded-md shadow-sm">
							<input
								id="interest-period"
								name="interest-period"
								type="number"
								placeholder="0"
								value={interestPeriod}
								onChange={handleInterestPeriodChange}
								className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-textfield no-spin-buttons"
								required
							/>
							<div className="absolute inset-y-0 right-0 flex items-center">
								<select
									id="interest-period-unit"
									name="interest-period-unit"
									value={interestPeriodUnit}
									onChange={handleInterestPeriodUnitChange}
									className="h-full rounded-md border-0 bg-transparent py-0 px-2 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
									required
								>
									<option value="Years">Years</option>
									<option value="Months">Months</option>
								</select>
							</div>
						</div>
					</DefaultInput>
				</div>
				<button
					type="submit"
					className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-4"
				>
					Calculate
				</button>
			</form>
		</>
	);
}

export default CompoundInterestForm;
