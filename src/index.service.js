import { servicesAction } from "./Reducers";

const service = {
    getCountry: ({ dispatch }) => {
        servicesAction(dispatch).reduxFetch({
            url: "/help/countries",
            method: "GET",
            reducer: "service",
            group: "country",
            key: "countries",
            message: {
                200: {
                    mode: {
                        use: "alert",
                        type: "success",
                        timeOut: 3000,
                    },
                    text: "Success Get Ingredients",
                },
                401: {
                    mode: {
                        use: "alert",
                        type: "danger",
                        timeOut: 3000,
                    },
                    text: "",
                },
                400: {
                    mode: {
                        use: "alert",
                        type: "danger",
                        timeOut: 3000,
                    },
                    text: "Terjadi kesalahan, harap mencoba beberapa saat lagi",
                },
            },
        });
    },
    getCountryByName: ({ dispatch, params }) => {
        servicesAction(dispatch).reduxFetch({
            url: "/country",
            params: params,
            method: "GET",
            qs: true,
            reducer: "service",
            group: "country",
            key: "countryName",
            message: {
                200: {
                    mode: {
                        use: "alert",
                        type: "success",
                        timeOut: 3000,
                    },
                    text: "Success Get Ingredients",
                },
                401: {
                    mode: {
                        use: "alert",
                        type: "danger",
                        timeOut: 3000,
                    },
                    text: "",
                },
                400: {
                    mode: {
                        use: "alert",
                        type: "danger",
                        timeOut: 3000,
                    },
                    text: "Terjadi kesalahan, harap mencoba beberapa saat lagi",
                },
            },
        });
    },
};
export default service;
