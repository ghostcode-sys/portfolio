import { useEffect, useRef } from 'react';

type Star = {
    x: number;
    y: number;
    radius: number;
    vx: number;
    vy: number;
    color: string;
};

const Background = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    function generateRandomHexColor() {
        const hexChars = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += hexChars[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        function resizeCanvas() {
            if (canvas == null) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        resizeCanvas()

        const FPS = 60;
        const numStars = 100;
        const stars: Star[] = [];
        const mouse = { x: 0, y: 0 };

        // Push stars to array
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1 + 1,
                vx: Math.floor(Math.random() * 50) - 25,
                vy: Math.floor(Math.random() * 50) - 25,
                color: generateRandomHexColor(),
            });
        }

        function distance(point1: { x: number; y: number }, point2: { x: number; y: number }) {
            const xs = point2.x - point1.x;
            const ys = point2.y - point1.y;
            return Math.sqrt(xs * xs + ys * ys);
        }

        function draw() {
            if (ctx == null || canvas == null) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.globalCompositeOperation = 'lighter';

            for (let i = 0; i < stars.length; i++) {
                const s = stars[i];
                ctx.beginPath();
                let radius = s.radius;
                if (distance(mouse, s) < 150) {
                    ctx.fillStyle = s.color;
                    radius = s.radius + 2;
                } else {
                    ctx.fillStyle = '#fff';
                }
                ctx.arc(s.x, s.y, radius, 0, 2 * Math.PI);
                ctx.fill();
                ctx.fillStyle = 'black';
                ctx.stroke();
            }

            ctx.beginPath();
            for (let i = 0; i < stars.length; i++) {
                const starI = stars[i];
                ctx.moveTo(starI.x, starI.y);
                if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
                for (let j = 0; j < stars.length; j++) {
                    const starII = stars[j];
                    if (distance(starI, starII) < 150) {
                        ctx.lineTo(starII.x, starII.y);
                    }
                }
            }
            ctx.lineWidth = 0.05;
            ctx.strokeStyle = 'white';
            ctx.stroke();
        }

        function update() {
            if (canvas == null) return;
            for (let i = 0; i < stars.length; i++) {
                const s = stars[i];

                s.x += s.vx / FPS;
                s.y += s.vy / FPS;

                if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
                if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
            }
        }

        function tick() {
            draw();
            update();
            requestAnimationFrame(tick);
        }

        function handleMouseMove(e: MouseEvent) {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }

        function handleResize() {
            resizeCanvas();
        }

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        tick();

        // Cleanup on unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='absolute top-0 left-0 w-full h-full bg-gray-900 -z-50' >
            <canvas id="canvas" ref={canvasRef}></canvas>
        </div>
    );
};

export default Background;