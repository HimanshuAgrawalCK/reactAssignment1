import React, { useContext } from 'react'

import { DarkModeContext } from '../context/DarkModeContext'

export default function Card()
{
    const {toggle} = useContext(DarkModeContext);
  return (
    <div className={toggle? "container card-box-dark":"container card-box-light"}>
        <h1>This is card header</h1>
        <div>
            <span>This is card body</span>
        </div>
        <div>
            <span>This is card foot</span>
        </div>
    </div>
  )
}