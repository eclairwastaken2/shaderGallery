#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float smoothWave(float x) {
    x = fract(x);
    return smoothstep(0.0, 0.5, x) - smoothstep(0.5, 1.0, x);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    float x = st.x * 3.0 + u_time * 0.5;

    float fade = 1.0 - st.x;     // fade to the right

    float y = smoothWave(x) * fade * 0.25 + 0.4;

    float d = abs(st.y - y);
    float line = 1.0 - smoothstep(0.0, 0.01, d);

    vec3 col = mix(vec3(0.05,0.1,0.2), vec3(0.2,0.7,1.0), line * fade);

    gl_FragColor = vec4(col,1.0);
}