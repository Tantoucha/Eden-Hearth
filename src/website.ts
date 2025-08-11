// Website functionality and structure
export function initializeWebsite() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  
  app.innerHTML = `
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <a href="/" class="brand">
          <img src="/logo.svg" alt="Eden & Hearth" width="200" height="40" decoding="async">
        </a>
        <div class="nav-menu" id="nav-menu">
          <a href="#home" class="nav-link active">Home</a>
          <a href="#services" class="nav-link">Services</a>
          <a href="#portfolio" class="nav-link">Portfolio</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
        <div class="nav-toggle" id="nav-toggle">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>

    <!-- HERO: Kitchens + Landscaping -->
    <link rel="preload" as="image" href="/images/kitchen-1920.jpg" fetchpriority="high">
    <section class="hero" id="home" aria-label="Eden & Hearth — Kitchens and Landscaping">
      <div class="hero-media">
        <picture class="hero-img hero-img--kitchen">
          <source srcset="/images/kitchen-1920.jpg 1920w, /images/kitchen-1280.jpg 1280w, /images/kitchen-960.jpg 960w"
                  sizes="(min-width: 900px) 50vw, 100vw" type="image/jpeg">
          <img src="/images/kitchen-1280.jpg" alt="Bespoke fitted kitchen with natural light"
               loading="eager" fetchpriority="high" width="1600" height="1067">
        </picture>
        <picture class="hero-img hero-img--garden">
          <source srcset="/images/garden-1920.jpg 1920w, /images/garden-1280.jpg 1280w, /images/garden-960.jpg 960w"
                  sizes="(min-width: 900px) 50vw, 100vw" type="image/jpeg">
          <img src="/images/garden-1280.jpg" alt="Stone patio and landscaped garden"
               loading="lazy" width="1600" height="1067">
        </picture>
        <div class="hero-overlay" aria-hidden="true"></div>
      </div>

      <div class="hero-content">
        <h1>Kitchens & Landscaping, Built Well.</h1>
        <p>Design, installation and project management across Greater Manchester and the North West.</p>
        <div class="hero-ctas">
          <a class="btn btn-primary" href="#portfolio">View our work</a>
          <a class="btn btn-ghost" href="#contact">Request a quote</a>
        </div>
        <ul class="hero-trust" aria-label="Reasons to choose us">
          <li>Project-managed</li>
          <li>Clear schedules &amp; pricing</li>
          <li>Respectful on site</li>
        </ul>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="services">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Services</h2>
          <p class="section-description">We design and build functional kitchens and considered outdoor spaces. Our work focuses on durable materials, tidy workmanship and reliable timelines.</p>
        </div>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-utensils"></i>
            </div>
            <h3 class="service-title">Kitchens</h3>
            <p class="service-description">Design, supply and installation of fitted kitchens, worktops and lighting. Coordination with trades. Snag-free handover.</p>
            <ul class="service-features">
              <li>Kitchen Design & Planning</li>
              <li>Cabinet Installation</li>
              <li>Worktop Installation</li>
              <li>Lighting & Electrical</li>
              <li>Trade Coordination</li>
            </ul>
          </div>
          
          <div class="service-card">
            <div class="service-icon">
              <i class="fas fa-seedling"></i>
            </div>
            <h3 class="service-title">Landscaping</h3>
            <p class="service-description">Patios, paths and garden structures. Drainage and levels resolved properly. Planting plans available on request.</p>
            <ul class="service-features">
              <li>Patio & Path Installation</li>
              <li>Garden Structures</li>
              <li>Drainage Solutions</li>
              <li>Level Correction</li>
              <li>Planting Plans</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
              <i class="fas fa-tools"></i>
            </div>
            <h3 class="service-title">Maintenance</h3>
            <p class="service-description">Keep your installations looking perfect with our comprehensive maintenance services.</p>
            <ul class="service-features">
              <li>Regular Garden Maintenance</li>
              <li>Kitchen Care & Repairs</li>
              <li>Seasonal Services</li>
              <li>Emergency Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="portfolio" id="portfolio">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Recent Projects</h2>
          <p class="section-description">Take a look at some of our completed landscaping and kitchen installations</p>
        </div>
        <div class="portfolio-filter">
          <button class="filter-btn active" data-filter="all">All Projects</button>
          <button class="filter-btn" data-filter="landscaping">Landscaping</button>
          <button class="filter-btn" data-filter="kitchen">Kitchens</button>
        </div>
        <div class="portfolio-grid">
          <div class="portfolio-item" data-category="landscaping">
            <div class="portfolio-image">
              <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop" alt="Garden Landscape" loading="lazy">
              <div class="portfolio-overlay">
                <h3>Modern Garden Design</h3>
                <p>Complete landscape transformation with native plants and modern hardscaping</p>
                <button class="view-project-btn">View Details</button>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item" data-category="kitchen">
            <div class="portfolio-image">
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop" alt="Modern Kitchen" loading="lazy">
              <div class="portfolio-overlay">
                <h3>Contemporary Kitchen</h3>
                <p>Sleek modern kitchen with custom cabinetry and premium appliances</p>
                <button class="view-project-btn">View Details</button>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item" data-category="landscaping">
            <div class="portfolio-image">
              <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop" alt="Backyard Oasis" loading="lazy">
              <div class="portfolio-overlay">
                <h3>Backyard Oasis</h3>
                <p>Luxury outdoor living space with water features and entertainment area</p>
                <button class="view-project-btn">View Details</button>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item" data-category="kitchen">
            <div class="portfolio-image">
              <img src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&h=400&fit=crop" alt="Traditional Kitchen" loading="lazy">
              <div class="portfolio-overlay">
                <h3>Traditional Kitchen</h3>
                <p>Classic kitchen renovation with handcrafted details and premium finishes</p>
                <button class="view-project-btn">View Details</button>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item" data-category="landscaping">
            <div class="portfolio-image">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" alt="Front Yard Landscape" loading="lazy">
              <div class="portfolio-overlay">
                <h3>Front Yard Makeover</h3>
                <p>Stunning curb appeal enhancement with drought-resistant landscaping</p>
                <button class="view-project-btn">View Details</button>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item" data-category="kitchen">
            <div class="portfolio-image">
              <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&h=400&fit=crop" alt="Open Kitchen" loading="lazy">
              <div class="portfolio-overlay">
                <h3>Open Concept Kitchen</h3>
                <p>Spacious open kitchen design perfect for entertaining and family life</p>
                <button class="view-project-btn">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2 class="section-title">What we do</h2>
            <p class="about-description">
              We design and build functional kitchens and considered outdoor spaces. Our work focuses on durable materials, tidy workmanship and reliable timelines.
            </p>
            <div class="about-features">
              <div class="feature">
                <i class="fas fa-award"></i>
                <div>
                  <h4>Quality Craftsmanship</h4>
                  <p>Every project is completed to the highest standards with attention to detail.</p>
                </div>
              </div>
              <div class="feature">
                <i class="fas fa-users"></i>
                <div>
                  <h4>Expert Team</h4>
                  <p>Our certified installers and skilled professionals bring years of experience to every project.</p>
                </div>
              </div>
              <div class="feature">
                <i class="fas fa-handshake"></i>
                <div>
                  <h4>Customer Focused</h4>
                  <p>We work closely with clients to bring their vision to life within budget.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="about-image">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=500&fit=crop" alt="Our Team" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process" id="process">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">How we work</h2>
        </div>
        <div class="process-grid">
          <div class="process-step">
            <div class="step-number">1</div>
            <h3 class="step-title">Consultation</h3>
            <p class="step-description">We visit, measure and discuss scope, budget and timing.</p>
          </div>
          <div class="process-step">
            <div class="step-number">2</div>
            <h3 class="step-title">Design & quote</h3>
            <p class="step-description">Clear drawings/spec and a detailed, itemised quote.</p>
          </div>
          <div class="process-step">
            <div class="step-number">3</div>
            <h3 class="step-title">Build</h3>
            <p class="step-description">Scheduled works with a single point of contact. Tidy, respectful.</p>
          </div>
          <div class="process-step">
            <div class="step-number">4</div>
            <h3 class="step-title">Aftercare</h3>
            <p class="step-description">We walk the job with you and address anything needed.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Areas Section -->
    <section class="areas" id="areas">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Areas we cover</h2>
          <p class="section-description">Greater Manchester, Cheshire and the North West.</p>
        </div>
      </div>
    </section>
        
        <!-- Founders Section -->
        <div class="founders-section">
          <div class="section-header">
            <h2 class="section-title">Meet Our Founders</h2>
            <p class="section-description">The visionary team behind Eden & Hearth's success</p>
          </div>
          <div class="founders-grid">
            <div class="founder-card">
              <div class="founder-image">
                <img src="./abdul-tantouch.jpg" alt="Abdul Tantouch" loading="lazy">
              </div>
              <div class="founder-info">
                <h3 class="founder-name">Abdul Tantouch</h3>
                <p class="founder-title">Co-Founder & Operations Director</p>
                <p class="founder-description">
                  Abdul ensures seamless project management and client satisfaction across all our operations. 
                  With a background in business operations and customer service excellence, he coordinates our 
                  certified installation teams to deliver projects on time and within budget while maintaining 
                  our exceptionally high standards throughout Greater Manchester and the North West.
                </p>
              </div>
            </div>
            
            <div class="founder-card">
              <div class="founder-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" alt="Ibrahim Berkawi" loading="lazy">
              </div>
              <div class="founder-info">
                <h3 class="founder-name">Ibrahim Berkawi</h3>
                <p class="founder-title">Co-Founder & Kitchen Installations Director</p>
                <p class="founder-description">
                  Ibrahim's 15 years of kitchen design and installation experience ensures every kitchen 
                  project combines functionality with style. His attention to detail and commitment to 
                  quality craftsmanship, supported by our team of certified kitchen installers, has earned 
                  him recognition as a leading kitchen specialist in the North West.
                </p>
              </div>
            </div>
            
            <div class="founder-card">
              <div class="founder-image">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face" alt="Hamdi Hassan" loading="lazy">
              </div>
              <div class="founder-info">
                <h3 class="founder-name">Hamdi Hassan</h3>
                <p class="founder-title">Co-Founder & Landscape Director</p>
                <p class="founder-description">
                  With over 12 years in landscape design and horticulture, Hamdi brings creative vision and 
                  technical expertise to every outdoor project. His passion for sustainable landscaping and 
                  innovative design solutions, combined with our certified landscaping installation team, 
                  has transformed hundreds of gardens and outdoor spaces across Manchester.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get Your Free Quote Today</h2>
          <p class="section-description">Ready to transform your space? Contact us for a free consultation and quote</p>
        </div>
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>+44 7721 142 355</p>
                <p>+44 7879 296 048</p>
                <p>+44 7802 487 781</p>
              </div>
            </div>
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>help@eden-hearth.co.uk</p>
              </div>
            </div>
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <h4>Service Area</h4>
                <p>Greater Manchester & North West</p>
              </div>
            </div>
            <div class="contact-item">
              <i class="fas fa-clock"></i>
              <div>
                <h4>Hours</h4>
                <p>Mon-Fri: 8AM-6PM<br>Sat: 9AM-4PM</p>
              </div>
            </div>
          </div>
          <form class="contact-form" id="contact-form">
            <div class="form-row">
              <div class="form-group">
                <input type="text" name="firstName" placeholder="First Name" required>
              </div>
              <div class="form-group">
                <input type="text" name="lastName" placeholder="Last Name" required>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <input type="email" name="email" placeholder="Email Address" required>
              </div>
              <div class="form-group">
                <input type="tel" name="phone" placeholder="Phone Number" required>
              </div>
            </div>
            <div class="form-group">
              <select name="service" required>
                <option value="">Select Service Type</option>
                <option value="landscaping">Landscaping</option>
                <option value="kitchen">Kitchen Installation</option>
                <option value="both">Both Services</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>
            <div class="form-group">
              <textarea name="message" rows="5" placeholder="Tell us about your project..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-logo">
              <div class="logo-placeholder">E&H</div>
              <span class="logo-text">Eden & Hearth</span>
            </div>
            <p class="footer-description">
              Professional landscaping and kitchen installation services throughout Greater Manchester and the North West.
            </p>
            <div class="social-links">
              <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
              <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
              <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div class="footer-section">
            <h4 class="footer-title">Services</h4>
            <ul class="footer-links">
              <li><a href="#services">Landscape Design</a></li>
              <li><a href="#services">Kitchen Installation</a></li>
              <li><a href="#services">Garden Maintenance</a></li>
              <li><a href="#services">Custom Solutions</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4 class="footer-title">Company</h4>
            <ul class="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#portfolio">Our Work</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Reviews</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4 class="footer-title">Contact Info</h4>
            <div class="footer-contact">
              <p><i class="fas fa-phone"></i> +44 7721 142 355</p>
              <p><i class="fas fa-envelope"></i> help@eden-hearth.co.uk</p>
              <p><i class="fas fa-map-marker-alt"></i> Greater Manchester & North West</p>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Eden & Hearth Landscaping and Kitchen Installers. All rights reserved.</p>
        </div>
      </div>
    </footer>

    <!-- Scroll to Top Button -->
    <button class="scroll-to-top" id="scrollToTop">
      <i class="fas fa-arrow-up"></i>
    </button>
  `;

  // Initialize website functionality
  initializeNavigation();
  initializePortfolioFilter();
  initializeScrollEffects();
  initializeContactForm();
  initializeAnimations();
}

