import React, { useState, useEffect } from 'react';

export const Child = () => {
  const [date, setDate] = useState(new Date());

  const timer = setInterval(() => setDate(new Date()), 3000);

  return (
    <div>
      <p> Date : {date.toDateString()}</p>
      <p> Time : {date.toTimeString()}</p>
    </div>
  );
};

export default Child;
