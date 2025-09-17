// Simple page interactions for the CodePen demo

// Fill current year in footer

document.getElementById('year').textContent = new Date().getFullYear();

// View Work button scrolls to projects

document.getElementById('viewWorkBtn').addEventListener('click', function(){

  document.getElementById('projects').scrollIntoView({behavior:'smooth'});

});

// Project demo buttons (placeholders)

document.querySelectorAll('.proj-demo').forEach(btn=>{

  btn.addEventListener('click', () => {

    const project = btn.dataset.project;

    // In a real portfolio you would link to project pages or open modals.

    alert('Open demo for: ' + project + '\n(Replace this with your project link or modal.)');

  });

});

// Contact form simple submit handler

document.getElementById('contactForm').addEventListener('submit', function(e){

  e.preventDefault();

  const name = this.name.value.trim();

  const email = this.email.value.trim();

  const phone = this.phone.value.trim();

  const msg = this.message.value.trim();

  // For demo we just show a small confirmation. Replace with real submit if desired.

  alert(

    "Form submitted (demo)\n\n" +

    "Name: " + name + "\nEmail: " + email + "\nPhone: " + phone +

    (msg ? ("\nMessage: " + msg) : "")

  );

  // clear message only (keeping prefilled fields)

  this.message.value = '';

});