import React from 'react';
import { TestDataProps } from './Interface';

interface MonthListProps {
  data: Array<TestDataProps>;
  startMonth: number;
  monthlyContribution: number;
  handleRemoveContribution: (arg1: number, arg2: number) => void;
  handleUpdate: (arg1: number, arg2: number) => void;
}
const MonthList = ({
  data,
  startMonth,
  monthlyContribution,
  handleRemoveContribution,
  handleUpdate,
}: MonthListProps) => {
  console.log({ data });

  return (
    <>
      <main className="mainSection">
        {data &&
          data.map((data, index) => (
            <section
              key={index}
              className={data.monthId >= startMonth ? 'monthCard' : 'hidden'}
            >
              <h2 className="cardTitle">{data.monthName}</h2>
              <div
                className={
                  data.begBalance >= 0
                    ? 'positiveBalance monthInputs'
                    : 'negativeBalance monthInputs'
                }
              >
                <div
                  className={
                    data.begBalance >= 0 ? 'positiveBalance' : 'negativeBalance'
                  }
                >
                  <span className="monthHeader"> Beginning Balance:</span> $
                  {data.begBalance.toFixed(2)}
                </div>
              </div>
              <div
                className={
                  data.endBalance >= 0
                    ? 'positiveBalance monthEndBalance'
                    : 'negativeBalance monthEndBalance'
                }
              >
                <div className="monthExpenses">
                  {(monthlyContribution > 0 ||
                    (data.monthContributions &&
                      data.monthContributions.length > 0)) && (
                    <>
                      <div className="monthHeader"> Month Contributions</div>
                      {monthlyContribution > 0 && (
                        <div>${monthlyContribution} </div>
                      )}
                    </>
                  )}

                  {data.monthContributions &&
                    data.monthContributions.map((data, index) => (
                      <div key={index}>
                        {data.title} ${data.contribution}
                        <button
                          onClick={() =>
                            handleRemoveContribution(data.monthIN, index)
                          }
                        >
                          X
                        </button>
                      </div>
                    ))}
                </div>
                {data.monthData && (
                  <div className="monthExpenses">
                    <div className="monthHeader">Month Expenses</div>
                    {data.monthData.map((data, index) => (
                      <div key={index}>
                        {data.title} ${data.cost}
                        {data.monthIN && (
                          <button
                            onClick={() => handleUpdate(data.monthIN, index)}
                          >
                            X
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                <span className="monthHeader"> Ending Balance:</span> $
                {data.endBalance.toFixed(2)}
              </div>
            </section>
          ))}
      </main>
    </>
  );
};

export default MonthList;
