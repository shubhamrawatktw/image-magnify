import { useRef, useState } from "react";
const image = "https://upload.wikimedia.org/wikipedia/commons/8/81/Salman_Khan_filmfare.jpg"
function App() {
  const containerRef = useRef();
  const imageRef = useRef();
  const lensRef = useRef();
  const resultRef = useRef();
  const [showImage, setShowImage] = useState(false);
   
  const imageZoom = (e) => {
   if (containerRef?.current && lensRef?.current) {
    
     const containerRect  = containerRef?.current?.getBoundingClientRect()
     const imageRect  = imageRef?.current?.getBoundingClientRect()
    const lensRect  = lensRef?.current?.getBoundingClientRect()
    const resultRect  = resultRef?.current?.getBoundingClientRect()
    
   let x = e.clientX - (lensRect.width/2) 
   let y = e.clientY - (lensRect.height/2) - containerRect.top
   let fx = resultRect.width / lensRect.width
   let fy = resultRect.height / lensRect.height
   
   lensRef.current.style.left = `${x}px`
   lensRef.current.style.top = `${y}px`
   resultRef.current.style.backgroundImage = `url(${image})`
   resultRef.current.style.backgroundSize = `${imageRect.width * fx}px ${imageRect.height * fy}px `
   resultRef.current.style.backgroundPosition = `-${x*fx}px -${y*fy}px `
   
  }
  };

  return (
    <div className="b h-screen flex items-center">

    <div
      ref={containerRef}
      onMouseEnter={() => setShowImage(true)}
      onMouseLeave={() => setShowImage(false)}
      onMouseMove={imageZoom}
      className="relative w-96 b"
    >
      <img
        ref={imageRef}
        className="h-80 w-96 "
        src={image}
        alt="salman"
      />
      {showImage && (
        <>
          <div
            ref={lensRef}
            className="h-12 w-12 b absolute top-0 left-0"
          ></div>
          <div
            ref={resultRef}
            className="absolute h-96 w-96 b top-0 -right-[200%] bg-no-repeat"
          ></div>
        </>
      )}
    </div>
    </div>
  );
}

export default App;
