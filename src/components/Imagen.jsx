import SinImagen from '../img/producto_no_disponible.webp'


const Imagen = ({ imagen, setImagen, isLoading }) => {
 
  return (
    
    <div className={isLoading ? 'flex basis-2/5 justify-center  bg-white opacity-10' : 'flex basis-2/5 justify-center  bg-white'}>
        <img className='object-cover w-4/5  '  src={imagen ? imagen : SinImagen  } alt='imagen-producto'  />
    </div>
  )
}

export default Imagen