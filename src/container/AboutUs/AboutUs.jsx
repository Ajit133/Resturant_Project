import React from 'react';
import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  
    <div className='app__aboutus app__bg flex__center section__padding'>
      <div className='app__aboutus-overlay flex__center'>
          <img src={images.G} alt='background images'/>
      </div>

      <div className='app__aboutus-content flex__center'>
         <div className='app__aboutus-content_about'>
           <h1 className='headtext__cormorant'>About Us</h1>
           <img src={images.spoon} className='spoon__img' alt='about__spoon' />
           <p className='p__opensans'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
           <button type='button' className='custom__button'>Know More</button>
         </div>

         <div className='app__aboutus-content_knife flex__center'>
             <img src={images.knife} alt='knife images' />
         </div>

         <div className='app__aboutus-content_history'>
           <h1 className='headtext__cormorant'>Our History</h1>
           <img src={images.spoon} className='spoon__img' alt='about__spoon' />
           <p className='p__opensans'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
           <button type='button' className='custom__button'>Know More</button>
         </div>
      </div>
    </div>
);

export default AboutUs;
