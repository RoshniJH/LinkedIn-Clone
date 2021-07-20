import { Avatar } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import './HeaderOption.css';
import { selectUser } from './features/userSlice';
 

function HeaderOption({avatar,title,Icon,onClick}) {
    const user = useSelector(selectUser);

    return (
            <div onClick={onClick} className="headerOption">
                {Icon && <Icon className="headerOption__icon"/>}
                {avatar && <Avatar className="headerOption__icon" src={user?.photoUrl} alt={user?.email[0]}/> }
                <h3 className="headerOption__title">{title}</h3>
                </div>
        )
    }
   

export default HeaderOption
