import MonthlyResultTableRow from "../table-rows/MonthlyResultTableRow";

interface ResultMonthlyChartProps {
    investmentOverTime: Array<{ month: number; monthInterest: number; totalInvestment: number; totalAmount: number; totalInterest: number; }>;
}

function MonthlyResultTable({ investmentOverTime }: ResultMonthlyChartProps) {
    return (
        <div className="h-fit w-full rounded-lg overflow-hidden">
            <div className="overflow-x-auto max-h-96">
                <table className="w-full relative text-sm text-white rounded-lg">
                    <thead className="text-sm border-b-2 border-main-purple text-white sticky top-0 left-0 uppercase">
                        <tr>
                            <th scope="col" className="w-2/10 bg-purple-800 p-4">
                                Month
                            </th>
                            <th scope="col" className="w-2/10 bg-header-turquoise p-4">
                                Month interest
                            </th>
                            <th scope="col" className="w-2/10 bg-chart-blue p-4">
                                Total Investment
                            </th>
                            <th scope="col" className="w-2/10 bg-chart-green p-4">
                                Total Interest
                            </th>
                            <th scope="col" className="w-2/10 bg-header-orange p-4">
                                Total Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {investmentOverTime.map((entry, index) => (
                            <MonthlyResultTableRow key={index} investmentOverTime={entry} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MonthlyResultTable;
