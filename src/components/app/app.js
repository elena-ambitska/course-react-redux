import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/searc-panel';
import './app.css';
import AppFilter from '../app-filter/app-fiter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

function App(){

    const data = [
        {name:"John", salary: 800, increase:true, id:1 },
        {name:"Lena", salary: 1500, increase:false, id:2 },
        {name:"Kostya", salary: 9888, increase:true, id:3},
    ]

    return (
        <div className='app'>
            <AppInfo/>

            <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
            </div>

            <EmployersList data={data}/>
            <EmployersAddForm/>
        </div>
    );
}

export default App;