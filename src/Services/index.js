import axios from "axios";
import qs from "qs";

const getAuthToken = (options) => {
    let result = {};
    result = {
        "x-rapidapi-key": "1b8e387336msh7cdeecde067c84fp150e1ajsnab0c10d6a617",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        useQueryString: true,
    };
    result["Content-Type"] = options.formData
        ? "application/x-www-form-urlencoded"
        : "application/json";
    return result;
};

const collectResponse = (response, options, status) => {
    return {
        response: response?.data,
        type: response?.status,
        message:
            (response?.status && options.message[response.status]) || false,
        headers: response?.headers,
        key: options.key,
        group: options.group,
        ...status,
    };
};

const serviceApi = async (options) => {
    let axiosConfig = {
        baseURL: process.env.REACT_APP_BASE_URL,
        paramsSerializer: (params) => {
            if (options.qs) {
                return qs.stringify(params);
            }
        },
        timeout: 100000,
        cancelToken: options.cancelToken,
    };

    axiosConfig.headers = getAuthToken(options);
    const instance = axios.create(axiosConfig);
    return await instance(options)
        .then((res) => {
            return options.resType
                ? res
                : res?.data &&
                      collectResponse(res, options, {
                          success: true,
                          error: false,
                      });
        })
        .catch((err) => {
            return options.resType
                ? err.response
                : collectResponse(err.response, options, {
                      success: false,
                      error: true,
                  });
        });
};

export default serviceApi;
