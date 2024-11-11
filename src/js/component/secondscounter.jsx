import React from "react";

const SecondsCounter = ({time}) => {
    return (
        <div className="col" style={{height: "5%"}}>
            <div className="num p-2 m-2 text-white fs-1 fw-bolder">
                {time}
            </div>
        </div>       
    )

}

export default SecondsCounter;