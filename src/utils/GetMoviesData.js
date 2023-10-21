export function getMoviesData(data, value, isShorts, maxDataLength) {
  const searchValue = value.toLowerCase();
  const filteredData = data.filter((item) => {
    if (isShorts) {
      return item.duration < 41 &&  `${item.nameEN.toLowerCase()} ${item.nameRU.toLowerCase()}`.includes(searchValue)
    }

    return  `${item.nameEN.toLowerCase()} ${item.nameRU.toLowerCase()}`.includes(searchValue)
  });

  return {
    filteredData: filteredData.length > maxDataLength ? filteredData.slice(0, maxDataLength) : filteredData,
    searchLength: filteredData.length,
  }
}
