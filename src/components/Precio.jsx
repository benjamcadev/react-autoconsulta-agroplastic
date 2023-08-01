import { useEffect, useState } from "react"
import { getProducto } from "../helpers/getProducto"
import LogoInicial from '../img/Logo_inicial.jpg'

const Precio = ({ codigo, setCodigo, descripcion, setDescripcion, precio, setPrecio, descuento, setDescuento, setImagen, setIsLoading,isLoading}) => {

  
  

  // useEffect(() => {
  //   console.log("useEffect");
  // },[])

   const limpiarPantalla = (ms,e) => setTimeout(function(){
    setPrecio('')
    setDescuento('')
    setImagen(LogoInicial)
    setDescripcion('BIENVENIDO')
    e.target.value = ''
    e.target.focus()
   }, ms);


  const handleKeyDown = async(e) => {
    
    if(e.keyCode === 13) { 
      setIsLoading(true)
      //Buscar el codigo en la base de datos
      const { status, name, precio, img_url, descuentos } = await getProducto(e.target.value)
      setIsLoading(false)

      
      if (status == 'success') {
        // setear en el componente los datos
      
      setDescripcion(name)
      setPrecio(precio)
      //setCodigo('')
      if (img_url) {
        setImagen(img_url)
      }else{
        setImagen('')
      }
      
      e.target.value = ''
      e.target.focus()

      
      if (descuentos) {    
        setDescuento([
          ...descuentos
        ]
       
        ) 
      

      }else{
       setDescuento(false)
      }


        //ESPERAR UNOS 5 SEGUNDOS
        await limpiarPantalla(8000,e)
       
      }else{
        // Mostrar un error en pantalla
        setDescripcion('PRODUCTO NO ENCONTRADO 😔')
        setPrecio('')
        setDescuento('')
        setImagen('')
        e.target.value = ''
        e.target.focus()

        //ESPERAR UNOS 5 SEGUNDOS
        await limpiarPantalla(8000,e)
      }
     
    }
    
  }

  return (
    
    <div className={isLoading ? 'basis-2/3 text-center self-center bg-white opacity-10' : 'basis-2/3 text-center self-center bg-white'}>
     
      
        <p id="descripcion-producto"  className="text-5xl font-bold">{descripcion}</p>
        <p id="precio-producto" className="text-9xl font-semibold text-red-500">{precio && `$${precio}`}</p>
        {descuento ?
        descuento.map((desc,index) => (
          
          <p id="descuento-producto" key={index} className="text-slate-400 text-3xl my-4">
            
          Si llevas mas de {desc.quantity_discount} unidades <strong>{precio - desc.unit_price_discount} c/u</strong></p>
        ))
        
        : ''
      }
        
        <input id="codigo" autoFocus  type="text" placeholder="input-codigo" className="opacity-0" onKeyDown={handleKeyDown}></input>
      
      
     
     
       
     
    </div>
  )
}

export default Precio