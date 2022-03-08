console.log(location);
//location.href = 'https://google.fr';


// Formation de la liste en lien avec le html
const liste = document.getElementById('liste');
//debugger;

//Fournis les informations ( Protocol : http: , host , port et le chemin)
liste.innerHTML = `
    <li>Protocol : ${location.protocol}</li>
    <li>Hostname : ${location.hostname}</li>
    <li>Port : ${location.port}</li>
    <li>Pathname : ${location.pathname}</li>`;

    console.log(history);

