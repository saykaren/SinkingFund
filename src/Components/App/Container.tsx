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
    console.log({data});
  //
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

  const [menu, setMenu] = useState(true);

  //Adjust starting month
  const [startMonth, setStartMonth] = useState(1);

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

  const handleChangeMonthStart = (event:number)=>{
      const currentData = [...data];
      const cutMonths = currentData.slice(0,(event-1));
      const cut2Months = currentData.splice(0, (event-1));

      cutMonths.map((num, index)=>(
          currentData.push(num)
          )
      );
      // currentData.push(cutMonths[0]);
            const newData = 0;
      console.log({currentData});
      //startMonth
      //setStartMonth
  }

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
        <div>Adjust Start Month</div>
        <select
            id="month"
            value={startMonth}
            onChange={(e) => handleChangeMonthStart(parseInt(e.currentTarget.value))}
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
              handleAdditionExpense={handleAdditionExpense}
              contributionTitle={contributionTitle}
              setContributionTitle={setContributionTitle}
              contributionAmount={contributionAmount}
              setContributionAmount={setContributionAmount}
              optionsConstState={optionsConstState}
              setOptionsConstState={setOptionsConstState}
              handleAdditionContribution={handleAdditionContribution}
              setStartMonth={setStartMonth}
              setMonthlyContribution={setMonthlyContribution}

            />
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
