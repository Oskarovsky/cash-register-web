import React from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from "./components/ExpenseForm";

function App() {
  return (
      <div>
          <div>
              <h1>Expense Tracker</h1>
              <ExpenseList/>
              <ExpenseForm/>
          </div>
      </div>
  );
}

export default App;
