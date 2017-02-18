  const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  lt lastHole;

  functions randTime(max, min) {
      return Math.round(Math.random() * (max - min) + min);
  }


  function randomHole(holes) {
      const idx = Math.floor(Math.random() * holes.length);
      const hole = holes[idx];

      /* Check to make sure the current hole number doesn't match the last. If so, re-run randomHole*/
      if (hole === lastHole) {
          return randomHole(holes);
      }

      /*stores the last hole number the mole last popped up in */
      lastHole = hole;
      return hole;
  }