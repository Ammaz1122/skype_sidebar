import React from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'
import './styles.css'
import data from './data'
const Container = ()=>{

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-2 w-50 text-center main-data my-4 shadow p-2 m-auto'>
    <h5> Skype Side bar</h5>

             {data.map((item,index)=>{

                return <Message {...item}/>

             })}
            </div>  
        </div>
      </div>
    </>

  )
}

ReactDOM.render(<Container/>,document.querySelector('#root'));
