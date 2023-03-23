export interface Rental {
    id: number,
    user: number,
    bikeName: number,
    rentedOn: Date,
    price: number,
    rentedUntil: Date,
    remark: string,
    
}

export interface rentModel{
    userId: number,
    bikeId: number,
    rentedOn: Date,
    price: number,
    rentedUntil: Date ,
    remarks: string
  }