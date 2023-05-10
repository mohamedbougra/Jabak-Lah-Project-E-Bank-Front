import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./client-login/login.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { NavMenuComponent } from "./client-nav-menu/nav-menu.component";
import { ClientComponent } from "./client/client.component";
import { AgentComponent } from "./agent/agent.component";
import { AdminComponent } from "./admin/admin.component";
import { AgentNavMenuComponent } from "./agent-nav-menu/agent-nav-menu.component";
import { AgentLoginComponent } from "./agent-login/agent-login.component";
import { AdminNavMenuComponent } from "./admin-nav-menu/admin-nav-menu.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { ClientMainComponent } from './client-main/client-main.component';
import { AgentMainComponent } from './agent-main/agent-main.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { ClientNewPasswordComponent } from './client-new-password/client-new-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavBarComponent,
    NavMenuComponent,
    ClientComponent,
    AgentComponent,
    AdminComponent,
    AgentNavMenuComponent,
    AgentLoginComponent,
    AdminNavMenuComponent,
    AdminLoginComponent,
    ClientMainComponent,
    AgentMainComponent,
    AdminMainComponent,
    ClientNewPasswordComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
