import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

function Page({posts}) {
    return(
        posts.map((file,index)=>(
                <Link key={index} to={`${file._id}`} style={{textAlign:'left', marginLeft:'80px'}}>
                    <h2 style={{color:'#fff'}}>{file.title}</h2>
                    <h2 style={{color:'#fff',marginLeft:'10px'}}>{moment(file.createdAt).format("MMM Do YY")}</h2>
                </Link>
        ))
    )

}

export default Page