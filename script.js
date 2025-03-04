




function setRating(starElement) {
    // Găsește toate stelele din containerul părinte
    let stars = starElement.parentElement.querySelectorAll(".cart__star");
  
    // Găsește indexul stelei pe care s-a dat click
    let index = Array.from(stars).indexOf(starElement) + 1;
  
    // Parcurge și actualizează clasele stelelor
    stars.forEach((star, i) => {
      if (i < index) {
        star.classList.add("active"); // Stelele active (galbene)
      } else {
        star.classList.remove("active"); // Stelele inactive (gri)
      }
    });
  }
  