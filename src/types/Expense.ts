export default interface Expense {
    id?: any | null,
    name: string,
    expenseCategory: string,
    amount: number,
    customer: string,
    date: Date
}