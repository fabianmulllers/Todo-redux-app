

export class Todo {

    public id: number;
    public text: string;
    public completado: boolean;

    constructor(texto: string){
        this.text = texto;
        this.id = Math.random();
        this.completado = false;
    }
}