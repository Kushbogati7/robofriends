import React from 'react'


const Searchbox = ({searchChange}) =>{
    return(
        <div className="pa3 ">
           <input 
             className=" pa3 ba b--green bg-lightest-bluetype" 
             type="search" 
             placeholder="eg.eric rosman" 
             onChange= {searchChange}

            />
            
      </div>
    )
}
export default Searchbox;