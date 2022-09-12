

const Contact =()=>{
    return(
        <div className="contac">
          <form >
                 <input 
                    type='text' 
                    name='name' 
                    placeholder='Nombre'
                    />
                 <input 
                    type='number' 
                    name='phone'  
                    placeholder='Telefono'                   
                    />
                 <input 
                    type='email' 
                    name='email'  
                    placeholder='Email'
                    />
                    <button type='submit'>Enviar</button>
                </form>
                </div>
    );
}


export default Contact