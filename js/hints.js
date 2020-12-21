window.addEventListener('load', function initHints(event) {
    window.removeEventListener(event.type, initHints);
    let elem = document.getElementById('hints');
    let tw = new Typewriter(elem, {
        loop: true,
        delay: 40
    });
    tw.typeString('what\'s 9+10?')
      .pauseFor(1500)
      .typeString(' 21 lol.')
      .pauseFor(1000)
      .deleteAll()
      .pauseFor(1000)
      .typeString('Press alt+f4 for faster load times')
      .pauseFor(3000)
      .deleteAll()
      .pauseFor(1000)
      .typeString('Straight from my mom\'s basement to yours')
      .pauseFor(3000)
      .deleteAll()
      .pauseFor(1000)
      .typeString('Downloading virus')
      .pauseFor(1000)
      .typeString('.')
      .pauseFor(1000)
      .typeString('.')
      .pauseFor(1000)
      .typeString('.')
      .pauseFor(1000)
      .deleteAll()
      .pauseFor(500)
      .typeString('There is a virus on your computer! Send me bitcoin to resolve')
      .pauseFor(3000)
      .deleteAll()
      .pauseFor(1000)
      .typeString('Look out! Behind you!')
      .pauseFor(3000)
      .deleteAll()
      .typeString('Ha Ha, made you look')
      .pauseFor(3000)
      .deleteAll()
      .pauseFor(1000)
      .start();
});
