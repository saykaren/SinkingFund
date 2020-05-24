import React from "react";
import {TestDataProps} from "./Interface";

interface SelectorProps {
    inputTitle: string;
    titleState: string;
    setTitleState: (arg1: string) => void;
    contributionAmount: number;
    setContributionAmount: (arg1: number) => void;
    optionsConstState: number;
    setOptionsConstState: (arg1: number) => void;
    data: Array<TestDataProps>;
    handleFunction: (
        arg1: string,
        arg2: number,
        arg3: number,
    ) => void;
}
const Selector =({inputTitle, titleState, setTitleState,
                     contributionAmount,
                     setContributionAmount,
                     optionsConstState,
                     setOptionsConstState,
                     data,
                     handleFunction,
                 }: SelectorProps)=>{

    return(
        <>
            <span>{inputTitle}</span>
            <input
                type="text"
                value={titleState}
                onChange={(e) => setTitleState(e.currentTarget.value)}
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
                {data &&
                data.map((num, index) => (
                    <option key={index} value={index}>
                        {num.monthName}
                    </option>
                ))}
            </select>
            {optionsConstState !== undefined && contributionAmount > 0 && (
                <button
                    className="submit"
                    onClick={() =>
                        handleFunction(
                            titleState,
                            contributionAmount,
                            optionsConstState.valueOf(),
                        )
                    }
                >
                    Submit
                </button>)}
            </>
    );
};

export default Selector;