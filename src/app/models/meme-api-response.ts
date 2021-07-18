import { ExternalDeserialazable } from "../interfaces/external-deserialazable";

export class MemeApiResponse implements ExternalDeserialazable {

    postLink: string;
    subreddit: string;
    title: string;
    url: string;
    nsfw: string;
    spoiler: string;
    ups: string;
    preview: string[];

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}