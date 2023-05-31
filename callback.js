var a = 10;

var timer = document.getElementById('display');

setTimeout(() => {
    timer.innerHTML = a;
    a--;
    setTimeout(() => {
        timer.innerHTML = a;
        a--;
        setTimeout(() => {
            timer.innerHTML = a;
            a--;
            setTimeout(() => {
                timer.innerHTML = a;
                a--;
                setTimeout(() => {
                    timer.innerHTML = a;
                    a--;
                    setTimeout(() => {
                        timer.innerHTML = a;
                        a--;
                        setTimeout(() => {
                            timer.innerHTML = a;
                            a--;
                            setTimeout(() => {
                                timer.innerHTML = a;
                                a--;
                                setTimeout(() => {
                                    timer.innerHTML = a;
                                    a--;
                                    setTimeout(() => {
                                        timer.innerHTML = a;
                                        a--;
                                        setTimeout(() => {
                                            timer.innerHTML = 'HAPPY NEW YEAR';
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)