/* eslint-disable no-unused-vars */
import { useState } from "react";

import { useContext } from "react";
import { Context } from "./context/Context";

function NewTransection() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransection } = useContext(Context);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransection = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount: +amount,
    };
    addTransection(newTransection);
    setAmount("");
    setText("");
  };

  return (
    <div className="row">
      <form action="" className="new-transection" onSubmit={onSubmit}>
        <h3 className="heading-tertiary">Add New Transaction</h3>
        <div className="new-transection__form">
          <input
            type="text"
            className="new-transection__input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Text"
          />
          <label htmlFor="text" className="new-transection__label">
            Text
          </label>
        </div>
        <div className="new-transection__form">
          <input
            type="number"
            className="new-transection__input"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
          />
          <label htmlFor="amount" className="new-transection__label">
            Amount
          </label>
        </div>

        <div className="u-center-text">
          {" "}
          <button className="btn btn-white ">Add Transaction</button>
        </div>
      </form>
    </div>
  );
}
export default NewTransection;
