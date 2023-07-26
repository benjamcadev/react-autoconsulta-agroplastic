// TRAER LA INFO DESDE LA API
export const getProducto = async(codigo) => {
    const data = {
        codigo: codigo
    }
    const url = 'http://192.168.1.4:3900/api/get-producto'

    try {
        const resp = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(data),  
        })

        const dataResponse = await resp.json()

        return dataResponse

      

    } catch (error) {
        console.error("Hubo un error al realizar la peticion de producto: ", error)
        return {
            status: "error",
            detalle: error
        }
    }
   

   
}

