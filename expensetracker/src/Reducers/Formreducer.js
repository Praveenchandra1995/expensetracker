
const InitialState = {
    expenseType: [],
};
const FormReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "On_Submit":
            return {
                ...state,
                expenseType: [...state.expenseType, action.payload]
            };
        default:
            return state;
    }
};

export default FormReducer;