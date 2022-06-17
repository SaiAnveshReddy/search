import logo from './logo.svg';
import data from './data'
import './App.css';
import {useState} from 'react'

function App() {
  const [searchTerm,setsearchTerm] = useState("")
  return (
    <div className="App"> 
      <input type="text" placeholder="Search..." className="Search"  onChange={(event) => {setsearchTerm(event.target.value)}}/>
      {data.filter((val) => 
      {
        if(searchTerm == ""){
          return val
        }else if (val.first_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
          return val
        }
        }).map((val,key)=>{
        return (
          <div key = {key}>
            <p className="name">
            {val.first_name}
            </p>
          </div>
        )
      })}
      </div>
  );
}

export default App;
