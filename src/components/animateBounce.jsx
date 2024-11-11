import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from "gsap";

const AnimateBounce = () => {

    const [splitText, setSplitText] = useState("");
    let animate = useRef();
    useLayoutEffect(() => {
     
        const text = "Paywise Umbrella";
        const chars = text.split('');

        // Set the split text in the state
        setSplitText(chars.map(char => `<span style="display:inline-block">${char}</span>`).join(''));
        const formattedText = chars
            .map(char => char === ' ' ? '<span>&nbsp;</span>' : `<span style="display:inline-block">${char}</span>`)
            .join('');


        setSplitText(formattedText);
        gsap.set(animate.current.children, { opacity: 0, x: -50 }); 
        gsap.fromTo(
            animate.current.children,
            { opacity: 0, x: -50 },  
            {
                opacity: 1,             
                x: 0,                   
                duration: 0.5,         
                stagger: 0.1,          

            }
        );

    }, [splitText]);


    return (
        <div ref={animate} style={{ display: 'inline-block' }} dangerouslySetInnerHTML={{ __html: splitText }} />

    )
}
export default AnimateBounce;