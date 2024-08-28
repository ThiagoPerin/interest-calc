import { useEffect } from 'react';
import ApexCharts from 'apexcharts';

interface ResultMonthlyChartProps {
    investmentOverTime: Array<{ month: number; monthInterest: number; totalInvestment: number; totalAmount: number; totalInterest: number; }>;
}

const formatCurrency = (value: number) => {
    return `$${new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value)}`;
};

function ResultMonthlyChart({ investmentOverTime }: ResultMonthlyChartProps) {

    const filterDataByMonth = (data: Array<any>, months: number) => {
        let filteredData;
        if (months <= 15) {
            filteredData = data;
        } else if (months <= 60) {
            filteredData = data.filter((_, index) => index % 3 === 0);
        } else if (months <= 120) {
            filteredData = data.filter((_, index) => index % 6 === 0);
        } else if (months <= 240) {
            filteredData = data.filter((_, index) => index % 12 === 0);
        } else {
            filteredData = data.filter((_, index) => index % 24 === 0);
        }
        if (filteredData[0].month !== data[0].month) {
            filteredData.unshift(data[0]);
        }
        if (filteredData[filteredData.length - 1].month !== data[data.length - 1].month) {
            filteredData.push(data[data.length - 1]);
        }
        return filteredData;
    };
    const filteredInvestmentOverTime = filterDataByMonth(investmentOverTime, investmentOverTime.length);
    const totalInvestment = filteredInvestmentOverTime.map(el => el.totalInvestment.toFixed(2));
    const totalInterest = filteredInvestmentOverTime.map(el => el.totalInterest.toFixed(2));
    const month = filteredInvestmentOverTime.map(el => el.month);

    useEffect(() => {
        var options = {
            series: [{
                name: 'Total Investment',
                data: totalInvestment
            }, {
                name: 'Interest',
                data: totalInterest
            }],
            chart: {
                type: 'bar',
                height: 600,
                stacked: true,
                toolbar: {
                    show: false,
                },
            },
            title: {
                text: "Monthly Values",
                align: 'center',
                margin: 10,
                floating: false,
                style: {
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#ffffff'
                },
            },
            plot: {
                bar: {
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                type: 'category',
                categories: month,
                labels: {
                    style: {
                        fontSize: '14px',
                        colors: '#ffffff'
                    },
                },
            },
            yaxis: {
                labels: {
                    formatter: function (val: number, opt: any) {
                        return formatCurrency(val);
                    },
                    style: {
                        fontSize: '14px',
                        colors: '#ffffff'
                    },
                },
            },
            legend: {
                position: 'top',
                fontSize: "20px",
                fontWeight: "bold",
                labels: {
                    colors: "#ffffff"
                },
                onItemClick: {
                    toggleDataSeries: true,
                },
                onItemHover: {
                    highlightDataSeries: true,
                },
            },
            tooltip: {
                theme: 'dark',
                intersect: false,
                shared: true,
                style: {
                    fontSize: '12px',
                },
                x: {
                    formatter: function (val: string) {
                        return `Month ${val}`;  // Título personalizado
                    }
                }
            },
            fill: {
                opacity: 1
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();

        return () => {
            chart.destroy();
        };
    }, []);

    return (
        <div className="h-full w-full" id="chart"></div>
    );
}

export default ResultMonthlyChart;
