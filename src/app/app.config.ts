import { Headers } from '@angular/http';

export let appConfig = {
    url: {
        urlServer: 'http://epuadniw0050t1.kyiv.epam.com/testingtool',
        path: '/rest/'
    },
    header: new Headers({'Content-Type': 'application/json; charset=utf-8'}),
    nameToken: 'x-token'
};
