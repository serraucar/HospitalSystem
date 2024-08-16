import express from 'express';
import doctorsRouter from './routes/doctors'; // Doktorlar router'ını import et
import sequelize from './database'; // Veritabanı bağlantısını import et

const app = express();
app.use(express.json()); // JSON formatında veri almayı sağlar

// Doktorlar router'ını kullan
app.use('/doctors', doctorsRouter);

const port = process.env.PORT || 3000; // Çalışacak portu belirle

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    try {
        await sequelize.authenticate(); // Veritabanı bağlantısını test et
        console.log('Database connected successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
