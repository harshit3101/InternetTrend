import { Observable, Subject } from "rxjs";
import { PostModel } from "../models/post-model";

export interface ExternalEndpointsService {
    pushPost(apiType: string, apiEndpoint: string, method: string, payload: string): void;
}
