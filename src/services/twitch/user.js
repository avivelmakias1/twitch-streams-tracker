export async function getFollowingChannels(twitchConnection) {
	const user = await twitchConnection.helix.users.getMe(true);
	let followers = twitchConnection.helix.users.getFollowsPaginated({
		user: user._data.id
	});
	return await followers.getAll();
}

export async function getAllLiveStreams(twitchConnection) {
	const livestreams = await twitchConnection.kraken.streams.getAllLiveStreams();
	return livestreams;
}
