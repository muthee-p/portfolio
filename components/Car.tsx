// 'use client'

// import React, { useEffect, useRef, useState} from 'react';
// import Image from 'next/image'

// const Car = () => {
//   const carRef = useRef(null);
//   const [ scrollPosition, setScrollPosition] = useState(0)

// const handleScroll = () => {
//   const currentSroll = window.scrollY;
//   setScrollPosition(currentSroll)

//   carRef.current.style.transform = `${currentSroll}px`;
// }

// useEffect(() => {
//   window.addEventListener('scroll', handleScroll);
//   return () => {
//     window.removeEventListener('scroll', handleScroll)
//   };
// }, []);

//   return (
//     <div ref={carRef} className=' car'
//       style={{top:`${scrollPosition}px`}}>
//       <Image
//                     src='/car.svg'
//                     alt='car'
//                     className='shake'
//                     width={60}
//                     height={60}
//                     priority
//                 />
//     </div>
//   );
// };

// export default Car;
