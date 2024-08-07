// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";

import Transections from "./Transections";

function History() {
  return (
    <div className="row">
      <div className="history ">
        <div className="u-center-text">
          <h3 className="heading-h4 ">Transaction History</h3>
        </div>
        <>
          <Transections />
        </>
      </div>
    </div>
  );
}
export default History;
