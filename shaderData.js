export const CHAPTERS = [
    {
        id: 'hello_world', 
        title: 'Hello World!', 
        description: 'GLSL basics and core concepts', 
        thumbnail: "/public/thumbnails/chapterOne/ChapterHeader.png",
        shaders: [
            {
                id: 'solid_color', 
                title: 'Sample solid color', 
                description: 'Start your shader journey here',
                fragPath: '/shaders/chapterOne/solidColor.frag',
                thumbnail: '/public/thumbnails/chapterOne/solidColor.png'
            }, 
            { 
                id: 'gradient_color', 
                title: 'Sample gradient color', 
                description: 'Using the normalized gl_FragCoord for our shader.', 
                fragPath: '/shaders/chapterOne/gradientColor.frag',
                thumbnail: '/public/thumbnails/chapterOne/horizontalGradient.png'
            }, 
            { 
                id: 'gradient_xy_color', 
                title: 'x and y gradient color', 
                description: 'x and y version of our gradient.', 
                fragPath: '/shaders/chapterOne/xyGradientColor.frag',
                thumbnail: '/public/thumbnails/chapterOne/xyGradient.png'
            }, 
            { 
                id: 'gradient_animation_color', 
                title: 'simple gradient animation', 
                description: 'Intro to animation with a very simple demo.', 
                fragPath: '/shaders/chapterOne/gradientAnimate.frag',
                thumbnail: '/public/thumbnails/chapterOne/gradientAnimation.png'
            }
        ]
    }, 
    {
        id: 'functions', 
        title: 'Sketching Functions', 
        description: 'How to sketch functions and useful builtin functions', 
        thumbnail: '/public/thumbnails/chapterTwo/chapterHeader.png', 
        shaders: [
            {
                id: 'step', 
                title: 'Using Step', 
                description: 'Step to draw thresholds',
                fragPath: '/shaders/chapterTwo/step.frag',
                thumbnail: '/public/thumbnails/chapterTwo/step.png'
            }, 
            { 
                id: 'smooth_step', 
                title: 'Sample smooth step', 
                description: 'Visualize how smoothstep works', 
                fragPath: '/shaders/chapterTwo/smoothstep.frag',
                thumbnail: '/public/thumbnails/chapterTwo/smoothstep.png'
            }
        ]
    },
    {
        id: 'shapes', 
        title: 'How to draw shapes', 
        description: 'Draw shapes using functions and signed distance field', 
        thumbnail: '/public/thumbnails/chapterThree/chapterHeader.png', 
        shaders: [
            {
                id: 'rectangle', 
                title: 'Rectangle using function', 
                description: 'draw a rectangle',
                fragPath: '/shaders/chapterThree/rectangle.frag',
                thumbnail: '/public/thumbnails/chapterThree/rectangle.png', 
            }, 
            { 
                id: 'circle', 
                title: 'Circle using function', 
                description: 'draw a circle using function', 
                fragPath: '/shaders/chapterThree/circle.frag',
                thumbnail: '/public/thumbnails/chapterThree/circle.png', 
            },
            {
                id: "distance_field", 
                title: "Distance field", 
                description: "distance field", 
                fragPath: '/shaders/chapterThree/distance.frag',
                thumbnail: '/public/thumbnails/chapterThree/distance.png', 
            }, 
            {
                id: "sdf_if", 
                title: "Signed Distance Field using if", 
                description: "Signed Distance Field using if", 
                fragPath: '/shaders/chapterThree/sdfIf.frag', 
                thumbnail: '/public/thumbnails/chapterThree/sdfif.png', 
            },
            {
                id: "sdf_no_if", 
                title: "Distance field Without If", 
                description: "distance field No If", 
                fragPath: '/shaders/chapterThree/sdfnoif.frag',
                thumbnail: '/public/thumbnails/chapterThree/sdfnoif.png', 
            }, 
        ]
    }
];