import Typewriter from 'typewriter-effect';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Text() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
      <div id='intro'>
        <div className='intro-txt'>
          <h1>NIKE AIR MAG</h1>
          <h2>THE EVOLUTION OF NIKE AIR MAG</h2>
          <p>
            <Typewriter
              options={{
                autoStart: true,
                loop: true, 
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1000) 
                  .typeString('Scroll to see the history of the Nike air mag') 
                  .pauseFor(3000) 
                  .start(); 
              }}
            />
          </p>
        </div>
      </div>
      {sections.map((section, index) => (
        <InfoSection key={index} title={section.title} content={section.content} />
      ))}
    </>
  );
}

const sections = [
  { title: "ORIGIN IN FILM", content: "In 1989, Universal Pictures released a sci-fi classic starring Michael J. Fox, featuring a pair of fictional power-lacing sneakers known as the Nike Mag. While these sneakers were not self-lacing at the time, a crew member had to manually pull strings during filming to simulate the auto-lacing effect. Years later, the film's influence led Nike to create special-edition Nike Mag shoes for the public." },
  { title: "A NEW ERA OF INNOVATION", content: "Robert Williams, senior brand creative for sneaker culture and footwear curation, highlighted that the Nike Mag represented a unique opportunity to explore futuristic design and technology concepts from the '80s, paving the way for innovations like HyperAdapt and Adapt technology. Its iconic design set a precedent for future collaborations." },
  { title: "THE FIRST PUBLIC RELEASE", content: "In 2011, Nike collaborated with The Michael J. Fox Foundation for Parkinson's Research to produce the first public iteration of the Mag. Under the leadership of innovators Tiffany Beers and Tinker Hatfield, the shoe was crafted based on the film's design, driven by demand from fans who petitioned for a real version. The limited release of 1,500 pairs sold for nearly $10 million in just 10 days, with proceeds going to Parkinson's research." },
  { title: "IMPACT AND RECOGNITION", content: "Mark Parker, executive chairman of Nike, noted that the Nike Mag not only fostered innovation but also heightened awareness of global challenges, particularly in the fight against Parkinson's disease. This highlighted Nike's commitment to using its platform for social good." },
  { title: "CONTINUED COMMITMENT AND TECHNOLOGY ADVANCEMENTS", content: "In 2016, Nike further advanced its support for Parkinson's research with another limited-edition release of the Mag, featuring 'power laces' as part of the Adaptive Fit Technology System, which responds to the wearer's movements. This release, which included just 89 pairs, raised $6.7 million." },
  { title: "LEGACY AND RESALE MARKET", content: "Today, the Nike Mag has become a coveted collectible, often sold at auction or on resale platforms for tens of thousands of dollars, regarded more as a piece of sneaker history than as an athletic shoe." },
  { title: "SUPPORTING PARKINSON'S RESEARCH", content: "The Michael J. Fox Foundation, established in 2000, is dedicated to accelerating research aimed at finding a cure for Parkinson's disease, further underscoring the meaningful connection between the Nike Mag and the cause it supports." }
];

function InfoSection({ title, content }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20%" });

  return (
    <div id='info'>
      <motion.div
        ref={ref}
        className='info-txt'
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        <h2>{title}</h2>
        <hr className="sep" />
        <p>{content}</p>
      </motion.div>
    </div>
  );
}

export default Text;
