const detail = document.getElementById('project-detail');
const notFound = document.getElementById('detail-not-found');
const requestedId = new URLSearchParams(window.location.search).get('id');
const project = getProject(requestedId);

if (project && detail) {
    detail.querySelector('.detail-meta .chip').textContent = getCategoryLabel(project.category);
    detail.querySelector('.detail-year').textContent = project.year;
    detail.querySelector('.detail-title').textContent = project.title;
    detail.querySelector('.detail-summary').textContent = project.summary;
    detail.querySelector('.detail-role').textContent = project.role;

    const stack = detail.querySelector('.detail-stack');
    project.stack.forEach((tech) => {
        const chip = document.createElement('li');
        chip.className = 'chip';
        chip.textContent = tech;
        stack.appendChild(chip);
    });

    const body = detail.querySelector('.detail-body');
    project.description.forEach((paragraph) => {
        const element = document.createElement('p');
        element.textContent = paragraph;
        body.appendChild(element);
    });

    detail.querySelector('[data-link="live"]').hidden = !project.liveUrl;
    if (project.liveUrl) {
        detail.querySelector('[data-link="live"]').href = project.liveUrl;
    }

    detail.querySelector('[data-link="repo"]').hidden = !project.repoUrl;
    if (project.repoUrl) {
        detail.querySelector('[data-link="repo"]').href = project.repoUrl;
    }

    detail.hidden = false;

    const currentIndex = projects.indexOf(project);
    const previous = projects[currentIndex - 1];
    const next = projects[currentIndex + 1];

    const pagerPrev = document.getElementById('pager-prev');
    const pagerNext = document.getElementById('pager-next');

    if (previous) {
        pagerPrev.href = `project.html?id=${previous.id}`;
        pagerPrev.querySelector('strong').textContent = previous.title;
        pagerPrev.hidden = false;
    }

    if (next) {
        pagerNext.href = `project.html?id=${next.id}`;
        pagerNext.querySelector('strong').textContent = next.title;
        pagerNext.hidden = false;
    }
} else if (notFound) {
    notFound.hidden = false;
}