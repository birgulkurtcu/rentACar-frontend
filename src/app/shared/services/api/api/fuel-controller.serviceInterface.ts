/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { CreateFuelRequest } from '../model/models';
import { CreatedFuelResponse } from '../model/models';
import { GetAllFuelResponse } from '../model/models';
import { GetFuelByIdResponse } from '../model/models';
import { UpdateFuelRequest } from '../model/models';
import { UpdateFuelResponse } from '../model/models';
import { ValidationProblemDetails } from '../model/models';


import { Configuration }                                     from '../configuration';


export interface CreateFuelRequestParams {
    createFuelRequest: CreateFuelRequest;
}

export interface DeleteFuelByIdRequestParams {
    id: number;
}

export interface GetFuelByIdRequestParams {
    id: number;
}

export interface UpdateFuelByIdRequestParams {
    id: number;
    updateFuelRequest: UpdateFuelRequest;
}


export interface FuelControllerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
* @param requestParameters
     */
    createFuel(requestParameters: CreateFuelRequestParams, extraHttpRequestParams?: any): Observable<CreatedFuelResponse>;

    /**
     * 
     * 
* @param requestParameters
     */
    deleteFuelById(requestParameters: DeleteFuelByIdRequestParams, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
*/
    getAllFuels(extraHttpRequestParams?: any): Observable<Array<GetAllFuelResponse>>;

    /**
     * 
     * 
* @param requestParameters
     */
    getFuelById(requestParameters: GetFuelByIdRequestParams, extraHttpRequestParams?: any): Observable<GetFuelByIdResponse>;

    /**
     * 
     * 
* @param requestParameters
     */
    updateFuelById(requestParameters: UpdateFuelByIdRequestParams, extraHttpRequestParams?: any): Observable<UpdateFuelResponse>;

}
