'use client'
import React from 'react';
import moecounter from 'moecounter.js';
import { Button } from './button';

interface MoeCounterProps {
  length: 5,
  theme: asoul,
  pixelated: false
}

const viewCounter: React.FC<MoeCounterProps> = ({ length = 5, theme = 'asoul', pixelated = true }) => {
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchCounter = async () => {
      try {
        const data = await moecounter.remote({length, theme, pixelated });
        setImageUrl(data.url); // Assuming the url property holds the counter image URL
      } catch (error) {
        console.error('Error fetching counter:', error);
      }
    };

    fetchCounter();
  }, [length, theme, pixelated]);

  return (
    <div className="flex flex-col items-center justify-center">
        <span className='w-[150px] h-[50px]'>
           {imageUrl && <img src={imageUrl} alt="Moe Counter" className="w-full h-auto" />}
        </span>
        <Button className='bg-gray-600 mt-5 hover:bg-green-500 hover:text-white'>About me</Button>
      
    </div>
  );
};

export default viewCounter;
