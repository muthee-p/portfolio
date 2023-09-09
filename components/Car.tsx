import React from 'react';
import Image from 'next/image'

const Car = () => {
  return (
    <div className=''>
      <Image
                    src='/car.svg'
                    alt='car'
                    className='car dark:invert'
                    width={240}
                    height={240}
                    priority
                />
    </div>
  );
};

export default Car;
