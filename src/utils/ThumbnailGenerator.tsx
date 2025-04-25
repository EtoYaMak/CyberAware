import React, { useEffect, useRef } from 'react';

interface ThumbnailGeneratorProps {
    title: string;
    colorStart: string;
    colorEnd: string;
    filename: string;
}

const ThumbnailGenerator: React.FC<ThumbnailGeneratorProps> = ({
    title,
    colorStart,
    colorEnd,
    filename
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            if (ctx) {
                // Set canvas dimensions (16:9 aspect ratio)
                canvas.width = 1280;
                canvas.height = 720;

                // Create gradient
                const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                gradient.addColorStop(0, colorStart);
                gradient.addColorStop(1, colorEnd);

                // Fill background
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // Add some subtle pattern
                ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
                for (let i = 0; i < 50; i++) {
                    const x = Math.random() * canvas.width;
                    const y = Math.random() * canvas.height;
                    const size = Math.random() * 50 + 10;
                    ctx.beginPath();
                    ctx.arc(x, y, size, 0, Math.PI * 2);
                    ctx.fill();
                }

                // Add title text
                ctx.fillStyle = 'white';
                ctx.font = 'bold 60px sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
                ctx.shadowBlur = 10;
                ctx.fillText(title, canvas.width / 2, canvas.height / 2);

                // Add "CyberAware" watermark
                ctx.font = 'bold 24px sans-serif';
                ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
                ctx.shadowBlur = 0;
                ctx.fillText('CyberAware', canvas.width / 2, canvas.height - 40);

                // Generate download link
                const link = document.createElement('a');
                link.download = filename;
                link.href = canvas.toDataURL('image/png');
                link.click();
            }
        }
    }, [title, colorStart, colorEnd, filename]);

    return (
        <div style={{ display: 'none' }}>
            <canvas ref={canvasRef} />
        </div>
    );
};

// Usage:
// <ThumbnailGenerator 
//   title="Denial of Service Attack"
//   colorStart="#fbbf24"
//   colorEnd="#9a3412"
//   filename="dos-thumbnail.png"
// />

export default ThumbnailGenerator; 