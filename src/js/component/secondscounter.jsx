import React from "react";

const SecondsCounter = ({time}) => {
    return (
        <div className="col" style={{height: "100px"}}>
            <div className="p-2 text-white fs-1 fw-bolder">
                {time}
            </div>
        </div>       
    )

}

export default SecondsCounter;