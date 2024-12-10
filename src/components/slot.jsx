import react from "react";

function Slot(props){
    return(
        <div className="slotbox">
            <img src={props.img} alt="Picture of a dog!" />
            <p>{props.breedtext}</p>
        </div>
    )
}


export default Slot;