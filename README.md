# open-ai-climate-hack

### Set up

1. Clone this repository and `cd` into the project folder

```bash
git clone https://github.com/rchang0501/open-ai-climate-hack.git
cd open-ai-climate-hack
```

2. `cd` into the frontend folder and install node modules

```bash
cd frontend
npm i
```

3. Start the React app in the frontend folder

```
npm start
```

### Demo 
1. Simple if-else statement Python code with Text Davinci 

```
const prompt = `${codeInput}\n\ntranslate the above ${inputType} code to ${outputLanguage} code.`;
    const res = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: prompt,
      temperature: 0,
      max_tokens: 500,
    });
```

https://user-images.githubusercontent.com/46568041/201539567-288e38b2-cc57-4b50-be0e-68860ba754fc.mov


2. Simple LeetCode Problem using Code Davinci

```
const prompt = `${codeInput}\n\ntranslate the above ${inputType} code to ${outputLanguage} code`;
    const res = await openai.createCompletion({
      model: "code-davinci-002",
      prompt: prompt,
      temperature: 0,
      max_tokens: 115,
    });
```

https://user-images.githubusercontent.com/46568041/201538931-c0704966-2325-4ffb-98b1-7bd2b8029cf9.mov


### Designs

[Figma prototype](https://www.figma.com/proto/icEWggBbPppziSh981yWKK/open-ai-climate-hacks?page-id=0%3A1&node-id=79%3A352&viewport=1949%2C1369%2C0.66&scaling=min-zoom)