function initializeNavigation() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Mobile menu toggle
  navToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Navigation link smooth scrolling
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('href')?.substring(1);
      if (target) {
        (window as any).scrollToSection(target);
        navMenu?.classList.remove('active');
        navToggle?.classList.remove('active');
      }
    });
  });

  // Update active nav link on scroll
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos <= bottom) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

function initializePortfolioFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter items
      portfolioItems.forEach(item => {
        const category = item.getAttribute('data-category');
        const htmlItem = item as HTMLElement;
        if (filter === 'all' || category === filter) {
          htmlItem.style.display = 'block';
          setTimeout(() => htmlItem.style.opacity = '1', 10);
        } else {
          htmlItem.style.opacity = '0';
          setTimeout(() => htmlItem.style.display = 'none', 300);
        }
      });
    });
  });
}

function initializeScrollEffects() {
  // Scroll to top button
  const scrollToTopBtn = document.getElementById('scrollToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn?.classList.add('visible');
    } else {
      scrollToTopBtn?.classList.remove('visible');
    }
  });

  scrollToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Parallax effect for hero section
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroBackground = document.querySelector('.hero-background') as HTMLElement;
    if (heroBackground) {
      heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
}

function initializeContactForm() {
  const form = document.getElementById('contact-form') as HTMLFormElement;
  
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data for future processing
    // const formData = new FormData(form);
    // const data = Object.fromEntries(formData.entries()); // For future API integration
    
    // Simulate form submission
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you within 24 hours.');
      form.reset();
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }, 2000);
  });
}

function initializeAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.service-card, .portfolio-item, .about-text, .contact-item').forEach(el => {
    observer.observe(el);
  });
}

// Global functions
(window as any).scrollToSection = function(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};
