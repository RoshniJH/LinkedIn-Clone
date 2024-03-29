import { Avatar } from '@material-ui/core'
import React,{forwardRef} from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';


const Post=forwardRef(({name, description,photoUrl,message},ref) => {
    
    return (
        <div ref={ref} className="post">
        <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
        <h4>{name}</h4>
        <p>{description}</p>
        </div>
        </div>
           <div className="post__body">
           <p>{message}</p>
           </div>
           <div className="post__bottom">
           <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray" />
           <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
           <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
           <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
           </div>
        </div>
    )
})

export default Post
