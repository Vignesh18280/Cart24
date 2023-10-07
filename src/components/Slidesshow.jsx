import React from 'react'
import './Slideshow.css'


const colors = ["https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Jupiter/23/Electronics/Page/Teaser/3Header/Rec/KSD_PC.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/Jupiter23/KSD/Header/PC-Header.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img23/werables/bigbets/Notified_Desktop_1500x300.jpg", "https://m.media-amazon.com/images/G/31/img22/CEPC/Jupiter/23/Electronics/Page/Teaser/3Header/Rec/Header_intel_pc_1500X300._CB577426439_.jpg","https://images-eu.ssl-images-amazon.com/images/G/31/img23/cult/acex/1_1500x300.jpg" , "https://images-eu.ssl-images-amazon.com/images/G/31/img23/deals/Nm/2_1500x300.jpg" , "https://images-eu.ssl-images-amazon.com/images/G/31/img23/deals/Nm/3_1500x300.jpg" , "https://images-eu.ssl-images-amazon.com/images/G/31/img23/deals/Nm/4_1500x300.jpg" , "https://images-eu.ssl-images-amazon.com/images/G/31/img23/tablets/samsungs9fe/1/Galaxy_Tab_S9_FE_1500x300.jpg"];
const delay = 2500;

const Slidesshow = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);   

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((node) => (
          <div
            className="slide"
            //key={index}
           // style={{ backgroundColor }}
          ><img src={node} alt="" /></div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slidesshow

