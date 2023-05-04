import React from 'react';
import { UserContext } from "../components/context";
import Card from "../components/context"
import '../App.css'

function Deposit(){
    const ctx = React.useContext(UserContext);
    
    const [status, setStatus]     = React.useState('');
    const [deposit, setDeposit]   = React.useState(0);
    const [enable, setEnable]     = React.useState(false);

    const [show, setShow]         = React.useState(() => {
        if (ctx.currentUserIndex === null) {
            return false;
        } else {
            return true;
        }
    });


    function handleSubmit() {
        var numbers = /^[0-9]+./;
        var timestamp = Date.now()
        var date = new Date(timestamp);

        var eventDate = date.getDate()+
        "/"+(date.getMonth()+1)+
        "/"+date.getFullYear()+
        " "+date.getHours()+
        ":"+date.getMinutes()+
        ":"+date.getSeconds();
      console.log(eventDate);
        
        if (deposit < 0) {
            setStatus("Deposits must be greater than $0.00") 
            setEnable(false);
        }
        else if (deposit.match(numbers) || deposit > 0){
            console.log("successful deposit");
            setStatus("Successfully deposit $" + deposit);
            ctx.users[ctx.currentUserIndex].balance = ctx.users[ctx.currentUserIndex].balance + Number(deposit);
            ctx.users[ctx.currentUserIndex].history.unshift({action:"Deposit", amount: deposit, balance: ctx.users[ctx.currentUserIndex].balance, eventDate})
            setEnable(false);
            setDeposit(0);
        } else {
            setStatus("Must input valid number")
            setEnable(false);;
        }
    }

    function makeChange(e) {
        setEnable(true);
        setDeposit(e.currentTarget.value);
    }

    return (
        <div className="centeredGrid">
        <div></div>
       <Card
          bgcolor="success"
          cardstyle="small"
          header={(<h3>Deposit</h3>)}
          status={status}
          body={show ? (  
                  <>
                  <h5>Hello, {ctx.users[ctx.currentUserIndex].name}</h5>
                  <h6>Your current balance is: ${ctx.users[ctx.currentUserIndex].balance}</h6>
                  Deposit<br/>
                  <input type="number" className="form-control" id="deposit" placeholder="Enter deposit amount" value={deposit} onChange={e => makeChange(e)}/><br/>
                  <button type="submit" disabled={!enable} className="btn btn-light" onClick={handleSubmit}>Make Deposit</button>
                  </>
                ):(
                  <>
                  <h5>Login to complete this transaction</h5>
                  </>
                )}
        />
        <div></div>
        </div>
      )
  }

export default Deposit;