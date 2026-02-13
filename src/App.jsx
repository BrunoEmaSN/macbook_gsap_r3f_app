import gsap from "gsap"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProductViewer from "./components/ProductViewer"
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <ProductViewer />
    </main>
  )
}

export default App