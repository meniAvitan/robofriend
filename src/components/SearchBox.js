import React from "react";

const SearchBox = ({searchChange})=>{
    return(
        <div className="pa3">
           <input 
           className='pa3 br4 ba b--green bg-lightest-blue'
           type = 'search' 
           placeholder = 'search friend'
           onChange = {searchChange}
           />
        </div>
    );   
}
export default SearchBox;