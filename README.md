# MVC Email Sender with Node.js & Nodemailer

This is a simple Node.js application built using the **Model-View-Controller (MVC)** architecture. It allows users to send emails via a styled web form using **Nodemailer** and supports both **Gmail** and **Mailtrap** for email transport.

---

## Features

- MVC project structure
- Send emails using a simple web form
- Environment-based email configuration
- Styled frontend using CSS
- Works with both Gmail and Mailtrap

---

## Demo

Visit `http://localhost:3000` after running the app to use the form.

---

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- Nodemailer
- dotenv
- body-parser
- Mailtrap / Gmail (SMTP)

---

## Folder Structure

```
mvc-nodemailer-app/
│
├── app.js               # Main app file
├── package.json
├── .env                 # Environment variables
├── /controllers         # Mail controller
├── /routes              # App routes
├── /views               # EJS templates
├── /public              # CSS styling
└── README.md
```

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/hasnaatmalik/node-mailer-mvc
cd node-mailer-mvc
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root and add either Gmail or Mailtrap credentials:

#### Option 1: Gmail (with App Password)

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

> Make sure to [generate an App Password](https://myaccount.google.com/apppasswords) for your Gmail account.

#### Option 2: Mailtrap

```env
EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_USER=your_mailtrap_username
EMAIL_PASS=your_mailtrap_password
```

### 4. Run the App

```bash
npm start
```

Then open your browser at:

```
http://localhost:3000
```

---

## Author

**Hasnaat Malik**  
Feel free to fork, clone, and contribute!
