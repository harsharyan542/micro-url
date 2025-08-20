import shortUrlSchema from '../../src/models/shortUrl.model.js';
export const createShortUrl = async (shortUrl, longUrl, userId) => {
    try{
        const newUrl = new shortUrlSchema({
            full_url:longUrl,
            short_url:shortUrl
        })
        if(userId){
            newUrl.user = userId
        }
        return await newUrl.save()
    }catch(err){
        if(err.code == 11000){
            throw new Error("Short URL already exists")
        }
        throw new Error(err)
    }
}

export const getShortUrl = async (shortUrl) => {
     return await shortUrlSchema.findOneAndUpdate({short_url:shortUrl},{$inc:{clicks:1}});
}
