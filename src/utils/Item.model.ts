export class ItemList{
    public name: string;
    public description: string;
    public image: string;
    public amount: number;
    public quantity: number;
    public detail: string[];

    constructor(name:string, description: string, image: string, amount:number, quantity: number, detail: string[]){
        this.name=name;
        this.description=description;
        this.image= image;
        this.amount=amount;
        this.quantity=quantity;
        this.detail=detail;
    }
}