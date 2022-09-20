ScrollReveal({
  reset: true,
  distance:'60px',
  duration:2500,
  delay:400
});

ScrollReveal().reveal('.welcome-card h5,.headline-name h1,.nav-item a,.body-text h3,.body-text p,.service-offer-left', { delay: 100 , origin:'left'});
ScrollReveal().reveal('.body-text h1,.body-text h4', { delay: 100 , origin:'right'});
ScrollReveal().reveal('.service-offer', { delay: 100 , origin:'top'});
ScrollReveal().reveal('.service-offer-right', { delay: 500 , origin:'bottom',interval:200});
ScrollReveal().reveal('.box,.logo li,.welcome-card p', { delay: 100 , origin:'top',interval:200});
