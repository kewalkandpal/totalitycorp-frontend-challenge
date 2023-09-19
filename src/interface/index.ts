export interface productInterface {
    id: number,
    title:string,
    description:string,
    discountPercentage:number,
    amount:number,
    price: number,
    rating: number,
    brand: string,
    category: string,
    thumbnail: string,
};

export interface stateInterface {
    cart:productInterface[],
    user:null,
    image:string
  }
