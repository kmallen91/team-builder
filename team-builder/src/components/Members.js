import React from "react";
 
 const Team =[
     {
         name: 'Jim',
         email: 'jim@hotmail.com',
         role: 'backend dev'
     },
     {
         name: 'Maria',
         email: 'maria@hotmail.com',
         role: 'front end dev'
     },
     {
         name: 'Bob',
         email: 'bob@hotmail.com',
         role: 'backend dev'
     },
     {
         name: 'Kim',
         email: 'kim@hotmail.com',
         role: 'iOS dev'
     },
     ]



const Members = props => {

    return(
        <div className="member-container">
            {Team.map(member => (
                <div className="member-card" key ={member.name}>
                    <h3>{member.name}</h3>
                    <p>{member.email} </p>
                    <p>{member.role} </p>
                    <button>Edit </button>
                </div>
            ))}
       </div>
    );
};

export default Members;