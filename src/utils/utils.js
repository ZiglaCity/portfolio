export function sortSearchedResult(searchResult) {
  let result = [];
  const n = searchResult.length - 1;
  for (let i = n; i > -1; i--) {
    result.push(searchResult[i]);
  }
  return result;
}
