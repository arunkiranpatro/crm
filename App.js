import React from 'react';
import FinancialCard from "./components/FinancialCard";
import TransactionLogCard from "./components/TransactionLogCard";
import CCTransactionLogCard from "./components/CCTransactionLogCard";
import InteractionsCard from "./components/InteractionsCard";
import AccountDetails from "./components/AccountDetails";
import "./css/index.scss";

class App extends React.Component{
    constructor(props){
        super();
        this.state ={
            FIs:[],
            interactions:[]
        }
    }
    render(){
        return(<div className ="container">
            <AccountDetails />   
            <div className="widgets">
                <FinancialCard />
                <TransactionLogCard/>  
                <CCTransactionLogCard/>  
                <InteractionsCard/> 
            </div>  
        </div>);
    }
}

export default App;