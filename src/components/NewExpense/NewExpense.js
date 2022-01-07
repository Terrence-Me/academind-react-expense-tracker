import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditinghandler = () => {
    setIsEditing(true);
  };

  const stopEditinghandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditinghandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSavedExpenseData={saveExpenseDataHandler}
          onCancel={stopEditinghandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
