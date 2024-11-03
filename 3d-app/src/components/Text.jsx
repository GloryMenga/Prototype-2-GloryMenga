import Typewriter from 'typewriter-effect';

function Text (){

    return (
      <>
        <div id='intro'>
          <div>
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
                    .typeString('Scroll to see the history of that shoe') 
                    .pauseFor(3000) 
                    .start(); 
                }}
            />
            </p>
          </div>
        </div>
        <div id='intro2'>
          <div>
            <h2>TIFFANY</h2>
            <hr class="sep"/>
            <p>Scroll</p>
          </div>
        </div>
      </>
    );
}

export default Text;