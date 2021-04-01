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
    getCountryClear: ({ dispatch }) => {
        servicesAction(dispatch).reduxClear({
            reducer: "service",
            group: "country",
            key: "countries",
            type: "CLEAR",
        });
    },
    getLatestTotal: ({ dispatch }) => {
        servicesAction(dispatch).reduxFetch({
            url: "/totals",
            method: "GET",
            reducer: "service",
            group: "country",
            key: "getLatestTotal",
            message: {
                200: {
                    mode: {
                        use: "alert",
                        type: "success",
                        timeOut: 3000,
                    },
                    text: "Success Get Ingredients",
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
    getLatestTotalClear: ({ dispatch }) => {
        servicesAction(dispatch).reduxClear({
            reducer: "service",
            group: "country",
            key: "getLatestTotal",
            type: "CLEAR",
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
    getCountryByNameClear: ({ dispatch }) => {
        servicesAction(dispatch).reduxClear({
            reducer: "service",
            group: "country",
            key: "countryName",
            type: "CLEAR",
        });
    },
};
export default service;
