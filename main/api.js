// apiService.js
const apiKey = '1Xg2FffmZHikbXqgFi5e1eG3F42Q7QBvnOHk6Udd';

export async function fetchData(date) {
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}
