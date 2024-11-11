import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
const AnimateRight = () =>  {
    const [splitText, setSplitText] = useState("");
    let animateup = useRef();
    useLayoutEffect(() => {
        const text = "Working for yourself just / got easier";
        
        const chars = text.split('');

       
        const formattedText = chars.map(char => {
            if (char === '/') {
                return '<br/>';
            }
            // Check if it's a space and return it as-is
            if (char === ' ') {
                return ' ';
            }
            return `<span style="display:inline-block">${char}</span>`;
        }).join('');

        setSplitText(formattedText);
        gsap.set(animateup.current.children, { opacity: 0, x: 200 });
        gsap.fromTo(
            animateup.current.children,
            { opacity: 0, x: 200 },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                stagger: 0.1,
                

            }
        );

    }, [splitText]);
    return (

        <div ref={animateup} style={{ display: 'inline-block' }} dangerouslySetInnerHTML={{ __html: splitText }} />

    )
}
export default AnimateRight;