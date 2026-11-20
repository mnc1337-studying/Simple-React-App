# Simple React App

Навчальний проєкт на React + Vite. Містить два компоненти, `Button` і `Input`, які приймають props та обробники подій. У `App.jsx` за їх допомогою зібрана проста форма реєстрації.

## Запуск

Потрібен Node.js версії 20.19+.

```
git clone https://github.com/mnc1337-studying/Simple-React-App.git
cd Simple-React-App
npm install
npm run dev
```

Сайт відкриється на http://localhost:5173.

## Компоненти

`Button` приймає `text` (напис на кнопці), `type` (`button`, `submit` або `reset`) і `onClick`. Якщо `type` не вказано, підтягнеться дефолтне значення - `button`.

`Input` приймає `type` (`text`, `email`, `number`, `password` тощо), `placeholder` і `onChange`. Якщо `type` не вказано, підтягнеться дефолтне значення - `text`.

У формі чотири поля й три кнопки. Те, що вводиться в поля, виводиться в консоль браузера. "Sign up" (`submit`) показує повідомлення, "Clear" (`reset`) очищає поля, "Help" (`button`) показує підказку.

## Структура

```
src/
  components/
    Button.jsx
    Input.jsx
  App.jsx
  main.jsx
  index.css
```