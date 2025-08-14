import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { content } from './shared/routes/content.route';
import { AuthenticationLayoutComponent } from './shared/layouts/authentication-layout/authentication-layout.component';
import { authen } from './shared/routes/auth.routes';
import { LandingLayoutComponent } from './shared/layouts/landing-layout/landing-layout.component';
import { landing } from './shared/routes/landing.routes';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    {
        path: 'auth/login',
        loadComponent: () =>
          import('../app/authentication/login/login.component').then((m) => m.LoginComponent),
      },
  { path: '', component: MainLayoutComponent, canActivate: [authGuard], children: content},
    { path: '', component: AuthenticationLayoutComponent, children: authen },
    { path: '', component: LandingLayoutComponent, children: landing },
    { path: '**', redirectTo: '/error/error404', pathMatch: 'full' },
];
 