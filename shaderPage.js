import * as THREE from 'https://unpkg.com/three@0.152.2/build/three.module.js';
import { CHAPTERS } from './shaderData.js';


const params = new URLSearchParams(window.location.search);
const chapterId = params.get('chapter');
const shaderId = params.get('shader');


const chapter = CHAPTERS.find(c => c.id === chapterId) || CHAPTERS[0];
const shaderMeta = (chapter.shaders || []).find(s => s.id === shaderId) || chapter.shaders[0];


// DOM hooks
const titleEl = document.getElementById('shaderTitle');
const descEl = document.getElementById('shaderDesc');
const codeEl = document.getElementById('codeBlock');
const backLink = document.getElementById('backToChapter');
const timeScaleInput = document.getElementById('timeScale');


backLink.href = `/chapter.html?chapter=${chapter.id}`;


titleEl.textContent = shaderMeta.title;
descEl.textContent = shaderMeta.description || '';


fetch(shaderMeta.fragPath).then(r => r.text()).then(frag => {
    codeEl.textContent = frag;
    initThree(frag);
});


function initThree(fragmentShader) {
    const canvas = document.getElementById('webgl');
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio || 1);

    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms = {
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2() },
        u_mouse: { value: new THREE.Vector2(-10, -10) },
        u_timeScale: { value: parseFloat(timeScaleInput.value) }
    };

    const material = new THREE.ShaderMaterial({
        fragmentShader,
        vertexShader: `
            void main() {
                gl_Position = vec4(position, 1.0);
            }
        `,
        uniforms
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    function resize() {
        const w = canvas.clientWidth || window.innerWidth;
        const h = canvas.clientHeight || window.innerHeight;

        const dpr = window.devicePixelRatio || 1;
        renderer.setPixelRatio(dpr);
        renderer.setSize(w, h, false); 

        uniforms.u_resolution.value.set(w * dpr, h * dpr);
    }
    resize();
    window.addEventListener('resize', resize);

    //MOUSE SUPPORT (fixed)
    window.addEventListener('mousemove', e => {
        const rect = canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;

        const px = (e.clientX - rect.left) * dpr;
        const py = (rect.bottom - e.clientY) * dpr; // flipped Y to match gl_FragCoord origin

        uniforms.u_mouse.value.set(px, py);
    });

    //TIME SCALE SLIDER
    timeScaleInput.addEventListener('input', () => {
        uniforms.u_timeScale.value = parseFloat(timeScaleInput.value);
    });

    //ANIMATION LOOP 
    const clock = new THREE.Clock();
    function animate() {
        requestAnimationFrame(animate);
        uniforms.u_time.value += clock.getDelta() * uniforms.u_timeScale.value;
        renderer.render(scene, camera);
    }

    animate();
}