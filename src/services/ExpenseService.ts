import http from "../http-common";
import Expense from "../types/Expense";

const getAll = () => {
    return http.get<Array<Expense>>("/expense");
};

const get = (id: any) => {
    return http.get<Expense>(`/expense/${id}`);
};

const ExpenseService = {
    getAll,
    get
};

export default ExpenseService;