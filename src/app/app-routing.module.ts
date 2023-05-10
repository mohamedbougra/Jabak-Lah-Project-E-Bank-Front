import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./client-login/login.component";
import { ClientComponent } from "./client/client.component";
import { ClientMainComponent } from "./client-main/client-main.component";
import { AgentMainComponent } from "./agent-main/agent-main.component";
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "clientHome", component: ClientComponent },
  { path: "client-main", component: ClientMainComponent },
  { path: "agent-main", component: AgentMainComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
