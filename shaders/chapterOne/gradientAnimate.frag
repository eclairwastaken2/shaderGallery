#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    float pct = abs(sin(u_time));

    gl_FragColor = vec4(pct, st, 1.0);
}