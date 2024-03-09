var Vehiculo = /** @class */ (function () {
    function Vehiculo(Placa, Fecha, Tiempo) {
        this.DiasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        this.Placa = Placa;
        this.Fecha = Fecha;
        this.Tiempo = Tiempo;
    }
    Vehiculo.prototype.procesarDatos = function () {
        var diaNumero = new Date(this.Fecha).getDay();
        var diaNombre = this.DiasSemana[diaNumero];
        var horaMinutos = this.Tiempo.split(':');
        return {
            "numero": this.Placa.slice(-1),
            "dia": diaNombre,
            "hora": parseInt(horaMinutos[0]),
            "minutos": parseInt(horaMinutos[1])
        };
    };
    Vehiculo.prototype.validarHorarios = function () {
        var datos = this.procesarDatos();
        var hora = datos['hora'];
        var minutos = datos['minutos'];
        if ((hora >= 6 && hora < 9) || (hora === 6 && minutos > 0) || (hora === 9 && minutos <= 30)) {
            return false;
        }
        if ((hora >= 16 && hora < 21) || (hora === 16 && minutos > 0)) {
            return false;
        }
        return true;
    };
    Vehiculo.prototype.validarDiaPlaca = function () {
        var datos = this.procesarDatos();
        var ultimoNumero = datos['numero'];
        var diaCirculacion = datos['dia'];
        console.log(ultimoNumero);
        console.log(diaCirculacion);
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
    };
    Vehiculo.prototype.validarCirculacion = function () {
        var horario = this.validarHorarios();
        var diaPlaca = this.validarDiaPlaca();
        if (horario === true && diaPlaca === true) {
            return 'Usted Puede Circular';
        }
        else {
            return 'Usted NO Puede Circular';
        }
    };
    return Vehiculo;
}());
var ejecutar = new Vehiculo("IBA6049", "2024/03/08", "05:00");
console.log(ejecutar.validarCirculacion());
