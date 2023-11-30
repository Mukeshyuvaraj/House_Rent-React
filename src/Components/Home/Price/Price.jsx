import React from 'react';
import './Price.css';
import Heading from '../../Common/Heading';
import PriceCard from './PriceCard';

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='Life is a journey, and packages are the parcels of surprises waiting to be unwrapped along the way.' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price;