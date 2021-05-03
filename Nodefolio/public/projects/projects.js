// fetch("/api/projects").then(res => res.json()).then(console.log);

(async function getProjects() {
  const fetchInfo = await fetch("/api/projects");
  const data = await fetchInfo.json();

  const divOfProjects = document.getElementById("projects");

  data.projects.map((project) => {
    // Create the div
    const projectDiv = document.createElement("div");

    // Create the title header and insert it from list
    const projectTitle = document.createElement("h2");
    projectTitle.classList.add("project-title");
    projectTitle.innerText = project.title;

    // Create the description paragraph and populate it from list
    const projectDesc = document.createElement("p");
    projectDesc.classList.add("project-description");
    projectDesc.innerText = project.description;

    
    // Create a list and populate it with technologies
    const projectTech = document.createElement("p");
    projectTech.classList.add("project-technologies");
    projectTech.innerText = "Technologies used:";

    // Take all the elements of the list and place them into a list
    let listOfTechs = [];
    listOfTechs =  project.technologies.map(tech => {
        const projectTechnologies = document.createElement("span");
        projectTechnologies.classList.add("technology");
        console.log(tech);
        projectTechnologies.innerText = tech;
        return projectTechnologies;
    })

    // Append the list elements one at a time to project tech
    for(i = 0 ; i < listOfTechs.length; i++)
    {
        projectTech.appendChild(listOfTechs[i]);
    }

    
    // GitHub line Prefix
    const gitPrefix = document.createElement("span");
    gitPrefix.innerText = "GitHub link: ";
    // GitHub line URL
    const gitUrl = document.createElement("a");
    gitUrl.classList.add("url-link");
    gitUrl.href = project.gitURL;
    gitUrl.innerText = project.gitURL;

    const separator = document.createElement("hr");

    

    // Append all the elements to the main div
    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(projectDesc);
    projectDiv.appendChild(projectTech);

    // GitHub line
    projectDiv.appendChild(gitPrefix);
    projectDiv.appendChild(gitUrl);
    projectDiv.appendChild(separator);
    // Append main div to the div in the HTML
    divOfProjects.appendChild(projectDiv);
  });
})();
