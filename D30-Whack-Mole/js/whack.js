  const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  let lastHole;
  let timeUp = false;
  let score;

  function randomTime(max, min) {
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

  function peep() {
      const time = randomTime(200, 1000);
      const hole = randomHole(holes);
      hole.classList.add('up');
      setTimeout(() => {
          hole.classList.remove('up');
          if (!timeUp) peep();
      }, time);
      console.log(time, hole);
  }


  function startGame() {
      scoreBoard.textContent = 0;
      timeUp = false;
      score = 0;
      peep();
      setTimeout(() => timeUp = true, 10000);
  }

  function bonk(e) {
      if (!e.isTrusted) return;
      score++;
      this.classList.remove('up');
      scoreBoard.textContent = score; //update scoreboad
  }

  moles.forEach(mole => mole.addEventListener('click', bonk));