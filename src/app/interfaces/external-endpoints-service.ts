import { Observable, Subject } from "rxjs";
import { PostModel } from "../models/post-model";

export interface ExternalEndpointsService {
    pushPost(): void;
}
