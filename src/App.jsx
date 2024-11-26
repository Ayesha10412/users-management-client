
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [users, setUsers]= useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  } ,[])

  const handleAddUser= (event)=>{
    event.preventDefault();
  }

  return (
    <>
      <h1>Users Management System</h1>
      <h3>Numbers of Users: {users.length} </h3>

<form onSubmit={handleAddUser} >
  <input type="text" name='name' id='' /><br />
  <input type="email" name='email' id='' /><br />
  <input type="submit" value="Add user" />
</form>

<div>
  {
    users.map(user=> <p key={user.id}>{user.id} {user.name} {user.email} </p>)
  }
</div>


    </>
  )
}

export default App
