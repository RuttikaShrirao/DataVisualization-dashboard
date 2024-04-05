
import NavBar from './NavBar'
import FirstHeroSection from './HeroSectionBlock/FirstHeroSection/FirstHeroSection'

export default function HeroSection(){
    return(
        <div className='herosection'>
            <NavBar />
            <div style={{padding:'2%'}}>
            <FirstHeroSection />
            </div>
        </div>
    )
}