import React from 'react';

const Chart = () => {
  const data = [
    { day: 'Jan', value: 45 },
    { day: 'Feb', value: 75 },
    { day: 'Mar', value: 35 },
    { day: 'Apr', value: 85 },
    { day: 'May', value: 25 },
    { day: 'Jun', value: 65 },
    { day: 'Jul', value: 95 }
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="flex items-end justify-between h-40 px-2">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center flex-1 mx-1">
          <div 
            className="w-full bg-purple-500 rounded-t-lg min-w-[20px] max-w-[40px] transition-all duration-300 hover:bg-purple-600"
            style={{ 
              height: `${(item.value / maxValue) * 120}px`,
              minHeight: '20px'
            }}
          />
          <span className="text-xs text-gray-500 mt-2">{item.day}</span>
        </div>
      ))}
    </div>
  );
};

export default Chart;