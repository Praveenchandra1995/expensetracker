
const InitialState = {
    expenses: [],
};
const FormReducer = (state = InitialState, action) => {
    debugger
    ;

    switch (action.type) {
        case "On_Submit":
            const { salutation, name, date, expenseType, fromPlace, toPlace, amount } = action.payload;
            const newExpense = {
                salutation,
                name,
                date,
                expenseType,
                fromPlace,
                toPlace,
                amount,
            };
            return {
                ...state,
                expenses: [...state.expenses, newExpense],
            };
        default:
            return state;
    }
};

export default FormReducer;