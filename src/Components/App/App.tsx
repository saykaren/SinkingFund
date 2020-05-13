import React from 'react';
import '../Styling/App.scss';
import TestData from './TestData';


function App() {

    return (
        <div className="App">
            <header className="App-header">
                Less Frequent Expenses (Happens less often than monthly) Items you cannot schedule monthly in your budget
            </header>
            {TestData.map((data, index)=>
                <section  key={index} className={(data.endBalance >=0) ? 'monthCard' : 'monthCard negativeMonthCard'}>
                    <h2>Month: {data.monthName}</h2>
                    <div className={(data.begBalance >=0) ? 'positiveBalance' : 'negativeBalance'}>
                        Beginning Balance: ${data.begBalance}
                    </div>
                    {data.monthData.map((data,index)=>
                        <div key={index}>
                            {data.title} ${data.cost}
                            <button onClick={()=>console.log('delete')}>X</button>
                        </div>
                    )}
                <div className={(data.endBalance >=0) ? 'positiveBalance' : 'negativeBalance'}>
                    Ending Balance: ${data.endBalance}
                </div>
                </section>)
            }
        </div>
    );
}

export default App;
