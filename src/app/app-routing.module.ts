import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./client-login/login.component";
import { ClientComponent } from "./client/client.component";
import { ClientHistoriqueComponent } from './client-historique/client-historique.component';
import { ClientNotificationComponent } from './client-notification/client-notification.component';
import { ClientSignupComponent } from './client-signup/client-signup.component';
import { AgentDemandesComponent } from './agent-demandes/agent-demandes.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "clientHome", component: ClientComponent },
  { path: "Historique", component: ClientHistoriqueComponent },
  { path: "notif", component: ClientNotificationComponent },
  { path: "signup", component: ClientSignupComponent },
  { path: "demandes", component: AgentDemandesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
