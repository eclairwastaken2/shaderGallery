#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float sdRoundedBox(vec2 p, vec2 b, float r) {
    vec2 d = abs(p) - b + r;
    return length(max(d, 0.0)) - r;
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    vec2 p = (st * 2.0 - 1.0);
    p.x *= u_resolution.x / u_resolution.y;

    vec3 color = vec3(0.0);

    float dRounded = sdRoundedBox(p, vec2(0.25), 0.1);
	float c = 0.0;
    if (dRounded < 0.0) {
        c = 1.0;
    }
    color = clamp(vec3(c), 0.0, 1.0);

    gl_FragColor = vec4(color, 1.0);
}