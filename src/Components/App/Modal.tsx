import React, { useState } from 'react';

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
  optionsState: string;
  setOptionsState: (arg1: string) => void;
  handleAdditionExpense: (arg1: string, arg2: number, arg3: number) => void;
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
}: ModalProps) => {
  const [knowSinking, setKnowSinking] = useState<string>('Select One');

  return (
    <div className="modal">
      <h2 className="modal-header">
        <button className="modal-close" onClick={() => setModal(false)}>
          X
        </button>
        <span className="positiveLarge">Sinking Fund!</span>
      </h2>
      <div className="modal-content">
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
        <div className="modal-details">
          {knowSinking === 'No' && (
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
            </>
          )}
          {knowSinking !== 'Select One' && (
            <>
              <h2 className="modal-header">Lets Get Started!</h2>
              <div className="modal-section">
                <div className="inputLabel">
                  <label className="inputSectionModal">
                    <details className="modal-section">
                      <summary className="modal-header">
                        Initial Funding
                      </summary>
                      <p>
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
                        typical fees and get your brain juices going on the
                        right track of other yearly fees that might be special
                        to you and your family.
                      </p>
                      <p>
                        Just remember all of this can be adjusted so try to add
                        as much as you can initially to help guide you and make
                        adjustments later.
                      </p>
                    </details>
                    <select
                      id="text"
                      value={costTitle}
                      onChange={(e) => setCostTitle(e.currentTarget.value)}
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
                    </select>
                    <input
                      type="number"
                      value={costAmount}
                      onChange={(e) =>
                        setCostAmount(parseFloat(e.currentTarget.value))
                      }
                      className="inputBox"
                    ></input>
                    <select
                      value={optionsState}
                      onChange={(e) => setOptionsState(e.currentTarget.value)}
                      required
                      className="inputOption"
                    >
                      <option value={0}>SELECT ONE</option>
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
                    {optionsState !== undefined &&
                      parseInt(optionsState) > 0 &&
                      costAmount > 0 && (
                        <button
                          className="submit"
                          onClick={() =>
                            handleAdditionExpense(
                              costTitle,
                              costAmount,
                              parseInt(optionsState),
                            )
                          }
                        >
                          Submit
                        </button>
                      )}
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
