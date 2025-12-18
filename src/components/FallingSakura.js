"use client";

import { useEffect, useRef } from 'react';

export default function FallingSakura() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];
        const numberOfParticles = 50;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 5 + 5; // Ukuran petal
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 + 1;
                this.rotation = Math.random() * 360;
                this.rotationSpeed = Math.random() * 2 - 1;
                this.color = `rgba(255, 183, 197, ${Math.random() * 0.5 + 0.3})`; // Warna pink sakura
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.rotation += this.rotationSpeed;

                if (this.y > canvas.height) {
                    this.y = 0 - this.size;
                    this.x = Math.random() * canvas.width;
                }
                if (this.x > canvas.width) {
                    this.x = 0;
                } else if (this.x < 0) {
                    this.x = canvas.width;
                }
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate((this.rotation * Math.PI) / 180);
                ctx.fillStyle = this.color;
                ctx.beginPath();
                // Menggambar bentuk petal sederhana (oval)
                ctx.ellipse(0, 0, this.size, this.size / 2, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        function init() {
            particles = [];
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            requestAnimationFrame(animate);
        }

        init();
        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        />
    );
}
