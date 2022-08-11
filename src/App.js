import circle_pattern from './assets/pattern-circles.svg';
import check from './assets/icon-check.svg';
import { useState} from 'react';
import './App.scss';

function App() {
  
  // States
  const [rangeValueMonth, setRangeValueMonth] = useState(16);
  const [rangeValueYear, setRangeValueYear] = useState(rangeValueMonth - (rangeValueMonth * 0.25));
  const [isMonthly, setIsMonthly] = useState(true)

  const changeValueRangeHandler = (e) => {
    setRangeValueMonth((e.target.value * 1.00) )
    setRangeValueYear(rangeValueMonth - (rangeValueMonth * 0.25));
  }

  const changeMonthlyOrYearlyHandler = () => {
    setIsMonthly(!isMonthly)
  }

  const rangeValueMonthToDisplay = rangeValueMonth.toFixed(2)
  const rangeValueYearToDisplay = rangeValueYear.toFixed(2)

  return (
    <div className="App">

     <img className='App__pattern-circle' src={circle_pattern} alt={"pattern circle"}/>
     <div className='App__Container'>
        <h1 className='App__Container--tag'>Simple, traffic-based pricing</h1>
        <p className='App__Container--text'>Sign-up for our 30-day trial. No credit card required. </p>
      
      <div className='App__Container--main'>
      <div className='App__Container--main__pageviews'>
        <p className='App__Container--main__pageviews--number'> 100K PAGEVIEWS </p>
        <p className='App__Container--main__pageviews--bill'> <span> ${isMonthly ? rangeValueMonthToDisplay : rangeValueYearToDisplay } </span>/&nbsp;month </p>
        <input min={0} max={32}  
               onChange={changeValueRangeHandler}
               className='App__Container--main__pageviews--range' 
               type="range" />
      </div>
      
      <div className='App__Container--main__billing'>
        <p className='App__Container--main__billing--monthly'>Monthly Billing</p>
        <label className="App__Container--main__billing--switch">
          <input type="checkbox" defaultChecked = {false}
                                 onClick={changeMonthlyOrYearlyHandler}/>
          <span className="slider round"></span>
        </label>
        <p className='App__Container--main__billing--yearly'>Yearly Billing</p>
        <p className='App__Container--main__billing--discount'>25% discount</p>
        <p className='App__Container--main__billing--discount__mobile'>25%</p>
      </div>
     
     <div className='line'></div>
      
      <div className='App__Container--main__footer'>
        <ul className='App__Container--main__footer--benefits'>
          <li> <img src={check}/> Unlimited websites</li>
          <li> <img src={check}/> 100% data ownership</li>
          <li> <img src={check}/> Email reports</li>
        </ul>
        <button className='App__Container--main__footer--benefits__button'> Start my trial</button>
      </div>
        



      </div>
     </div>
     
    </div>
  );
}

export default App;
