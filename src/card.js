
import React, { useState } from 'react';


function Card({id ,image,info,fees,name ,removeTour})
{
    const[readmore,setreadmore]=useState(false);
    const description=`${info.substring(0,200)}...`
    function readmoreHandler()
    {
        setreadmore(!readmore);
    }
    
    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">
                      {fees};
                    </h4>
                    <h4 className="tour-name">
                       {name};

                    </h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                         {readmore?`show less`:`readmore`}
                    </span>
                 </div>
            </div>
            <button className="btn-red" onClick={()=>  removeTour(id)}>not interested</button>
        </div>

    );
}
export default Card;