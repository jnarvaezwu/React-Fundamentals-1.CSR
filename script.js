let count = 0;

const action = () => {
    count = count + 1;
    console.log(`Contando: ${count}`);
}

const interval = 1000;

setInterval(action, interval);
