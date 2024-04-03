import React from "react";
import Nav from "./Nav";
import "./Body.css";
import Overviewblock from "./Overviewblock";
import Bargraph from "./Bargraph";
import CustomizedMenus from "./StyledMenu";
import AccessibleTable from './Table'

import PieChart from "./Piechart";

function Body() {
  return (
    <>
      <div className="body">
        <Nav />

        <div className="overviewBlocks">
          <Overviewblock img={'https://static.vecteezy.com/system/resources/previews/000/546/667/original/dollar-sign-green-vector.jpg'} title={'Earning'} value={'$198K'} desc={ '⬆️3% this month'}/>
          <Overviewblock img={'https://tse4.mm.bing.net/th?id=OIP.Z6kae71Nx4r4iqlE1pBiBgHaHa&pid=Api&P=0&h=180'} title={'Orders'} value={'$2.4K'} desc={ '⬇️2%  this month'}/>
          <Overviewblock img={'https://tse2.mm.bing.net/th?id=OIP.p5TNqSnE3QirppVBsQKuegHaHa&pid=Api&P=0&h=180'} title={'Balance'} value={'$2.4K'} desc={ '⬇️2%  this month'}/>
          <Overviewblock img={'https://tse3.mm.bing.net/th?id=OIP.cAcAnCdSrqB0pcU6u7J6zQHaHa&pid=Api&P=0&h=180'} title={'Total Sales'} value={'$89K'} desc={ '⬆️11% this month'}/>

        </div>

        <div className="graphs">
        <div className="body__overviewGraph">
          <div className="graph_navbar">
            <div className="graph_heading">
              <strong>Overview</strong>
              <small>Monthly Earning</small>
            </div>
            <div>
              <CustomizedMenus />
            </div>
          </div>
          <div className="bargraph">
          <Bargraph />
          </div>
      
        


        </div>
        <div className="body__piechart">
            <div className="graph_heading_pie">
              <strong>Customer</strong>
              <small>Customer that buy products</small>

             
              
            </div>
            <div className="piechart">
              <PieChart />
              </div>


            
            

        </div>
       
        </div>
        <AccessibleTable />
      </div>
    </>
  );
}

export default Body;
