import { Observable, Observer, Subject } from "rxjs";
import { PostModel } from "src/app/models/post-model";
import { ApiResponseType } from "../api-response-type";
import { ExternalEndpointsService } from "../external-endpoints-service";
import { PostModelType } from "../post-model-type";

export abstract class AbstractExternalEndpointsService<ApiResponseType, PostModelType> implements ExternalEndpointsService {

    abstract callApi() : Observable<ApiResponseType>;

    abstract getModelType(): string;

    abstract getMySubject(): Subject<PostModelType>;

    abstract myOnNextObserver(res: ApiResponseType): void;

    pushPost() {
        this.mypushPost();
    }

    private mypushPost(): void {
        this.callApi().subscribe(
        this.onNextObserver(),
        this.onErrorObserver()
        )
    }

    private onNextObserver(){
        const nextObsever = ((res: ApiResponseType) => {
            this.myOnNextObserver(res);
        });
    
        return nextObsever;
    }

    private onErrorObserver(){
        const errorObserver = ((error: any) => {    
          console.error(this.getModelType + ' Request failed with error')
          alert(error);
        });
    
        return errorObserver;
    }
}
