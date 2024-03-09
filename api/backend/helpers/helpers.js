"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers = {
    procesarDatos: function (Placa, Fecha, Tiempo, DiasSemana) {
        var diaNumero = new Date(Fecha).getDay();
        var diaNombre = DiasSemana[diaNumero];
        var horaMinutos = Tiempo.split(':');
        return {
            "numero": Placa.slice(-1),
            "dia": diaNombre,
            "hora": parseInt(horaMinutos[0]),
            "minutos": parseInt(horaMinutos[1])
        };
    },
    validarHorarios: function (Placa, Fecha, Tiempo, DiasSemana) {
        var datos = this.procesarDatos(Placa, Fecha, Tiempo, DiasSemana);
        var hora = datos['hora'];
        var minutos = datos['minutos'];
        if ((hora >= 6 && hora < 9) || (hora === 6 && minutos > 0) || (hora === 9 && minutos <= 30)) {
            return false;
        }
        if ((hora >= 16 && hora < 21) || (hora === 16 && minutos > 0)) {
            return false;
        }
        return true;
    },
    validarDiaPlaca: function (Placa, Fecha, Tiempo, DiasSemana) {
        var datos = this.procesarDatos(Placa, Fecha, Tiempo, DiasSemana);
        var ultimoNumero = datos['numero'];
        var diaCirculacion = datos['dia'];
        if ((ultimoNumero === '1' || ultimoNumero === '2') && diaCirculacion === 'Lunes') {
            return true;
        }
        if ((ultimoNumero === '3' || ultimoNumero === '4') && diaCirculacion === 'Martes') {
            return true;
        }
        if ((ultimoNumero === '5' || ultimoNumero === '6') && diaCirculacion === 'Miércoles') {
            return true;
        }
        if ((ultimoNumero === '7' || ultimoNumero === '8') && diaCirculacion === 'Jueves') {
            return true;
        }
        if ((ultimoNumero === '9' || ultimoNumero === '0') && diaCirculacion === 'Viernes') {
            return true;
        }
        if (diaCirculacion === 'Sábado' || diaCirculacion === 'Domingo') {
            return true;
        }
        return false;
    }
};
exports.default = helpers;
