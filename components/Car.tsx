import React from 'react';
import Image from 'next/image'

const Car = () => {
  return (
    <div className='flex items-center justify-center'>
      <Image
                    src='/car.svg'
                    alt='car'
                    className='car '
                    width={80}
                    height={80}
                    priority
                />
    </div>
  );
};

export default Car;
