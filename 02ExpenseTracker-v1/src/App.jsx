import { AddTransaction, Balance, Header, TransactonsList } from "./components";
import IncomeExpense from "./components/IncomeExpense";

function App() {
    return (
        <>
            <Header />
            <div className="container">
              <Balance />
              <IncomeExpense />
                <TransactonsList />
                <AddTransaction />

            </div>
        </>
    );
}

export default App;
