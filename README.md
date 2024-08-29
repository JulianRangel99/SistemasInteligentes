# SistemasInteligentes
repositorio de sistemas inteligentes
# LLM repositorio

## 1.Instalacion de ollama
accedemos a la pagina de [ollama] (https://ollama.com/download/linux), en linux terminal y ejecutar el siguiente comando. 

````bash
$ curl -fsSL https://ollama.com/install.sh | sh
````

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
## 4.1. COnsulta a la API REST sin Stream
````bash
curl -X POST http://localhost:11434/api/generate -d '{
  "model": "tinyllama",
  "prompt": "Why is the sky blue?",
  "stream": false
}'
````