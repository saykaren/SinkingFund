import React, { useState } from 'react';
import dataProps from './Interface';

const Table = ({ data }: dataProps) => {
  const [copyData, setCopyData] = useState(false);

  return (
    <>
      <button onClick={() => setCopyData(!copyData)}>Data Tables</button>
      {copyData && (
        <>
          <h2 id="table-header">Copy Data Below to Store in Excel</h2>
          <table id="table-to-xls">
            <thead>
              <tr>
                <th>Expense Title</th>
                <th>Expense Cost</th>
                <th>Expense Month</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map(
                  (num, index) =>
                    num.monthData &&
                    num.monthData.map((exp, index) => (
                      <tr key={`row${index}`}>
                        <td key={`title${index}`} id={`title${index}`}>
                          {exp.title}
                        </td>
                        <td key={`cost${index}`}>{exp.cost}</td>
                        <td key={`month${index}`}>{exp.monthIN}</td>
                      </tr>
                    )),
                )}
            </tbody>
          </table>
          <table id="table-to-xls">
            <thead>
              <tr>
                <th>Contribution Title</th>
                <th>Contribution Cost</th>
                <th>Contribution Month</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map(
                  (num, index) =>
                    num.monthContributions &&
                    num.monthContributions.map((exp, index) => (
                      <tr key={`row${index}`}>
                        <td key={`titleCont${index}`} id={`title${index}`}>
                          {exp.title}
                        </td>
                        <td key={`contribution${index}`}>{exp.contribution}</td>
                        <td key={`monthCont${index}`}>{exp.monthIN}</td>
                      </tr>
                    )),
                )}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Table;
