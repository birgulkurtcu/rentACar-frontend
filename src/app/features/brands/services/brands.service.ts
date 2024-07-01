import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BrandListItemDto} from "../models/brand-list-item-dto";
import {environment} from "../../../../environments/environment";
import {GetAllBrandResponse, GetBrandByIdRequestParams, GetBrandByIdResponse} from "../../../shared/services/api";

@Injectable({
  providedIn: 'root'
}) //singleton
export class BrandsService {
  private readonly controllerUrl = `${environment.apiUrl}/api/v1/brands`;
/*  data =
    [
      { id: 1, name: 'Toyota'},
      { id: 2, name: 'Hyundai'},
      { id: 3, name: 'Ford'},
      { id: 4, name: 'Mercedes'},
    ];*/

  constructor(private httpClient: HttpClient) { }

  getBrands(): Observable<GetAllBrandResponse[]> {
    return this.httpClient.get<GetAllBrandResponse[]>(this.controllerUrl);
  };

  getBrandById(request: GetBrandByIdRequestParams): Observable<GetBrandByIdResponse>{
    return this.httpClient.get<GetBrandByIdResponse>(`${this.controllerUrl}/${request.id}`);
  }
}
