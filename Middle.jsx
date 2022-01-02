let Middle = () => {
  let shareholder=[{ "color": "Yellow", "sales": 52 },
	{ "color": "Green", "sales": 52 },
	{ "color": "purple", "sales": 63 },
	{ "color": "Blue", "sales": 81 }];
  let b=0;
    return(
        <div className="middle">
        <div className='Right_part'>
        <div className="Percentage">
          <div className="Percentage_0"></div>
          <div className="Percentage_25"></div>
          <div className="Percentage_50"></div>
          <div className="Percentage_75"></div>
          <div className="Percentage_100"></div>
        </div>
          <div className='Group_9836'>
          <div className="x1_axis">
            <div className="Shareholder_A"></div>
            <div className="Shareholder_B"></div>
            <div className="Shareholder_C"></div>
            <div className="Shareholder_D"></div>
          </div>
            <div className="Horizontal_Line1"></div>
            <div className="Horizontal_Line2"></div>
            <div className="Vertical_Line1"></div>
            <div className="Vertical_Line2"></div>
            <div className="Vertical_Line3"></div>
            <div className="Vertical_Line4"></div>
            <div className="Graph_box">
            {shareholder.map((el)=>{
            console.log(el);
            if(b==0){
              b=1;
              return <div style={{'width': `${el.sales * (697/100)}px`, 'backgroundColor': `${el.color}`, 'height':'13px','marginTop':'auto'}}></div>;
            }
            else{
              return <div style={{'width': `${el.sales * (697/100)}px`, 'backgroundColor': `${el.color}`, 'height':'13px','marginTop':'auto'}}></div>;
            }
            
          })}
            </div>
          </div>
          <div className='Group_9857'>
            <div className='Total_Value'></div>
            <div className='Value'></div>
          </div>
          <div className='Group_9837'>
            <div className='Total_Shares'></div>
            <div className='Shares'></div>
          </div>
          <div className='Group_9835'>
            <div className='Your_company_information'></div>
            <div className='Main_metrics'></div>
            <div className='Rectangle_16837A'></div>
          </div>
        </div>
        <div className='left_part'>
          <div className='Group_9842'>
            <div className='Past_Activity'></div>
          </div>
          <div className="list_4C">
            <div className="icon"></div>
            <div className="date"></div>
            <div className="text"></div>
          </div>
          <div className="Line_127"></div>
          <div className="list_4B">
            <div className="icon"></div>
            <div className="date"></div>
            <div className="text"></div>
          </div>
          <div className="Line_128"></div>
          <div className="list_4A">
            <div className="icon"></div>
            <div className="date"></div>
            <div className="text"></div>
          </div>
        </div>
      </div>
  )
    }
    
    export default Middle;