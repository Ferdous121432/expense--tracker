/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Context } from "./context/Context";

export const Balance = () => {
  const { transections } = useContext(Context);

  const totalBalance = transections.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  const sign = totalBalance < 0 ? "-" : "+";

  return (
    <div className="row">
      <div className="balance u-center-text">
        <h3 className="heading-tertiary balance__heading">Your Balance</h3>
        <h1
          className={
            totalBalance < 0
              ? "heading-primary balance__amount balance__amount-minus"
              : "heading-primary balance__amount-plus"
          }
          id="balance"
        >
          <span>{sign}</span> ${Math.abs(totalBalance)}
        </h1>
      </div>
    </div>
  );
};
