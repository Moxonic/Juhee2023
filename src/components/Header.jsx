import React, {useState, useEffect} from 'react'

const Header = () => {

const [prevScrollPos, setPrevScrollPos] = useState(0);
const [visible, setVisible] = useState(true)

const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if(currentScrollPos > prevScrollPos){
        setVisible(false)
    }else{
        setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
}

useEffect( () => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
})

return (
    <div className={`sticky ${visible ? 'top-0' : ''} `}>
          <div  className='sticky top-0 text-center w-full bg-slate-200 p-4  opacity-50 border-solid border-b-2 '>
            <h1 className='prata text-2xl text-slate-800 lg:text-6xl'>Juhee Manon Kang</h1>
          </div>
    </div>
)
}

export default Header;
