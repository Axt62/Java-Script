console.log(location);
//location.href = 'https://google.fr';

const liste = document.getElementById('liste');
//debugger;


liste.innerHTML = `
    <li>Protocol : ${location.protocol}</li>
    <li>Hostname : ${location.hostname}</li>
    <li>Port : ${location.port}</li>
    <li>Pathname : ${location.pathname}</li>`;

    console.log(history);

