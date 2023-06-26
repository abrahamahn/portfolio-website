import React, { useEffect, useRef } from 'react';

interface GrainEffectProps {
  className?: string;
}

const GrainEffect: React.FC<GrainEffectProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    
    if (!context || !canvas) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const blockSize = 0.5; // Increase the block size for less CPU intensive noise
    const transparency = 0.1; // Adjust transparency

    const imageData = context.createImageData(width, height);
    const data = imageData.data;

    const draw = () => {
      for (let i = 0; i < data.length; i += 4 * blockSize * blockSize) {
        const value = Math.random() * 255 * transparency;
  
        for (let j = 0; j < blockSize * blockSize; j++) {
          if (i + 4 * j < data.length) {
            data[i + 4 * j] = value;
            data[i + 4 * j + 1] = value;
            data[i + 4 * j + 2] = value;
            data[i + 4 * j + 3] = 255;
          }
        }
      }
      
      context.putImageData(imageData, 0, 0);
    };
    
    const intervalId = setInterval(draw, 1000); // Redraw every 1000ms
    return () => clearInterval(intervalId); // Cleanup interval on unmount

  }, []);

  return <canvas ref={canvasRef} className={className} style={{ position: 'absolute', zIndex: 1 }} />;
};

export default GrainEffect;
