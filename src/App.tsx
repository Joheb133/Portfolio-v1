import './index.css'
import profilePic from './assets/image.png'

function App() {

    return (
        <>
            <nav>
                <a href="" className='text-brand-primary text-4xl font-mono font-bold mx-8'>J</a>
                <div className='flex items-center justify-center gap-6'>
                    <ol className='links text-white flex justify-between gap-4'>
                        <li><a href="#about">About</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Contact</a></li>
                    </ol>
                    <button className='bg-white rounded-full m-[2px] w-[112px] h-[52px]'>
                        CV
                    </button>
                </div>
            </nav>

            <section className='h-[800px] bg-black text-light flex flex-col justify-center items-center'>
                <div className='font-bold'>
                    <span className='text-7xl text-white'>Hi, I'm </span>
                    <h1 className='text-brand-primary font-mono text-[78px] inline-block'>Joheb</h1>
                </div>
                <h1 className='text-7xl font-bold'>I build things for the web</h1>
                <p className='max-w-lg text-center text-light my-4'>
                    I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatment.
                </p>
                <button>
                    Get In Touch
                </button>
            </section>

            <section className='h-[884px] flex justify-center items-center'>
                <div className='flex gap-12'>
                    <div className='max-w-lg px-4 py-8 bg-neutral-100 rounded-2xl'>
                        <h1 className='section-title' id='about'>About Me</h1>
                        <p>
                            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                        </p>
                        <br />
                        <p>
                            Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio.
                        </p>
                    </div>
                    <div className='relative w-[348px]'>
                        <img src={profilePic} alt="A picture of myself" className='w-[256px] h-[256px] rounded-2xl absolute bottom-0 translate-x-1/2 right-1/2' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default App
