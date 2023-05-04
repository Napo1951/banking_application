import React from 'react';
import { UserContext } from '../components/context'
import Card from '../components/context'
import '../App.css'

function CreateAccount(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const [enable, setEnable]     = React.useState(false);
    
    const ctx = React.useContext(UserContext);  
  
    function validate(field, label){
        if (!field) {
          // setStatus('Error: ' + label);
          // setTimeout(() => setStatus(''),3000);
          return false;
        }
        return true;
    }
  
    function handleCreate(){
      console.log(name,email,password);
      var timestamp = Date.now()
      var date = new Date(timestamp);

      var eventDate = date.getDate()+
        "/"+(date.getMonth()+1)+
        "/"+date.getFullYear()+
        " "+date.getHours()+
        ":"+date.getMinutes()+
        ":"+date.getSeconds();
      console.log(eventDate);

      if (!validate(name,     'name'))  {
          setStatus("Please enter a name");
          return;
      } 
      if (!validate(email,    'email') || !email.includes('@')) {
        setStatus("Input an email address");
        return;
    } ;
      if (!validate(password, 'password') || password.length < 8) {
        setStatus("Password must be at least 8 characters");
        return;}
      ctx.users.push({name,email,password,balance:0, history: [{action:"Initial", amount: 0, balance: ctx.users[ctx.users.length -1].balance, eventDate}]});
      setStatus("")
      setShow(false);
    }    
  
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
      setEnable(false);
    }

    function makeChange(e, field){
        if (field === "name"){
            setName(e.currentTarget.value)
            setEnable(true);
        }
        if (field === "email"){
            setEmail(e.currentTarget.value)
            setEnable(true);
        }
        if (field === "password"){
            setPassword(e.currentTarget.value)
            setEnable(true);
        }
    }
  
    return (
        <div className="centeredGrid">
        <div></div>
      <Card
        bgcolor="success"
        cardstyle="small"
        header={(<h3>Create Account</h3>)}
        status={status}
        body={show ? (  
                <>
                Name<br/>
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => makeChange(e, "name")} /><br/>
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => makeChange(e, "email")}/><br/>
                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => makeChange(e, "password")}/><br/>
                <button type="submit" disabled={!enable} className="btn btn-light" onClick={handleCreate}>Create Account</button>
                </>
              ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                </>
              )}
      />
      <div></div>
      </div>
    )
  }

export default CreateAccount;