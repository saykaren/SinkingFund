import React from 'react';
import { TestDataProps } from './Interface';

interface SelectorProps {
  inputTitle: string;
  titleState: string;
  setTitleState: (arg1: string) => void;
  amount: number;
  setAmount: (arg1: number) => void;
  optionsState: number;
  setOptionsState: (arg1: number) => void;
  data: Array<TestDataProps>;
  handleFunction: (arg1: string, arg2: number, arg3: number, arg4: string) => void;
  type: string
}
const Selector = ({
  inputTitle,
  titleState,
  setTitleState,
  amount,
  setAmount,
  optionsState,
  setOptionsState,
  data,
  handleFunction,
    type,
}: SelectorProps) => {

    const expenseArrayList = ['Auto Insurance', 'Amazon', 'Costco / Sams Club', 'Christmas', 'HOA Fees',
        'Home Insurance', 'Life insurance', 'Property Taxes', 'Vehicle Registration'];
  return (
    <>
      <span>{inputTitle}</span>
      <input
        type="text"
        value={titleState}
        onChange={(e) => setTitleState(e.currentTarget.value)}
        placeholder="Name of Contribution"
        className="inputBox"
      ></input>
        {type === 'expense' &&
        <select
            id="text"
            value={titleState}
            onChange={(e) => setTitleState(e.currentTarget.value)}
            className="inputOption"
        >
            <option value={''}>SELECT ONE</option>
            <option value={'Auto Insurance'}>Auto Insurance</option>
            <option value={'Amazon'}>Amazon</option>
            <option value={'Costco / Sams Club'}>
                Costco / Sams Club
            </option>
            <option value={'Christmas'}>Christmas</option>
            <option value={'HOA Fees'}>HOA Fees</option>
            <option value={'Home Insurance'}>Home Insurance</option>
            <option value={'Life insurance'}>Life insurance</option>
            <option value={'Property Taxes'}>Property Taxes</option>
            <option value={'Vehicle Registration'}>
                Vehicle Registration
            </option>
            {expenseArrayList && expenseArrayList.map((arrayItem, index)=>(
                <option value={arrayItem} key={index}> {arrayItem}</option>
            ))}
        </select>
        }
      <input
        type="number"
        value={amount}
        onChange={(e) =>
          setAmount(parseFloat(e.currentTarget.value))
        }
        className="inputBox"
      ></input>
      <select
        id="month"
        value={optionsState}
        onChange={(e) => setOptionsState(parseInt(e.currentTarget.value))}
        required
        className="inputBox"
      >
        {data &&
          data.map((num, index) => (
            <option key={index} value={index}>
              {num.monthName}
            </option>
          ))}
      </select>
      {optionsState !== undefined && amount > 0 && (
        <button
          className="submit"
          onClick={() =>
            handleFunction(
              titleState,
              amount,
              optionsState.valueOf(),
                type,
            )
          }
        >
          Submit
        </button>
      )}
    </>
  );
};

