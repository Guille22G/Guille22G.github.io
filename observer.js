let subrayado = document.querySelectorAll('.subrayado');

let config = {
    threshold: 0.5
};

observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        //console.log('Está en viewport');
        //console.log(entry.target);
        entry.target.classList.add("subrayadoAnimar");
        // Dejar de observar
        // observer.unobserve(entry.target);
      } else {
        //console.log('No está en viewport');
        entry.target.classList.remove("subrayadoAnimar");
      }
    });
}, config);

subrayado.forEach(elemento => {
    observer.observe(elemento);
});