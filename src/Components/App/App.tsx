import React, { useState, useEffect } from 'react';
import '../Styling/App.scss';
import TestData from './TestData';
import Footer from './Footer';
import StartData from './StartData';
// import dataProps from "./Interface";
import Table from './Table';
import Modal from './Modal';
import MonthList from './MonthList';

const App = () => {
  const [data, setData] = useState(StartData);

  //
  const [modal, setModal] = useState(true);

  //Input section
  const [initialFunding, setInitialFunding] = useState(data[0].begBalance);
  const [costTitle, setCostTitle] = useState<string>('');
  const [costAmount, setCostAmount] = useState<number>(0);
  const [contributionTitle, setContributionTitle] = useState<string>('');
  const [contributionAmount, setContributionAmount] = useState<number>(0);
  const [optionsConstState, setOptionsConstState] = useState<number>();

  const [optionsState, setOptionsState] = useState<string>('O');
  const [monthlyContribution, setMonthlyContribution] = useState<number>(0);

  const [menu, setMenu] = useState(true);

  //Adjust starting month
  const [startMonth, setStartMonth] = useState(1);

  useEffect(() => {
    const storedData = localStorage.getItem('dataPersist');
    const monthlyContributionStorage = localStorage.getItem(
      'monthlyContribution',
    );
    if (storedData) {
      setData(JSON.parse(storedData));
    }
    if (monthlyContributionStorage) {
      setMonthlyContribution(JSON.parse(monthlyContributionStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dataPersist', JSON.stringify(data));
    localStorage.setItem('savedDataDate', JSON.stringify(Date.now()));
    localStorage.setItem(
      'monthlyContribution',
      JSON.stringify(monthlyContribution),
    );
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

  const handleSampleData = () => {
    setData(TestData);
    setMonthlyContribution(700);
  };

  return (
    <section>
      {modal && (
        <Modal
          setModal={setModal}
          initialFunding={initialFunding}
          setInitialFunding={setInitialFunding}
          handleInitialInput={handleInitialInput}
          handleUpdateDataState={handleUpdateDataState}
          monthlyContribution={monthlyContribution}
          setMonthlyContribution={setMonthlyContribution}
          costTitle={costTitle}
          setCostTitle={setCostTitle}
          costAmount={costAmount}
          setCostAmount={setCostAmount}
          optionsState={optionsState}
          setOptionsState={setOptionsState}
          handleAdditionExpense={handleAdditionExpense}
        />
      )}
      <div className="App">
        {menu === false && (
          <div onClick={() => setMenu(true)} className="openTab">
            &raquo;
          </div>
        )}
        {menu && (
          <section className="App-header">
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
                  {optionsState !== undefined &&
                    parseInt(optionsState) > 0 &&
                    costAmount > 0 && (
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
          </section>
        )}
        <MonthList
          data={data}
          startMonth={startMonth}
          monthlyContribution={monthlyContribution}
          handleRemoveContribution={handleRemoveContribution}
          handleUpdate={handleUpdate}
        />
      </div>
      <button onClick={() => localStorage.clear()}>Clear Storage</button>
      <button onClick={() => setData(StartData)}>Start From Scratch</button>
      <button onClick={() => handleSampleData()}>Example Data</button>
      <Table
        data={data}
        initialFunding={initialFunding}
        monthlyContribution={monthlyContribution}
      />
      <Footer />
    </section>
  );
};

export default App;
