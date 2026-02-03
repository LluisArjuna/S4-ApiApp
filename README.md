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

2.1 Installing npm
  ```bash
  $ npm install
  ```
2.2 Installing Typescript 
  ```bash
  $ npm install -D typescript
  $ npx tsc --init
  ```
2.3 Installing Tailwind and Initializing
  ```bash
  $ npm install tailwindcss@4.1 postcss autoprefixer
  $ npx tailwindcss init -p
  ```
2.4 Installing Vitest
  ```bash
  $ npm install -D vitest jsdom
  $ npm install -D jsdom @vitest/ui
  ```

3. Runing Tests

```bash
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

HTML<br>
CSS<br>
TypeScript<br>
Tailwind<br>
Vitest

<br>




