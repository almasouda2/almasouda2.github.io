document.addEventListener('DOMContentLoaded', () => {
    // Dynamic project list
    const projects = [
        { title: 'Project One', description: 'Description for project one.' },
        { title: 'Project Two', description: 'Description for project two.' },
        { title: 'Project Three', description: 'Description for project three.' },
    ];

    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectList.appendChild(projectItem);
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset();
    });
});
