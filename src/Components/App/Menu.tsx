import React, { useState } from 'react';
import { TestDataProps } from './Interface';
import Selector from './Selector';

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
  handleSelection: (
    arg1: string,
    arg2: number,
    arg3: number,
    arg4: string,
  ) => void;
  expenseSelection: number;
  setExpenseSelection: (arg1: number) => void;
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
  expenseSelection,
  setExpenseSelection,
  handleSelection,
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
            <Selector
              inputTitle={'Expense:'}
              titleState={costTitle}
              setTitleState={setCostTitle}
              amount={costAmount}
              setAmount={setCostAmount}
              optionsState={expenseSelection}
              setOptionsState={setExpenseSelection}
              data={data}
              handleFunction={handleSelection}
              type={'expense'}
            />
            {/*Expense:*/}
            {/*<input*/}
            {/*  type="text"*/}
            {/*  value={costTitle}*/}
            {/*  onChange={(e) => setCostTitle(e.currentTarget.value)}*/}
            {/*  placeholder="Name of Expense"*/}
            {/*  className="inputBox"*/}
            {/*></input>*/}
            {/*<input*/}
            {/*  type="number"*/}
            {/*  value={costAmount}*/}
            {/*  onChange={(e) => setCostAmount(parseFloat(e.currentTarget.value))}*/}
            {/*  className="inputBox"*/}
            {/*></input>*/}
            {/*<select*/}
            {/*  id="month"*/}
            {/*  value={optionsState}*/}
            {/*  onChange={(e) => setOptionsState(e.currentTarget.value)}*/}
            {/*  required*/}
            {/*  className="inputBox"*/}
            {/*>*/}
            {/*  {data &&*/}
            {/*    data.map((num, index) => (*/}
            {/*      <option key={index} value={index}>*/}
            {/*        {num.monthName}*/}
            {/*      </option>*/}
            {/*    ))}*/}
            {/*</select>*/}
            {/*{optionsState !== undefined && costAmount > 0 && (*/}
            {/*  <button*/}
            {/*    className="submit"*/}
            {/*    onClick={() =>*/}
            {/*      handleAdditionExpense(*/}
            {/*        costTitle,*/}
            {/*        costAmount,*/}
            {/*        optionsState.valueOf(),*/}
            {/*      )*/}
            {/*    }*/}
            {/*  >*/}
            {/*    Submit*/}
            {/*  </button>*/}
            {/*)}*/}
          </label>
        </div>
        <div className="inputLabel">
          <label className="inputSection">
            <Selector
              inputTitle={'Single Contribution:'}
              titleState={contributionTitle}
              setTitleState={setContributionTitle}
              amount={contributionAmount}
              setAmount={setContributionAmount}
              optionsState={optionsConstState}
              setOptionsState={setOptionsConstState}
              data={data}
              handleFunction={handleSelection}
              type={'contribution'}
            />
          </label>
        </div>
      </section>
    </>
  );
};
export default Menu;
