import React from 'react';
import { TestDataProps } from './Interface';

interface MonthListProps {
  data: Array<TestDataProps>;
  monthlyContribution: number;
  handleRemoval: (
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: string,
  ) => void;
}
const MonthList = ({
  data,
  monthlyContribution,
  handleRemoval,
}: MonthListProps) => {
  return (
    <>
      <main className="mainSection">
        {data &&
          data.map((data, index) => (
            <section key={index} className="monthCard">
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
                    data.monthContributions.map((data, lineIndex) => (
                      <div key={lineIndex}>
                        {data.title} ${data.contribution} {lineIndex} {index}
                        {/*<button*/}
                        {/*  onClick={() =>*/}
                        {/*    handleRemoveContribution(data.monthIN, index, lineIndex)*/}
                        {/*  }*/}
                        {/*>*/}
                        {/*  X*/}
                        {/*</button>*/}
                        <button
                          onClick={() =>
                            handleRemoval(
                              data.monthIN,
                              index,
                              lineIndex,
                              'contribution',
                            )
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
                    {data.monthData.map((data, lineIndex) => (
                      <div key={lineIndex}>
                        {data.title} ${data.cost}
                        {data.monthIN && (
                          <button
                            onClick={() =>
                              handleRemoval(
                                data.monthIN,
                                index,
                                lineIndex,
                                'expense',
                              )
                            }
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
