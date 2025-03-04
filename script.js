



//RATING
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
  //Quantity
  function updateQuantity(button, change) {
    // Găsește cantitatea curentă și actualizează valoarea
    let quantityElement = button.parentElement.querySelector(".cart__quantity");
    let quantity = parseInt(quantityElement.textContent);
    
    // Actualizează cantitatea
    quantity += change;
  
    // Asigură-te că cantitatea nu devine mai mică de 1
    if (quantity < 1) {
      quantity = 1;
    }
  
    // Setează noua cantitate
    quantityElement.textContent = quantity;
  
    // Obține prețul unitar din celula de preț
    let unitPrice = parseFloat(button.closest("tr").querySelector(".cart__cell--price").textContent.replace('$', '').trim());
  
    // Calculează prețul total
    let totalPrice = unitPrice * quantity;
  
    // Actualizează prețul total în tabel
    let totalPriceElement = button.closest("tr").querySelector(".cart__total-price");
    totalPriceElement.textContent = totalPrice.toFixed(2); // Formatează la 2 zecimale
  }
  // REMOVE
  function removeItem(button) {
    // Găsește rândul părinte al butonului
    let row = button.closest("tr");
  
    // Șterge rândul din DOM
    row.remove();
  
    // Poți să actualizezi și totalul coșului, dacă este necesar, după eliminarea unui produs
    updateCartTotal();
  }
  
  function updateCartTotal() {
    let total = 0;
    
    // Găsește toate elementele de total (prețurile totale ale fiecărui produs)
    let totalElements = document.querySelectorAll(".cart__total-price");
    
    // Calculează suma totală a prețurilor
    totalElements.forEach(function(totalElement) {
      total += parseFloat(totalElement.textContent.replace('$', '').trim());
    });
  
    // Actualizează prețul total în coșul de cumpărături (unde dorești să afișezi totalul final)
    document.querySelector("#cart-total").textContent = "$" + total.toFixed(2);
  }
  