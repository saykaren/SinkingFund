import React, { useState, useEffect } from 'react';
import '../Styling/App.scss';
import TestData from './TestData';
import Footer from './Footer';
import StartData from './StartData';

const App = () => {
  // const [data, setData] = useState(TestData);
  const [data, setData] = useState(StartData);
  const localStorageData = localStorage.getItem('savedData');

  //Input section
  const [initialFunding, setInitialFunding] = useState(data[0].begBalance);
  const [costTitle, setCostTitle] = useState<string>('');
  const [costAmount, setCostAmount] = useState<number>(0);
  const [contributionTitle, setContributionTitle] = useState<string>('');
  const [contributionAmount, setContributionAmount] = useState<number>(0);
  const [optionsConstState, setOptionsConstState] = useState<number>();

  const [optionsState, setOptionsState] = useState<string>();
  const [monthlyContribution, setMonthlyContribution] = useState<number>(0);

  const [menu, setMenu] = useState(true);

  //Adjust starting month
  const [startMonth, setStartMonth] = useState(1);

  useEffect(()=>{
    const storedData = localStorage.getItem('dataPersist');
    const monthlyContributionStorage = localStorage.getItem('monthlyContribution');
    if(storedData){
      setData(JSON.parse(storedData))
    };
    if(monthlyContributionStorage){
      setMonthlyContribution(JSON.parse(monthlyContributionStorage))
    }

  }, []);

  useEffect(()=>{
    localStorage.setItem('dataPersist', JSON.stringify(data));
    localStorage.setItem('savedDataDate', JSON.stringify(Date.now()));
    localStorage.setItem('monthlyContribution', JSON.stringify(monthlyContribution));
  });

  const handleUpdate = (month: number, index: number) => {
    let initialData = [...data];
    initialData[month - 1].monthData.splice(index, 1);
    setData(initialData);
    handleUpdateDataState();
  };

  const handleRemoveContribution = (month: number, index: number) => {
    let initialData = [...data];
    initialData[month - 1].monthContributions.splice(index, 1);
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
    object[optionsState - 1].monthData.push({
      title: costTitle,
      cost: costAmount,
      monthIN: optionsState,
    });
    handleUpdateDataState();
  };

  const handleAdditionContribution = (
    contributionTitle: string,
    contributionAmount: number,
    optionsConstState: number,
  ) => {
    let object = [...data];
    object[optionsConstState - 1].monthContributions.push({
      title: contributionTitle,
      contribution: contributionAmount,
      monthIN: optionsConstState,
    });
    handleUpdateDataState();
  };

  const handleUpdateDataState = () => {
    if (initialFunding > 0 || monthlyContribution > 0) {
      let object = [...data];

      const sumMonthlyCost = (monthIndex: number, begBalance: number) => {
        const totalCost = object[monthIndex].monthData.reduce(function(
          acc,
          num,
        ) {
          return acc + num.cost;
        },
        0);

        const contribution = object[monthIndex].monthContributions.reduce(
          function(acc, num) {
            return acc + num.contribution;
          },
          0,
        );
        monthIndex >= startMonth
          ? (object[monthIndex].endBalance =
              begBalance + +monthlyContribution + contribution - totalCost)
          : (object[monthIndex].endBalance =
              begBalance + contribution - totalCost);
      };

      const januaryCosts = object[0].monthData.reduce(function(acc, num) {
        return acc + num.cost;
      }, 0);

      //January settings
      const janContribution = object[0].monthContributions.reduce(function(
        acc,
        num,
      ) {
        return acc + num.contribution;
      },
      0);
      // object[0].begBalance = initialFunding;
      // object[0].endBalance =
      //   initialFunding + janContribution + monthlyContribution - januaryCosts;

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

  // const handleLocalStorage = () =>{
  //   localStorage.setItem('savedData', JSON.stringify(data));
  //   localStorage.setItem('savedDataDate', JSON.stringify(Date.now()));
  // }
  //
  // const handleUploadLocalStorage = () =>{
  //   const getItem = localStorage.getItem('savedData');
  //   console.log({getItem});
  //   // if(JSON.parse(localStorage.getItem('savedData')) !== null){
  //   //   const importData = JSON.parse(localStorage.getItem('savedData'));
  //   // }
  //   //
  //   //
  //   // console.log({importData});
  //   // console.log({data});
  //   //
  //   // localStorage.getItem('savedData') && setData(importData);
  //   // importData && setData(importData);
  //   // if(JSON.parse(localStorage.getItem('savedData'))){
  //   //
  //   // }
  //
  // }

  return (
    <section>
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
                  {initialFunding > 0 && (
                    <button onClick={(e) => handleUpdateDataState()}>
                      Submit
                    </button>
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
                      Submit
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
                    <button
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
                    onChange={(e) =>
                      setContributionTitle(e.currentTarget.value)
                    }
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
                    <button
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
                    </button>
                  )}
                  <div>Adjust Start Month</div>
                  <select
                    id="month"
                    value={optionsConstState}
                    onChange={(e) =>
                      setStartMonth(parseInt(e.currentTarget.value))
                    }
                    required
                    className="inputBox"
                  >
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
                </label>
              </div>
            </section>
          </header>
        )}
        <main className="mainSection">
          {data.map((data, index) => (
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
                    data.monthContributions.length > 0) && (
                    <>
                      <div className="monthHeader"> Month Contributions</div>
                      {monthlyContribution > 0 && (
                        <div>${monthlyContribution} </div>
                      )}
                    </>
                  )}

                  {data.monthContributions.length > 0 &&
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
                {data.monthData.length > 0 && (
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
      </div>
      <button onClick={()=>localStorage.clear()}>Clear Storage</button>
      <Footer />
    </section>
  );
};

export default App;
