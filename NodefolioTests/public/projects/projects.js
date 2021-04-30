const footerCopyright = document.getElementById("footerAbout");
footerCopyright.innerText = "© Copyright " + new Date().getFullYear();

//fetch("/api/projects").then(res => res.json()).then(console.log());

(async function getProjects() {
  const response = await fetch("/api/projects");
  const result = await response.json();

  const projectsDiv = document.getElementById("projects");

  result.projects.map((project) => {
    const projectDiv = document.createElement("div");

    const projectTitle = document.getElementById("h2");
    projectTitle.classList.add("project-title");
    projectTitle.innerText = project.title;


    const projectDescription = document.getElementById("p");
    projectDescription.classList.add("project-description");
    projectDescription.innerText = project.description;

    projectsDiv.appendChild(projectDiv);
    projectsDiv.appendChild(projectTitle);
  });


})();

console.log("fuck me");
