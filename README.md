# Sprint 4 TypeScript and API

## Introduction

We created a web application that displays a random dad joke and the current weather based on the user's location. This project is intended as a practice exercise for working with TypeScript and APIs

<br>

## Requirements


1. Clone this repo
```bash
$ https://github.com/LluisArjuna/S4-ApiApp.git
```

2. Installing dependencies

```bash
$ npm install
$ npm install typescript --save-dev
$ npx tsc --init
$ npm install tailwindcss@4.1 postcss autoprefixer
$ npx tailwindcss init -p
$ npx tsc
$ npm run dev
```

3. Runing Tests

```bash
$ npm install -D vitest jsdom
$ npx vitest --watch 
```

<br>

## Folder Structure

```bash
src/
├── scripts/
│   ├── jokes/
│   │   ├── jokesLogic.ts      
│   │   └── jokesUI.ts        
│   │
│   ├── weather/
│   │   ├── weatherLogic.ts  
│   │   └── weatherUI.ts      
│   │
│   ├── apiRequests.ts      
│   ├── asyncronApiCall.ts    
│   ├── interfaces.ts        
│   └── index.ts               
│
├── styles/
│   ├── input.css             
│   └── output.css            
│
tests/
│   ├── getData.test.ts            
│   └── jokesLogic.test.ts  

```

<br>

## Technologies Used

HTML
CSS
TypeScript
Tailwind
Vitest

<br>




