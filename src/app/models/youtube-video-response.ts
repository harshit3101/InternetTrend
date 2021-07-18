import { ExternalDeserialazable } from "../interfaces/external-deserialazable";


export class YoutubeVideoResponse implements ExternalDeserialazable {

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
