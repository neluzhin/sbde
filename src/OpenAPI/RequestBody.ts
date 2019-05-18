import {SerializableInterface} from "../Serializer/SerializableInterface";
import {MediaType} from "./MediaType";
import {SafeEditableInterface} from "./SafeEditableInterface";

export interface RequestBodyInterface {
    content: { [_: string]: MediaType; };

    description?: string;

    required?: boolean;
}

/**
 * Describes a single request body.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#request-body-object
 */
export class RequestBody implements RequestBodyInterface, SerializableInterface, SafeEditableInterface {
    public constructor(properties: RequestBodyInterface) {
        Object.assign(this, properties);
    }

    /**
     * **REQUIRED**. The content of the request body. The key is a media type or [media type range](https://tools.ietf.org/html/rfc7231#appendix-D) and the value describes it. For requests that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/*
     */
    public content: { [_: string]: MediaType; };

    /**
     * A brief description of the request body. This could contain examples of use. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
     */
    public description?: string;

    /**
     * Determines if the request body is required in the request. Defaults to `false`.
     */
    public required: boolean;

    /**
     * @inheritDoc
     */
    public cloneAndEdit<T>(callback: (object: T) => void): T {
        const copy = require("deepcopy")(this);

        callback(copy);

        return copy;
    }

    public serialize(): { [p: string]: any } {
        const result = {} as { [p: string]: any };

        if (this.content !== undefined) {
            result.content = this.content;
        }

        if (this.description !== undefined) {
            result.description = this.description;
        }

        if (this.required !== undefined) {
            result.required = this.required;
        }

        return result;
    }
}
