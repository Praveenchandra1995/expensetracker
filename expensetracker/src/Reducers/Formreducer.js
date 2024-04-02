
const InitialState = {
    expenses: [],
};
const FormReducer = (state = InitialState, action) => {
    debugger
    ;

    switch (action.type) {
        case "On_Submit":
            const { salutation, name, date, expenseType, fromPlace, toPlace, amount,file } = action.payload;
            const newExpense = {
                salutation,
                name,
                date,
                expenseType,
                fromPlace,
                toPlace,
                amount,
                file,
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