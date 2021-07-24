import { PostModelType } from "../interfaces/post-model-type";

export class PostModel implements PostModelType{
    type: string;
    data: string;
    url: string;

    constructor(apiType: string) {
        this.type = apiType;
    }
}
