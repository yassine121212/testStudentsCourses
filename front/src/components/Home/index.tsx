import React  from 'react';
 
import './index.css'
import AddStudent from '../Modals/AddStudent';
import AddCourse from '../Modals/AddCourse';


 
  
const index = () => {
 
  return (
    <div className='modal-buttons'>
      <div className=""><AddStudent/></div>
      <div className=""> <AddCourse/></div>
      
  
   </div>
  )
}
export default index
