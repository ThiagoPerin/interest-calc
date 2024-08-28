import { useState } from 'react';
import ConpundInterestForm from './components/forms/ConpundInterestForm';
import ResultMonthlyChart from './components/charts/ResultMonthlyChart';
import ResultBadge from './components/badges/ResultBadge';
import MonthlyResultTable from './components/tables/MonthlyResultsTable';
import AppTitle from './components/navigation/AppTitle';

function App() {
  const [compoundInterestResult, setCompoundInterestResult] = useState<{
    totalAmount: string;
    totalInvestment: string;
    totalInterest: string;
    investmentOverTime: Array<{ month: number; monthInterest: number; totalInvestment: number; totalAmount: number; totalInterest: number; }>;
  } | null>(null);

  const handleCompoundInterestResult = (result: {
    totalAmount: string;
    totalInvestment: string;
    totalInterest: string;
    investmentOverTime: Array<{ month: number; monthInterest: number; totalInvestment: number; totalAmount: number; totalInterest: number; }>;
  }) => {
    setCompoundInterestResult(result);
  };
  return (
    <>
      <div className='h-fit min-h-screen w-screen max-w-full flex flex-col items-center justify-center bg-main-purple p-4'>
        <AppTitle />
        <div className='h-full w-full flex flex-col items-center justify-center'>
          <div className="h-full w-full max-w-screen-lg flex flex-col items-center justify-start bg-purple-700 rounded-xl p-4 m-4">
            <ConpundInterestForm onCalculate={handleCompoundInterestResult} />
          </div>
          {compoundInterestResult && (
            <>
              <div className="h-fit w-full max-w-screen-lg flex flex-col items-center justify-center bg-purple-700 rounded-xl p-4 m-2 text-white">
                <h2 className="text-3xl font-bold">Results:</h2>
                <div className="h-fit w-full flex flex-wrap items-start justify-around p-2">
                  <ResultBadge title='Total Investment:' value={compoundInterestResult.totalInvestment} fontColor='text-chart-blue' />
                  <ResultBadge title='Total Interest:' value={compoundInterestResult.totalInterest} fontColor='text-chart-green' />
                  <ResultBadge title='Total Amount:' value={compoundInterestResult.totalAmount} />
                </div>
                <div className="h-fit w-fit max-w-full min-w-full flex flex-wrap items-start justify-center rounded-lg bg-main-purple p-2 m-2 overflow-x-auto">
                  <ResultMonthlyChart key={JSON.stringify(compoundInterestResult)} investmentOverTime={compoundInterestResult.investmentOverTime} />
                </div>
                <div className="h-fit w-full flex items-start justify-center rounded-lg bg-main-purple p-2 m-2">
                  <MonthlyResultTable key={JSON.stringify(compoundInterestResult)} investmentOverTime={compoundInterestResult.investmentOverTime} />
                </div>
              </div>
            </>
          )}
        </div>
      </div >
    </>
  );
}

export default App;
