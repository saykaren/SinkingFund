import React, { useState } from 'react';
import { TestDataProps } from './Interface';

interface TableProps {
  data: Array<TestDataProps>;
  initialFunding: number;
  monthlyContribution: number;
}

const Table = ({ data, initialFunding, monthlyContribution }: TableProps) => {
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
                <th>Title</th>
                <th>Amount</th>
                <th>Month</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((num, index) => (
                  <>
                    {num.monthId === 1 && (
                      <tr key={`initial${index}`}>
                        <td>Initial Funding</td>
                        <td>{num.begBalance}</td>
                        <td>1</td>
                      </tr>
                    )}
                    <tr>
                      <td>{num.monthName} Beginning Balance</td>
                      <td>{num.begBalance.toFixed(2)}</td>
                      <td>{num.monthId}</td>
                    </tr>
                    <tr key={`row${index}`}>
                      <td>Monthly Contribution</td>
                      <td>{monthlyContribution}</td>
                      <td>{num.monthId}</td>
                    </tr>

                    {num.monthData &&
                      num.monthData.map((exp, index) => (
                        <tr key={`rowExpense${index}`}>
                          <td key={`title${index}`} id={`title${index}`}>
                            {exp.title}
                          </td>
                          <td key={`cost${index}`}>-{exp.cost}</td>
                          <td key={`month${index}`}>{exp.monthIN}</td>
                        </tr>
                      ))}
                    {num.monthContributions &&
                      num.monthContributions.map((con, index) => (
                        <tr key={`rowContribution${index}`}>
                          <td key={`title${index}`} id={`title${index}`}>
                            {con.title}
                          </td>
                          <td key={`contribution${index}`}>
                            {con.contribution}
                          </td>
                          <td key={`monthContr${index}`}>{con.monthIN}</td>
                        </tr>
                      ))}

                    <tr>
                      <td>{num.monthName} Ending Balance</td>
                      <td>{num.endBalance.toFixed(2)}</td>
                      <td>{num.monthId}</td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Table;
