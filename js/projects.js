const projectCategories = [
    { id: 'all', label: 'Alles' },
    { id: 'websites', label: 'Websites' },
    { id: 'tools', label: 'Tools' },
    { id: 'school', label: 'Schoolopdrachten' }
];

const projects = [
    {
        id: '1',
        title: 'Project 1',
        category: 'websites',
        summary: 'Beschrijving van het project.',
        description: [
            'Hier staat de uitgebreide beschrijving: wat het probleem was, wat je hebt gemaakt en hoe je het hebt aangepakt.',
            'Deze tweede alinea kan bijvoorbeeld vertellen wat je eruit hebt geleerd of welke keuzes je hebt gemaakt.'
        ],
        role: 'Front-end',
        stack: ['HTML', 'CSS', 'JavaScript'],
        year: '2026',
        liveUrl: '',
        repoUrl: ''
    },
    {
        id: '2',
        title: 'Project 2',
        category: 'tools',
        summary: 'Beschrijving van het project.',
        description: [
            'Hier staat de uitgebreide beschrijving: wat het probleem was, wat je hebt gemaakt en hoe je het hebt aangepakt.',
            'Deze tweede alinea kan bijvoorbeeld vertellen wat je eruit hebt geleerd of welke keuzes je hebt gemaakt.'
        ],
        role: 'Front-end',
        stack: ['HTML', 'CSS'],
        year: '2026',
        liveUrl: '',
        repoUrl: ''
    },
    {
        id: '3',
        title: 'Project 3',
        category: 'school',
        summary: 'Beschrijving van het project.',
        description: [
            'Hier staat de uitgebreide beschrijving: wat het probleem was, wat je hebt gemaakt en hoe je het hebt aangepakt.',
            'Deze tweede alinea kan bijvoorbeeld vertellen wat je eruit hebt geleerd of welke keuzes je hebt gemaakt.'
        ],
        role: 'Front-end',
        stack: ['HTML', 'CSS', 'JavaScript'],
        year: '2026',
        liveUrl: '',
        repoUrl: ''
    }
];

const getProject = (id) => projects.find((project) => project.id === id);

const getCategoryLabel = (id) => {
    const category = projectCategories.find((item) => item.id === id);
    return category ? category.label : '';
};