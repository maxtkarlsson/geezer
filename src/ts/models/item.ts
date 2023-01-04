export class Item {
  constructor(
    public articleNumber: string,
    public title: string,
    public imageUrl: string,
    public imageUrlLarge: string,
    public desc: string,
    public descLong: string,
    public price: number,
    public size: string,
    public sizeValue: number,
    public infoBtn: string,
    public addBtn: string,
    public quantity: number
  ) {}
}
