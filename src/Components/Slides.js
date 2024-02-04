import React from 'react'
import PhotoCarousel from './PhotoCarousel';
import '../Style/Style.css'

const Slides = () => {
    const images = [
        
        'https://www.pngimages.in/uploads/png-webp/2023/April-2023/student_Png_Hd_Images_Free_Download.webp',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx58rwj9SnnDolEmjz_gd-Ap_tYWpUGJAC_B9y0uRoxkNHx4-wV0Hue2GViA&s'
        // Add more image URLs as needed
      ];
    
      return (
        <div className='slide'> 
          <h1>More info</h1>
          <PhotoCarousel  images={images} width="800px" height="500px"/>
        </div>
      );
  
}

export default Slides
