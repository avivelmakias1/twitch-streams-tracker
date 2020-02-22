import TwitchClient from "twitch";

const clientID = "nzym4b1urfjxxllqhqotbthtxt2pnm";

export async function createTwitchConnection(accessToken) {
	return TwitchClient.withCredentials(clientID, accessToken);
}

export async function validateUser() {
	const res = await getUserValidationURL(
		clientID,
		"http://localhost:3000/auth/twitch/callback",
		"token",
		"channel:read:subscriptions+user:edit+user:read:email"
	);
	window.location.replace(res.url);
}

export async function getUserValidationURL(
	clientID,
	redirectURI,
	resType,
	scopes
) {
	return fetch(
		`https://id.twitch.tv/oauth2/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=${resType}&scope=${scopes}`,
		{
			method: "GET",
			mode: "cors",
			redirect: "manual"
		}
	);
}
