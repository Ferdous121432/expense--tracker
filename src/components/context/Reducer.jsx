export default function Reducer(state, action) {
  switch (action.type) {
    case "DELETE_TRANSECTION":
      return {
        ...state,
        transections: state.transections.filter(
          (trans) => trans.id !== action.payload
        ),
      };

    case "ADD_TRANSECTION":
      return {
        ...state,
        transections: [action.payload, ...state.transections],
      };

    default:
      return state;
  }
}
