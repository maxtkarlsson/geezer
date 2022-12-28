/*export class Item {
  articleNumber: string;
  title: string;
  imageUrl: string;
  desc: string;
  price: Number;
  size: string;
  sizeValue: number;
  infoBtn: string;
  addBtn: string;

  constructor(
    articleNumber: string,
    title: string,
    imageUrl: string,
    desc: string,
    price: number,
    size: string,
    sizeValue: number,
    infoBtn: string,
    addBtn: string
  ) {
    this.articleNumber = articleNumber;
    this.title = title;
    this.imageUrl = imageUrl;
    this.desc = desc;
    this.price = price;
    this.size = size;
    this.sizeValue = sizeValue;
    this.infoBtn = infoBtn;
    this.addBtn = addBtn;
  }
}*/

// New version down below, old version up above
// Changed the constructor to public to make them globally accessible

export class Item {
  constructor(
    public articleNumber: string,
    public title: string,
    public imageUrl: string,
    public imageUrlLarge: string,
    public desc: string,
    public descLong : string,
    public price: number,
    public size: string,
    public sizeValue: number,
    public infoBtn: string,
    public addBtn: string,
    public quantity: number
  ) {}
}
