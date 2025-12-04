#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec2 center = vec2(0.5);
    float d = length(st - center);
    gl_FragColor = vec4(vec3(d), 1.0);
}