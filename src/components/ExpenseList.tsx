import React, { useEffect, useState } from 'react';
import {getExpenses} from "../services/ExpenseService";
import Expense from "../types/Expense";

const ExpenseList: React.FC = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);

    useEffect(() => {
        fetchExpenses().then(r => console.log("Expenses data has been fetched!"));
    }, []);

    const fetchExpenses = async () => {
        try {
            const data = await getExpenses();
            setExpenses(data);
        } catch (error) {
            console.error('Error fetching expenses:', error);
        }
    };

    return (
        <div>
            <h2>Expense List</h2>
            <ul>
                {expenses.map((expense) => (
                    <li key={expense.id}>{expense.name}: ${expense.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;