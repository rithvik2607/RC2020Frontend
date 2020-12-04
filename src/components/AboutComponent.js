import React from 'react'
import dots from '../bgs/frame-1.png'

var sectionStyle = {
  backgroundImage: `url(${dots})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right',
}

const About = () => {
  return (
    <section style={sectionStyle}>
      <div className='py-16 lg:py-32'>
        <div className='mx-6 md:mx-16 lg:mx-32'>
          <img
            data-aos='fade-zoom-in'
            data-aos-delay='50'
            data-aos-duration='300'
            src='assets/images/esrerst.png'
            alt='about'
          />
          <div
            data-aos='fade-right'
            data-aos-delay='50'
            data-aos-duration='300'
          >
            <p className='text-white DM700 text-4xl mb-8 mt-8'>
              About Reverse Coding
            </p>
            <p className='text-gray-400 DM400 lg:text-xl'>
              ACM-VIT is one of the most reputed and active technical chapters
              in VIT. We strongly believe that in teaching others, we learn
              ourselves which is why we conduct several events every year
              ranging from thrilling hackathons to informative workshops.
              <br />
              <br />
              One such event is Reverse Coding, an exhilarating coding contest
              that will truly challenge your logical and mathematical skills.
              Participants would be given runnable files that display the
              input-output test cases and they would need to come up with a code
              that will fulfil those cases. So, get ready to battle it out in
              the first round which will take place on 18th December 2020 and
              subsequently, the second round which will take place on 20th
              December 2020.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
