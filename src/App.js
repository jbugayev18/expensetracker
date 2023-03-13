import React, {Expenses} from "react";
//import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 55.16,
      date: new Date(2023, 2, 9),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 78.67,
      date: new Date(2023, 2, 8),
    },
    {
      id: 'e4',
      title: 'New Dining Table (Glass)',
      amount: 250,
      date: new Date(2023, 2, 12),
    },
  ];


  return (
    <div>
      <h2>Let's get started!</h2>
      
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
