import { ExpresionXQ } from "../Arbol/ExpresionXQ";
import { InstruccionXQ } from "../Arbol/InstruccionXQ";
import { EntornoXQ } from "../Entorno/Entorno";
import { SimboloXQ } from "../Entorno/SimboloXQ";
import { EnumTipo, TipoXQ } from "../Entorno/TipoXQ";

export class DeclaracionXQ extends InstruccionXQ {
    tipo?:TipoXQ;
    id:string;
    valor?:ExpresionXQ;

    constructor(id:string, v:ExpresionXQ, l:number, c:number) {
        super();
        this.id = id;
        this.valor = v;
        this.linea = l;
        this.columna = c;
        this.tipo = v.tipo;
    }

    agregarValor(v: ExpresionXQ) {
        this.valor = v;
    }
    
    ejecutar(ent: EntornoXQ): Object {
        if(this.valor != null && this.valor != undefined) {
            let res:ExpresionXQ = this.valor.getValor(ent);
            let sim:SimboloXQ;
            switch (this.tipo.tipo) {
                case EnumTipo.entero:
                    if (res.tipo.tipo == EnumTipo.entero) {
                        sim = new SimboloXQ(this.tipo, res.valor);
                        ent.insertar(this.id, sim, this.linea, this.columna, "La variable");
                    }
                    break;
                case EnumTipo.caracter:
                    if (res.tipo.tipo == EnumTipo.caracter) {
                        sim = new SimboloXQ(this.tipo, res.valor);
                        ent.insertar(this.id, sim, this.linea, this.columna, "La variable");
                    }
                    break;
                case EnumTipo.booleano:
                    if (res.tipo.tipo == EnumTipo.booleano) {
                        sim = new SimboloXQ(this.tipo, res.valor);
                        ent.insertar(this.id, sim, this.linea, this.columna, "La variable");
                    }
                    break;
                case EnumTipo.doble:
                    if (res.tipo.tipo == EnumTipo.doble) {
                        sim = new SimboloXQ(this.tipo, res.valor);
                        ent.insertar(this.id, sim, this.linea, this.columna, "La variable");
                    }
                    break;
                case EnumTipo.cadena:
                    if (res.tipo.tipo == EnumTipo.cadena) {
                        sim = new SimboloXQ(this.tipo, res.valor);
                        ent.insertar(this.id, sim, this.linea, this.columna, "La variable");
                    }
                    break;
                case EnumTipo.XPath:
                    if (res.tipo.tipo == EnumTipo.XPath) {
                        sim = new SimboloXQ(this.tipo, res.valor);
                        ent.insertar(this.id, sim, this.linea, this.columna, "La variable");
                    }
                    break;
            }
        } else {
            switch (this.tipo.tipo) {
                case EnumTipo.entero:
                    ent.insertar(this.id, new SimboloXQ(this.tipo, 0), this.linea, this.columna, 'La variable');
                    break;
                case EnumTipo.caracter:
                    ent.insertar(this.id, new SimboloXQ(this.tipo, '\0'), this.linea, this.columna, 'La variable');
                    break;
                case EnumTipo.booleano:
                    ent.insertar(this.id, new SimboloXQ(this.tipo, false), this.linea, this.columna, 'La variable');
                    break;
                case EnumTipo.doble:
                    ent.insertar(this.id, new SimboloXQ(this.tipo, 0.0), this.linea, this.columna, 'La variable');
                    break;
                case EnumTipo.cadena:
                    ent.insertar(this.id, new SimboloXQ(this.tipo, ""), this.linea, this.columna, 'La variable');
                    break;
                case EnumTipo.XPath:
                    ent.insertar(this.id, new SimboloXQ(this.tipo, ""), this.linea, this.columna, 'La variable');
                    break;
            }
        }

        return null;
    }
}