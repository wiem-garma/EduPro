require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/database");


// Charger les modèles Mongoose
require("./models/User");
require("./models/Class");
require("./models/Subject");
require("./models/Grade");
require("./models/Attendance");
require("./models/Assessment");
require("./models/StudentClass");
require("./models/TeacherSubject");



const PORT = process.env.PORT || 5002;


const startServer = async () => {

    try {

        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });


    } catch(error){

        console.error("Server startup failed:", error);

        process.exit(1);
    }

};


startServer();