import * as dmUtils from "./dm-utils";

/*
 * title : "root",
 * inputType : "JSON",
 */
interface Root {
    response: {
        driver_id: number;
        route_id: number;
        status: string;
        orders: {
            order: {
                id: number;
                client_id: number;
                route_id: number;
                product: string;
                quantity: number;
                status: string;
                created_at: string;
                address: string;
                coordinate: {
                    lat: number;
                    lng: number;
                };
            }[];
        };
    };
}

/*
 * title : "root",
 * outputType : "JSON",
 */
interface OutputRoot {
    response: {
        status: string;
        orders: {
            order: {
                order_id: number;
                client_id: number;
                route_id: number;
                product: string;
                quantity: number;
                status: string;
                created_at: string;
                address: string;
                coordinate: {
                    lat: number;
                    lng: number;
                };
            }[];
        };
    };
}

/**
 * functionName : map_S_root_S_root
 * inputVariable : inputroot
 */
export function mapFunction(input: Root): OutputRoot {
    return {
        response: {
            status: input.response.status,
            orders: {
                order: input.response.orders.order
                    .map((orderItem) => {
                        return {
                            order_id: orderItem.id,
                            client_id: orderItem.client_id,
                            route_id: orderItem.route_id,
                            created_at: orderItem.created_at,
                            address: orderItem.address,
                            coordinate: {
                                lat: orderItem.coordinate.lat,
                                lng: orderItem.coordinate.lng
                            },
                            product: orderItem.product,
                            quantity: orderItem.quantity,
                            status: orderItem.status
                        }
                    })
            }
        }
    };
}
