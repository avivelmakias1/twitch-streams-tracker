export async function searchResults(query, twitchConnection) {
  return await twitchConnection.kraken.search.searchStreams(query);
}
