function relogio() {
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');

    let timer;
    let a = 0 + (60 * 60 * 3 * 1000);
    let b = 0;

    document.addEventListener('click', function (e) {
        const el = e.target;
        if (el.classList.contains('iniciar')) return start();
        if (el.classList.contains('pausar')) return pause();
        if (el.classList.contains('zerar')) return reset();
    });

    const tempo = (input) => { if (input) { timer = setInterval(function () { a = a + 1000; relogio.innerHTML = `${time(a)}`; }, 1000); } };

    function time(input) {
        let data = new Date(input);
        return data.toLocaleTimeString('pt-BR', { timeStyle: 'medium' });
    }

    function start() {
        if (b > 1) return console.log(false);
        b++;
        if (b == 1) {
            tempo(true);
            relogio.style.color = 'black';
        }
    }
    function pause() {
        b = 0;
        clearInterval(timer);
        relogio.style.color = 'red';
    }
    function reset() {
        b = 0;
        clearInterval(timer);
        a = 0 + (60 * 60 * 3 * 1000);
        relogio.innerHTML = '00:00:00';
        relogio.style.color = 'blue';
    }

}

relogio();