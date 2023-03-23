export interface Bike {
    id: number;
    name: string;
    numberPlate: string;
    brandId: number;
    brand?: string;
    rentalStatus: {
      id: number;
      value: string;
    };
    rating: number;
    kmRun: number;
    description: string;
    milage: number;
    imageUrl: string;
    price: number;
  
}