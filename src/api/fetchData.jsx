const fetchData = async (search, orderBy, maxResults, printType, subject) => {
  let queryParam = "";

  if(search) {
    queryParam = `intitle:${encodeURIComponent(search)}+OR+inauthor:${encodeURIComponent(search)}&`;
  } else if(subject) {
    queryParam = `subject:${encodeURIComponent(subject)}&`
  }


  orderBy = orderBy === "newest" ? "newest" : "relevance"; // Corrected line
  maxResults = maxResults || 10;

  try {
    console.log(
      "API Request URL:",
      `https://www.googleapis.com/books/v1/volumes?q=${queryParam}orderBy=${orderBy}&maxResults=${maxResults}${
        printType ? `&printType=${printType}` : ""
      }&key=${
        import.meta.env.VITE_API_KEY
      }`
    );

    const resp = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${queryParam}orderBy=${orderBy}&maxResults=${maxResults}${
        printType ? `&printType=${printType}` : ""
      }&key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (!resp.ok) {
      throw new Error("Network request failed");
    }

    const result = await resp.json();

    result.items.forEach((item) => {
      if (item.volumeInfo && item.volumeInfo.imageLinks) {
        item.volumeInfo.imageLinks.smallThumbnail = item.volumeInfo.imageLinks.smallThumbnail.replace(/^http:\/\//i, 'https://');
        item.volumeInfo.imageLinks.thumbnail = item.volumeInfo.imageLinks.thumbnail.replace(/^http:\/\//i, 'https://');
      }
    });
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export default fetchData;
