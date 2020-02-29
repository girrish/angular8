import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGaurd } from './auth-gaurd-service';
import { AuthService } from './auth-service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';


// const appRoutes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'servers', component: ServersComponent, children: [
//       { path: ':id', component: ServerComponent },
//       { path: ':id/edit', component: EditServerComponent }
//     ]
//   },
//   { path: 'users', component: UsersComponent, children: [
//       { path: ':id/:name', component: UserComponent },
//     ]
//   },
//   {path: 'not-found', component: PageNotFoundComponent},
//   {path: '**', redirectTo: 'not-found'}
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes)
    AppRoutingModule
  ],
  providers: [ServersService, AuthGaurd, AuthService, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
