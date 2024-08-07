/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Context } from "./context/Context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

function Transection({ transection }) {
  const { deleteTransection } = useContext(Context);
  const sign = transection.amount < 0 ? "-" : "+";

  return (
    <li
      key={transection.id}
      className={
        transection.amount < 0
          ? "history__tran history__tran-minus"
          : "history__tran history__tran-plus"
      }
    >
      <button
        className="history__tran__btn"
        onClick={() => deleteTransection(transection.id)}
      >
        <FontAwesomeIcon icon={faMinus} className="btn__delete-color" />
      </button>
      <p className="history__para para">{transection.text}</p>
      <p className="history__para para">
        <span>{sign}</span> ${Math.abs(transection.amount)}
      </p>
    </li>
  );
}
export default Transection;
