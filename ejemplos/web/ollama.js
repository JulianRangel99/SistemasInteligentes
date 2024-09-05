function request()
{
    var prompt = document.forms.ia.prompt.value;
    var datos = {
        model: "tinyllama",
        prompt: prompt,
        stream: false
    };

    var url = "http://localhost:11434/api/generate";

    var request = new XMLHttpRequest();

    request.open('POST', url);
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader('Access-Control-Allow-Origin', '*'); // Allowing all origins (not recommended for production)
    request.setRequestHeader('Access-Control-Allow-Methods', 'POST');
    request.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    request.setRequestHeader('Access-Control-Allow-Credentials', 'true');

    request.send(JSON.stringify(datos));

    request.onload = () => {
        if(request.status == 200 ){
            alert("Response");
        }
        else{
            alert("Fallo")
        }
    }
};