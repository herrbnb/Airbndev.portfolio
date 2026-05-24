  /* Scroll Reveal */
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        
        /* Skill bars */
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          const w = parseFloat(bar.dataset.width);
          bar.style.transform = `scaleX(${w})`;
          bar.classList.add('animate');
        });
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));
  
  /* Active nav link on scroll */
  const sections = document.querySelectorAll('section[id]');
  
  
  const navLinks = document.querySelectorAll('.sidebar nav a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 180) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  });
  
  /* Form submit */
  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target;
    btn.textContent = 'Sent ✓';
    btn.style.background = '#4a7c59';
    btn.style.borderColor = '#4a7c59';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
      btn.style.borderColor = '';
    }, 3000);
  }
