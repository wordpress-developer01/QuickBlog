import ImageKit from "imagekit";


var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY || "public_key_placeholder",
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY || "private_key_placeholder",
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/default"
});

export default imagekit;