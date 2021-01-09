import React from 'react';

const Card = ({id, name, age, work, phone, email}) =>{
  
    return(
        <div className=" bg-light-blue dib br3 ma2 grow bw3 shadow-5">
            <img alt='friends' src = {`https://robohash.org/${id}`} className=' mw5 dim' />
            <div>
                <h2 className="tc">{name}</h2>
                {/* <p className="tl pl3"><b>age:</b>  {age}</p>
                <p className="tl pl3"><b>work:</b> {work}</p> */}
                <p className="tl pl3"><b>phone: </b>{phone}</p>
                <p className="tl pl3"><b>email: </b>{email}</p>
            </div>
           
        </div>
    );
}

export default Card;