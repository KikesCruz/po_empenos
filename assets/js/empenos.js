let empenosMap = new WeakMap();

export default class Empeno {
    constructor(monto, margen) {
        empenosMap.set(this, {
            _monto: monto,
            _margen: margen
        })
    }

    set estableMonto(valor) {
        empenosMap.get(this)._monto = valor;
    }
    get _monto() {
        return empenosMap.get(this)._monto;
    }


    set estableMargen(valor) {
        empenosMap.get(this)._margen = valor;
    }
    get _margen() {
        return empenosMap.get(this)._margen;
    }

    calcula_ingreso() {
        return this._monto * this._margen;
    }

    monto_ingreso() {
        return this._monto + this.calcula_ingreso();
    }
    apartado() {
        return this.monto_ingreso() * 0.10;
    }

    entregar() {
        return this._monto - this.apartado();
    }

    plazo() {
        return this.entregar() < 2499 ? '1 MES' : '2 MESES'
    }



}