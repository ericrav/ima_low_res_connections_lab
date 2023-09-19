const sentence2 =
  'What is that glowing ball in the sky and why does it hurt my eyes?';

window.addEventListener('load', () => {
  door.addEventListener('click', () => {
    indoors.classList.add('open');
    outside.classList.add('active');

    // after 4 seconds, show the second sentence
    setTimeout(() => {
      sentence2.split('').forEach((letter, index) => {
        setTimeout(() => {
          const span = document.createElement('span');
          span.innerText = letter;
          span.dataset.letter = letter;
          sentence.appendChild(span);
        }, 50 * index);
      });

      const render = () => {
        [...sentence.children].forEach((span) => {
          const ra = Math.random() * Math.PI * 2;
          const rr = Math.random() * 6;

          const x = Math.cos(ra) * rr;
          const y = Math.sin(ra) * rr;
          span.style.setProperty('--x', x + 'px');
          span.style.setProperty('--y', y + 'px');
        });

        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    }, 4000);
  });
});
