import React from 'react';
import './About.css';
import Back from '../Common/Back';
import Heading from '../Common/Heading';
import img from '../Images/about.jpg';

const About = () => {
  return (
    <>
    <section className='about'>
      <Back name='About Us' title='About Us - Who We Are?' cover={img} />
      <div className='container flex mtop'>
        <div className='left row'>
          <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

          <p>A real estate agency acts as a crucial intermediary, connecting property buyers and sellers. With licensed agents at the helm, these agencies facilitate transactions across residential, commercial, and industrial real estate. They maintain comprehensive property listings, utilizing diverse marketing channels for promotion. Legal expertise ensures adherence to regulations and seamless transactions.</p>
          <p>Services encompass property valuation, negotiation, and customer support. Agencies stay current with market trends, utilizing technology and networking for optimal outcomes. In essence, real estate agencies streamline the complex process of property transactions, providing expertise and support for a smooth experience.</p>
          <button className='btn2'>More About Us</button>
        </div>
        <div className='right row'>
          <img src='./immio.jpg' alt='' />
        </div>
      </div>
    </section>
  </>
  )
}

export default About;