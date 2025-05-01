// Project data array - to be used for modal content
const projectsData = [
  {
    title: 'Real-Time Analytics Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    tags: ['Data Visualization', 'Real-time', 'Dashboard'],
    description: 'A real-time analytics dashboard that visualizes data from multiple sources. The dashboard provides actionable insights for business stakeholders through interactive charts and filters.',
    challenges: 'One of the main challenges was handling large volumes of real-time data without affecting performance. I implemented efficient data processing algorithms and leveraged WebSockets for instant updates without overwhelming the client browser.',
    technologies: ['Node.js', 'D3.js', 'Socket.io', 'Express', 'MongoDB', 'Redis'],
    liveLink: 'https://example.com/dashboard',
    codeLink: 'https://github.com/username/dashboard'
  },
  {
    title: 'BioDiscovery AI Platform',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    tags: ['Bioinformatics', 'AI/ML', 'Drug Design'],
    description: 'An advanced platform used by bioinformaticians to accelerate drug discovery and design by analyzing targeted genes. The system leverages AI to identify potential drug candidates and predict their efficacy through simulation.',
    challenges: 'Processing massive genomic datasets required sophisticated knowledge representation. I implemented a knowledge graph with vector density search to quickly identify relevant gene interactions and potential drug pathways.',
    technologies: ['React', 'Vite', 'LLM & RAG', 'Langchain', 'Knowledge Graph', 'Vector Density Search'],
    liveLink: 'https://example.com/biodiscovery',
    codeLink: 'https://github.com/username/bio-discovery'
  },
  {
    title: 'Financial Data Visualization',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74',
    tags: ['Finance', 'Data Analysis', 'TypeScript'],
    description: 'An interactive tool for financial data analysis with advanced visualization capabilities. Users can explore market trends, perform comparative analysis, and 4generate custom reports.',
    challenges: 'Working with large financial datasets while maintaining application performance required optimization. I implemented data preprocessing on the server-side and lazy loading of visualization components to ensure smooth user experience even with complex datasets.',
    technologies: ['TypeScript', 'Chart.js', 'GraphQL', 'React', 'Node.js', 'PostgreSQL'],
    liveLink: 'https://example.com/finviz',
    codeLink: 'https://github.com/username/financial-viz'
  },
  {
    title: 'API Gateway Solution',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
    tags: ['Microservices', 'API', 'DevOps'],
    description: 'A robust API gateway that handles routing, authentication, and rate limiting for microservices architecture. The solution includes monitoring, logging, and analytics capabilities.',
    challenges: 'Ensuring high availability and fault tolerance while maintaining low latency was crucial. I implemented circuit breakers, request caching, and load balancing strategies to create a resilient system that can handle traffic spikes.',
    technologies: ['Node.js', 'Express', 'Redis', 'Docker', 'Kubernetes', 'Prometheus'],
    liveLink: 'https://example.com/api-gateway',
    codeLink: 'https://github.com/username/api-gateway'
  }
];

// Initialize AOS animation library
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS with custom settings
  AOS.init({
    duration: 800,
    offset: 100,
    easing: 'ease-in-out',
    once: true
  });

  // Mobile Menu Toggle Functionality
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuOverlay = document.querySelector('.menu-overlay');
  const body = document.body;

  // Function to toggle menu state
  function toggleMenu() {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    body.classList.toggle('menu-open');
    console.log('Menu toggled, state:', !isExpanded);
  }
  
  // Project Modal Functionality
  const projectModal = document.getElementById('project-modal');
  const modalClose = document.querySelector('.project-modal__close');
  
  // Выведем в консоль для отладки
  console.log('Looking for project cards...');
  const projectCards = document.querySelectorAll('.project-card');
  console.log('Found project cards:', projectCards.length);
  
  // Function to open modal with project data
  function openProjectModal(projectIndex) {
    console.log('Opening modal for project index:', projectIndex);
    const project = projectsData[projectIndex];
    console.log('Project data:', project);
    
    // Set modal content
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-image').src = project.image;
    document.getElementById('modal-description').textContent = project.description;
    document.getElementById('modal-challenges').textContent = project.challenges;
    document.getElementById('modal-live-link').href = project.liveLink;
    document.getElementById('modal-code-link').href = project.codeLink;
    
    // Clear and populate tags
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = '';
    project.tags.forEach(tag => {
      const tagEl = document.createElement('span');
      tagEl.className = 'tag';
      tagEl.textContent = tag;
      tagsContainer.appendChild(tagEl);
    });
    
    // Clear and populate tech list
    const techList = document.getElementById('modal-tech-list');
    techList.innerHTML = '';
    project.technologies.forEach(tech => {
      const techItem = document.createElement('li');
      techItem.textContent = tech;
      techList.appendChild(techItem);
    });
    
    // Show modal
    projectModal.classList.add('show');
    document.body.classList.add('modal-open');
    console.log('Modal should be visible now. Classes:', projectModal.className);
  }
  
  // Function to close modal
  function closeProjectModal() {
    projectModal.classList.remove('show');
    document.body.classList.remove('modal-open');
  }
  
  // Add click event to project cards
  projectCards.forEach((card, index) => {
    card.addEventListener('click', () => openProjectModal(index));
  });
  
  // Close modal when clicking close button
  modalClose.addEventListener('click', closeProjectModal);
  
  // Close modal when clicking outside modal content
  projectModal.addEventListener('click', function(event) {
    if (event.target === projectModal) {
      closeProjectModal();
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && projectModal.classList.contains('show')) {
      closeProjectModal();
    }
  });
  
  // Toggle menu on hamburger click
  menuToggle.addEventListener('click', toggleMenu);

  // Close menu when clicking on the overlay
  menuOverlay.addEventListener('click', toggleMenu);

  // Close menu when clicking on a menu item
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  // Smooth scroll for navigation links
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Get header height to offset scroll position
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Sticky header with transparent background on scroll
  const header = document.querySelector('.header');
  let lastScrollPosition = 0;
  
  function handleScroll() {
    const currentScrollPosition = window.scrollY;
    
    // Add 'scrolled' class when page is scrolled
    if (currentScrollPosition > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Hide/show header on scroll direction
    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 200) {
      header.classList.add('header-hidden');
    } else {
      header.classList.remove('header-hidden');
    }
    
    lastScrollPosition = currentScrollPosition;
  }
  
  window.addEventListener('scroll', handleScroll);
  
  // Project cards hover effect enhancement
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.classList.add('hovered');
    });
    
    card.addEventListener('mouseleave', function() {
      this.classList.remove('hovered');
    });
  });
  
  // Lazy loading for images using Intersection Observer
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.src; // Trigger load
          observer.unobserve(image);
        }
      });
    });
    
    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  }
});
