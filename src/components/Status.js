import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { AccountContext } from './Account'
import { useNavigate } from 'react-router'
import Pool from './UserPool'


export const Status = () => {
    const [status, getStatus] = useState(false);
    const {getSession, logout} = useContext(AccountContext);
    const user = Pool.getCurrentUser()




    useEffect(() => {
        getSession()
        .then((session) => {
            console.log("Logged in", session)
            getStatus(true)
        });

    }, [])

  return (
    <div>{status ? <button onClick={logout}>Welcome, {user.username} </button> : '' }</div>
  )
}
