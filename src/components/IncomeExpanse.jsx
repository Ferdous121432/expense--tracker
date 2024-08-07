/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Context } from "./context/Context";

function IncomeExpanse() {
  const { transections } = useContext(Context);
  console.log(transections);
  const incomeBalance = transections
    .filter((trans) => trans.amount > 0)
    .reduce((acc, trans) => acc + trans.amount, 0)
    .toFixed(2);
  const expanseBalance = transections
    .filter((trans) => trans.amount < 0)
    .reduce((acc, trans) => acc + trans.amount, 0)
    .toFixed(2);
  console.log(incomeBalance, expanseBalance);

  return (
    <div className="row">
      <div className="income-expanse">
        <div className="income-expanse__income">
          <p className="para">Income</p>
          <p className="para" id="income-expanse__income">
            <span></span> ${Math.abs(incomeBalance)}
          </p>
        </div>
        <div className="income-expanse__expanse">
          <p className="para ">Expanse</p>
          <p className=" para " id="income-expanse__expanse">
            <span>-</span> ${Math.abs(expanseBalance)}
          </p>
        </div>
      </div>
    </div>
  );
}
export default IncomeExpanse;
