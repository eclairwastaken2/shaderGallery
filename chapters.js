import { CHAPTERS } from './shaderData.js';


const grid = document.getElementById('chaptersGrid');


CHAPTERS.forEach(ch => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
<img src="${ch.thumbnail}" alt="${ch.title} thumbnail" onerror="this.style.opacity=0.25">
<h3>${ch.title}</h3>
<p style="color:var(--muted);font-size:0.9rem">${ch.description || ''}</p>
`;
    card.addEventListener('click', () => {
        window.location.href = `/chapter.html?chapter=${ch.id}`;
    });
    grid.appendChild(card);
});