// export const SpecialSelector = ({  inputTitle,
//                              titleState,
//                              setTitleState,
//                              amount,
//                              setAmount,
//                              optionsState,
//                              setOptionsState,
//                              data,
//                              handleFunction,
//                              type,}: SelectorProps)=>{
//     const expenseArrayList = ['Auto Insurance', 'Amazon', 'Costco / Sams Club', 'Christmas', 'HOA Fees',
//         'Home Insurance', 'Life insurance', 'Property Taxes', 'Vehicle Registration'];
//
//     return(
//         <>
//             <span>{inputTitle}</span>
//             {/*<input*/}
//             {/*    type="text"*/}
//             {/*    value={titleState}*/}
//             {/*    onChange={(e) => setTitleState(e.currentTarget.value)}*/}
//             {/*    placeholder="Name of Contribution"*/}
//             {/*    className="inputBox"*/}
//             {/*></input>*/}
//             <select
//                 id="text"
//                 value={titleState}
//                 onChange={(e) => setTitleState(e.currentTarget.value)}
//                 className="inputOption"
//             >
//                 <option value={''}>SELECT ONE</option>
//                 <option value={'Auto Insurance'}>Auto Insurance</option>
//                 <option value={'Amazon'}>Amazon</option>
//                 <option value={'Costco / Sams Club'}>
//                     Costco / Sams Club
//                 </option>
//                 <option value={'Christmas'}>Christmas</option>
//                 <option value={'HOA Fees'}>HOA Fees</option>
//                 <option value={'Home Insurance'}>Home Insurance</option>
//                 <option value={'Life insurance'}>Life insurance</option>
//                 <option value={'Property Taxes'}>Property Taxes</option>
//                 <option value={'Vehicle Registration'}>
//                     Vehicle Registration
//                 </option>
//                 {expenseArrayList && expenseArrayList.map((arrayItem, index)=>(
//                     <option value={arrayItem} key={index}> {arrayItem}</option>
//                 ))}
//             </select>
//             <input
//                 type="number"
//                 value={amount}
//                 onChange={(e) =>
//                     setAmount(parseFloat(e.currentTarget.value))
//                 }
//                 className="inputBox"
//             ></input>
//             <select
//                 id="month"
//                 value={optionsState}
//                 onChange={(e) => setOptionsState(parseInt(e.currentTarget.value))}
//                 required
//                 className="inputBox"
//             >
//                 {data &&
//                 data.map((num, index) => (
//                     <option key={index} value={index}>
//                         {num.monthName}
//                     </option>
//                 ))}
//             </select>
//             {optionsState !== undefined && amount > 0 && (
//                 <button
//                     className="submit"
//                     onClick={() =>
//                         handleFunction(
//                             titleState,
//                             amount,
//                             optionsState.valueOf(),
//                             type,
//                         )
//                     }
//                 >
//                     Submit
//                 </button>
//             )}
//         </>
// //         ///////////////
//         // //         <>
//         // //         // <select
//         // //         //     id="text"
//         // //         //     value={titleState}
//         // //         //     onChange={(e) => setTitleState(e.currentTarget.value)}
//         // //         //     className="inputOption"
//         // //         // >
//         // //         //     <option value={''}>SELECT ONE</option>
//         // //         //     <option value={'Auto Insurance'}>Auto Insurance</option>
//         // //         //     <option value={'Amazon'}>Amazon</option>
//         // //         //     <option value={'Costco / Sams Club'}>
//         // //         //         Costco / Sams Club
//         // //         //     </option>
//         // //         //     <option value={'Christmas'}>Christmas</option>
//         // //         //     <option value={'HOA Fees'}>HOA Fees</option>
//         // //         //     <option value={'Home Insurance'}>Home Insurance</option>
//         // //         //     <option value={'Life insurance'}>Life insurance</option>
//         // //         //     <option value={'Property Taxes'}>Property Taxes</option>
//         // //         //     <option value={'Vehicle Registration'}>
//         // //         //         Vehicle Registration
//         // //         //     </option>
//         // //         //     {expenseArrayList && expenseArrayList.map((arrayItem, index)=>(
//         // //         //         <option value={arrayItem} key={index}> {arrayItem}</option>
//         // //         //     ))}
//         // //         // </select>
//         // //         <input
//         // //     type="number"
//         // //     value={amount}
//         // //     onChange={(e) =>
//         // //         setAmount(parseFloat(e.currentTarget.value))
//         // // }
//         // //     className="inputBox"
//         // //         ></input>
//         // //         <select
//         // //     value={optionsState}
//         // //     onChange={(e) => setOptionsState(e.currentTarget.value)}
//         // //     required
//         // //     className="inputOption"
//         // //         >
//         // //         <option value={0}>SELECT ONE</option>
//         // //     <option value={1}>January</option>
//         // //         <option value={2}>February</option>
//         // //         <option value={3}>March</option>
//         // //         <option value={4}>April</option>
//         // //         <option value={5}>May</option>
//         // //         <option value={6}>June</option>
//         // //         <option value={7}>July</option>
//         // //         <option value={8}>August</option>
//         // //         <option value={9}>September</option>
//         // //         <option value={10}>October</option>
//         // //         <option value={11}>November</option>
//         // //         <option value={12}>December</option>
//         // //         </select>
//         // //         {optionsState !== undefined &&
//         // //         parseInt(optionsState) > 0 &&
//         // //         amount > 0 && (
//         // //             <button
//         // //                 className="submit"
//         // //                 onClick={() =>
//         // //                     handleAdditionExpense(
//         // //                         costTitle,
//         // //                         costAmount,
//         // //                         optionsState,
//         // //                     )
//         // //                 }
//         // //             >
//         // //                 Submit
//         // //             </button>
//         // //         )}
// // </>
//     );
// }

export default Selector;

