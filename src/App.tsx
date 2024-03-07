import './index.css'

function App() {

  return (
    <>
        <div className='navbar'>
            <span className='text-brand-primary text-4xl'>J</span>
            <ol className='text-white flex justify-between'>
                <li><a href="" className='p-2'>About</a></li>
                <li><a href="" className='p-2'>Projects</a></li>
                <li><a href="" className='p-2'>Contact</a></li>
            </ol>
            <button className='bg-white rounded-full m-[2px] w-[134px] h-[44px] ml-auto'>
                CV
            </button>
        </div>
    </>
  )
}

export default App
