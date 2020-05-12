import React from 'react';
import '../Styling/App.scss';
import TestData from './TestData';

interface AppProps {

}
function App() {

    interface monthSpelledOutProps {
        prop: string;
    }


    const monthSpelledOut = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December",
    };
    const testing =         {
            month: 9,
            begBalance: 1000,
            endBalance: 100,
            monthData: [
            ]
        }

        const handleNumber = (arg: number)=>{
        // const result = arg.toString;
        return monthSpelledOut[arg];
        }

    return (
        <div className="App">
            <header className="App-header">

                {monthSpelledOut[2]}

                Less Frequent Expenses (Happens less often than monthly) Items you cannot schedule monthly in your budget
                {TestData.map((data, index)=>
                    <div key={index}>
                       Month: {data.month}
                       {/*{monthSpelledOut[`${data.month}`]}*/}
                        {data.monthData.map((data,index)=>
                        <div key={index}>
                            Title {data.title}
                            Cost {data.cost}
                        </div>
                        )}
                    </div>)
                   }
            </header>
        </div>
    );
}

export default App;
