import { Routes } from '@angular/router';

import { AppComponent } from './component/app.component';
import { WelcomeComponent } from './component/welcome.component';
import { LayoutComponent } from './component/layout.component';
import { IndexComponent } from './component/index.component';

export const routes: Routes = [
    {
        path: "",
        component: AppComponent,
        children: [
            { path: 'welcome', component: WelcomeComponent },
        ]
    },
    {
        path: "study",
        component: LayoutComponent,
        children: [
            { path: 'index', component: IndexComponent },
        ]
    },
];
