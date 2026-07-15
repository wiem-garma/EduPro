const express = require("express");
const cors = require("cors");
const morgan = require("morgan");


const academicRoutes = require("./routes/academic.routes");


const app = express();


// Middlewares
app.use(cors());

app.use(express.json());

app.use(morgan("dev"));



// Test API

app.get("/", (req,res)=>{

    res.json({
        success:true,
        message:"Academic API running 🚀"
    });

});



// Routes

app.use("/api", academicRoutes);



// Route inexistante

app.use((req,res)=>{

    res.status(404).json({

        success:false,

        message:"Route not found"

    });

});



// Gestion erreurs

app.use((err,req,res,next)=>{


    console.error("❌ Error:",err);


    res.status(err.status || 500).json({

        success:false,

        message:err.message || "Internal Server Error"

    });


});


module.exports = app;