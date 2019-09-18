import React, {useState, useEffect } from "react";

const MemberList = props => {
    const [member, setMember] = useState({name:"", email:"", role:""});

//     useEffect(()=> {
    
// })

    const handleChanges = e => {
       setMember({...member, [e.target.name]: e.target.value });
    };

    const submitMember = e =>{
         e.preventDefault();
        props.addNewMember(member);
        setMember({name:'', email:'', role:''});
    };

    return(
        <form onSubmit={submitMember}>
            <label htmlFor="name"> Name </label>
            <input
                id="name"
                type="text"
                name="name"
                onChange={handleChanges}
                value={member.name} />
            <label htmlFor="email"> Email</label>
            <input
                id="email"
                type="text"
                name="email"
                onChange={handleChanges}
                value={member.email} />
            <label htmlFor="role"> Role </label>
            <input
                id="role"
                type="text"
                name="role"
                onChange={handleChanges}
                value={member.role} />
            
            <button type="submit">Add Member </button>
        </form>

    )
}

export default MemberList;