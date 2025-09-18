import { Routes } from '@angular/router';
import { FavoritosGuard } from './Core/Guards/favoritos.guard';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./Pages/index/index.page').then(m => m.IndexPage) },
  { path: 'login', loadComponent: () => import('./Pages/Default/login/login.page').then(m => m.LoginPage) },
  { path: 'second-factor', loadComponent: () => import('./Pages/Default/secon-factor/secon-factor.page').then(m => m.SeconFactorPage) },
  {
    path: 'register',
    loadComponent: () => import('./Pages/Default/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'detail-wiki',
    loadComponent: () => import('./Pages/Default/detail-wiki/detail-wiki.page').then( m => m.DetailWikiPage)
  },
  {
    path: 'wikis',
    loadComponent: () => import('./Pages/Default/wikis/wikis.page').then( m => m.WikisPage)
  },
  {
    path: 'favorites',
    loadComponent: () => import('./Pages/Default/favorites/favorites.page').then( m => m.FavoritesPage),
     canActivate: [FavoritosGuard]
  },
  {
    path: 'profile',
    loadComponent: () => import('./Pages/Default/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'homes',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
];
