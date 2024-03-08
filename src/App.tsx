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
        </>
    )
}

export default App
