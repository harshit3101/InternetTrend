import { HttpClient } from "@angular/common/http";
import { Observable, Observer, Subject } from "rxjs";
import { MyConstants } from "src/app/constants/my-constants";
import { PostModel } from "src/app/models/post-model";
import { ApiResponseType } from "../api-response-type";
import { ExternalEndpointsService } from "../external-endpoints-service";
import { PostModelType } from "../post-model-type";

export abstract class AbstractExternalEndpointsService<ApiResponseType, PostModelType> implements ExternalEndpointsService {

    private myHttp: HttpClient;

    constructor(http: HttpClient){
        this.myHttp = http;
    }

    abstract getMySubject(apiType: string): Subject<PostModelType>;

    abstract myOnNextObserver(res: ApiResponseType, apiType: string): void;

    pushPost(apiType: string, apiEndpoint: string, method: string, payload: string) {
        this.mypushPost(apiType, apiEndpoint, method, payload);
    }

    private mypushPost(apiType: string, apiEndpoint: string, method: string, payload: string): void {
        this.callApi(apiType, apiEndpoint, method, payload).subscribe(
        this.onNextObserver(apiType),
        this.onErrorObserver(apiType)
        )
    }

    private getHttpClient(): HttpClient {
        return this.myHttp;
    }

    private callApi(apiType: string, apiEndpoint: string, method: string, payload: string) : Observable<ApiResponseType> {
        if (method === MyConstants.GET) {
            return this.getHttpClient().get<ApiResponseType>(apiEndpoint);
        }

        return this.getHttpClient().get<ApiResponseType>(apiEndpoint);
    }

    private onNextObserver(apiType: string){
        const nextObsever = ((res: ApiResponseType) => {
            this.myOnNextObserver(res, apiType);
        });
    
        return nextObsever;
    }

    private onErrorObserver(apiType: string){
        const errorObserver = ((error: any) => {    
          console.error(apiType + ' Request failed with error')
          alert("Something went wrong for the request. Response is  "+ error);
        });
    
        return errorObserver;
    }
}
