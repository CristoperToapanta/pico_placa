let helpers = {

    procesarDatos(Placa: string, Fecha: string, Tiempo: string, DiasSemana: string[]): {} {

        let diaNumero: number = new Date(Fecha).getDay()
        let diaNombre: string = DiasSemana[diaNumero]
        let horaMinutos: string[] = Tiempo.split(':')

        return {
            "numero": Placa.slice(-1),
            "dia": diaNombre,
            "hora": parseInt(horaMinutos[0]),
            "minutos": parseInt(horaMinutos[1])
        }

    },


    validarHorarios(Placa: string, Fecha: string, Tiempo: string, DiasSemana: string[]): boolean {

        let datos: {} = this.procesarDatos(Placa, Fecha, Tiempo, DiasSemana);
        let hora: number = datos['hora']
        let minutos: number = datos['minutos']

        if ((hora >= 6 && hora < 9) || (hora === 6 && minutos > 0) || (hora === 9 && minutos <= 30)) {
            return false
        }

        if ((hora >= 16 && hora < 21) || (hora === 16 && minutos > 0)) {
            return false
        }

        return true
    },

    validarDiaPlaca(Placa: string, Fecha: string, Tiempo: string, DiasSemana: string[]): boolean {

        let datos: {} = this.procesarDatos(Placa, Fecha, Tiempo, DiasSemana);

        let ultimoNumero: string = datos['numero']
        let diaCirculacion: string = datos['dia']

        if ((ultimoNumero === '1' || ultimoNumero === '2') && diaCirculacion === 'Lunes') {
            return true
        }
        if ((ultimoNumero === '3' || ultimoNumero === '4') && diaCirculacion === 'Martes') {
            return true
        }
        if ((ultimoNumero === '5' || ultimoNumero === '6') && diaCirculacion === 'Miércoles') {
            return true
        }
        if ((ultimoNumero === '7' || ultimoNumero === '8') && diaCirculacion === 'Jueves') {
            return true
        }
        if ((ultimoNumero === '9' || ultimoNumero === '0') && diaCirculacion === 'Viernes') {
            return true
        }
        if (diaCirculacion === 'Sábado' || diaCirculacion === 'Domingo') {
            return true
        }

        return false
    }

}

export default helpers;