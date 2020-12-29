// it is just making our work a lot more easier and making the code look prettier


import Robot from '../components/work';

function List({robopeople}) {
     
   return(
       <div>
         {robopeople.map((user,i) => {
         return(
            <Robot 
             key= {robopeople[i].id}
             id={robopeople[i].id} 
             name={robopeople[i].name} 
             email={robopeople[i].email}/>
         )}) 
         }
       </div>
   )

}
export default List;