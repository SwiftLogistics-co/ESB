import * as dmUtils from "./dm-utils";

/*
 * title : "root",
 * inputType : "JSON",
 */
interface Root {
    username: string;
    password: string;
}

/*
 * title : "login",
 * outputType : "XML",
 */
interface Login {
    email: string;
    password: string;
}

/**
 * functionName : map_S_root_S_login
 * inputVariable : inputroot
 */
export function mapFunction(input: Root): Login {
    return {
        email: input.username,
        password: input.password
    };
}
