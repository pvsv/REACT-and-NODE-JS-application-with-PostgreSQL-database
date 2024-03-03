
import React from 'react';
import './App.css'; 
import DataTable from './components/DataTable';
import SearchSort from './components/SearchSort';

const App = () => {
    return (
        <div className="App">
            <h1>Customer Data</h1>
            <div className="center">
                <SearchSort />
            </div>
            <div className="table-container">
                <DataTable />
            </div>
        </div>
    );
};

export default App;

