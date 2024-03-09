class Vehiculo {
    Placa: string
    Fecha: string
    Tiempo: string
    
    DiasSemana: string [] = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

    constructor(Placa: string, Fecha: string, Tiempo: string){
        this.Placa = Placa
        this.Fecha = Fecha
        this.Tiempo = Tiempo
    }

    
    procesarDatos (): {} {

        let diaNumero: number = new Date(this.Fecha).getDay()
        let diaNombre: string = this.DiasSemana[diaNumero]
        let horaMinutos: string [] = this.Tiempo.split(':')

        return {
            "numero": this.Placa.slice(-1),
            "dia": diaNombre,
            "hora": parseInt(horaMinutos[0]),
            "minutos" : parseInt(horaMinutos[1])
        }
    }

    validarHorarios(): boolean {
        let datos: {} = this.procesarDatos();
        let hora: number = datos['hora']
        let minutos: number = datos['minutos']

        if((hora >= 6 && hora < 9) || (hora === 6 && minutos > 0) || (hora === 9 && minutos <= 30)){
            return false
        }

        if((hora >= 16 && hora < 21) || (hora === 16 && minutos > 0)){
            return false
        }
        
        return true
    }

    validarDiaPlaca(): boolean {
        let datos: {} = this.procesarDatos();

        let ultimoNumero: string = datos['numero']
        let diaCirculacion: string = datos['dia']

        console.log(ultimoNumero);
        console.log(diaCirculacion);
        
        
       
        if((ultimoNumero === '1' || ultimoNumero === '2') && diaCirculacion === 'Lunes'){
            return true
        }
        if((ultimoNumero === '3' || ultimoNumero === '4') && diaCirculacion === 'Martes'){
            return true
        }
        if((ultimoNumero === '5' || ultimoNumero === '6') && diaCirculacion === 'Miércoles'){
            return true
        }
        if((ultimoNumero === '7' || ultimoNumero === '8') && diaCirculacion === 'Jueves'){
            return true
        }
        if((ultimoNumero === '9' || ultimoNumero === '0') && diaCirculacion === 'Viernes'){
            return true
        }
        if(diaCirculacion === 'Sábado' || diaCirculacion === 'Domingo'){
            return true
        }

        return false
    }

    validarCirculacion(): string {
        let horario: boolean = this.validarHorarios()
        let diaPlaca: boolean = this.validarDiaPlaca()

        if(horario === true && diaPlaca === true){
            return 'Usted Puede Circular'
        }
        else{
            return 'Usted NO Puede Circular'
        }
    }
}

let ejecutar = new Vehiculo("IBA6049", "2024/03/08", "05:00")
console.log(ejecutar.validarCirculacion())
