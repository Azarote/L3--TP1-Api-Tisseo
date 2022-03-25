let token = 'key=a3732a1074e2403ce364ad6e71eb998cb';
let requestURL = 'https://api.tisseo.fr/v1/lines.json?' + token;
let requestStop = 'https://api.tisseo.fr/v1/stop_points.json?' + token + '&lineId=';


boutton = document.querySelector('input')

boutton.addEventListener('click', () => {

    const request = new XMLHttpRequest();
    request.open("get", requestURL);

    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            let liste = document.querySelector('ul');
            liste.innerHTML = '';
            data.lines.line.forEach(line => {
                let li = document.createElement('li');
                li.innerHTML = line.name;
                liste.appendChild(li);
            });
        }
    }
    request.send();
})

boutton2 = document.querySelector('#arret')
boutton2.addEventListener('click', () => {
    const request = new XMLHttpRequest();
    request.open("get", requestURL);

    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            let liste2 = document.querySelector('#stop');
            liste2.innerHTML = '';
            data.lines.line.forEach(line => {
                let li = document.createElement('li');
                li.innerHTML = line.id;
                liste2.appendChild(li);
            });
        }
    }
    request.send();
})