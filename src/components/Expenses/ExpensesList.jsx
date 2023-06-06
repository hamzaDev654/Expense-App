import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
export const ExpensesList = (props) => {
    const items = props.items;
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found !!</h2>;
  }
  return (
    <ul className="expenses-list">
      {items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </ul>
  );
};
