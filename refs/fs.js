const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'notes'), err => {
    if (err) throw new Error(err);

    console.log('Dir was created');
});
// fs.mkdirSync();

fs.writeFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    'Hello world',
    (err) => {
        if (err) throw Error(err);
        console.log('File was created');
    }
);

fs.appendFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    ' from append file',
    (err) => {
        if (err) throw Error(err);
        console.log('File was modified');
    }
);

fs.readFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    (err, data) => {
        if (err) throw Error(err);
        console.log(Buffer.from(data).toString());
        console.log(data);
    }
);

fs.readFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    'utf-8',
    (err, data) => {
        if (err) throw Error(err);
        console.log(data);
    }
);

fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    (err) => {
        if (err) throw Error(err);
        console.log('File renamed');
    }
);