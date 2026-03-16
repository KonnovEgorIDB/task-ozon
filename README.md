# Progress Component

Прототип блока Progress для использования в мобильных web-приложениях. Компонент отображает прогресс выполнения процессов в виде кругового индикатора.

🔗 [Live Demo]()

---

## Возможности

- Круговой индикатор прогресса на чистом CSS (`conic-gradient`)
- Управление значением от 0 до 100
- Режим анимации — автоматическое вращение
- Режим скрытия компонента
- Переиспользуемый API-класс — легко подключить в любой проект
- Адаптируется под ориентацию экрана

---

## Установка

```bash
git clone https://github.com/egorkonnov/test-ozon.git
cd test-ozon
npm install
```

## Запуск

```bash
npm run dev
```

Открыть в браузере: `http://localhost:5173`

## Сборка

```bash
npm run build
```

---

## Технологии

- Vanilla JS (ES2021, классы с приватными полями)
- CSS (conic-gradient, CSS-переменные)
- HTML `<template>` для переиспользуемой разметки
- Vite
- ESLint + Prettier + Stylelint + Lefthook