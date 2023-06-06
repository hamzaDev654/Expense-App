import React, { useState } from "react";
import "./NewExpense.css";
import { ExpenseForm } from "./ExpenseForm";
export const NewExpense = (props) => {
  const [isEditForm, setEditForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onGetData(expenseData);
  };
  const startEditingFrom = () => {
    setEditForm(true);
  };

  const stopEditingHandler = ()=>{
    setEditForm(false)
  }
  return (
    <div className="new-expense ">
      {!isEditForm && (
        <button onClick={startEditingFrom}>Add New ExpenseItem</button>
      )}
      {isEditForm && (
        <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseItems={saveExpenseDataHandler} />
      )}
    </div>
  );
};
