import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from "gsap";

const AnimateUp = () => {
    const [splitText, setSplitText] = useState("");
    let animateup = useRef();
    useLayoutEffect(() => {
        const text = "Discover Hassel-free contracting";
        
        const chars = text.split('');

       
        const formattedText = chars.map(char => {
           
            if (char === ' ') {
                return '<br/>';
            }
            return `<span style="display:inline-block">${char}</span>`;
        }).join('');


        setSplitText(formattedText);
        gsap.set(animateup.current.children, { opacity: 0, y: 50 });
        gsap.fromTo(
            animateup.current.children,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                delay: 1.5,

            }
        );

    }, [splitText]);
    return (

        <div ref={animateup} style={{ display: 'inline-block' }} dangerouslySetInnerHTML={{ __html: splitText }} />

    )
}
export default AnimateUp;