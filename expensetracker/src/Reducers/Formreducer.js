import ApprovalAuthority from "../Components/Data/data";

const InitialState = {
    expenses: [],
};

const FormReducer = (state = InitialState, action) => {
    debugger;
    console.log(state);
    switch (action.type) {
        case "On_Submit":
            const { salutation, name, date, expenseType, fromPlace, toPlace, amount, file } = action.payload;
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

        case "Approve_Exp":
            const Manager = ApprovalAuthority.find(info => info.Designation === "Manager");
            // const {payload:expense}=action;
            const updatedExpenses = state.expenses.map(exp => {
                if (exp===action.payload) {
                    if (Manager) {
                        return { ...exp,  status: "Approved By Manager" };
                    } else {
                        return { ...exp, status: "Expense Rejected" };
                    }
                } else {
                    return exp;

                }
            });

            return {
                ...state,
                expenses: updatedExpenses
            };

        default:
            return state;
    }
};

export default FormReducer;
