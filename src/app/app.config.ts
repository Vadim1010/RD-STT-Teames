import { Headers } from '@angular/http';

export let appConfig = {
    url: {
        urlServer: 'http://epuadniw0050t1.kyiv.epam.com/testingtool',
        path: '/rest/'
    },
    header: {
        getHeader: (value) => new Headers({'Content-Type': `${value}; charset=utf-8`}),
        json: 'application/json',
        token: 'x-token'
    },
    nameToken: 'x-token',

};
