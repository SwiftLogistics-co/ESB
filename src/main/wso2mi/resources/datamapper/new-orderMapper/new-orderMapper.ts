import * as dmUtils from "./dm-utils";

/*
 * title : "root",
 * inputType : "JSON",
 */
interface Root {
    order: {
        product: string;
        quantity: number;
        address: string;
        route: number;
        cordinate: number[];
    };
}

/*
 * title : "order",
 * outputType : "XML",
 */
interface Order {
    product: string;
    quantity: number;
    address: string;
    route_id: number;
    coordinates: {
        lat: number;
        lng: number;
    };
}

/**
 * functionName : map_S_root_S_order
 * inputVariable : inputroot
 */
export function mapFunction(input: Root): Order {
    return {
        product: input.order.product,
        quantity: input.order.quantity,
        address: input.order.address,
        route_id: input.order.route,
        coordinates: {
            lat: input.order.cordinate[0],
            lng: input.order.cordinate[1]
        }
    };
}
