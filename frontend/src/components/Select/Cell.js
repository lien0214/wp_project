import React from "react";

const Cell = ({cellInfo, coverOnClick}) => {
    return (
        <div className="Cell" onClick={(cellInfo) => coverOnClick(cellInfo.person)}>
            {/* button to trigger coveronclick */}
            cellInfo.id
        </div>
    )
}
export default Cell;