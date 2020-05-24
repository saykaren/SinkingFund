import React from 'react';

interface monthDataProps {
    title: string;
    cost: number;
    monthIN: number;
}

interface monthContributionsProps {
    title: string;
    contribution: number;
    monthIN: number
}

export interface TestDataProps {
    monthId: number;
    monthName: string;
    begBalance: number;
    endBalance: number;
    monthData?: Array<monthDataProps>;
    monthContributions?: Array<monthContributionsProps>;
}

export interface dataProps {
    data: Array<TestDataProps>
}

interface MenuProps {
  initialFunding: number;
  handleInitialInput: (arg1: number) => void;
  handleUpdateDataState: () => void;
  monthlyContribution: number;
  setMonthlyContribution: (arg1: number) => void;
  costTitle: string;
  setCostTitle: (arg1: string) => void;
  costAmount: number;
  setCostAmount: (arg1: number) => void;
  optionsState: string;
  setOptionsState: (arg1: string) => void;
  handleAdditionExpense: (arg1: string, arg2: number, arg3: string) => void;
  contributionTitle: string;
  setContributionTitle: (arg1: string) => void;
  contributionAmount: number;
  setContributionAmount: (arg1: number) => void;
  optionsConstState: number;
  setOptionsConstState: (arg1: number) => void;
  handleAdditionContribution: (
    arg1: string,
    arg2: number,
    arg3: number,
  ) => void;
  setStartMonth: (arg1: number) => void;
  data: Array<TestDataProps>;
}

const Menu = ({
  initialFunding,
  handleInitialInput,
  handleUpdateDataState,
  monthlyContribution,
  setMonthlyContribution,
  costTitle,
  setCostTitle,
  costAmount,
  setCostAmount,
  optionsState,
  setOptionsState,
  handleAdditionExpense,
  contributionTitle,
  setContributionTitle,
  contributionAmount,
  setContributionAmount,
  optionsConstState,
  setOptionsConstState,
  handleAdditionContribution,
  setStartMonth,
    data,

}: MenuProps) => {
  return (
    <>
      <section className="inputSection">
        <div className="inputLabel">
          <label className="inputSection">
            Initial Funding
            <input
              type="number"
              value={initialFunding}
              onChange={(e) =>
                handleInitialInput(parseFloat(e.currentTarget.value))
              }
              className="inputBox"
            ></input>
            {initialFunding > 0 && (
              <button onClick={(e) => handleUpdateDataState()}>Submit</button>
            )}
          </label>
        </div>
        <div className="inputLabel">
          <label className="inputSection">
            Monthly Contribution
            <input
              type="number"
              value={monthlyContribution}
              onChange={(e) =>
                setMonthlyContribution(parseFloat(e.currentTarget.value))
              }
              className="inputBox"
            ></input>
            {monthlyContribution > 0 && (
              <button onClick={(e) => handleUpdateDataState()}>
                Apply Contribution
              </button>
            )}
          </label>
        </div>
        <div className="inputLabel">
          <label className="inputSection">
            Expense:
            <input
              type="text"
              value={costTitle}
              onChange={(e) => setCostTitle(e.currentTarget.value)}
              placeholder="Name of Expense"
              className="inputBox"
            ></input>
            <input
              type="number"
              value={costAmount}
              onChange={(e) => setCostAmount(parseFloat(e.currentTarget.value))}
              className="inputBox"
            ></input>
            <select
              id="month"
              value={optionsState}
              onChange={(e) => setOptionsState(e.currentTarget.value)}
              required
              className="inputBox"
            >
              {data &&
              data.map((num, index) => (
                  <option key={index} value={index}>
                    {num.monthName}
                  </option>
              ))}
            </select>
            {optionsState !== undefined &&
              costAmount > 0 && (
                <button
                  className="submit"
                  onClick={() =>
                    handleAdditionExpense(
                      costTitle,
                      costAmount,
                      optionsState.valueOf(),
                    )
                  }
                >
                  Submit
                </button>
              )}
          </label>
        </div>
        <div className="inputLabel">
          <label className="inputSection">
            Single Contribution:
            <input
              type="text"
              value={contributionTitle}
              onChange={(e) => setContributionTitle(e.currentTarget.value)}
              placeholder="Name of Contribution"
              className="inputBox"
            ></input>
            <input
              type="number"
              value={contributionAmount}
              onChange={(e) =>
                setContributionAmount(parseFloat(e.currentTarget.value))
              }
              className="inputBox"
            ></input>
            <select
              id="month"
              value={optionsConstState}
              onChange={(e) =>
                setOptionsConstState(parseInt(e.currentTarget.value))
              }
              required
              className="inputBox"
            >
              {data &&
              data.map((num, index) => (
                  <option key={index} value={index}>
                    {num.monthName}
                  </option>
              ))}
            </select>
            {optionsConstState !== undefined && contributionAmount > 0 && (
              <button
                className="submit"
                onClick={() =>
                  handleAdditionContribution(
                    contributionTitle,
                    contributionAmount,
                      optionsConstState.valueOf(),
                  )
                }
              >
                Submit
              </button>
            )}
            {/*<div>Adjust Start Month</div>*/}
            {/*<select*/}
            {/*  id="month"*/}
            {/*  value={optionsConstState}*/}
            {/*  onChange={(e) => setStartMonth(parseInt(e.currentTarget.value))}*/}
            {/*  required*/}
            {/*  className="inputBox"*/}
            {/*>*/}
            {/*  <option value={1}>January</option>*/}
            {/*  <option value={2}>February</option>*/}
            {/*  <option value={3}>March</option>*/}
            {/*  <option value={4}>April</option>*/}
            {/*  <option value={5}>May</option>*/}
            {/*  <option value={6}>June</option>*/}
            {/*  <option value={7}>July</option>*/}
            {/*  <option value={8}>August</option>*/}
            {/*  <option value={9}>September</option>*/}
            {/*  <option value={10}>October</option>*/}
            {/*  <option value={11}>November</option>*/}
            {/*  <option value={12}>December</option>*/}
            {/*</select>*/}
          </label>
        </div>
      </section>
    </>
  );
};
export default Menu;
