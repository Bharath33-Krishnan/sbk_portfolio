import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import { projects,games,showcase} from './portfolio'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects id='showcase' projects={showcase} name='Showcase Reel' />
        <Projects id='games' projects={games} name='Video Games' />
        <Projects id='projects' projects={projects} name='Projects' />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
