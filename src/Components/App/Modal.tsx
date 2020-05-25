import React, { useState } from 'react';
import Selector from "./Selector";
import SpecialSelector from './Selector';
import {TestDataProps} from "./Interface";

interface ModalProps {
  setModal: (arg1: boolean) => void;
  setInitialFunding: (arg1: number) => void;
  initialFunding: number;
  handleInitialInput: (arg1: number) => void;
  handleUpdateDataState: () => void;
  monthlyContribution: number;
  setMonthlyContribution: (arg1: number) => void;
  costTitle: string;
  setCostTitle: (arg1: string) => void;
  costAmount: number;
  setCostAmount: (arg1: number) => void;
  optionsState: number;
  setOptionsState: (arg1: number) => void;
  handleAdditionExpense: (arg1: string, arg2: number, arg3: string) => void;
  data: Array<TestDataProps>;
  handleSelection: (
      arg1: string,
      arg2: number,
      arg3: number,
      arg4: string,
  ) => void;
}
const Modal = ({
  setModal,
  setInitialFunding,
  initialFunding,
  handleInitialInput,
  handleUpdateDataState,
  monthlyContribution,
  setMonthlyContribution,
  costTitle,
  setCostTitle,
  costAmount,
  setCostAmount,
  optionsState,
  setOptionsState,
  handleAdditionExpense,
    data,
                 handleSelection,
}: ModalProps) => {
  const [knowSinking, setKnowSinking] = useState<string>('Select One');
  const [getStarted, setGetStarted] = useState<string>('Select One');

  return (
    <div className="modal">
      <h2 className="modal-header">
        <button className="modal-close" onClick={() => setModal(false)}>
          X
        </button>
        {knowSinking === 'Select One' && getStarted === 'Select One' && (
          <span className="positiveLarge">Sinking Fund!</span>
        )}
      </h2>
      <div className="modal-content">
        <div
          className={knowSinking !== 'Select One' ? 'hidden' : 'modal-question'}
        >
          Do you know what a Sinking Fund is or what it is for?
          <select
            id="month"
            value={knowSinking}
            onChange={(e) => setKnowSinking(e.currentTarget.value)}
            required
            className="inputOption"
          >
            <option value={'Select One'}>SELECT ONE</option>
            <option value={'Yes'}>Yes</option>
            <option value={'No'}>No</option>
          </select>
        </div>
        <div className="modal-details">
          {knowSinking === 'No' && getStarted === 'Select One' && (
            <>
              <details className="modal-section">
                <summary className="modal-header">
                  What is a Sinking Fund?
                </summary>
                <p>
                  <b>Definition:</b> A fund formed by periodically setting aside
                  money for the gradual replacement of a wasting asset. In other
                  words, it’s a pool of money to take care of all your one off
                  expenses throughout the year. You know those pesky expenses
                  that you only see once or twice a year and are caught off
                  guard by. These are expenses that are hard to track in a
                  monthly budget as they don’t occur monthly.
                </p>
              </details>
              <details className="modal-section">
                <summary className="modal-header">
                  Why do you need a sinking fund?
                </summary>
                <p>
                  Well if you’re like me and trying to tell your money where to
                  go rather than wonder where it went a Sinking Fund will allow
                  you to not get caught off guard by a yearly expense. Also
                  typically the yearly expenses like insurance, term life, taxes
                  and Christmas are large expenses you don’t want creeping up on
                  you. So how do you handle those expenses like a pro and keep
                  your budget on track. Answer? A Sinking Fund!
                </p>
              </details>
              <div className="modal-header">
                Ready to get started?
                <select
                  id="month"
                  value={getStarted}
                  onChange={(e) => setGetStarted(e.currentTarget.value)}
                  required
                  className="inputOption"
                >
                  <option value={'Select One'}>SELECT ONE</option>
                  <option value={'Yes'}>Yes</option>
                  <option value={'No'}>No</option>
                </select>
              </div>
            </>
          )}
          {(getStarted !== 'Select One' || knowSinking === 'Yes') && (
            <>
              <h2 className="modal-header">Lets Get Started!</h2>
              <div className="modal-section">
                <div className="inputLabel">
                  <label className="inputSectionModal">
                    <details className="modal-section">
                      <summary className="modal-header">
                        Initial Funding
                      </summary>
                      <p className="hoover">
                        Like any good fund you need to prime the pump. How much
                        can you initially put into this fund to help cover your
                        yearly costs?
                      </p>
                    </details>
                    <input
                      type="number"
                      value={initialFunding}
                      onChange={(e) =>
                        handleInitialInput(parseFloat(e.currentTarget.value))
                      }
                      className="inputBox"
                    ></input>
                    {initialFunding > 0 && (
                      <button onClick={(e) => handleUpdateDataState()}>
                        Submit
                      </button>
                    )}
                  </label>
                </div>
                <div className="inputLabel">
                  <label className="inputSectionModal">
                    <details className="modal-section">
                      <summary className="modal-header">
                        Monthly Contribution
                      </summary>
                      <p>
                        Unless you are able to put a ton in initially or have
                        very few expenses you will need to set a certain amount
                        of your paycheck to be put into this fund to stay out of
                        the red. How much do you think you can put in each
                        month? (Its okay to estimate right now, you can adjust
                        later as needed).
                      </p>
                    </details>
                    <input
                      type="number"
                      value={monthlyContribution}
                      onChange={(e) =>
                        setMonthlyContribution(
                          parseFloat(e.currentTarget.value),
                        )
                      }
                      className="inputBox"
                    ></input>
                    {monthlyContribution > 0 && (
                      <button onClick={(e) => handleUpdateDataState()}>
                        Apply Contribution
                      </button>
                    )}
                  </label>
                </div>
                <div className="inputLabel">
                  <label className="inputSectionModal">
                    <details className="modal-section">
                      <summary className="modal-header">Expense:</summary>
                      <p>
                        We all have those same typical yearly fees you need to
                        account for. Below will help guide you to the most
                        typical fees.
                      </p>
                    </details>
                    <SpecialSelector inputTitle={'Expense test'}
                                     titleState={costTitle}
                                     setTitleState={setCostTitle}
                                     amount={costAmount}
                                     setAmount={setCostAmount}
                                     optionsState={optionsState}
                                     setOptionsState={setOptionsState}
                                     data={data}
                                     handleFunction={handleSelection}
                                     type={'expense'}
                    />

                  </label>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Modal;
