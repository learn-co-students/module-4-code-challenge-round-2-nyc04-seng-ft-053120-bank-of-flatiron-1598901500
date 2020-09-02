import React from "react";

const Transaction = (props) => {
  
  const {date, amount, category, description} = props.tranObj

  let handleClick = (e) => {
    // when removing the obj want to send back the id 
    let id = props.tranObj.id
    fetch(`http://localhost:6001/transactions/${id}`, {
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then(emptyObj => props.removeTran(id))
  }
  
  return (
    // going from left to right date/ description category and amount
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button 
        className="ui icon button"
        onClick= {handleClick}
        > 
        <i className=" violet trash alternative icon"> </i> 
        </button>
        <button className="ui purple basic button">Edit</button>
      </td>
    </tr>
  );
};

export default Transaction;
