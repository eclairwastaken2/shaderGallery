import { CHAPTERS } from './shaderData.js';
const params = new URLSearchParams(window.location.search);
const chapterId = params.get('chapter');
const chapter = CHAPTERS.find(c => c.id === chapterId) || CHAPTERS[0];
document.getElementById('chapterTitle').textContent = chapter.title;

const grid = document.getElementById('shadersGrid');
chapter.shaders.forEach(s => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
<img src="${s.thumbnail}" alt="${s.title}" onerror="this.style.opacity=0.25">
<h3>${s.title}</h3>
<p style="color:var(--muted);font-size:0.9rem">${s.description || ''}</p>
`;
    card.addEventListener('click', () => {
        window.location.href = `/shader.html?chapter=${chapter.id}&shader=${s.id}`;
    });
    grid.appendChild(card);
});