// FAQs page functionality
import './style.css';

const faqsData = [
  {
    question: "Do you provide itemised quotes?",
    answer: "Yes, we provide detailed, itemised quotes showing materials, labour, and timeline for complete transparency. No hidden costs or surprises."
  },
  {
    question: "What are your typical lead times?",
    answer: "Kitchen projects typically take 4-6 weeks from start to finish, while landscaping projects range from 2-4 weeks, depending on scope and weather conditions. We'll give you a clear schedule during consultation."
  },
  {
    question: "Do you handle electrics and gas work?",
    answer: "We coordinate with certified Gas Safe engineers and qualified electricians as part of our full project management service. All work is completed to current regulations with proper certification."
  },
  {
    question: "Do you need planning permission or building control approval?",
    answer: "We advise on planning requirements and can recommend consultants if needed. For drainage and structural work, we ensure compliance with building regulations and coordinate inspections."
  },
  {
    question: "What warranty and aftercare do you provide?",
    answer: "All workmanship comes with a 12-month guarantee. We conduct a final walkthrough with you and address any concerns. Manufacturer warranties apply to supplied products."
  },
  {
    question: "What's your payment schedule?",
    answer: "We typically request a small deposit to secure dates, staged payments during the project, and final balance on completion. No payment in full upfront is ever required."
  },
  {
    question: "Do you remove waste and protect existing areas?",
    answer: "Yes, we arrange waste removal and use protective coverings for floors, furniture and plants. We leave your property clean and tidy each day."
  },
  {
    question: "What areas do you cover?",
    answer: "We serve Greater Manchester, Cheshire and the broader North West region. Contact us to confirm if we cover your postcode area."
  },
  {
    question: "Are you fully insured?",
    answer: "Yes, we carry comprehensive public liability and employer's liability insurance. Certificates are available on request before work begins."
  },
  {
    question: "Can you work around our schedule?",
    answer: "We're flexible where possible and discuss timing during consultation. We understand family life and try to minimise disruption to your daily routine."
  }
];

export function initializeFAQs() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  
  app.innerHTML = `
    <!-- Skip to content link -->
    <a href="#main-content" class="skip-link">Skip to content</a>

    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <a href="/" class="brand">
          <img src="/logo.svg" alt="Eden & Hearth" width="200" height="40" decoding="async">
        </a>
        <div class="nav-menu" id="nav-menu">
          <a href="/" class="nav-link">Home</a>
          <a href="/services" class="nav-link">Services</a>
          <a href="/portfolio" class="nav-link">Portfolio</a>
          <a href="/about" class="nav-link">About</a>
          <a href="/faqs" class="nav-link active">FAQs</a>
          <a href="/contact" class="nav-link">Contact</a>
        </div>
        <div class="nav-toggle" id="nav-toggle">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>

    <!-- Mobile CTA Bar -->
    <div class="mobile-cta-bar">
      <a href="tel:+44-0000-000000" class="mobile-cta mobile-cta--call">
        <i class="fas fa-phone" aria-hidden="true"></i>
        <span>Call Now</span>
      </a>
      <a href="/contact" class="mobile-cta mobile-cta--quote">
        <i class="fas fa-calculator" aria-hidden="true"></i>
        <span>Get Quote</span>
      </a>
    </div>

    <!-- Main Content -->
    <main id="main-content">
      <!-- Header Section -->
      <section class="page-header">
        <div class="container">
          <h1>Frequently Asked Questions</h1>
          <p class="page-subtitle">Common questions about our kitchen and landscaping services</p>
        </div>
      </section>

      <!-- FAQs Section -->
      <section class="faqs-section">
        <div class="container">
          <div class="faqs-list">
            ${faqsData.map((faq, index) => `
              <div class="faq-item">
                <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${index}">
                  <span>${faq.question}</span>
                  <i class="fas fa-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="faq-answer" id="faq-answer-${index}" role="region" aria-labelledby="faq-question-${index}">
                  <div class="faq-answer-content">
                    <p>${faq.answer}</p>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
          
          <div class="faqs-cta">
            <h2>Still have questions?</h2>
            <p>We're here to help with any specific queries about your kitchen or landscaping project.</p>
            <a href="/contact" class="btn btn-primary">Get in touch</a>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <a href="/" class="footer-brand">
              <img src="/logo.svg" alt="Eden & Hearth" width="150" height="30" decoding="async">
            </a>
            <div class="footer-nap">
              <p><strong>Eden & Hearth</strong></p>
              <p>Greater Manchester, Cheshire, North West</p>
              <p><i class="fas fa-phone"></i> <a href="tel:+44-0000-000000">+44 0000 000000</a></p>
              <p><i class="fas fa-envelope"></i> <a href="mailto:help@eden-hearth.co.uk">help@eden-hearth.co.uk</a></p>
            </div>
            <div class="footer-hours">
              <p><strong>Opening Hours</strong></p>
              <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
              <p>Sat: 9:00 AM - 4:00 PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-title">Services</h4>
            <ul class="footer-links">
              <li><a href="/services#kitchens">Kitchen Installation</a></li>
              <li><a href="/services#landscaping">Landscaping</a></li>
              <li><a href="/portfolio">View Our Work</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="footer-title">Company</h4>
            <ul class="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/testimonials">Reviews</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="footer-title">Legal</h4>
            <ul class="footer-links">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/cookies">Cookie Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 Eden & Hearth. All rights reserved.</p>
          <div class="footer-social">
            <!-- Social links will be shown when URLs are provided -->
          </div>
        </div>
      </div>
    </footer>
  `;

  // Initialize FAQ accordions
  initializeFAQAccordions();
  initializeNavigation();
}

function initializeFAQAccordions() {
  const faqButtons = document.querySelectorAll('.faq-question');
  
  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      const answerId = button.getAttribute('aria-controls');
      const answer = document.getElementById(answerId!);
      
      // Close other open FAQs
      faqButtons.forEach(otherButton => {
        if (otherButton !== button) {
          otherButton.setAttribute('aria-expanded', 'false');
          const otherAnswerId = otherButton.getAttribute('aria-controls');
          const otherAnswer = document.getElementById(otherAnswerId!);
          otherAnswer?.classList.remove('open');
        }
      });
      
      // Toggle current FAQ
      if (!isExpanded) {
        button.setAttribute('aria-expanded', 'true');
        answer?.classList.add('open');
      } else {
        button.setAttribute('aria-expanded', 'false');
        answer?.classList.remove('open');
      }
    });
  });
}

function initializeNavigation() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu?.classList.toggle('active');
  });
}

// Initialize the page
initializeFAQs();
