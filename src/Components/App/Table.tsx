import React from 'react';
import dataProps from "./Interface";


const Table = ({ data }: dataProps) => {
  return (
    <>
      <table id="table-to-xls">
        <thead>
        <tr>
          <th>Expense Title</th>
          <th>Expense Cost</th>
          <th>Expense Month</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          {data && data.map((num, index)=>(
                num.monthData && num.monthData.map((exp, index)=>(
                     <tr>
                      <td key={index}>{exp.title}
                      </td>
                       <td key={index}>{exp.cost}
                       </td>
                       <td key={index}>{exp.monthIN}
                       </td>
                    </tr>
                  ))
              ))}
        </tr>
        </tbody>
      </table>
        {/*{data && <div>*/}
        {/*    {data.map((num,index)=>(*/}
        {/*        <div key={index}>*/}
        {/*            {num.monthName}*/}

        {/*        </div>*/}
        {/*    ))}*/}
        {/*</div>}*/}
    </>
  );
};

export default Table;
