import {SerializableInterface} from "../../Serializer/SerializableInterface";
import {SecurityScheme, SecuritySchemeInterface} from "./SecurityScheme";

export interface HttpSecuritySchemeInterface extends SecuritySchemeInterface {
    bearerFormat?: string;

    scheme: string;
}

/**
 * @inheritDoc
 */
export class HttpSecurityScheme extends SecurityScheme implements HttpSecuritySchemeInterface, SerializableInterface {

    constructor(properties: HttpSecuritySchemeInterface) {
        super(properties);

        Object.assign(this, properties);
    }

    /**
     * A hint to the client to identify how the bearer token is formatted. Bearer tokens are usually generated by an authorization server, so this information is primarily for documentation purposes.
     */
    public bearerFormat?: string;

    /**
     * **REQUIRED**. The name of the HTTP Authorization scheme to be used in the [Authorization header as defined in RFC7235](https://tools.ietf.org/html/rfc7235#section-5.1).
     */
    public scheme: string;

    /**
     * @inheritDoc
     */
    public readonly type: string = "http";

    public serialize(): { [p: string]: any } {
        return this;
    }
}
