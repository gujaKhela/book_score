const fetchData = async (search, orderBy, maxResults,printType) => {
    search = search || "a";
    orderBy = orderBy || "relevance";
    maxResults = maxResults || 10;
    
  try {
    console.log('API Request URL:', `https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=${orderBy}&maxResults=${maxResults}${printType ? `&printType=${printType}` : ''}&key=${import.meta.env.VITE_API_KEY}`);

    const resp = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=${orderBy}&maxResults=${maxResults}${printType ? `&printType=${printType}` : ''}&key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (!resp.ok) {
      throw new Error("Network request failed");
    }

    const result = await resp.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export default fetchData;
