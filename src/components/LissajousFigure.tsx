import React, { useEffect, useRef } from 'react';

let animationFrameId: any;
type LissajousCanvasProps = {
    frequencyX: number;
    frequencyY: number;
    amplitudeX: number;
    amplitudeY: number;
    phase: number;
    setPhase: React.Dispatch<React.SetStateAction<number>>;
    animate: boolean;
};
const LissajousCanvas = ({ frequencyX, frequencyY, amplitudeX, amplitudeY, phase, setPhase, animate }: LissajousCanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const drawFigure = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();

        for (let t = 0; t <= 2 * Math.PI; t += 0.01) {
            const x = amplitudeX * Math.sin(frequencyX * t + phase) + canvas.width / 2;
            const y = amplitudeY * Math.sin(frequencyY * t) + canvas.height / 2;
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
    }, [frequencyX, frequencyY, amplitudeX, amplitudeY, phase, animate]);

    return <canvas ref={canvasRef} width={window.innerWidth - 256} height={window.innerHeight} />;
};

export default LissajousCanvas;
