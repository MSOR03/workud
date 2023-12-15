const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Configura body-parser para manejar solicitudes JSON
app.use(bodyParser.json());

// Configura nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'olartesebastian391@gmail.com', // Reemplaza con tu dirección de correo electrónico
    pass: 'helloworld.',      // Reemplaza con tu contraseña
  },
});

// Ruta para manejar las solicitudes de envío de correos electrónicos
app.post('/HelpPage', async (req, res) => {
  try {
    const { to, subject, text } = req.body;

    // Configura los detalles del correo electrónico
    const mailOptions = {
      from: 'olartesebastian391@gmail.com', // Reemplaza con tu dirección de correo electrónico
      to,
      subject,
      text,
    };

    // Envía el correo electrónico
    await transporter.sendMail(mailOptions);

    console.log('Correo enviado exitosamente');
    res.status(200).send('Correo enviado exitosamente');
  } catch (error) {
    console.error('Error al enviar el correo', error);
    res.status(500).send('Error al enviar el correo');
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
