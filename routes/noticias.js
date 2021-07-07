const rutas = (app)=> {

    const Noticia = require ('../models/noticias')

   
    //FIND (GET) - Completar
    

    

    //ADD (POST) - Completar
    

    

    //REMOVE (DELETE)
    const deleteNoticia = (req, res) => {
        Noticia.findById(req.params.id,(err, noticia)=>{
            noticia.remove((err)=>{
                if(!err){
                    console.log('Eliminado', noticia)
                }else{
                    console.log('Hubo un error al actualizar', err)
                }
                res.send(noticia)
            })
        })
    }

    //app.get('/noticias', findAllNoticias);
    //app.post('/noticias', addNoticia);
    app.delete('/noticias/:id', deleteNoticia);

}

module.exports = rutas