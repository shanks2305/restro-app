import React, { useState } from 'react'

const Signin = () => {

    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email,pwd);
        setEmail('')
        setPwd('')
    }
    const handleReset = (e) =>{
        e.preventDefault();
        setEmail('')
        setPwd('')
    }
    

    return (
        <div className="container">
            <h1 className="display-4 text-center mt-5">Sign In</h1>
            <div className="row">
                <div className="col-md-8 offset-md-2 p-5">
                    <form className="p-5">
                        <div className="form-group">
                            <label>E-Mail</label>
                            <input className="form-control" type="email" placeholder="Enter your Registered Mail" value={email} onChange={(e)=> setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input className="form-control" type="password" placeholder="Enter your Password"  value={pwd} onChange={(e)=> setPwd(e.target.value)}/>
                        </div>
                        <button className="btn btn-info" onClick={handleSubmit}>Sign In</button>
                        <button className="ml-2 btn btn-warning" onClick={handleReset}>Reset</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin
