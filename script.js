const websites = [
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com",
    description: "Q&A site for developers."
  },
  {
    name: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    description: "Official documentation for web technologies."
  },
  {
    name: "FreeCodeCamp",
    url: "https://www.freecodecamp.org",
    description: "Free coding lessons and certifications."
  },
  {
    name: "GitHub",
    url: "https://github.com",
    description: "Host and collaborate on code repositories."
  },
  {
    name: "W3Schools",
    url: "https://www.w3schools.com",
    description: "Simple tutorials on web development."
  },
  {
    name: "CSS-Tricks",
    url: "https://css-tricks.com",
    description: "Tips and tricks for CSS and web design."
  },
  {
    name: "DevDocs",
    url: "https://devdocs.io",
    description: "Fast documentation for every API and language."
  },
  {
    name: "CodePen",
    url: "https://codepen.io",
    description: "Frontend playground for HTML, CSS, and JS."
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org",
    description: "Coding tutorials, problems, and interview prep."
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com",
    description: "Practice coding problems and prepare for interviews."
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com",
    description: "Solve coding challenges in many domains."
  },
  {
    name: "Codecademy",
    url: "https://www.codecademy.com",
    description: "Interactive platform to learn to code."
  },
  {
    name: "Coursera",
    url: "https://www.coursera.org",
    description: "Online courses from top universities and companies."
  },
  {
    name: "edX",
    url: "https://www.edx.org",
    description: "Learn online from universities like Harvard and MIT."
  },
  {
    name: "Frontend Mentor",
    url: "https://www.frontendmentor.io",
    description: "Frontend practice projects with real-world designs."
  },
  {
    name: "JavaScript.info",
    url: "https://javascript.info",
    description: "Modern JavaScript tutorial for beginners and pros."
  },
  {
    name: "The Odin Project",
    url: "https://www.theodinproject.com",
    description: "Free full-stack web development curriculum."
  },
  {
    name: "Scrimba",
    url: "https://scrimba.com",
    description: "Interactive screencast-based coding tutorials."
  },
  {
    name: "Can I use",
    url: "https://caniuse.com",
    description: "Check browser support for HTML, CSS, and JS features."
  },
  {
    name: "DigitalOcean Tutorials",
    url: "https://www.digitalocean.com/community/tutorials",
    description: "Great tutorials for web and cloud development."
  },
  {
    name: "Hashnode",
    url: "https://hashnode.com",
    description: "Developer blogging platform with community features."
  },
  {
    name: "Smashing Magazine",
    url: "https://www.smashingmagazine.com",
    description: "Articles and tutorials on web design and UX/UI."
  },
  {
    name: "Codewars",
    url: "https://www.codewars.com",
    description: "Improve coding skills by solving kata challenges."
  },
  {
    name: "Dev.to",
    url: "https://dev.to",
    description: "A community of developers sharing articles and tips."
  },
  {
    name: "Product Hunt",
    url: "https://www.producthunt.com",
    description: "Discover new tools and products for developers."
  },
  {
    name: "Real Python",
    url: "https://realpython.com",
    description: "In-depth Python tutorials and articles."
  },
  {
    name: "TutorialsPoint",
    url: "https://www.tutorialspoint.com",
    description: "Easy-to-follow tutorials on many tech topics."
  },
  {
    name: "Google Developers",
    url: "https://developers.google.com",
    description: "Official guides and tools from Google Developers."
  }
];


const siteList = document.getElementById('siteList');
const searchInput = document.getElementById('searchInput');

function displaySites(filter = "") {
  siteList.innerHTML = "";
  const filtered = websites.filter(site => 
    site.name.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach(site => {
    const card = document.createElement("div");
    card.className = "site-card";

    card.innerHTML = `
      <h3><a href="${site.url}" target="_blank">${site.name}</a></h3>
      <p>${site.description}</p>
    `;

    siteList.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  displaySites(searchInput.value);
});

displaySites(); // Show all on load
