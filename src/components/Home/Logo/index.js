import { useEffect, useRef } from 'react';
import './index.scss';
import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin';
import gsap from "gsap-trial"



const Logo = () => {
  const outlineLogoRef = useRef();
  const originalLogoRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    // const outlineLogo = outlineLogoRef.current.contentDocument.documentElement;

    // const timeline = gsap.timeline();

    // gsap.set(outlineLogo, {drawSVG: "0%"});

    // timeline.to(outlineLogo, {drawSVG: "100%", duration: 10, ease: 'power1.out' });} )
  });


  gsap.fromTo(
    originalLogoRef.current,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      delay: 4,
      duration: 4, // Adjust the duration for the solid logo animation
    }

    , []);



  return (
    <div className="logo-container box">
      <div className="logo-wrapper">
        <object
          id="outline-logo"
          type="image/svg+xml"
          data={`${process.env.PUBLIC_URL} patrik6-outline.svg`}
          width="250"
          height="250"
          ref={outlineLogoRef}
        ></object>
        <object
          id="original-logo"
          type="image/svg+xml"
          data={`${process.env.PUBLIC_URL} patrik6.svg`}
          width="250"
          height="250"
          ref={originalLogoRef}
        ></object>

      </div>
    </div>
  );
};

export default Logo;
