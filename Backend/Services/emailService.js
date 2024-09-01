
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'rblanchar@unicesar.edu.co',
    pass: 'gfru gqvm oxhj bgix',
  },
});

const sendThankYouEmail = (userEmail, userName) => {
  const mailOptions = {
    from: 'rebf82@gmail.com',
    to: userEmail,
    subject: 'Gracias por registrarte en nuestra página',
    text: `¡Hola ${userName}!\n\nGracias por unirte a nuestra comunidad. Estamos emocionados de tenerte con nosotros.\n\nSaludos,\nEl equipo de Marketing Digital`,
   };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error al enviar el correo:', error);
    } else {
      console.log('Correo enviado:', info.response);
    }
  });
};

const sendResetPasswordEmail = async (to, resetLink) => {
    const mailOptions = {
      from: 'rebf82@gmail.com',
      to,
      subject: 'Restablecimiento de Contraseña',
      text: `Puedes restablecer tu contraseña haciendo clic en el siguiente enlace: ${resetLink}`,
      html: `<p>Puedes restablecer tu contraseña haciendo clic en el siguiente enlace:</p><a href="${resetLink}">Restablecer Contraseña</a>`
    };
  
    try {
      await transporter.sendMail(mailOptions);
      console.log('Correo de restablecimiento de contraseña enviado.');
    } catch (error) {
      console.log('Error al enviar el correo de restablecimiento de contraseña:', error);
    }
  };


module.exports = {
  sendThankYouEmail,
  sendResetPasswordEmail,
};
 
/*
const { Resend } = require('resend');

// Crea una instancia de Resend utilizando tu API key
const resend = new Resend('re_Ch7ejNZz_69SwUjeGbZdsS7gunNzCCaX7');

const sendThankYouEmail = async (userEmail, userName) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Ronal <rblanchar.github.io',
      to: [userEmail],
      subject: 'Gracias por registrarte en nuestra página',
      html: `<p>¡Hola ${userName}!</p><p>Gracias por unirte a nuestra comunidad. Estamos emocionados de tenerte con nosotros.</p><p>Saludos,<br>El equipo de Marketing Digital</p>`,
    });

    if (error) {
      console.error('Error al enviar el correo:', error);
    } else {
      console.log('Correo enviado:', data);
    }
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
};

const sendResetPasswordEmail = async (to, resetLink) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'send.rblanchar',
      to: [to],
      subject: 'Restablecimiento de Contraseña',
      html: `<p>Puedes restablecer tu contraseña haciendo clic en el siguiente enlace:</p><a href="${resetLink}">Restablecer Contraseña</a>`,
    });

    if (error) {
      console.error('Error al enviar el correo de restablecimiento:', error);
    } else {
      console.log('Correo enviado:', data);
    }
  } catch (error) {
    console.error('Error al enviar el correo de restablecimiento:', error);
  }
};

module.exports = {
  sendThankYouEmail,
  sendResetPasswordEmail,
};


const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "resend",
    pass: "re_Ch7ejNZz_69SwUjeGbZdsS7gunNzCCaX7",
  },
});

const sendThankYouEmail = (userEmail, userName) => {
  const mailOptions = {
    from: '"MarketingDigital" <rblanchar.github.io>',
    to: userEmail,
    subject: 'Gracias por registrarte en nuestra página',
    text: `¡Hola ${userName}!\n\nGracias por unirte a nuestra comunidad. Estamos emocionados de tenerte con nosotros.\n\nSaludos,\nEl equipo de Marketing Digital`,
   };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error al enviar el correo:', error);
    } else {
      console.log('Correo enviado:', info.response);
    }
  });
};

const sendResetPasswordEmail = async (to, resetLink) => {
    const mailOptions = {
      from: '"MarketingDigital" <rblanchar.github.io>',
      to,
      subject: 'Restablecimiento de Contraseña',
      text: `Puedes restablecer tu contraseña haciendo clic en el siguiente enlace: ${resetLink}`,
      html: `<p>Puedes restablecer tu contraseña haciendo clic en el siguiente enlace:</p><a href="${resetLink}">Restablecer Contraseña</a>`
    };
  
    try {
      await transporter.sendMail(mailOptions);
      console.log('Correo de restablecimiento de contraseña enviado.');
    } catch (error) {
      console.log('Error al enviar el correo de restablecimiento de contraseña:', error);
    }
  };


module.exports = {
  sendThankYouEmail,
  sendResetPasswordEmail,
};
*/
