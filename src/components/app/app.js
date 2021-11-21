import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/searc-panel';
import './app.css';
import AppFilter from '../app-filter/app-fiter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name:"John", salary: 800, increase:true, id:1 },
                {name:"Lena", salary: 1500, increase:false, id:2 },
                {name:"Kostya", salary: 9888, increase:true, id:3}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
     this.setState(({data}) => {
        //  const index = data.findIndex(elem => elem.id === id);
        //  const before = data.slice(0, index);
        //  const after = data.slice(index+1);
        //  const newArr = [...before, ...after];

         return{
             data:data.filter(item => item.id !==id)
         }
     })
    }
    addItem = (name, salary) => {
        const newItem ={
            name, 
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render(){
        return (
            <div className='app'>
                <AppInfo/>
    
                <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
                </div>
    
                <EmployersList 
                data={this.state.data}
                onDelete = { this.deleteItem }/>
                <EmployersAddForm 
               onAdd = {this.addItem}/>
            </div>
        );
    }
}

export default App;