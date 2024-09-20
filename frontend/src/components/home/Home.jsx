import React, {useEffect} from "react"
import Awards from "./awards/Awards"
import Hero from "./hero/Hero"
import Recent from "./recent/Recent"

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
  return (
    <>
      <Hero />
      {/*<Featured />*/}
      <Recent />
      <Awards />
    </>
  )
}

export default Home
