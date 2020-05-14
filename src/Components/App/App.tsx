import React, { useState } from 'react';
import '../Styling/App.scss';
import TestData from './TestData';
import TestDataProps from './TestData';

function App() {
  const [data, setData] = useState([
    {
      monthId: 1,
      monthName: 'January',
      begBalance: 1000,
      endBalance: 100,
      monthData: [{ title: 'HOA', cost: 204, monthIN: 1 }],
    },
    {
      monthId: 2,
      monthName: 'February',
      begBalance: 100,
      endBalance: 100,
      monthData: [{ title: 'Property Taxes', cost: 1275.89, monthIN: 2 }],
    },
    {
      monthId: 3,
      monthName: 'March',
      begBalance: 100,
      endBalance: 100,
      monthData: [],
    },
    {
      monthId: 4,
      monthName: 'April',
      begBalance: 1000,
      endBalance: 100,
      monthData: [
        { title: 'Income Taxes', cost: 4000, monthIN: 4 },
        { title: 'Home Insurance', cost: 865.73, monthIN: 4 },
        { title: 'Auto Insurance', cost: 670.87, monthIN: 4 },
      ],
    },
    {
      monthId: 5,
      monthName: 'May',
      begBalance: 1000,
      endBalance: 100,
      monthData: [],
    },
    {
      monthId: 6,
      monthName: 'June',
      begBalance: 1000,
      endBalance: 100,
      monthData: [{ title: 'Property Taxes', cost: 1275.89, monthIN: 6 }],
    },
    {
      monthId: 7,
      monthName: 'July',
      begBalance: 1000,
      endBalance: 100,
      monthData: [
        { title: 'HOA Dues', cost: 189.5, monthIN: 7 },
        { title: 'Amazon', cost: 120, monthIN: 7 },
      ],
    },
    {
      monthId: 8,
      monthName: 'August',
      begBalance: 1000,
      endBalance: 100,
      monthData: [{ title: 'Life Insurance', cost: 670.87, monthIN: 8 }],
    },
    {
      monthId: 9,
      monthName: 'September',
      begBalance: 1000,
      endBalance: 100,
      monthData: [],
    },
    {
      monthId: 10,
      monthName: 'October',
      begBalance: 1000,
      endBalance: 100,
      monthData: [],
    },
    {
      monthId: 11,
      monthName: 'November',
      begBalance: 1000,
      endBalance: 100,
      monthData: [{ title: 'Costco', cost: 120, monthIN: 11 }],
    },
    {
      monthId: 12,
      monthName: 'December',
      begBalance: 1000,
      endBalance: 100,
      monthData: [{ title: 'Vehicle Registration', cost: 240.55, monthIN: 12 }],
    },
    {
      monthId: 13,
      monthName: 'July',
      begBalance: 1000,
      endBalance: 100,
      monthData: [
        { title: 'HOA Dues', cost: 189.5, monthIN: 7 },
        { title: 'Amazon', cost: 120, monthIN: 7 },
      ],
    },
  ]);

  //Input section
  const [initialFunding, setInitialFunding] = useState(0);
  const [costTitle, setCostTitle] = useState<string>('');
  const [costAmount, setCostAmount] = useState<number>(0);

  const [optionsState, setOptionsState] = useState<string>();

  const [menu, setMenu] = useState(true);
  interface handleUpdateProps {
    month: number;
    index: number;
  }
  const handleUpdate = (month: number, index: number) => {
    let initialData = [...data];
    initialData[month - 1].monthData.splice(index, 1);
    console.log({ initialData });
    setData(initialData);
  };

  const handleInitialInput = (arg1: number) => {
    if (arg1 > 0) {
      setInitialFunding(arg1);
    }
  };

  const handleAddition = ()=>{
    console.log(`cost title ${costTitle} for ${costAmount} for the month of ${optionsState}`);
  }

  // const updateBeginEnding = (object: objUpdate: number, objReference: number)=>{
  //   object[objUpdate].begBalance = object[objReference].endBalance;
  // }

  const handleObjectInitialFundingUpdate = ()=>{
    if(initialFunding > 0 ){
      let object = [...data];

       const sumMonthlyCost = (monthIndex: number, begBalance: number)=>{
       const totalCost= object[monthIndex].monthData.reduce(function(acc, num){
          return acc + num.cost;
        }, 0);
        object[monthIndex].endBalance = begBalance-totalCost;
      };

      const januaryCosts = object[0].monthData.reduce(function(acc, num){
        return acc + num.cost;
      }, 0);

      object[0].begBalance = initialFunding;
      object[0].endBalance = initialFunding-januaryCosts;

      object[1].begBalance = object[0].endBalance;
      sumMonthlyCost(1, object[1].begBalance);

      object[2].begBalance = object[1].endBalance;
      sumMonthlyCost(2, object[2].begBalance);

      object[3].begBalance = object[2].endBalance;
      sumMonthlyCost(3, object[3].begBalance);

      object[4].begBalance = object[3].endBalance;
      sumMonthlyCost(4, object[4].begBalance);

      object[5].begBalance = object[4].endBalance;
      sumMonthlyCost(5, object[5].begBalance);

      object[6].begBalance = object[5].endBalance;
      sumMonthlyCost(6, object[6].begBalance);

      object[7].begBalance = object[6].endBalance;
      sumMonthlyCost(7, object[7].begBalance);

      object[8].begBalance = object[7].endBalance;
      sumMonthlyCost(8, object[8].begBalance);

      object[9].begBalance = object[8].endBalance;
      sumMonthlyCost(9, object[9].begBalance);

      object[10].begBalance = object[9].endBalance;
      sumMonthlyCost(10, object[10].begBalance);

      object[11].begBalance = object[10].endBalance;
      sumMonthlyCost(11, object[11].begBalance);

      object[12].begBalance = object[11].endBalance;
      sumMonthlyCost(12, object[12].begBalance);


      setData(object);
    }
  }

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
          <h2>
            Less Frequent Expenses
            <br />
            (Happens less often than monthly) <br />
            Items you cannot schedule monthly in your budget
          </h2>
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
                <div onClick={(e)=>handleObjectInitialFundingUpdate()}>Submit</div>
              </label>
            </div>
            <div className="inputLabel">
              <label className="inputSection">
                Expense
                <input
                  type="text"
                  value={costTitle}
                  onChange={(e) => setCostTitle(e.currentTarget.value)}
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
                <select id="month" value={optionsState} onChange={(e)=>setOptionsState(e.currentTarget.value)} required className="inputBox">
                  <option value="January">SELECT ONE</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                {costTitle}${costAmount}{optionsState}
                <div className="submit" onClick={()=>handleAddition()}>Submit</div>
              </label>
            </div>
          </section>
        </header>
      )}
      <main className="mainSection">
        {data.map((data, index) => (
          <section
            key={index}
            className={
              data.endBalance >= 0 ? 'monthCard' : 'monthCard negativeMonthCard'
            }
          >
            <h2>Month: {data.monthName}</h2>
            <div
              className={
                data.endBalance >= 0 ? 'positiveBalance' : 'negativeBalance'
              }
            >
              Beginning Balance: ${data.begBalance}
            </div>
            {data.monthData.map((data, index) => (
              <div key={index}>
                {data.title} ${data.cost}
                {data.monthIN && (
                  <button onClick={() => handleUpdate(data.monthIN, index)}>
                    X
                  </button>
                )}
              </div>
            ))}
            <div
              className={
                data.endBalance >= 0 ? 'positiveBalance' : 'negativeBalance'
              }
            >
              {/*Ending Balance: ${data.endBalance}*/}
              Total cost $
              {data.monthData.reduce(function(acc, num) {
                return acc + num.cost;
              }, 0)}<br/>
              Ending Balance: ${data.endBalance}
              {/*Ending Balance: $*/}
              {/*{data.begBalance -*/}
              {/*  data.monthData.reduce(function(acc, num) {*/}
              {/*    return acc + num.cost;*/}
              {/*  }, 0)}*/}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
