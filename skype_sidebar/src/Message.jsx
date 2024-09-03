import React from 'react'

const Message = ({image,title,description,time}) => {
  return (
    <div className='container'>
        <div className="row">
                <div className="main">

            <div className="left">
                <img width={100} src={image} alt="" />
            <div className="description">

            <p className='title'> {title}</p>
            <p className='desc'>{description}</p>
            
            </div>
            </div>


            <div className="right">
                <p>{time}</p>
            </div>
                </div>
        </div>
    <hr />
    </div>
  )
}

export default Message