import { Routes } from '@angular/router';

import { HomeRoutes, LoginRoutes } from './features'

export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    ...LoginRoutes,
    ...HomeRoutes,
    {path: '**', redirectTo: '404'}
];
