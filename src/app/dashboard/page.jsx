import React from 'react';
import Counter from '../components/Counter';

const DeashboardPage = () => {
  return (
    <div>
      <h2>Dashboard page </h2> 

       <Counter/>
      <ul>
        <li>Dashboard Item - 1</li>
        <li>Dashboard Item - 2</li>
        <li>Dashboard Item - 3</li>
      </ul>
    </div>
  );
};

export default DeashboardPage;