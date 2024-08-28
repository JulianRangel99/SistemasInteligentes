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

En la pagina de [modelos] (https://ollama.com/library) se busca el modelo deseado y se descraga con el siguiente comando:

````bash
$ ollama pull tinyllama
````