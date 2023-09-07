import '../cssDashBoard/cardsCounts.css';


const Counts = (props) => {


  return (
    <div className="cardContainer">
    <div className="WrapCounts">
    <div className='WrapperTitleCount'>{props.text}</div>
    <div className='d-flex cardsFlex'>
    <div className='d-flex counts-cont'>{props.counts}</div>
    <div className='iconCard d-flex'>
    <div className='img-card-wallpaper-container'>
         <img src={props.Images} className='img-card-wallpaper'/>
    </div>

    </div>
    </div>
    </div>
    </div>
  )
}

export default Counts
