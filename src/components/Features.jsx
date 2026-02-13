import clsx from "clsx"
import { features, featureSequence } from "../../constants"
import StudioLights from "./StudioLights"
import { useRef } from "react"
import { Suspense } from "react"
import { Html } from "@react-three/drei"
import { useMediaQuery } from "react-responsive"
import { Canvas } from "@react-three/fiber"
import Macbook from "./models/Macbook"
import useMacbookStore from "../store"
import { useEffect } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const ModelScroll = () => {
    const groupRef = useRef(null)
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    const { setTexture } = useMacbookStore()

    useEffect(() => {
        featureSequence.forEach((item) => {
            const v = document.createElement('video')
            Object.assign(v, {
                src: item.videoPath,
                muted: true,
                loop: true,
                playsInline: true,
                preload: 'auto',
                crossOrigin: 'anonymous',
            })
            v.load()
        })
    }, [featureSequence])

    useGSAP(() => {
        const modeltTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#f-canvas",
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true,
            }
        })

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#f-canvas",
                start: "top center",
                end: "bottom top",
                scrub: 1,
            }
        })

        if (groupRef.current) {
            modeltTimeline.to(groupRef.current.rotation, {
                y: Math.PI * 2,
                ease: 'power1.inOut',
            })
        }

        timeline
            .call(() => setTexture(featureSequence[0].videoPath))
            .to('.box1', {opacity: 1, y: 0, delay: 1})
            .call(() => setTexture(featureSequence[1].videoPath))
            .to('.box2', {opacity: 1, y: 0})
            .call(() => setTexture(featureSequence[2].videoPath))
            .to('.box3', {opacity: 1, y: 0})
            .call(() => setTexture(featureSequence[3].videoPath))
            .to('.box4', {opacity: 1, y: 0})
            .call(() => setTexture(featureSequence[4].videoPath))
            .to('.box5', {opacity: 1, y: 0})
        
    }, [])
    return (
        <group ref={groupRef}>
            <Suspense fallback={<Html><h1 className="text-white text-3xl uppercase">Loading...</h1></Html>}>
                <Macbook scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
            </Suspense>
        </group>
    )
}

const Features = () => {
    return (
        <section id="features">
            <h2>See it all in a new light.</h2>

            <Canvas id="f-canvas">
                <StudioLights />
                <ambientLight intensity={0.5} />

                {/* Model */}
                <ModelScroll />
            </Canvas>

            <div className="absolute inset-0">
                {features.map((feature, index) => (
                    <div key={feature.id} className={clsx("box", `box${index + 1}`, feature.styles)}>
                        <img src={feature.icon} alt={feature.highlight} />
                        <p>{feature.highlight}</p>
                        <p>{feature.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features