import Flecha from '../img/flecha.png'


const Footer = () => {

  return (
   <footer className='flex justify-center  fixed bottom-0 left-0 z-50 w-full h-16 bg-blue-700'>
     
           <div className=' w-1/6 flex justify-start'>
                <img src={Flecha} alt='logo-agroplastic' width="30%" height="10%" />
            </div>
            <div className=' w-3/4 text-center py-3'>
            <p className='text-white font-bold text-3xl'>ACERQUE SU PRODUCTO AL LECTOR</p>
            </div>
            <div className='w-1/6 flex justify-end'>
                <img className='' src={Flecha} alt='logo2-agroplastic' width="30%" height="10%" />
            </div>
        {/* <div className=' w-full text-center'>
          <img className='' src={Flecha}/>
            <p className='text-white font-bold text-3xl'>ACERQUE SU PRODUCTO AL LECTOR</p>
           
        </div> */}
   </footer>
  )
}

export default Footer
