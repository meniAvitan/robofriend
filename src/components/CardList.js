import React from 'react';
import Card from './Card';




const CardList = ({ robots }) => {
   

    return (
        <div className = "pa4">
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            age={robots[i].age}
                            work={robots[i].work}
                            phone={robots[i].phone}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>

    );
}
export default CardList;