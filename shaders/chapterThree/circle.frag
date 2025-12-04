#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;


void main() {
	vec2 uv = gl_FragCoord.xy / u_resolution;
	uv.x *= u_resolution.x / u_resolution.y;

	vec2 center = vec2(0.5 * (u_resolution.x / u_resolution.y), 0.5);
	float radius = 0.25;

	vec2 p = uv - center;

	float d2 = dot(p, p);
	float r2 = radius * radius;

	float circle = step(d2, r2);

	gl_FragColor = vec4(vec3(circle), 1.0);
}