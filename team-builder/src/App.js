import React, {useState} from 'react';
import './App.css';
import MemberList from "./components/Form";
import Members from "./components/Members";

function App () {
  const [members, setMembers] = useState({
    name:'Joe',
    email:'joeisbest@hotmail.com',
    role:'#1 guy'

  });
  // const editMember = props =>{

  //  [memberToEdit, setMemberstoEdit] = useState();
  // }

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> TEAM MEMBERS </h1>
        <MemberList addNewMember={addNewMember} />
        <Members members={members}  />
        
        
      </header>
    </div>
  );
}

export default App;
