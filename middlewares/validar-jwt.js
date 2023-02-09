

const jwt=require('jsonwebtoken');

const validarJWT=(req,res,next)=>{



    //Leer el token


    const token=req.header("x-token");

    if(!token){
        return req.status(401).json({
            ok:false,
            msg:"No hay token en la paticion"
        })
    }

    try {

        const { uid } = jwt.verify(token, process.env.JWT_KEY);

        req.uid=uid;
        

        next();
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            ok:false,
            msg:"Token no valido"
        })
    }

    


}


module.exports={
    validarJWT
}
