import React, { useState } from 'react';
import { addExpense } from '../services/ExpenseService';

const ExpenseForm: React.FC = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // await addExpense({ name, amount: parseFloat(amount) });
            setName('');
            setAmount('');
        } catch (error) {
            console.error('Error adding expense:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Expense</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Expense Name" />
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Expense Amount" />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;