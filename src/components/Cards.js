import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Innovative Creation</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images\software_image_icon.jpg'
              text='SOFTWARE INNOVATION AND PROJECTS '
              path='/services'
            />
            <CardItem
              src='images\mechanical_image_icon.jpg'
              text='MECHANICAL DESIGN AND PROJECTS'
              path='/services'
            />
             <CardItem
              src='images\electronic_image_icon.jpg'
              text='EMBEDDED SYSTEM AND PROJECTS'
              path='/services'
            />
          </ul>
          <h1>Our Best Innovation Creation</h1>
          <ul className= "cards__items">
            <CardItem
              src='images\jelleke-vanooteghem-6NUlOHM40w8-unsplash (1).jpg'
              text='Self Driving Autonoums Car'
              label='IOT'
              path='/services'
            />
             <CardItem
              src="images\possessed-photography-dRMQiAubdws-unsplash.jpg"
              text='AUTOMATIC PRODUCTION ROBO ARM'
                label='MECHANICAL'
              path='/services'
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
