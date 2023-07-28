import React, {useEffect, useRef, Component, Suspense} from 'react';
import Lottie from 'lottie-web';

function DisplayLottie({ animationData }) {
    const container = useRef(null);
  
    useEffect(() => {
      const anim = Lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData
      });
  
      return () => {
        anim.destroy(); // Cleanup animation when component unmounts
      };
    }, [animationData]);
  
    return <div className="container" ref={container}></div>;
  }
  
  export default DisplayLottie;

// function DisplayLottie(){
//     const container = useRef(null)

//     useEffect(() => {
//         Lottie.loadAnimation({
//             container:container.current,
//             renderer: 'svg',
//             loop: true,
//             autoplay: true,
//             animationData: require('../../assets/lottie/codingPerson.json')
//         })
//     }, [])

//     return(
//         <div className="App">
//             <h1>React Lottie</h1>
//             <div className="container" ref={container}></div>
//         </div>
//     );
// }

// export default DisplayLottie;