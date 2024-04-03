import React from 'react';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';


function Bargraph() {
    const data = [
        {
          name: 'JAN',
          session: 50,
        },
        {
            name: 'FEB',
            session: 60,
        },
          {
            name: 'MAR',
            session: 70,
        },
          {
            name: 'APR',
            session: 55,
          },
          {
            name: 'MAY',
            session: 65,
          },
          {
            name: 'JUN',
            session: 90,
          },
          {
            name: 'JUL',
            session: 80,
          },
          {
            name: 'AUG',
            session: 60,
          },
          {
            name: 'SEP',
            session: 30,
          },
          {
            name: 'OCT',
            session: 45,
          },
          {
            name: 'NOV',
            session: 60,
          },
          {
            name: 'DEC',
            session: 70,
          }


      ];
      

  return (
    
  
         <ResponsiveContainer >
                <BarChart
          width={50}
          height={30}
          data={data}
          
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
         
          <XAxis  dataKey="name" />
         
          <Tooltip />
          
       
          <Bar dataKey="session" fill="#FCB8F7"  activeBar={<Rectangle fill="lightblue"  />} />
        </BarChart>
      </ResponsiveContainer>
     

      
   
  )
}

export default Bargraph
