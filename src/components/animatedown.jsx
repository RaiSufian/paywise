import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from "gsap";

const AnimateDown = () => {
    const [splitText, setSplitText] = useState("");
    let animatedown = useRef();
    useLayoutEffect(() => {
        const text = "Streamline your contracting / journey";

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
        gsap.set(animatedown.current.children, { opacity: 0, y: 50 });
        gsap.fromTo(
            animatedown.current.children,
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

        <div ref={animatedown} style={{ display: 'inline-block' }} dangerouslySetInnerHTML={{ __html: splitText }} />

    )
}
export default AnimateDown;