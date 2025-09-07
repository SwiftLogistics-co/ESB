import * as dmUtils from "./dm-utils";

/*
 * title : "response",
 * inputType : "XML",
 */
interface Response {
    status: string;
    message: string;
    user: {
        id: number;
        email: string;
        sessionToken: string;
    };
}

/*
 * title : "root",
 * outputType : "JSON",
 */
interface Root {
    status: string;
    message: string;
    accessToken: string;
    user: {
        id: string;
        username: string;
        name: string;
    };
}

/**
 * functionName : map_S_response_S_root
 * inputVariable : inputresponse
 */
export function mapFunction(input: Response): Root {
    return {
        status: input.status,
        message: input.message,
        user: {
            name: "kasun",
            username: input.user.email,
            id: mapNumberToString(input.user.id)
        },
        accessToken: input.user.sessionToken
    };
}

function mapNumberToString(id: number): string {
    return dmUtils.numberToString(id);
}
