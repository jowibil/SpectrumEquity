// Enhanced Carousel and Navigation functionality
document.addEventListener("DOMContentLoaded", function () {
  // Carousel functionality
  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-slide");

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Auto-advance carousel
  setInterval(nextSlide, 3000);

  // Mobile Navigation Toggle
  const hamburger = document.createElement("div");
  hamburger.className = "hamburger";

  // Create hamburger icon
  for (let i = 0; i < 3; i++) {
    const span = document.createElement("span");
    hamburger.appendChild(span);
  }

  // Insert hamburger menu into the navbar
  const navbar = document.querySelector(".navbar");
  navbar.appendChild(hamburger);

  // Toggle navigation menu
  hamburger.addEventListener("click", function () {
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.toggle("active");

    // Toggle X icon for hamburger
    const spans = this.querySelectorAll("span");
    this.classList.toggle("open");

    if (this.classList.contains("open")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
    } else {
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }
  });

  // Handle dropdown menus on mobile
  const dropdownItems = document.querySelectorAll(".dropdown");

  dropdownItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      // Check if we're in mobile view
      if (window.innerWidth < 768) {
        const dropdownContent = this.querySelector(".dropdown-content");

        // Toggle only the clicked dropdown
        if (e.target.classList.contains("nav-link")) {
          e.preventDefault();
          dropdownContent.style.display =
            dropdownContent.style.display === "block" ? "none" : "block";
        }
      }
    });
  });

  // Reset dropdown display on window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      document.querySelectorAll(".dropdown-content").forEach((dropdown) => {
        dropdown.style.display = "";
      });
      document.querySelector(".nav-menu").classList.remove("active");
    }
  });

  // Tab functionality (for both About Us and Issues sections)
  const issueTabs = document.querySelectorAll(".issue-tab");

  issueTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const parentContainer = this.closest(".issues-container");
      const sectionTabs = parentContainer.querySelectorAll(".issue-tab");
      const sectionContents =
        parentContainer.querySelectorAll(".issue-content");

      const tabId = this.getAttribute("data-tab");
      const contentElement = document.getElementById(tabId);

      const isActive = this.classList.contains("active");

      // Deactivate all tabs and contents in this section
      sectionTabs.forEach((t) => t.classList.remove("active"));
      sectionContents.forEach((c) => c.classList.remove("active"));

      // If it wasn't active before, activate it
      if (!isActive) {
        this.classList.add("active");
        contentElement.classList.add("active");
      }
    });
  });
});

document.querySelectorAll(".open-modal").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("modal").style.display = "flex";
  });
});

document.getElementById("modal-close-btn").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

window.addEventListener("click", (e) => {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const images = document.querySelectorAll('img[loading="lazy"]');
images.forEach((image) => {
  image.addEventListener("load", () => {
    image.classList.add("loaded");
  });
});


