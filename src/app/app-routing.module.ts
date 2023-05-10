import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./client-login/login.component";
import { ClientComponent } from "./client/client.component";
import { ClientCompteComponent } from "./client-compte/client-compte.component";
import { ClientSettingComponent } from "./client-setting/client-setting.component";
import { ClientSettingAccountFormComponent } from "./client-setting-account-form/client-setting-account-form.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "clientHome", component: ClientComponent },
  { path: "compte", component: ClientCompteComponent },
  { path: "setting", component: ClientSettingComponent },
  { path: "setting-account-form", component: ClientSettingAccountFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
