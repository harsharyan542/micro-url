import { generateShortUrl } from "../utilis/helper.js";
import { createShortUrl } from "../dao/shortUrl.dao.js";

export const createShortUrlServiceWithoutUser = async (url) => {
    const shortUrl = generateShortUrl(7);
    if(!shortUrl) {
        throw new Error("Failed to generate short URL");
    }
    await createShortUrl(shortUrl, url);
        console.log(`Short URL created: ${shortUrl}`);

    console.log(`Received request for URL: `, url);
    return shortUrl;
}

export const createShortUrlServiceWithUser = async (url, userId) => {
    const shortUrl = generateShortUrl(7);
    await createShortUrl(shortUrl, url, userId);
    console.log(`Short URL created: ${shortUrl}`);

    console.log(`Received request for URL: `, url);
    return shortUrl;
}