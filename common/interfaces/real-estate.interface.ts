export interface IRealEstate {
  id?: number;
  name: string;
  websiteUrl: string;
  startBuildingDate: Date;
  estimatedDateOfBuilding: Date;
  location: string;
  phoneNumber: string;
  numberOfFlats: number;
  parking: boolean;
  type: string;
  buildingsSections: string;
  documents: [];
  heatingType: string;
  images: string[];
  buildingTechnology: string;
  floors: number;
  createdAt?: Date;
  updatedAt?: Date;
  coordinates: number[];
  price: number;
  priceForSqM: number;
  currency: string;
  lending: boolean;
  installments: boolean;
  mortgage: boolean;
  salesStatus: 'not started' | 'booked' | 'started';
  apartmentState:
    | 'with rough repairs'
    | 'under repair'
    | 'no repair'
    | 'with repair';
  city: string;
  ownerId?: string;
  annualReturn?: number;
  duration?: number;
}
