import React, { useEffect, useRef } from 'react';

let animationFrameId: any;
type LissajousCanvasProps = {
    A: number;
    B: number;
    a: number;
    b: number;
    phase: number;
    setPhase: React.Dispatch<React.SetStateAction<number>>;
    animate: boolean;
};
const LissajousCanvas = ({ A, B, a, b, phase, setPhase, animate }: LissajousCanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const drawFigure = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();

        for (let t = 0; t <= 2 * Math.PI; t += 0.01) {
            const x = A * Math.sin(a * t + phase) + canvas.width / 2;
            const y = B * Math.sin(b * t) + canvas.height / 2;
            ctx.lineTo(x, y);
        }

        ctx.stroke();
    };

    const animateFigure = () => {
        if (animate) {
            setPhase(prev => prev += 0.02); // Increment phase
            drawFigure();
            animationFrameId = requestAnimationFrame(animateFigure);
        }
    };

    useEffect(() => {
        drawFigure();
        if (animate) {
            animationFrameId = requestAnimationFrame(animateFigure);
        }
        return () => cancelAnimationFrame(animationFrameId);
    }, [A, B, a, b, phase, animate]);

    return <canvas ref={canvasRef} width={window.innerWidth - 256} height={window.innerHeight} style={{ border: '1px solid #ccc' }} />;
};

export default LissajousCanvas;
