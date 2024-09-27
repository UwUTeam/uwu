const express = require("express");
const fs = require("fs");
const path = require("path");
const cookieParser = require("cookie-parser"); // Подключаем cookie-parser для работы с cookies
const app = express();

app.use(express.static("public"));
app.use(express.json()); // Для работы с JSON-данными
app.use(cookieParser()); // Для чтения cookies

// Middleware для установки темы на всех страницах
app.use((req, res, next) => {
  const theme = req.cookies.theme || "light"; // Получаем тему из cookies, если её нет — устанавливаем "light"
  res.locals.theme = theme; // Передаем тему во все шаблоны или файлы, если используется движок
  next();
});

// Маршрут для сохранения выбранной темы
app.post("/set-theme", (req, res) => {
  const theme = req.body.theme;
  res.cookie("theme", theme, { maxAge: 900000, httpOnly: true }); // Сохраняем тему в cookies
  res.send("Тема сохранена");
});

// Маршрут для получения текста
app.get("/get-text", (req, res) => {
  const filePath = path.join(__dirname, "text-content.json");
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("Ошибка при чтении файла.");
    } else {
      res.json(JSON.parse(data)); // Отправляем данные в формате JSON
    }
  });
});

// Маршрут для обновления текста
app.post("/update-text", (req, res) => {
  const updatedContent = req.body;
  const filePath = path.join(__dirname, "text-content.json");

  fs.writeFile(filePath, JSON.stringify(updatedContent, null, 2), (err) => {
    if (err) {
      res.status(500).send("Ошибка при сохранении данных.");
    } else {
      res.send("Текст обновлен");
    }
  });
});

// Запуск сервера на порту 3000
app.listen(3000, () => {
  console.log("Сервер запущен на порту 3000");
});
