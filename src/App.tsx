import './index.css'

function App() {

    return (
        <>
            <div className='navbar'>
                <a href="" className='text-brand-primary text-4xl font-mono font-bold mx-8'>J</a>
                <div className='flex items-center justify-center gap-6'>
                    <ol className='links text-white flex justify-between gap-4'>
                        <li><a href="">About</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Contact</a></li>
                    </ol>
                    <button className='bg-white rounded-full m-[2px] w-[112px] h-[52px]'>
                        CV
                    </button>
                </div>
            </div>

            <div className='h-[800px] bg-black text-light flex flex-col justify-center items-center'>
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
            </div>
        </>
    )
}

export default App
