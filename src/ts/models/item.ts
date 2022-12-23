export class Item {
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
}
