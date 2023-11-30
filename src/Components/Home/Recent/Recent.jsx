import React from 'react';
import './Recent.css';
import Heading from '../../Common/Heading';
import RecentCard from './RecentCard';

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Real estate: own for stability, rent for flexibility. Choose houses or apartment based on needs, finances, lifestyle. The market caters to individual preferences.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent;