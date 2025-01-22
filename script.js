document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navList = document.querySelector(".nav-list");
  const navbar = document.querySelector(".main-navbar");
  const navLinks = document.querySelectorAll(".nav-list li a");
  const chatbotToggle = document.getElementById("chatbot-toggle");
  const chatbotWindow = document.getElementById("chatbot-window");
  const closeChatbot = document.getElementById("close-chatbot");
  const chatbotInput = document.getElementById("chatbot-input");
  const chatbotMessages = document.getElementById("chatbot-messages");
  const chatbotForm = document.getElementById("chatbot-form");
  const viewAllBtn = document.getElementById("view-all-btn");
  const previousBtn = document.getElementById("previous-btn");
  const hiddenCourses = document.querySelectorAll(".hidden");

  // --- Mobile Navigation Toggle ---
  menuBtn.addEventListener("click", () => {
    const isActive = menuBtn.classList.toggle("active");
    navList.classList.toggle("open");
    menuBtn.innerHTML = isActive
      ? '<i class="fa-solid fa-times"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  // Close menu when a navigation link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("open");
      menuBtn.classList.remove("active");
      menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });

  // Navbar background change on scroll
  window.addEventListener("scroll", () => {
    navbar.style.backgroundColor =
      window.scrollY > 50 ? "rgb(225, 232, 231)" : "var(--primary-clr)";
  });

  // --- Chatbot Toggle ---
  chatbotToggle.addEventListener("click", () => {
    chatbotWindow.classList.toggle("hidden");
  });

  // Close chatbot when "X" is clicked
  closeChatbot.addEventListener("click", () => {
    chatbotInput.value = ""; // Clear the input field
    chatbotWindow.classList.add("hidden"); // Hide the chatbot window
  });

  // Send message to AI and display response
  chatbotForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const userMessage = chatbotInput.value;
    chatbotInput.value = ""; // Clear the input field

    // Display user message
    const userBubble = document.createElement("div");
    userBubble.textContent = userMessage;
    userBubble.style.textAlign = "right";
    chatbotMessages.appendChild(userBubble);

    // Call AI API for response
    const response = await fetch("https://api.example.com/chatbot", {
      method: "POST",
      body: JSON.stringify({
        message: userMessage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    // Display AI response
    const aiBubble = document.createElement("div");
    aiBubble.textContent = data.reply;
    chatbotMessages.appendChild(aiBubble);

    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  });

  // --- Course Visibility (View All/Previous) ---
  viewAllBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    hiddenCourses.forEach((course) => {
      course.classList.remove("hidden");
      course.style.display = "block";
    });
    viewAllBtn.style.display = "none";
    previousBtn.style.display = "inline-block";
  });

  // Re-hide courses when "Previous" is clicked
  previousBtn.addEventListener("click", () => {
    hiddenCourses.forEach((course) => {
      course.classList.add("hidden");
      course.style.display = "none";
    });
    viewAllBtn.style.display = "inline-block";
    previousBtn.style.display = "none";
  });

  // --- Smooth Scroll for Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
});

// --- Owl Carousel for Partners Slider ---
$(".partners-slider").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const servicesContainer = document.querySelector(".service-items");

  const services = [
      { icon: "fa-shield-alt", title: "Enhanced Security", description: "Your data is safe with us." },
      { icon: "fa-cloud", title: "Cloud-Based Access", description: "Access learning materials anywhere." },
      { icon: "fa-people-group", title: "Community Support", description: "Join a community of learners." },
  ];

  services.forEach(service => {
      const serviceItem = document.createElement("div");
      serviceItem.classList.add("service-item");
      serviceItem.innerHTML = `
          <i class="fa-solid ${service.icon}"></i>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
      `;
      servicesContainer.appendChild(serviceItem);
  });
});

document.querySelector(".search-bar-container form").addEventListener("submit", (e) => {
  e.preventDefault();
  const query = document.getElementById("search").value.trim();
  if (query) {
      window.location.href = `/search?q=${encodeURIComponent(query)}`;
  } else {
      alert("Please enter a search term.");
  }
});

let lastScrollY = window.scrollY;
const navbar = document.querySelector(".main-navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down: hide the navbar
        navbar.style.top = "-80px"; // Adjust the value based on your navbar's height
    } else {
        // Scrolling up: show the navbar
        navbar.style.top = "0";
    }
    lastScrollY = window.scrollY; // Update the last scroll position
});


function enrollMessage() {
  alert("Thank you for enrolling! We will contact you soon.");
}

function learnMoreMessage() {
  alert("Learn more about this course. Details will appear soon!");
}

function shareMessage() {
  alert("Spread the word! Share this course with your friends now!");
}

function wishlistMessage() {
  alert("This course is now on your wishlist. Don’t forget to enroll!");
}



