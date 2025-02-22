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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { CreateCarRequest } from '../model/create-car-request';
// @ts-ignore
import { CreatedCarResponse } from '../model/created-car-response';
// @ts-ignore
import { GetAllCarResponse } from '../model/get-all-car-response';
// @ts-ignore
import { GetCarByIdResponse } from '../model/get-car-by-id-response';
// @ts-ignore
import { UpdateCarRequest } from '../model/update-car-request';
// @ts-ignore
import { UpdateCarResponse } from '../model/update-car-response';
// @ts-ignore
import { ValidationProblemDetails } from '../model/validation-problem-details';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import {
    CarControllerServiceInterface,
    CreateCarRequestParams,
    DeleteCarByIdRequestParams,
    GetCarByIdRequestParams,
    UpdateCarByIdRequestParams
} from './car-controller.serviceInterface';



@Injectable({
  providedIn: 'root'
})
export class CarControllerService implements CarControllerServiceInterface {

    protected basePath = 'http://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (Array.isArray(basePath) && basePath.length > 0) {
                basePath = basePath[0];
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substring(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createCar(requestParameters: CreateCarRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<CreatedCarResponse>;
    public createCar(requestParameters: CreateCarRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<CreatedCarResponse>>;
    public createCar(requestParameters: CreateCarRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<CreatedCarResponse>>;
    public createCar(requestParameters: CreateCarRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        const createCarRequest = requestParameters.createCarRequest;
        if (createCarRequest === null || createCarRequest === undefined) {
            throw new Error('Required parameter createCarRequest was null or undefined when calling createCar.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/cars`;
        return this.httpClient.request<CreatedCarResponse>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: createCarRequest,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteCarById(requestParameters: DeleteCarByIdRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<any>;
    public deleteCarById(requestParameters: DeleteCarByIdRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<any>>;
    public deleteCarById(requestParameters: DeleteCarByIdRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<any>>;
    public deleteCarById(requestParameters: DeleteCarByIdRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        const id = requestParameters.id;
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteCarById.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/cars/delete/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int32"})}`;
        return this.httpClient.request<any>('delete', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllCars(observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<Array<GetAllCarResponse>>;
    public getAllCars(observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Array<GetAllCarResponse>>>;
    public getAllCars(observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<Array<GetAllCarResponse>>>;
    public getAllCars(observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*',
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/cars`;
        return this.httpClient.request<Array<GetAllCarResponse>>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCarById(requestParameters: GetCarByIdRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<GetCarByIdResponse>;
    public getCarById(requestParameters: GetCarByIdRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<GetCarByIdResponse>>;
    public getCarById(requestParameters: GetCarByIdRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<GetCarByIdResponse>>;
    public getCarById(requestParameters: GetCarByIdRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        const id = requestParameters.id;
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getCarById.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/cars/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int32"})}`;
        return this.httpClient.request<GetCarByIdResponse>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateCarById(requestParameters: UpdateCarByIdRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<UpdateCarResponse>;
    public updateCarById(requestParameters: UpdateCarByIdRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<UpdateCarResponse>>;
    public updateCarById(requestParameters: UpdateCarByIdRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<UpdateCarResponse>>;
    public updateCarById(requestParameters: UpdateCarByIdRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        const id = requestParameters.id;
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateCarById.');
        }
        const updateCarRequest = requestParameters.updateCarRequest;
        if (updateCarRequest === null || updateCarRequest === undefined) {
            throw new Error('Required parameter updateCarRequest was null or undefined when calling updateCarById.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/cars/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int32"})}`;
        return this.httpClient.request<UpdateCarResponse>('put', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: updateCarRequest,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

}
