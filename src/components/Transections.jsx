import { useContext } from "react";
import { Context } from "./context/Context";
import Transection from "./Transection";

function Transections() {
  const { transections } = useContext(Context);
  console.log(transections);

  return (
    <ul className="history__trans">
      {transections.map((transection) => (
        <Transection key={transection.id} transection={transection} />
      ))}
    </ul>
  );
}
export default Transections;
