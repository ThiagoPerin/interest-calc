interface ResultMonthlyChartProps {
    investmentOverTime: { month: number; monthInterest: number; totalInvestment: number; totalAmount: number; totalInterest: number; };
}

const formatCurrency = (value: number) => {
    return `$${new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value)}`;
};

function MonthlyResultTableRow({ investmentOverTime }: ResultMonthlyChartProps) {
    return (
        <tr className="border-t-2 text-white border-border-white">
            <td className="w-2/10 bg-purple-soft p-2 text-center">
                {investmentOverTime.month}
            </td>
            <td className="w-2/10 bg-header-turquoise-soft p-2 text-center">
                {formatCurrency(investmentOverTime.monthInterest)}
            </td>
            <td className="w-2/10 bg-chart-blue-soft p-2 text-center">
                {formatCurrency(investmentOverTime.totalInvestment)}
            </td>
            <td className="w-2/10 bg-chart-green-soft p-2 text-center">
                {formatCurrency(investmentOverTime.totalInterest)}
            </td>
            <td className="w-2/10 bg-header-orange-soft p-2 text-center">
                {formatCurrency(investmentOverTime.totalAmount)}
            </td>
        </tr>
    );
}

export default MonthlyResultTableRow;
