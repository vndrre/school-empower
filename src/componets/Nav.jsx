import { useState } from "react"

export default function Nav(){   
    let Links =[
        {name:"Home",link:"/home"},
        {name:"Product",link:"#product"},
        {name:"Pricing",link:"#pricing"},
        {name:"Contact",link:"#contact"},
      ];
    
    let [open,setOpen]=useState(false);

    const [color, setColor] = useState(false)
    
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    
    window.addEventListener('scroll', changeColor)


    return (
        <nav className={color ? 'text-white bg-[#EA4C89] w-full fixed top-0 left-0 font-main header-bg': 'text-white w-full fixed top-0 left-0 font-main header-bg'}>
            <div className="md:flex md:justify-between items-center md:px-28">
                <div className="md:flex md:gap-14 py-4 md:py-7 px-5">
                    <div className="font-bold text-2xl cursor-pointer flex justify-between items-center md:scale-110"> 
                        <h1 className="font-bold text-[24px]">BRANDNAME</h1>
                    </div>
                    
                    <div className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden" onClick={()=>setOpen(!open)}>
                        <ion-icon name={open ? 'close':'menu'}></ion-icon>
                    </div>

                    <ul className={color ? `md:flex text-[18px] md:gap-14  md:items-center md:pb-0 pb-5 pt-5 md:pt-0 absolute md:static bg-[#EA4C89] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 
                    transition-all duration-500 ease-in md:text-center ${open ? 'top-10':'top-[-490px]'}` : `md:flex text-[18px] md:gap-14  md:items-center md:pb-0 pb-5 pt-5 md:pt-0 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 
                    transition-all duration-500 ease-in md:text-center ${open ? 'top-10':'top-[-490px]'}`}>
                        {
                            Links.map((link)=>(
                                <li key={link.name} className="md:opacity-85 md:hover:opacity-100 duration-500 md:my-0 my-7">
                                    <a href={link.link}>{link.name}</a>
                                </li>
                            ))
                        }
                        <a href="/login" className="md:hidden flex justify-center">Login</a>
                        <div className="flex justify-center md:hidden">
                            <a href="/register" className="flex md:hidden items-center gap-1 font-mediu bg-[#8D5CF6] hover:bg-[#854cff] duration-500 w-36 rounded-xl mt-3 py-4 px-5">
                                <p>Join Us</p>
                                <ion-icon name="arrow-forward"></ion-icon>
                            </a>
                        </div>
                    </ul>
                </div>

                <div className="hidden md:flex items-center gap-7">
                    <a href="/login">Login</a>
                    <a href="/register" className="flex items-center gap-1 font-mediu bg-[#8D5CF6] hover:bg-[#854cff] duration-500 rounded-lg py-4 px-5">
                        <p>Join Us</p>
                        <ion-icon name="arrow-forward"></ion-icon>
                    </a>
                </div>
            </div>
        </nav>
    )
}