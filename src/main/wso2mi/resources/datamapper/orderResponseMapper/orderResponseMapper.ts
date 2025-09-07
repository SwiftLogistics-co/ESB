import * as dmUtils from "./dm-utils";

/*
 * title : "response",
 * inputType : "XML",
 */
interface Response {
    status: string;
    orders?: {
        order: {
            id: number;
            product: string;
            quantity: number;
            status: string;
            address: string;
            route_id: number;
            created_at: string;
        }[];
    };
}

/*
 * title : "root",
 * outputType : "JSON",
 */
interface Root {
    orders: {
        id: number;
        product: string;
        quantity: number;
        status: string;
        address: string;
        route_id: number;
        created_at: string;
    }[];
}

/**
 * functionName : map_S_response_S_root
 * inputVariable : inputresponse
 */
export function mapFunction(input: Response): Root {
    return {
        orders: mapObjectArrayToObjectArray(input.orders?.order ?? [])
    };
}

function mapObjectArrayToObjectArray(order: Array<{
    id: number;
    product: string;
    quantity: number;
    status: string;
    address: string;
    route_id: number;
    created_at: string;
}>): Root["orders"] {
    return order.map(o => ({
        id: o.id,
        product: o.product,
        quantity: o.quantity,
        status: o.status,
        address: o.address,
        route_id: o.route_id,
        created_at: o.created_at
    }));
}
