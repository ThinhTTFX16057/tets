import React from 'react';
import StaffList from './StaffListComponent';

function Home(props){
    return (
      <div>
        <StaffList staffs={props.staffs}/>
      </div>
    );
  } 

export default Home;
