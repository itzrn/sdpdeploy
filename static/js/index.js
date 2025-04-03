window.onload = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};


const sections = document.querySelectorAll(".sections");
const navEle = document.querySelectorAll(".a-ele");

const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remove 'active' class from all nav links
          navEle.forEach((link) => link.classList.remove("active"));
  
          // Find the matching link and add 'active' class
          const activeLink = document.querySelector(`a[href="#${entry.target.id}"]`);
          if (activeLink) {
            activeLink.classList.add("active");
          }
        }
      });
    },
    { threshold: 0.4 } // Section is considered active when 40% visible
  );
  
  // Observe all sections
  sections.forEach((section) => observer.observe(section));