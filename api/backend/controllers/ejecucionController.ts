import { Request, Response } from "express";
import helpers from "../helpers/helpers";

let ejecucionController = {

    validarCirculacion: async (req: Request, res: Response): Promise<Response> => {

        let DiasSemana: string [] = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

        helpers.procesarDatos(req.body.placa, req.body.fecha, req.body.hora, DiasSemana)
        let horario: boolean = helpers.validarHorarios(req.body.placa, req.body.fecha, req.body.hora, DiasSemana)
        let dia: boolean = helpers.validarDiaPlaca(req.body.placa, req.body.fecha, req.body.hora, DiasSemana)
        
        if(horario === true && dia === true){
            return res.status(200).json({
                result: true,
                code: 200,
                mensaje: 'Usted Puede Circular'
            });
        }
        else{
            return res.status(200).json({
                result: true,
                code: 200,
                mensaje: 'Usted NO Puede Circular'
            });
        }

       

    },

}

export default ejecucionController;