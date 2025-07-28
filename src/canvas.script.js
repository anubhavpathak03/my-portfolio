document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("techCanvas");
    const ctx = canvas.getContext("2d");

    const logos = [
        { src: "assets/html-5.png" },
        { src: "assets/css-3.png" },
        { src: "assets/js.png" },
        { src: "assets/react-js.png" },
        { src: "assets/nodejs-original.png" },
        { src: "assets/python.png" },
        { src: "assets/cplusplus.png" },
        { src: "assets/typescript.png" },
        { src: "assets/java_icon-big-size.png" },
        { src: "assets/github-techstack-icon.png" },
        { src: "assets/vscode-icon.png" },
        { src: "assets/Express.png" },
        { src: "assets/postman.png" },
        { src: "assets/docker.png" },
        { src: "assets/tailwind-css.png" },
        { src: "assets/database-mongo-db.png" },
        { src: "assets/Vite.js.png" },
        { src: "assets/Jupyter.png" },

    ];

    function resizeCanvas() {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", () => {
        resizeCanvas();
    });


    const balls = []; 


    let size = 35;
    if(window.innerWidth < 900) {
        size = 30;    
    }

    logos.forEach((logo) => {
        const img = new Image();
        img.src = logo.src;
        img.onload = () => {
        balls.push({
            img: img,
            x: Math.random() * (canvas.width - size),
            y: Math.random() * (canvas.height - size),
            dx: (Math.random() - 0.5) * 5, // speed in x
            dy: (Math.random() - 0.5) * 4, // speed in y
            size: size
        });
        };
    });

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        balls.forEach((ball) => {
        // Move
        ball.x += ball.dx;
        ball.y += ball.dy;

        // Bounce from edges
        if (ball.x + ball.size > canvas.width || ball.x < 0) {
            ball.dx *= -1;
        }
        if (ball.y + ball.size > canvas.height || ball.y < 0) {
            ball.dy *= -1;
        }

        // Draw logo
        ctx.drawImage(ball.img, ball.x, ball.y, ball.size, ball.size);
        });

        requestAnimationFrame(animate); // Repeat the animation
    }
    animate();
});