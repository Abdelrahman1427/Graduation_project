import videoBoat from '../assets/video/boat-video.mp4'
const Boat = () => {
  return (
    <div className="VideoContainer">
   <video className="VideoMain" autoPlay={true} muted loop>
    <source src={videoBoat} type="video/mp4"/>
   </video>
   </div>
  )
}

export default Boat
