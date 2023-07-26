import Piramides from '../img/Piramides.png'
import Letras from '../img/Letras.png'

const Header = () => {

    return (
        <header className='flex h-1/4 bg-blue-700 '>
            <div className=' w-1/6'>
                <img src={Letras} alt='logo-agroplastic' width="80%" height="40%" />
            </div>
            <div className=' w-3/4'>

            </div>
            <div className='w-1/6'>
                <img className='' src={Piramides} alt='logo2-agroplastic' width="80%" height="40%" />
            </div>
        </header>
       
    )
}

export default Header