
function returnMultiple(film) {
    // Marry-me.1080p-VOSTFR.samsam.mkv
    let lastDot = film.lastIndexOf('.');
    let name = film.substring(0, lastDot);
    let extension = film.substring(lastDot);
    return [name, extension]
}

let [nom, ext] = returnMultiple('Marry-me.1080p-VOSTFR.samsam.mkv');
console.log(nom);
console.log(ext);

function returnMultipleObj(film) {
    // Marry-me.1080p-VOSTFR.samsam.mkv
    let lastDot = film.lastIndexOf('.');
    let name = film.substring(0, lastDot);
    let extension = film.substring(lastDot);
    return {nom: name, ext: extension, len: film.length};
}

let {len} = returnMultipleObj('Marry-me.1080p-VOSTFR.samsam.mkv'); 
console.log(len);


