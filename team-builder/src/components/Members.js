import React from "react";

const Members = props => {

    return(
        <>
            {/* {props.members.map(member => ( */}
                <div className="member-card" key ={props.name}>
                    {/* <h3>{member.name}</h3>
                    <p>{member.email} </p>
                    <p>{member.role} </p>
                    <button>Edit </button> */}
                    <h3>{props.name}</h3>
                    <p>{props.email} </p>
                    <p>{props.role} </p>
                    <button>Edit </button>
                </div>
            {/* ))} */}
       </>
    );
};

export default Members;