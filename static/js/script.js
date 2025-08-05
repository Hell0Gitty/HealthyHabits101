// Healthy Habits 101 - Interactive Features

// Daily tips data
const dailyTips = [
    {
        text: "Drink a glass of water as soon as you wake up to kickstart your metabolism and rehydrate your body after hours of sleep.",
        category: "Hydration"
    },
    {
        text: "Set a consistent bedtime and wake-up time, even on weekends, to regulate your body's internal clock.",
        category: "Sleep"
    },
    {
        text: "Take a 5-minute stretch break every hour if you work at a desk to prevent muscle stiffness and improve circulation.",
        category: "Stretching"
    },
    {
        text: "Start with just 10 minutes of exercise daily. Consistency is more important than intensity when building a new habit.",
        category: "Exercise"
    },
    {
        text: "Create a bedtime routine that signals to your body it's time to wind down, such as reading or gentle stretching.",
        category: "Sleep"
    },
    {
        text: "Keep a water bottle visible on your desk as a visual reminder to stay hydrated throughout the day.",
        category: "Hydration"
    },
    {
        text: "Try the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds to rest your eyes.",
        category: "General Health"
    },
    {
        text: "Include protein in your breakfast to help maintain steady energy levels throughout the morning.",
        category: "Nutrition"
    },
    {
        text: "Practice deep breathing for 2-3 minutes when you feel stressed. It activates your body's relaxation response.",
        category: "Mental Health"
    },
    {
        text: "Take the stairs instead of the elevator when possible - it's a simple way to add movement to your day.",
        category: "Exercise"
    },
    {
        text: "Stretch your neck and shoulders by gently rolling them backwards 5 times, then forwards 5 times.",
        category: "Stretching"
    },
    {
        text: "Avoid large meals 2-3 hours before bedtime to prevent indigestion from interfering with your sleep.",
        category: "Sleep"
    },
    {
        text: "Add lemon or cucumber to your water for flavor if you struggle to drink enough plain water.",
        category: "Hydration"
    },
    {
        text: "Use the buddy system - find a workout partner or accountability friend to help you stay motivated.",
        category: "Exercise"
    },
    {
        text: "Practice gratitude by writing down three things you're thankful for each day before bed.",
        category: "Mental Health"
    },
    {
        text: "Do a gentle cat-cow stretch in the morning to wake up your spine and improve flexibility.",
        category: "Stretching"
    },
    {
        text: "Keep your bedroom temperature between 60-67°F (15-19°C) for optimal sleep quality.",
        category: "Sleep"
    },
    {
        text: "Eat water-rich foods like watermelon, cucumber, and oranges to boost your daily fluid intake.",
        category: "Hydration"
    },
    {
        text: "Park farther away from store entrances to naturally increase your daily step count.",
        category: "Exercise"
    },
    {
        text: "Set hourly reminders on your phone to stand up and move for at least 2 minutes if you have a sedentary job.",
        category: "Movement"
    }
];

// Current tip index
let currentTipIndex = 0;

// DOM elements
const tipText = document.getElementById('tip-text');
const tipCategory = document.getElementById('tip-category');
const nextTipBtn = document.getElementById('next-tip-btn');

// Initialize daily tip
function initializeDailyTip() {
    // Get today's date and use it to determine which tip to show
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    currentTipIndex = dayOfYear % dailyTips.length;
    
    displayTip();
}

// Display current tip
function displayTip() {
    const tip = dailyTips[currentTipIndex];
    
    // Fade out current tip
    tipText.style.opacity = '0';
    tipCategory.style.opacity = '0';
    
    setTimeout(() => {
        tipText.textContent = tip.text;
        tipCategory.textContent = `Category: ${tip.category}`;
        
        // Fade in new tip
        tipText.style.opacity = '1';
        tipCategory.style.opacity = '1';
    }, 200);
}

// Get next tip
function getNextTip() {
    currentTipIndex = (currentTipIndex + 1) % dailyTips.length;
    displayTip();
    
    // Add button animation
    nextTipBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Loading...';
    setTimeout(() => {
        nextTipBtn.innerHTML = '<i class="fas fa-sync-alt me-2"></i>Get Another Tip';
    }, 500);
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse.classList.contains('show')) {
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    navbarToggler.click();
                }
            }
        });
    });
}

// Update active navigation link based on scroll position
function initializeActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    function updateActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Run once on load
}

// Add loading animation to cards
function initializeCardAnimations() {
    const cards = document.querySelectorAll('.card');
    
    // Intersection Observer for fade-in animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeDailyTip();
    initializeSmoothScrolling();
    initializeActiveNavigation();
    initializeCardAnimations();
    
    // Add event listener for next tip button
    nextTipBtn.addEventListener('click', getNextTip);
    
    // Add smooth transitions to tip text
    tipText.style.transition = 'opacity 0.3s ease';
    tipCategory.style.transition = 'opacity 0.3s ease';
    
    console.log('Healthy Habits 101 - All features initialized successfully!');
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Press 'T' to get a new tip
    if (e.key.toLowerCase() === 't' && !e.ctrlKey && !e.altKey && !e.metaKey) {
        const activeElement = document.activeElement;
        if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
            getNextTip();
        }
    }
});

// Add scroll-to-top functionality
function addScrollToTop() {
    let scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'btn btn-primary position-fixed';
    scrollToTopBtn.style.bottom = '20px';
    scrollToTopBtn.style.right = '20px';
    scrollToTopBtn.style.zIndex = '1000';
    scrollToTopBtn.style.borderRadius = '50%';
    scrollToTopBtn.style.width = '50px';
    scrollToTopBtn.style.height = '50px';
    scrollToTopBtn.style.display = 'none';
    scrollToTopBtn.title = 'Back to top';
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll-to-top after DOM is loaded
document.addEventListener('DOMContentLoaded', addScrollToTop);
