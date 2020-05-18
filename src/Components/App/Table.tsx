import React from 'react';
import dataProps from "./Interface";


const Table = ({ data }: dataProps) => {
  return (
    <>
        {data && <div>
            {data.map((num,index)=>(
                <div key={index}>
                    {num.monthName}
                </div>
            ))}
        </div>}
    </>
  );
};

export default Table;
