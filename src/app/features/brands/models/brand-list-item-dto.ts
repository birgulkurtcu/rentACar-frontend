import {BrandsService} from "../services/brands.service";

export interface BrandListItemDto  {
  id: number;
  name: string;
  createdDate: Date | string;
  imageUrl: string;
  
  //backendden string olarak geleblir. biz oluşturursak da date olarak oluşturabiliriz.
}

/*
const brandListItemDto : BrandListItemDto = {
  id: 0,
  name: '',
  createdDate: "2024-05-09T08:18:10.356Z",
};

if(!(brandListItemDto.createdDate instanceof Date)){
  brandListItemDto.createdDate = new Date(brandListItemDto.createdDate);
}
*/


