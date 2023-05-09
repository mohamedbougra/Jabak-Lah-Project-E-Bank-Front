import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./client-login/login.component";
import { AgentLoginComponent } from "./agent-login/agent-login.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { ClientComponent } from "./client/client.component";
import { AgentComponent } from "./agent/agent.component";
import { AdminComponent } from "./admin/admin.component";
import { ClientNewPasswordComponent } from "./client-new-password/client-new-password.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "login-agent", component: AgentLoginComponent },
  { path: "login-admin", component: AdminLoginComponent },
  { path: "clientHome", component: ClientComponent },
  { path: "agentHome", component: AgentComponent },
  { path: "adminHome", component: AdminComponent },
  { path: "new-password", component: ClientNewPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
