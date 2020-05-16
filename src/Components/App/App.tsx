import React, { useState } from 'react';
import '../Styling/App.scss';
import TestData from './TestData';
import TestDataProps from './TestData';

function App() {
  const [data, setData] = useState([
    {
      monthId: 1,
      monthName: 'January',
      begBalance: 4000,
      endBalance: 4496,
      monthData: [{ title: 'HOA', cost: 204, monthIN: 1 }],
      monthContributions: [{title: "Hello", contribution: 100, monthIN: 1}],
    },
    {
      monthId: 2,
      monthName: 'February',
      begBalance: 4496,
      endBalance: 3920.11,
      monthData: [{ title: 'Property Taxes', cost: 1275.89, monthIN: 2 }],
      monthContributions: [],
    },
    {
      monthId: 3,
      monthName: 'March',
      begBalance: 3920.11,
      endBalance: 4620.11,
      monthData: [],
      monthContributions: [],
    },
    {
      monthId: 4,
      monthName: 'April',
      begBalance: 4620.11,
      endBalance: -216.49,
      monthData: [
        { title: 'Income Taxes', cost: 4000, monthIN: 4 },
        { title: 'Home Insurance', cost: 865.73, monthIN: 4 },
        { title: 'Auto Insurance', cost: 670.87, monthIN: 4 },
      ],
      monthContributions: [],
    },
    {
      monthId: 5,
      monthName: 'May',
      begBalance: -216.49,
      endBalance: 483.51,
      monthData: [],
      monthContributions: [],
    },
    {
      monthId: 6,
      monthName: 'June',
      begBalance: 483.51,
      endBalance: -92.38,
      monthData: [{ title: 'Property Taxes', cost: 1275.89, monthIN: 6 }],
      monthContributions: [],
    },
    {
      monthId: 7,
      monthName: 'July',
      begBalance: -92.38,
      endBalance: 298.12,
      monthData: [
        { title: 'HOA Dues', cost: 189.5, monthIN: 7 },
        { title: 'Amazon', cost: 120, monthIN: 7 },
      ],
      monthContributions: [],
    },
    {
      monthId: 8,
      monthName: 'August',
      begBalance: 298.12,
      endBalance: 327.25,
      monthData: [{ title: 'Life Insurance', cost: 670.87, monthIN: 8 }],
      monthContributions: [],
    },
    {
      monthId: 9,
      monthName: 'September',
      begBalance: 327.25,
      endBalance: 1027.25,
      monthData: [],
      monthContributions: [],
    },
    {
      monthId: 10,
      monthName: 'October',
      begBalance: 1027.25,
      endBalance: 1727.25,
      monthData: [],
      monthContributions: [],
    },
    {
      monthId: 11,
      monthName: 'November',
      begBalance: 1727.25,
      endBalance: 2307.25,
      monthData: [{ title: 'Costco', cost: 120, monthIN: 11 }],
      monthContributions: [],
    },
    {
      monthId: 12,
      monthName: 'December',
      begBalance: 2307.25,
      endBalance: 2766.7,
      monthData: [{ title: 'Vehicle Registration', cost: 240.55, monthIN: 12 }],
      monthContributions: [],
    },
  ]);

  //Input section
  const [initialFunding, setInitialFunding] = useState(4000);
  const [costTitle, setCostTitle] = useState<string>('');
  const [costAmount, setCostAmount] = useState<number>(0);
  const [contributionTitle, setContributionTitle] = useState<string>('');
  const [contributionAmount, setContributionAmount] = useState<number>(0);
  const [optionsConstState, setOptionsConstState] = useState<number>();

  const [optionsState, setOptionsState] = useState<string>();
  const [monthlyContribution, setMonthlyContribution] = useState<number>(700);

  const [menu, setMenu] = useState(true);
  interface handleUpdateProps {
    month: number;
    index: number;
  }
  const handleUpdate = (month: number, index: number) => {
    let initialData = [...data];
    initialData[month - 1].monthData.splice(index, 1);
    setData(initialData);
    handleUpdateDataState();
  };

  const handleInitialInput = (arg1: number) => {
    if (arg1 > 0) {
      setInitialFunding(arg1);
    }
  };

  const handleAdditionExpense = (
    costTitle: string,
    costAmount: number,
    optionsState: number,
  ) => {
    let object = [...data];
    //add to december index is number-1
    object[optionsState - 1].monthData.push({
      title: costTitle,
      cost: costAmount,
      monthIN: optionsState,
    });
    console.log({ costTitle, costAmount, optionsState });
    handleUpdateDataState();
  };

  const handleAdditionContribution =(
      contributionTitle: string,
      contributionAmount: number,
      optionsConstState: number,
  )=>{
    let object = [...data];
    //add to december index is number-1
    object[optionsConstState - 1].monthContributions.push({
      title: contributionTitle,
      contribution: contributionAmount,
      monthIN: optionsConstState,
    });
    console.log({ contributionTitle, contributionAmount, optionsConstState });
    console.log({data});
    handleUpdateDataState();
  }

  const handleUpdateDataState = () => {
    if (initialFunding > 0 && monthlyContribution > 0) {
      let object = [...data];

       const sumMonthlyCost = (monthIndex: number, begBalance: number) => {
        const totalCost = object[monthIndex].monthData.reduce(function(
          acc,
          num,
        ) {
          return acc + num.cost;
        },
        0);

        const contribution = object[monthIndex].monthContributions.reduce(function(
            acc, num
        ){return acc + num.contribution}, 0);

        object[monthIndex].endBalance =
          begBalance + contribution + monthlyContribution - totalCost;
      };

      const januaryCosts = object[0].monthData.reduce(function(acc, num) {
        return acc + num.cost;
      }, 0);

      //January settings
      const janContribution = object[0].monthContributions.reduce(function(
          acc, num
      ){return acc + num.contribution}, 0);
      object[0].begBalance = initialFunding;
      object[0].endBalance =
        initialFunding + janContribution + monthlyContribution - januaryCosts;

      object.map((number, index) => {
        if (number.monthId !== 1) {
          /// 1 index for February
          object[index].begBalance = object[index - 1].endBalance;
          sumMonthlyCost(index, object[index].begBalance);
        }
      });
      setData(object);
    }
  };

  return (
    <div className="App">
      {menu === false && (
        <div onClick={() => setMenu(true)} className="menuOpen">
          &raquo;
        </div>
      )}
      {menu && (
        <header className="App-header">
          <div onClick={() => setMenu(false)} className="menuOpen">
            &laquo;
          </div>
          <h2 className="appTitle">Sinking Fund</h2>
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
                <button onClick={(e) => handleUpdateDataState()}>Submit</button>
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
                <button onClick={(e) => handleUpdateDataState()}>Submit</button>
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
                  onChange={(e) =>
                    setCostAmount(parseFloat(e.currentTarget.value))
                  }
                  className="inputBox"
                ></input>
                <select
                  id="month"
                  value={optionsState}
                  onChange={(e) => setOptionsState(e.currentTarget.value)}
                  required
                  className="inputBox"
                >
                  <option value={0}>SELECT ONE</option>
                  <option value={1}>January</option>
                  <option value={2}>February</option>
                  <option value={3}>March</option>
                  <option value={4}>April</option>
                  <option value={5}>May</option>
                  <option value={6}>June</option>
                  <option value={7}>July</option>
                  <option value={8}>August</option>
                  <option value={9}>September</option>
                  <option value={10}>October</option>
                  <option value={11}>November</option>
                  <option value={12}>December</option>
                </select>
                {optionsState !== undefined && costAmount > 0 && (
                  <div
                    className="submit"
                    onClick={() =>
                      handleAdditionExpense(
                        costTitle,
                        costAmount,
                        parseInt(optionsState),
                      )
                    }
                  >
                    Submit
                  </div>
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
                    onChange={(e) => setOptionsConstState(parseInt(e.currentTarget.value))}
                    required
                    className="inputBox"
                >
                  <option value={0}>SELECT ONE</option>
                  <option value={1}>January</option>
                  <option value={2}>February</option>
                  <option value={3}>March</option>
                  <option value={4}>April</option>
                  <option value={5}>May</option>
                  <option value={6}>June</option>
                  <option value={7}>July</option>
                  <option value={8}>August</option>
                  <option value={9}>September</option>
                  <option value={10}>October</option>
                  <option value={11}>November</option>
                  <option value={12}>December</option>
                </select>
                {optionsConstState !== undefined && contributionAmount > 0 && (
                    <div
                        className="submit"
                        onClick={() =>
                            handleAdditionContribution(
                                contributionTitle,
                                contributionAmount,
                                optionsConstState,
                            )
                        }
                    >
                      Submit
                    </div>
                )}
              </label>
            </div>
          </section>
        </header>
      )}
      <main className="mainSection">
        {data.map((data, index) => (
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
                Beginning Balance: ${data.begBalance.toFixed(2)}
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
                <button onClick={() => alert('add money')}>&#43;</button>
                <div> Monthly Contribution: ${monthlyContribution}{' '}</div>
                {/*{data.monthContributions.length > 0 && */}
                {/*data.monthContributions.map((data, index)=>(*/}
                {/*    <div key={index}>*/}
                {/*      {data}*/}
                {/*    </div>*/}
                {/*))*/}
                {/*}*/}

              </div>
              {data.monthData.length > 0 && (
                <div className="monthExpenses">
                  Expenses
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
              Ending Balance: ${data.endBalance.toFixed(2)}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
