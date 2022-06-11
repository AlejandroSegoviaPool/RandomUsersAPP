import React, {useEffect, useState} from 'react';
import { NextUser } from './NextUser';
import { Icons } from './Icons';

import '../components/cardStyle.css';

function App() {
  
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("Random User");
  const [value, setValue] = useState("name");

  const getUser = async () => {
    const response = await fetch("https://randomuser.me/api/?results=20");
    const data = await response.json();
    const person = data.results[0];

    const {phone, email} = person;
    const {large: image} = person.picture;
    const {username} = person.login;
    const {first, last} = person.name;
    const {dob: {date}, } = person;
    const {street: {number, name}, } = person.location;

    const newUser = {
      image,
      phone, 
      email,
      username,
      date: `${date.slice(0, -14)}`,
      street : `${number} ${name}`,
      name: `${first} ${last}`

    };

    setUser(newUser);
    setTitle("name");
    setValue(newUser.name);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleValue = (e) =>{
    if(e.target.classList.contains("Icon")){
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(user[newValue])
    }
  }  

  

  return (
    <div className="App">
      <header className='header'>
        <h1>Profile App</h1>
        <h3>From React</h3>
      </header>

      <main>
        <div className="profileCard">
          <div className="card-header">
            <img src={user && user.image} className="userImg" alt="userImg"/>
          </div>

          <div className="card-body">
            <div className="values">
              <p className="userTitle">My {title} is</p>
              <p className="userValue">{ value}</p>
            </div>

            <div className="valuesList">
              <NextUser randomUser={getUser}/>
              <Icons value={handleValue}/>
            </div>

          </div>

        </div>

      </main>
    
    </div>
  );
}

export default App;
