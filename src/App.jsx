import gsap from "gsap"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProductViewer from "./components/ProductViewer"
import { ScrollTrigger, SplitText } from "gsap/all"
import Showcase from "./components/Showcase"
import Perfomance from "./components/Perfomance"
import Features from "./components/Features"
import Highlights from "./components/Highlights"
import Footer from "./components/Footer"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <ProductViewer />
        <Showcase />
        <Perfomance />
        <Features />
        <Highlights />
        <Footer />
    </main>
  )
}

export default App