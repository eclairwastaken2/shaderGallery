#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;


void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
	vec2 bottom_left = step(vec2(0.1), st); 
    vec2 top_right = step(vec2(0.1), 1.0 - st); 
    float combine = bottom_left.x * bottom_left.y * top_right.x * top_right.y;
    
    gl_FragColor = vec4(combine, 1.0, 1.0, 1.0);
    
}