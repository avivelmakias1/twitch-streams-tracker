import Cookies from "js-cookie";

export function getAccessToken() {
	return Cookies.get("at");
}

export function setAccessToken(acessToken) {
	Cookies.set("at", acessToken, { expires: 7 });
}
