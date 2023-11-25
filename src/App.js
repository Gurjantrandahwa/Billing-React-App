import './App.css';
import SoldProducts from "./Components/SoldProducts";
import AddProducts from "./Components/AddProducts"
import Transactions from "./Components/Transactions"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import React, {useState} from "react";

function App() {
    const [transaction, setTransaction] = useState([]);
    return <BrowserRouter>

        <div>
            <h1>Electronics Shop</h1>
            <nav>
                <ul>
                    <li><Link to="/SoldProducts">Sold Products</Link></li>
                    <li><Link to="/AddProducts">Add Products</Link></li>
                    <li><Link to="/Transactions"> Transactions </Link></li>
                </ul>
            </nav>
        </div>
        <Routes>
            <Route path={"SoldProducts"}
                   element={<SoldProducts transaction={transaction} setTransaction={setTransaction}/>}/>
            <Route path={"Transactions"} element={<Transactions transaction={transaction}/>}/>
            <Route path={"AddProducts"} element={<AddProducts/>}/>
        </Routes>
    </BrowserRouter>

}

export default App;
