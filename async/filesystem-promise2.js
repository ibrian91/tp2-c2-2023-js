import fs from 'fs/promises';
const PATH_INVENTORJSON = '../data/inventors.json';

async function getInventors(){
    return fs.readFile(PATH_INVENTORJSON, 'utf-8');
}

try {
    let inventors = await getInventors();
    console.log(inventors);
} catch (error) {
    console.log("Error");
}

// TODO hacer un crud de inventors con promesas

