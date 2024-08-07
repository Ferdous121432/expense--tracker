function NewTransection() {
  return (
    <div className="row">
      <form action="" className="new-transection">
        <h3 className="heading-tertiary">Add New Transaction</h3>
        <div className="new-transection__form">
          <input
            type="text"
            className="new-transection__input"
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
            placeholder="Amount"
          />
          <label htmlFor="amount" className="new-transection__label">
            Amount
          </label>
        </div>
        <div className="u-center-text">
          <button className="btn btn-white ">Add Transaction</button>
        </div>
      </form>
    </div>
  );
}
export default NewTransection;
