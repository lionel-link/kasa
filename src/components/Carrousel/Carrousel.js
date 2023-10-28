import { useEffect, useRef, useState } from 'react';
import './Carrousel.css';

function Carousel({gallery}) {
  console.log(gallery)

  const refarrowleft = useRef();
  const refarrowright = useRef();

  const refimagecarroussel = useRef();

  const [index, setIndex] = useState(0);

  function loadImage(url) {
    if (url){
      refimagecarroussel.current.src = url
    }else{
      refimagecarroussel.current.src = gallery[0]
    }
  }
  

  useEffect(() => {
    loadImage(gallery[index]);
    if(gallery.length === 1){
      refarrowleft.current.style.display = 'none';
      refarrowright.current.style.display = 'none';
    }
  },[index])

  function next(e) {
    e.preventDefault();

    let indexTab = index + 1

    console.log(index)
    
    if (indexTab === gallery.length) {
      setIndex(0)
    }else{
      setIndex(indexTab)
    }
    
  }

  function prev(e) {
     e.preventDefault();

     let indexTab = index - 1

    console.log(index)
    
    if (indexTab === - 1) {
      setIndex(gallery.length - 1)
    }else{
      setIndex(indexTab)
    }
   
  }



  return (
    <div className="lightbox" id="lightbox">
      <button ref={refarrowleft} className="lightbox__next" onClick={next}></button>
      <button ref={refarrowright}className="lightbox__preview" onClick={prev}></button>
      <div className="lightbox__container">
        <img className='imgCarrousel' ref={refimagecarroussel} src='' alt='capture de la maison'/>
      </div>
    </div>
  );
}

export default Carousel;
