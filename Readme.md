# Анализ текста на сайтах (Node.js)

Сервис принимает на вход массив URL'ов, анализирует страницы по этим адресам, и возвращает PDF документ, в котором в таблице представлены три наиболее часто встречающихся слова длиннее 4 символов по каждому из URL'ов.

Live demo: [(click)](https://text-analysis-api.now.sh/api/textAnalysis?urls[]=yandex.ru&urls[]=mail.ru&urls[]=habr.com&urls[]=rbc.ru&urls[]=ria.ru&urls[]=lenta.ru&urls[]=mk.ru&urls[]=newsru.com)

## Использование

### GET

Сервис ожидает querystring массив ссылок (с http/https или без) - `urls`.

```
https://text-analysis-api.now.sh/api/textAnalysis?urls[]=yandex.ru&urls[]=mail.ru
```

### POST

Сервис ожидает JSON с ключом `urls` с массивом ссылок в body запроса

## Деплой

### Локально

```
npm i
```
```
npm start
```

### На Now.sh

1. Установить [now cli](https://github.com/zeit/now-cli)
2. Поменять alias в now.json на любой другой
2. `npm run deploy`

## Тесты

```
npm test
```

## Связаться с автором

[Telegram](https://t.me/aveDenis)
