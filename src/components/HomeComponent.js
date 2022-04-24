import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { Loading } from './LoadingComponent';

function Home(props){
  if (props.isLoading){
    return(
      <Loading/>
    );
  }
  else if (props.errMess){
    return(
      <h4>{props.errMess}</h4>
    );
  }
  else return(
      <div className='container-fluid'>
        <div className='row col-md-4 col-sm-4 col-xs-5 floatleft chart'>
          <PieChart
            data={[
              { title: 'Sale', value: 2, color: '#BFAEE3' },
              { title: 'HR', value: 3, color: '#DEB5D7' },
              { title: 'MKT', value: 2, color: '#FEC5E6' },
              { title: 'IT', value: 1, color: '#FEE686' },
              { title: 'Finance', value: 11, color: '#FFD273' },
            ]}
            animate={true}
            label={({ dataEntry }) => dataEntry.title}
            labelPosition={65}
            labelStyle={{fontSize:'7px',color:"white"}}
            startAngle={-70}
            paddingAngle={5}
          />
        </div>
        <div className='=row col-md-7 col-sm-7 col-xs-5 charttitle floatright'>
          Thống kê nhân viên theo khoa phòng
        </div>
      </div>
    );
  } 

export default Home;
