
const app = require('./app');
const connectDatabase = require('./config/database')
const cloudinary = require('cloudinary');

const dotenv = require('dotenv');
dotenv.config({path: './config/.env'})

connectDatabase();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

if (
    process.env.CLOUDINARY_CLOUD_NAME &&
    process.env.CLOUDINARY_API_KEY &&
    process.env.CLOUDINARY_API_SECRET
) {
    console.log(`Connected to Cloudinary: ${process.env.CLOUDINARY_CLOUD_NAME}`);
} else {
    console.log('Cloudinary configuration missing or invalid.');
}

app.listen(process.env.PORT, () => {
	console.log(`Server started on Port: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});
