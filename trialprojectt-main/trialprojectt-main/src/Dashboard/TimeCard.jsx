import React from 'react'

const TimeCard = (props) => {
  return (
    <div className="cardContainer">
    <div className="WrapCounts">
    <div className='WrapperTitleCount'>{props.text}</div>
    <div className='d-flex cardsFlex'>
    <div className='d-flex content-of-card-blue'>{props.counts}</div>
    <div className='iconCard d-flex'>
    <div className='img-card-wallpaper-container'>
        <img src={props.Images} className='time-card'/>
    </div>

    </div>
    </div>
    </div>
    </div>
  )
}

export default TimeCard
