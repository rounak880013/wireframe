let Bottom = () => {
    let loanbars=[{ "color": "orange", "sales": 100 },
	{ "color": "blue", "sales": 33 },
	{ "color": "purple", "sales": 66 }];
  let shareholder=[{ "color": "orange", "sales": 100 },
	{ "color": "blue", "sales": 33 },
	{ "color": "purple", "sales": 66 },
	{ "color": "red", "sales": 66 }];
  let a=0;
  let b=0;
    return(
        <div className='bottom'>
          <div className='Group_9840'>
            <div className='Loans_Metrics'>

            </div>
            <div className='Loans_owners'>

            </div>
            <div className='Rectangle_16837'>
              
            </div>
          </div>
          <div className='qwert_1'>
            {loanbars.map((el)=>{
              console.log(el);
              let pos=`${el.sales}`*(240/100);
              pos=240-pos;
              console.log(pos);
              if(a==0){
                a=1;
                return <div style={{'height': `${el.sales * (240/100)}px`, 'backgroundColor': `${el.color}`, 'width':'25px','marginTop': `${pos}px`}}></div>;
              }
              else{
                return <div style={{'height': `${el.sales * (240/100)}px`, 'backgroundColor': `${el.color}`, 'width':'25px','marginTop': `${pos}px`,'margin-left': 'auto'}}></div>;
              }
              
            })}
          </div>
          <div className='Group_17'>
            <div className='Group_19'>
              <div className='A_1_1'></div>
              <div className='A_1_2'></div>
            </div>
            <div className='Group_14'>
              <div className='A_2_1'></div>
              <div className='A_2_2'></div>
            </div>
            <div className='Group_13'>
              <div className='A_3_1'></div>
              <div className='A_3_2'></div>
            </div>
          </div>
          <div className='y_axis'>
            <div className='y_1'></div>
            <div className='y_2'></div>
            <div className='y_3'></div>
            <div className='y_4'></div>
          </div>
          <div className='x_axis'>
            <div className='Party_A'></div>
            <div className='Party_B'></div>
            <div className='Party_C'></div>
          </div>
          <div className='lines'>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
            <div className='line4'></div>
          </div>
        </div>
  )
    }
    
    export default Bottom;