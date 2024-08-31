# SistemasInteligentes
repositorio de sistemas inteligentes
# LLM repositorio

## 1.Instalacion de ollama
accedemos a la pagina de [ollama] (https://ollama.com/download/linux), en linux terminal y ejecutar el siguiente comando: 

````bash
$ curl -fsSL https://ollama.com/install.sh | sh
````
pagina de documentacion api [ollamaDoc](https://github.com/ollama/ollama/blob/main/docs/api.md)
## 2. Ejecutar el servidor
Una vez instalado  se ejecuta el servidor con el siguiente comando:

````bash
$ ollama serve
````

## 3. Descargar algun modelo

En la pagina de [modelos] (https://ollama.com/library) se busca el modelo deseado y se descraga con el siguiente comando, en otra terminal :

````bash
$ ollama pull tinyllama
````

## 4. Prueba de un request a la API REST
Paara realizar una peticion basica en la API de ollama se sigue la siguiente estructura:

````bash
curl -X POST http://localhost:11434/api/generate -d '{
  "model": "tinyllama",
  "prompt": "Why is the sky blue?"
}'
````
## 4.1. Consulta a la API REST sin Stream
-o es para exportar los datos recibidos
````bash
curl -X POST http://localhost:11434/api/generate -d '{
  "model": "tinyllama",
  "prompt": "Why is the sky blue?",
  "stream": false
}' -o salida2.md
````

## 5 Realizar request a groq
````bash
curl "https://api.groq.com/openai/v1/chat/completions" \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${GROQ_API_KEY}" \
  -d '{
         "messages": [
           {
             "role": "user",
             "content": "¿por que es el cielo azul?"
           }
         ],
         "model": "gemma-7b-it",
         "stream": false
       }'
       ````
  