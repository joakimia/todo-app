const API_KEY = 'd3df1bb9412843ea9cffd67a21b242d1';

export const apiFetchNews = async () => {
    const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    try {
        const news = await fetch(URL).then(response => response.json());
        return news.articles;
    } catch (error) {
        console.log('Error in (apiFetchNews: ', error);
    }

};