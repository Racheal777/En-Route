import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='about-us'>
            <h1>About Us</h1>
            <section className='about'>
              <div className='about-text'>
                  <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod temporincididunt ut labore et dolore magna 
aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  </div>  

                  <div className='about-image'>
                      <img src='../images/picnic.jpg'></img>
                  </div>
            </section>

<section>
    <h1>Discover the best in the city</h1>
<section className='all-locations'>
                <div className='locations'>
                <img src='../images/cinema.jpg'></img>
                <Link to=''>Cinemas</Link>
                </div>

                <div className='locations'>
                <img src='../images/hotel.jpg'></img>
                <Link to =''>Hotels</Link>
                </div>

                <div className='locations'>
                <img src='../images/res.jpg'></img>
                <Link to ="">Restaurants</Link>
                </div>

                <div className='locations'>
                <img src='../images/active.jpg'></img>
                <Link to =''>Adventure</Link>
                </div>

                <div className='locations'>
                <img src='../images/beach.jpg'></img>
                <Link to ="">Beach</Link>
                </div>

                <div className='locations'>
                <img src='../images/picnic.jpg'></img>
                <Link to ="">Cinema</Link>
                </div>
            </section>
</section>
            
        </div>
    );
}

export default About;
