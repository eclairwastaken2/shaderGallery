#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;


float sdCircle(vec2 p, float r) {
    return length(p) - r;
}

float sdBox(vec2 p, vec2 b) {
    vec2 d = abs(p) - b;
    return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}

float sdRoundedBox(vec2 p, vec2 b, float r) {
    vec2 d = abs(p) - b + r;
    return length(max(d, 0.0)) - r;
}


void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    // move origin to center (-1 to 1)
    vec2 p = (st * 2.0 - 1.0);
    p.x *= u_resolution.x / u_resolution.y;

    vec3 color = vec3(0.0);

    // offset positions 
    vec2 pc = p + vec2(0.7, 0.0);  // circle
    vec2 pb = p;                   // box
    vec2 pr = p - vec2(0.7, 0.0);  // rounded box

    // compute SDF distances
    float dCircle = sdCircle(pc, 0.3);
    float dBox = sdBox(pb, vec2(0.25));
    float dRounded = sdRoundedBox(pr, vec2(0.25), 0.1);

    // visualize shapes (white inside, black outside, smooth edges)
    float c1 = smoothstep(0.005, 0.0, dCircle);
    float c2 = smoothstep(0.005, 0.0, dBox);
    float c3 = smoothstep(0.005, 0.0, dRounded);

    // combine into final color
    color = vec3(c1 + c2 + c3);

    gl_FragColor = vec4(color, 1.0);

}