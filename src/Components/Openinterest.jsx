import React,{useState} from 'react';
import ReactApexChart from 'react-apexcharts';
import './Openinterest.css';


const Openinterest = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const optionss = ['BANKNIFTY','FINNIFTY','NIFTY'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };





    const [series] = useState([
      {
        name: 'Cash Flow',
        data: [
          1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34,
          3.88, 13.07, 5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4,
          -47.2, -43.3, -18.6, -48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4,
        ],
      },
    ]);
  
    const [options] = useState({
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          colors: {
            ranges: [
              {
                from: -100,
                to: -46,
                color: '#F15B46',
              },
              {
                from: -45,
                to: 0,
                color: '#FEB019',
              },
            ],
          },
          columnWidth: '80%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        title: {
          text: 'Growth',
        },
        labels: {
          formatter: function (y) {
            return y.toFixed(0) + '%';
          },
        },
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
          '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
          '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
          '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
          '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
          '2013-07-01', '2013-08-01', '2013-09-01',
        ],
        labels: {
          rotate: -90,
        },
      },
    });
  
   


  return (
    <>
    
    <div className='OpenInterestMainContainer'>
        <div className="OpenInterestleft">

                <div className="dropdown1">
            <button className="dropdownToggle" onClick={toggleDropdown}>
                {selectedOption || 'Select an option'}
            </button>
            {isOpen && (
                <div className="dropdownMenu">
                {optionss.map((option) => (
                    <div key={option} className="dropdown-item1" onClick={() => handleOptionClick(option)}>
                    {option}
                    </div>
                ))}
                </div>
            )}
            </div>


            <br/><br/><p id='expiry'>Expiry</p>
            <div className="mybtnDate">
            <button id='datea'>2023-05-04</button> <button id='datea'>2023-05-14</button>

            </div>


        </div>


        <div className="OpenInterestright">
            <div className='OpenInterestrightInner'>
            <p>Change in Open Interest</p> <p>BANKNIFTY:43,309.60</p>
            </div>
        <div id="chart">
        <ReactApexChart options={options} series={series} type="bar" height={400} width={900} />
      </div>
        </div>
    </div>
    
    </>
  )
}

export default Openinterest