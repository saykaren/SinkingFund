import React, { useState, useEffect } from 'react';
import '../Styling/App.scss';
import TestData from './TestData';
import StartData from './StartData';
import Table from './Table';
import Modal from './Modal';
import MonthList from './MonthList';
import Menu from './Menu';

const Container = () => {
  const [data, setData] = useState(StartData);

  const [modal, setModal] = useState(true);

  //Input section
  const [initialFunding, setInitialFunding] = useState(data[0].begBalance);
  const [costTitle, setCostTitle] = useState<string>('');
  const [costAmount, setCostAmount] = useState<number>(0);
  const [contributionTitle, setContributionTitle] = useState<string>('');
  const [contributionAmount, setContributionAmount] = useState<number>(0);
  const [optionsConstState, setOptionsConstState] = useState<number>(0);

  const [optionsState, setOptionsState] = useState<string>('O');
  const [monthlyContribution, setMonthlyContribution] = useState<number>(0);
  const [expenseSelection, setExpenseSelection] = useState<number>(0);

  const [menu, setMenu] = useState(true);
  const [error, setError] = useState<boolean>(false);

  //Adjust starting month
  const [startMonth, setStartMonth] = useState(0);

  useEffect(() => {
    const storedData = localStorage.getItem('dataPersist');
    if (storedData) {
      setModal(false);
    }
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

  const handleRemoval = (
    month: number,
    index: number,
    lineIndex: number,
    type: string,
  ) => {
    let initialData = [...data];
    switch (true) {
      case type === 'expense':
        initialData[index].monthData.splice(lineIndex, 1);
        setData(initialData);
        handleUpdateDataState();
        break;
      case type === 'contribution':
        initialData[index].monthContributions.splice(lineIndex, 1);
        setData(initialData);
        handleUpdateDataState();
        break;
      default:
        setError(true);
        break;
    }
  };

  const handleInitialInput = (arg1: number) => {
    if (arg1 > 0) {
      setInitialFunding(arg1);
    }
  };

  const handleSelection = (
    title: string,
    amount: number,
    event: number,
    section: string,
  ) => {
    let object = [...data];
    const index = event;
    section === 'expense' || section === 'specialExpense'
      ? object[index].monthData.push({
          title: title,
          cost: amount,
          monthIN: object[index].monthId,
        })
      : object[index].monthContributions.push({
          title: title,
          contribution: amount,
          monthIN: object[index].monthId,
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
        object[monthIndex].endBalance =
          begBalance + monthlyContribution + contribution - totalCost;
      };

      const firstMonthCosts = object[0].monthData.reduce(function(acc, num) {
        return acc + num.cost;
      }, 0);

      //January settings
      const firstMonthContribution = object[0].monthContributions.reduce(
        function(acc, num) {
          return acc + num.contribution;
        },
        0,
      );

      object[0].begBalance = initialFunding;
      object[0].endBalance =
        initialFunding +
        firstMonthContribution +
        monthlyContribution -
        firstMonthCosts;

      object.map((number, index) => {
        if (index !== 0) {
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

  const handleChangeMonthStart = (event: number) => {
    const currentData = [...data];
    currentData.slice(0, event);
    currentData.splice(0, event).map((num, index) => currentData.push(num));
    setData(currentData);
    if (data === currentData) {
      alert('yes');
      handleUpdateDataState();
    }
  };

  return (
    <section>
      {modal && (
        <Modal
          setModal={setModal}
          initialFunding={initialFunding}
          handleInitialInput={handleInitialInput}
          handleUpdateDataState={handleUpdateDataState}
          monthlyContribution={monthlyContribution}
          setMonthlyContribution={setMonthlyContribution}
          costTitle={costTitle}
          setCostTitle={setCostTitle}
          costAmount={costAmount}
          setCostAmount={setCostAmount}
          optionsState={expenseSelection}
          setOptionsState={setExpenseSelection}
          handleSelection={handleSelection}
          data={data}
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
            <Menu
              initialFunding={initialFunding}
              handleInitialInput={handleInitialInput}
              handleUpdateDataState={handleUpdateDataState}
              monthlyContribution={monthlyContribution}
              costTitle={costTitle}
              setCostTitle={setCostTitle}
              costAmount={costAmount}
              setCostAmount={setCostAmount}
              optionsState={optionsState}
              setOptionsState={setOptionsState}
              contributionTitle={contributionTitle}
              setContributionTitle={setContributionTitle}
              contributionAmount={contributionAmount}
              setContributionAmount={setContributionAmount}
              optionsConstState={optionsConstState}
              setOptionsConstState={setOptionsConstState}
              setStartMonth={setStartMonth}
              setMonthlyContribution={setMonthlyContribution}
              data={data}
              handleSelection={handleSelection}
              expenseSelection={expenseSelection}
              setExpenseSelection={setExpenseSelection}
              startMonth={startMonth}
              handleChangeMonthStart={handleChangeMonthStart}
            />
          </section>
        )}
        <MonthList
          data={data}
          monthlyContribution={monthlyContribution}
          handleRemoval={handleRemoval}
        />
      </div>
      <button onClick={() => localStorage.clear()}>Clear Storage</button>
      <button onClick={() => setData(StartData)}>Start From Scratch</button>
      <button onClick={() => handleSampleData()}>Example Data</button>
      <button onClick={() => setModal(!modal)}>View/Remove Modal</button>
      <Table
        data={data}
        initialFunding={initialFunding}
        monthlyContribution={monthlyContribution}
      />
    </section>
  );
};

export default Container;
