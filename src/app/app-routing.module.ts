import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'dashboard', component: AppLayoutComponent,
                children: [
                    {path: 'projects', loadChildren: () => import('./demo/components/uikit/table/tabledemo.module').then(m => m.TabledemoModule)},
                  //  { path: '', loadChildren: () => import('./demo/components/auth/login/login-routing.module').then(m => m.LoginRoutingModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                ]
            },
            { path: '', loadChildren: () => import('./demo/components/auth/login/login.module').then(m => m.LoginModule) },
            { path: 'signup', loadChildren: () => import('./demo/components/signup/signup.module').then(m => m.SignupModule) },

            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
