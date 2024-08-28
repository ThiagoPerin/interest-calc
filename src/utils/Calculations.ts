const formatCurrency = (value: number) => {
    return `$${new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value)}`;
};

export const calculateCompoundInterest = (
    principal: number,
    rate: number,
    time: number,
    monthlyContribution: number,
    ratePeriod: string,
    timeUnit: string
) => {

    // Ajusta a taxa e o período conforme necessário
    const periodsPerYear = ratePeriod === "Yearly" ? 12 : 1;
    const ratePerPeriod = ratePeriod === "Yearly" ? (Math.pow(1 + rate, 1 / periodsPerYear) - 1) : rate; // Ajusta a taxa para o período correto
    const totalPeriods = timeUnit === "Months" ? time : time * 12; // Converte anos para meses

    // Cálculo do montante futuro com contribuições
    const amountWithContributions = principal * Math.pow(1 + ratePerPeriod, totalPeriods) +
        monthlyContribution * ((Math.pow(1 + ratePerPeriod, totalPeriods) - 1) / ratePerPeriod);

    // Cálculo do total investido
    const totalInvestment = principal + monthlyContribution * totalPeriods;
    const totalCompoundInterest = amountWithContributions - totalInvestment;

    // Evolução mensal
    const investmentOverTime = Array.from({ length: totalPeriods }, (_, month) => {
        const amount = principal * Math.pow(1 + ratePerPeriod, month + 1) +
            monthlyContribution * ((Math.pow(1 + ratePerPeriod, month + 1) - 1) / ratePerPeriod);

        const amountPreviousMonth = month === 0
            ? principal
            : principal * Math.pow(1 + ratePerPeriod, month) +
            monthlyContribution * ((Math.pow(1 + ratePerPeriod, month) - 1) / ratePerPeriod);

        // Juros acumulados apenas no mês atual
        const monthInterest = amount - amountPreviousMonth - monthlyContribution;
        return {
            month: month + 1,
            monthInterest: Number(monthInterest),
            totalInvestment: Number(principal + monthlyContribution * (month + 1)),
            totalAmount: Number(amount),
            totalInterest: Number(amount - (principal + monthlyContribution * (month + 1))),
        };
    });

    return {
        totalAmount: formatCurrency(amountWithContributions),
        totalInvestment: formatCurrency(totalInvestment),
        totalInterest: formatCurrency(totalCompoundInterest),
        investmentOverTime,
    };
};