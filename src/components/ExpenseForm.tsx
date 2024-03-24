import React, { useState } from 'react';
import { addExpense } from '../services/ExpenseService';

const ExpenseForm: React.FC = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [expenseCategory, setExpenseCategory] = useState('');
    const [customer, setCustomer] = useState('');
    const [date, setDate] = useState(new Date());

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addExpense({
                name: name,
                expenseCategory: expenseCategory,
                customer: customer,
                amount: parseFloat(amount),
                date: date
            });
            setName('');
            setAmount('');
            setExpenseCategory('')
            setCustomer('')
            setDate(new Date())
        } catch (error) {
            console.error('Error adding expense:', error);
        }
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDate = new Date(e.target.value); // Konwersja wartości daty na obiekt Date
        setDate(selectedDate);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Expense</h2>
            <input type="text" value={name} placeholder="Expense Name"
                   onChange={(e) => setName(e.target.value)}/>
            <input type="number" value={amount} placeholder="Expense Amount"
                   onChange={(e) => setAmount(e.target.value)}/>
            <input type="text" value={expenseCategory} placeholder="Expense Category"
                   onChange={(e) => setExpenseCategory(e.target.value)}/>
            <input type="date" value={date instanceof Date ? date.toISOString().split('T')[0] : date} placeholder="Expense Date"
                   onChange={(e) => handleDateChange}/>
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;