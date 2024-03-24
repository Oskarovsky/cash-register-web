import axios from 'axios';
import Expense from '../types/Expense';

const API_URL = 'http://127.0.0.1:8083/api/expense/list';

export const getExpenses = async (): Promise<Expense[]> => {
    const response = await axios.get(API_URL);
    console.log("OSKAR: " + response)
    return response.data;
};

export const addExpense = async (expense: Expense): Promise<void> => {
    await axios.post(API_URL, expense);
};