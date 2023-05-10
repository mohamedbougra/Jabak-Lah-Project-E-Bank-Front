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
import { EffectuerPaiementComponent } from "./client-effectuer-paiement/effectuer-paiement.component";


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
    EffectuerPaiementComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
