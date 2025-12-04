#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float plot(vec2 st, float y) {
    float d = abs(st.y - y); // Find out how far the pixel is from the curve
    float thickness = 0.01;  // Choose how thick the line should be
    return 1.0 - smoothstep(0.0, thickness, d); // Convert that distance into a smooth line
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    float y = smoothstep(0.1, 0.7, st.x);

    float pct = plot(st, y);

    gl_FragColor = vec4(pct, 0.0, 0.0, 1.0);
}