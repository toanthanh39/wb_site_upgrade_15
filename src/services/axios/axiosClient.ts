import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import axiosRetry from "axios-retry";

const source = axios.CancelToken.source();

const AxiosInstance = axios.create({
	timeout: 1000 * 60,
	headers: {
		"Content-Type": "application/json",
	},
	"axios-retry": {
		retries: 3, // Truyền số lần retry ở đây
	},
	cancelToken: source.token,
});
axiosRetry(AxiosInstance, {
	retries: AxiosInstance.defaults["axios-retry"]?.retries || 3,

	retryCondition: (error) => {
		const status = error?.response?.status || 500;
		const dataError = error.response?.data;

		if (status === 401) {
			return false;
		}

		if (status === 400 && dataError) {
			const err = { ...dataError } as any;
			if (err?.error?.includes("error_jwt_blacklisted")) {
				return false;
			}
		}
		if (status >= 500) {
			return true;
		}

		if (status >= 300 && status < 400) {
			return true;
		}

		return false;
	},
	retryDelay: (retryCount: number) => {
		return retryCount * 1000; // delay between retries (1s)
	},

	shouldResetTimeout: true,
	onRetry: (retryCount: number, error, requestConfig) => {
		// requestConfig.data = JSON.parse(
		// 	JSON.stringify(AxiosInstance.defaults.data)
		// );
	},
});

AxiosInstance.interceptors.request.use(async (request) => {
	const requestUrl = request.url || "";

	if (!requestUrl.includes("public") && !requestUrl.includes("login")) {
		let token = "";

		/*set token  */
		token = "";

		if (token.length) {
			request.headers.Authorization = `${token}`;
		}
	}

	if (request.method === "get") {
		request.params = {
			...request.params,
		};
	}

	return request;
});
let isSignOutCalled = false;

AxiosInstance.interceptors.response.use(
	(response: AxiosResponse) => {
		return response;
	},
	async (error) => {
		if (error.response) {
			if (error.response.status >= 500) {
				throw new Error("Server Error");
			}

			const isTokenExpired = error.response.status === 401;
			const isTokenBacklist =
				error.response.status === 400 &&
				error.response?.data?.error?.includes("error_jwt_blacklisted");

			if (isTokenExpired || isTokenBacklist) {
				if (!isSignOutCalled) {
					isSignOutCalled = true;
					if (window.location.pathname.includes("/pos")) {
						window.location.href = "/pos";
					} else {
					}
				}
			}
		}

		return Promise.reject(error);
	}
);

export default AxiosInstance;
