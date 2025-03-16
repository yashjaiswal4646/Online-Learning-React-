import React from 'react';
import rizupic from '/images/rizupic.jpg';
import sunilpic from '/images/sunilpic.jpg';
import yashpic from '/images/yashpic.jpg';
import team from '/images/team.jpg';

const LeaderCard = ({ image, name, role }) => {
    return (
      <article className="flex flex-col items-center w-full">
        <img
          src={image}
          alt={name}
          className="object-contain w-full aspect-[0.75] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
        />
        <div className="flex flex-wrap gap-5 justify-between self-center mt-6 max-w-full w-[532px]">
          <h3 className="text-xl text-white">{name}</h3>
          <p className="text-xl text-white">{role}</p>
        </div>
        <div className="self-stretch h-px mt-6 border border-white border-solid shrink-0 max-md:max-w-full" />
      </article>
    );
  };
const About = () => {
    return (

    <>    
     <div
      className="flex items-center justify-center min-h-screen px-6 text-white"
      style={{
        background:
          "radial-gradient(circle at top center, #410640 5%, #000000 50%)",
      }}
    >
      <section className="flex flex-col items-center w-full px-8 mb-28 max-md:px-5 max-md:max-w-full">
        <h2 className="self-end mr-12 text-8xl text-white max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
          WHERE DREAMS
        </h2>
        <div className="flex flex-col items-center mt-3.5 w-full max-w-6xl max-md:max-w-full">
          <div className="flex w-full gap-5 max-md:flex-col">
            <div className="w-[43%] max-md:w-full">
              <p className="flex flex-col items-center text-2xl text-white">
                <span>We are committed to providing</span>
                <span>programs that go beyond top-tier training</span>
                <span className="mt-2">traditional education</span>
              </p>
            </div>
            <div className="ml-5 w-[57%] max-md:ml-0 max-md:w-full">
              <h2 className="text-white text-8xl max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                TRANS<span className="text-[#A21FB6]">FORM</span>
              </h2>
            </div>
          </div>
        </div>
        <h2 className="ml-24 text-white text-8xl max-md:max-w-full max-md:text-4xl">
          INTO CODE
        </h2>
      </section>
      </div>
      
      <section className="flex flex-col items-center mr-28 max-md:mt-5">
        <h2 className="ml-16 text-white text-7xl max-md:max-w-full max-md:text-4xl">
          People who makes us a team
        </h2>
        <img
          src={team}
          alt="Team"
          className="object-contain mt-20 w-full aspect-[1.5] max-w-[895px] ml-16 max-md:mt-10 max-md:max-w-full"
        />

        
        <div className="self-end mt-32 w-full max-w-[1205px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-6/12 max-md:w-full">
              <div className="flex flex-col items-center w-full text-xl text-white">
                <h3 className="mt-5 text-5xl max-md:text-4xl">OUR LEADERS</h3>
                <hr className="shrink-0 self-start mt-5 ml-3 mb-6  max-w-full h-px border border-white border-solid w-[555px]" />
                <div className="flex flex-col self-stretch w-full px-3 mt-10 gap-28">
                  <LeaderCard
                    image={rizupic}
                    name="Rizwan Ali"
                    role="FOUNDER"
                  />
                  <LeaderCard
                    image={sunilpic}
                    name="Sunil Kumar"
                    role="FOUNDER"
                  />
                </div>
              </div>
            </div>
            <div className="w-6/12 ml-5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full text-xl text-white mt-60 max-md:mt-10">
                <LeaderCard
                  image={yashpic}
                  name="Yash Jaiswal"
                  role="FOUNDER"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="flex flex-col items-center w-full px-8 mt-16 mb-16 max-md:px-5">
      <h2 className="flex flex-col items-center mt-16 text-5xl text-white max-md:mt-10 max-md:text-4xl">
        CONTACT US
        <hr className="shrink-0 self-start mt-5  max-w-full h-px border border-white border-solid w-[587px]" />

      </h2>

      <div className="flex flex-wrap gap-10 mt-24 w-full text-5xl text-white max-w-[901px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        <h3 className="grow shrink w-[134px] max-md:text-4xl">PHONE :</h3>
        <p className="grow shrink w-[562px] max-md:max-w-full max-md:text-4xl">
          9874563212
        </p>
      </div>
      <div className="mt-24 ml-4 w-full max-w-[927px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[26%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-5xl text-white grow whitespace-nowrap max-md:mt-10 max-md:text-4xl">
              <h3 className="self-start max-md:text-4xl">EMAIL :</h3>
              <h3 className="mt-20 max-md:mt-10 max-md:text-4xl">ADDRESS  :</h3>
            </div>
          </div>
          <div className="ml-5 w-[74%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-5xl text-white grow max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              <p className="max-md:max-w-full max-md:text-4xl">
                CodeHub4646@gmail.com
              </p>
              <p className="self-start mt-20 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                Rajkot, Gujarat, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
    );
  };

export default About;