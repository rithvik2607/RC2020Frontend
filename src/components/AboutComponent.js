import React from 'react';
import dots from '../bgs/frame-1.png';

var sectionStyle = {
  backgroundImage: `url(${dots})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  width: "100%"
}

const About = () => {
  return(
    <section style={sectionStyle}>
      <div className="py-16 lg:py-32">
          <div className="mx-6 lg:mx-32">
            <img data-aos="fade-left" data-aos-delay="50" data-aos-duration="300" className="float-left mr-16" src="assets/images/reactangle-5.png" alt="about" />
            <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="300">
              <p className="text-white DM700 text-4xl mb-8 lg:mb-16">Reverse Coding is bOmB aF</p>
              <p className="text-gray-400 DM400 lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sit arcu vitae. Nisi, metus, adipiscing sit rhoncus sed. Massa, scelerisque vel hac vel.<br /><br /> Amet posuere turpis phasellus tortor, id. Vel mauris metus dictum suspendisse quis ac ullamcorper. Nisl augue ut maecenas quis blandit. In sit laoreet odio risus posuere ultrices eget. Quam lacus vestibulum, commodo porta non.<br /><br /> Non metus etiam id faucibus. Gravida massa lobortis varius aliquam rutrum lectus consectetur. Vel, pharetra, nisl semper</p>
            </div>
          </div>
      </div>
    </section>
  );
}

export default About;