import Typewriter from 'typewriter-effect';

function Text (){

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
        <div id='info'>
          <div className='info-txt'>
            <h2>ORIGINS IN FILM</h2>
            <hr class="sep"/>
            <p>In 1989, Universal Pictures released a sci-fi classic starring Michael J. Fox, featuring a pair of fictional power-lacing sneakers known as the Nike Mag. While these sneakers were not self-lacing at the time, a crew member had to manually pull strings during filming to simulate the auto-lacing effect. Years later, the film's influence led Nike to create special-edition Nike Mag shoes for the public.</p>
          </div>
        </div>
        <div id='info'>
          <div className='info-txt'>
            <h2>A NEW ERA OF INNOVATION</h2>
            <hr class="sep"/>
            <p>In 1989, Universal Pictures released a sci-fi classic starring Michael J. Fox, featuring a pair of fictional power-lacing sneakers known as the Nike Mag. While these sneakers were not self-lacing at the time, a crew member had to manually pull strings during filming to simulate the auto-lacing effect. Years later, the film's influence led Nike to create special-edition Nike Mag shoes for the public.</p>
          </div>
        </div>
        <div id='info'>
          <div className='info-txt'>
            <h2>THE FIRST PUBLIX RELEASE</h2>
            <hr class="sep"/>
            <p>In 1989, Universal Pictures released a sci-fi classic starring Michael J. Fox, featuring a pair of fictional power-lacing sneakers known as the Nike Mag. While these sneakers were not self-lacing at the time, a crew member had to manually pull strings during filming to simulate the auto-lacing effect. Years later, the film's influence led Nike to create special-edition Nike Mag shoes for the public.</p>
          </div>
        </div>
        <div id='info'>
          <div className='info-txt'>
            <h2>IMPACT AND RECOGNITION</h2>
            <hr class="sep"/>
            <p>In 1989, Universal Pictures released a sci-fi classic starring Michael J. Fox, featuring a pair of fictional power-lacing sneakers known as the Nike Mag. While these sneakers were not self-lacing at the time, a crew member had to manually pull strings during filming to simulate the auto-lacing effect. Years later, the film's influence led Nike to create special-edition Nike Mag shoes for the public.</p>
          </div>
        </div>
        <div id='info'>
          <div className='info-txt'>
            <h2>CONTINUED COMMITMENT AND TECHNOLOGY ADVANCEMENTS</h2>
            <hr class="sep"/>
            <p>In 1989, Universal Pictures released a sci-fi classic starring Michael J. Fox, featuring a pair of fictional power-lacing sneakers known as the Nike Mag. While these sneakers were not self-lacing at the time, a crew member had to manually pull strings during filming to simulate the auto-lacing effect. Years later, the film's influence led Nike to create special-edition Nike Mag shoes for the public.</p>
          </div>
        </div>
        <div id='info'>
          <div className='info-txt'>
            <h2>LEGACE AND RESALE MARKET</h2>
            <hr class="sep"/>
            <p>In 1989, Universal Pictures released a sci-fi classic starring Michael J. Fox, featuring a pair of fictional power-lacing sneakers known as the Nike Mag. While these sneakers were not self-lacing at the time, a crew member had to manually pull strings during filming to simulate the auto-lacing effect. Years later, the film's influence led Nike to create special-edition Nike Mag shoes for the public.</p>
          </div>
        </div>
        <div id='info'>
          <div className='info-txt'>
            <h2>SUPPORTING PARKINSON'S RESEARCH</h2>
            <hr class="sep"/>
            <p>In 1989, Universal Pictures released a sci-fi classic starring Michael J. Fox, featuring a pair of fictional power-lacing sneakers known as the Nike Mag. While these sneakers were not self-lacing at the time, a crew member had to manually pull strings during filming to simulate the auto-lacing effect. Years later, the film's influence led Nike to create special-edition Nike Mag shoes for the public.</p>
          </div>
        </div>
      </>
    );
}

export default Text;