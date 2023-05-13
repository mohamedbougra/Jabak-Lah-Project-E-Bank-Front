import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./client-login/login.component";
import { AgentLoginComponent } from "./agent-login/agent-login.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { ClientComponent } from "./client/client.component";
import { ClientCompteComponent } from "./client-compte/client-compte.component";
import { ClientSettingComponent } from "./client-setting/client-setting.component";
//import { ClientSettingAccountFormComponent } from "./client-setting-account-form/client-setting-account-form.component";
import { AgentComponent } from "./agent/agent.component";
import { ClientProfileComponent } from "./client-profile/client-profile.component";
import { AdminComponent } from "./admin/admin.component";
import { ClientNewPasswordComponent } from "./client-new-password/client-new-password.component";
import { AgentProfileComponent } from './agent-profile/agent-profile.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "login-agent", component: AgentLoginComponent },
  { path: "login-admin", component: AdminLoginComponent },
  { path: "clientHome", component: ClientComponent },
  { path: "compte", component: ClientCompteComponent },
  { path: "setting", component: ClientSettingComponent },
  //{ path: "setting-account-form", component: ClientSettingAccountFormComponent },
  { path: "agentHome", component: AgentComponent },
  { path: "adminHome", component: AdminComponent },
  { path: "new-password", component: ClientNewPasswordComponent },
  { path: "profile", component: ClientProfileComponent },
  { path: "agentprofile", component: AgentProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
