/* Urban Spark Electrical — Part 3 JavaScript
   Client-side enhancements only. Form emails are opened in the visitor's email app;
   no server is configured to store or transmit submissions. */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Filter service cards as the visitor types.
  const search = document.querySelector('#service-search');
  const serviceList = document.querySelector('#service-list');
  const count = document.querySelector('#service-count');
  if (search && serviceList) {
    const cards = Array.from(serviceList.querySelectorAll('.card'));
    const filter = () => {
      const term = search.value.trim().toLowerCase();
      let shown = 0;
      cards.forEach(card => {
        const match = card.textContent.toLowerCase().includes(term);
        card.hidden = !match;
        if (match) shown++;
      });
      if (count) count.textContent = `Showing ${shown} of ${cards.length} services.`;
    };
    search.addEventListener('input', filter);
    filter();
  }

  // Image lightbox for images across the website.
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.hidden = true;
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Expanded image');
  lightbox.innerHTML = '<button type="button" aria-label="Close enlarged image">Close ✕</button><img alt="">';
  document.body.appendChild(lightbox);
  const largeImage = lightbox.querySelector('img');
  const closeButton = lightbox.querySelector('button');
  const closeLightbox = () => { lightbox.hidden = true; largeImage.src = ''; };
  document.querySelectorAll('main img').forEach(img => {
    img.dataset.lightbox = 'true';
    img.addEventListener('click', () => {
      largeImage.src = img.currentSrc || img.src;
      largeImage.alt = img.alt || 'Expanded website image';
      lightbox.hidden = false;
      closeButton.focus();
    });
  });
  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeLightbox(); });

  // Quote request validation and an indicative estimate (not a binding quote).
  const quoteForm = document.querySelector('#quote-form');
  if (quoteForm) {
    const dateInput = quoteForm.querySelector('#date');
    if (dateInput) dateInput.min = new Date().toISOString().slice(0, 10);
    quoteForm.addEventListener('submit', event => {
      event.preventDefault();
      const feedback = document.querySelector('#quote-feedback');
      if (!quoteForm.checkValidity()) { quoteForm.reportValidity(); return; }
      const data = new FormData(quoteForm);
      const service = String(data.get('service') || '');
      const prices = {
        residential: 'R500–R2,500',
        commercial: 'R1,500–R8,000',
        solar: 'R15,000–R100,000+',
        backup: 'R5,000–R40,000+',
        maintenance: 'R500–R3,000'
      };
      const estimate = prices[service] || 'subject to assessment';
      const subject = encodeURIComponent(`Quote enquiry — ${data.get('service')}`);
      const body = encodeURIComponent(
        `Quote request for Urban Spark Electrical\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\nService: ${data.get('service')}\nPreferred date: ${data.get('date') || 'Not specified'}\nJob description: ${data.get('message')}\n\nIndicative website estimate: ${estimate}. Final price requires assessment.`
      );
      if (feedback) feedback.textContent = `Indicative estimate: ${estimate}. This is not a binding quote. Your email app will open so you can send the request.`;
      window.location.href = `mailto:info@urbanspark.co.za?subject=${subject}&body=${body}`;
    });
  }

  // General contact form: validate, then compose an email in the visitor's mail app.
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      if (!contactForm.checkValidity()) { contactForm.reportValidity(); return; }
      const data = new FormData(contactForm);
      const feedback = document.querySelector('#contact-feedback');
      const subject = encodeURIComponent(`Website contact — ${data.get('contact-type')}`);
      const body = encodeURIComponent(
        `Message to Urban Spark Electrical\n\nName: ${data.get('contact-name')}\nEmail: ${data.get('contact-email')}\nMessage type: ${data.get('contact-type')}\nMessage:\n${data.get('contact-message')}`
      );
      if (feedback) feedback.textContent = 'Your email app should open with the message prepared. Please send it from your email app to complete the enquiry.';
      window.location.href = `mailto:info@urbanspark.co.za?subject=${subject}&body=${body}`;
    });
  }
});
