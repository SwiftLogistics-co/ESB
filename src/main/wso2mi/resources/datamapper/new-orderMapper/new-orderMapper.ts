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
}

/**
 * functionName : map_S_root_S_order
 * inputVariable : inputroot
 */
export function mapFunction(input: Root): Order {
    return {
        product: input.order.product,
        quantity: input.order.quantity,
        address: input.order.address
    };
}
