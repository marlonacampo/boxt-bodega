function enviarWhatsApp() {
    const title = document.querySelector('.title').textContent;
    const price = document.querySelector('.precio span').textContent;
    const phone = document.querySelector('.btn-primary').getAttribute('data-wpp-phone');
    const message = `Hola! Me gustaría comprar el producto ${title} que tiene un precio de ${price}`;
  
    // Abrir WhatsApp con el mensaje predefinido
    window.location.href = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}.Mi número de teléfono es: ${phone}`;
  }


  

  function enviarWhatsApp2() {
    const title = document.querySelector('.title2').textContent;
    const price = document.querySelector('.precio2 span').textContent;
    const phone = document.querySelector('.btn-primary').getAttribute('data-wpp-phone');
    const message = `Hola! Me gustaría comprar el producto ${title} que tiene un precio de ${price}.Mi número de teléfono es: ${phone}`;
  
    // Abrir WhatsApp con el mensaje predefinido
    window.location.href = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
  }


  function enviarWhatsApp3() {
    const title = document.querySelector('.title3').textContent;
    const price = document.querySelector('.precio3 span').textContent;
    const phone = document.querySelector('.btn-primary').getAttribute('data-wpp-phone');
    const message = `Hola! Me gustaría comprar el producto ${title} que tiene un precio de ${price}.Mi número de teléfono es: ${phone}`;
  
    // Abrir WhatsApp con el mensaje predefinido
    window.location.href = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
  }
  
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.keyCode === 85) {
      e.preventDefault();
      alert('Función deshabilitada');
    }
  });  