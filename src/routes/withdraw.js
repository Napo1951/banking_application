import React from 'react';
import { UserContext } from "../components/context";
import Card from "../components/context"
import '../App.css'

function Withdraw(){
    const ctx = React.useContext(UserContext);
    console.log(isNaN(ctx.currentUserIndex))
    
    const [status, setStatus]     = React.useState('');
    const [withdrawal, setWithdrawal]   = React.useState(0);
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
        
        if (withdrawal < 0) {
            setStatus("Withdrawals must be greater than $0.00") 
            setEnable(false);
        }
        else if (withdrawal.match(numbers) || withdrawal > 0){
            if (withdrawal > ctx.users[ctx.currentUserIndex].balance) {
                alert("No overdraft protection");
                setStatus("Low balance")
                setEnable(false);
                return;
            }
            console.log("successful withdrawal");
            setStatus("Successfully made a withdrawal of $" + withdrawal);
            ctx.users[ctx.currentUserIndex].balance = ctx.users[ctx.currentUserIndex].balance - Number(withdrawal);
            ctx.users[ctx.currentUserIndex].history.unshift({action:"Withdrawal", amount: withdrawal, balance: ctx.users[ctx.currentUserIndex].balance, eventDate})
            setEnable(false);
            setWithdrawal(0);
        } else {
            setStatus("Must input valid number")
            setEnable(false);;
        }
    }

    function makeChange(e) {
        setEnable(true);
        setWithdrawal(e.currentTarget.value);
    }

    return (
        <div className="centeredGrid">
        <div></div>
       <Card
          bgcolor="success"
          cardstyle="small"
          header={(<h3>Withdraw</h3>)}
          status={status}
          body={show ? (  
                  <>
                  <h5>Hello, {ctx.users[ctx.currentUserIndex].name}</h5>
                  <h6>Your current balance is: ${ctx.users[ctx.currentUserIndex].balance}</h6>
                  Withdrawal<br/>
                  <input type="number" className="form-control" id="withdrawal" placeholder="Enter withdrawal amount" value={withdrawal} onChange={e => makeChange(e)}/><br/>
                  <button type="submit" disabled={!enable} className="btn btn-light" onClick={handleSubmit}>Withdraw</button>
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

export default Withdraw;