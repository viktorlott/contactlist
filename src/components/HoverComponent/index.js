import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 80, (x - window.innerWidth / 2) / 80, 1.08]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`



/**
 * 
 * This component is used for the 3d hovering effect you get when interacting with a Card or the SearchInput
 * 
 * Im using react-spring to animate this effect.
 * 
 * I'm aware of this not being optimized for low performing computers/phones. So its nothing that is recommended to use a real scenario.
 * 
 */
export default function HoverComponent({children}) {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <animated.div
            children={children}
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
        />
    )
}
