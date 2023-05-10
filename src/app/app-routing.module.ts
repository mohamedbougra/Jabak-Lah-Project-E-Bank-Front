import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./client-login/login.component";
import { ClientComponent } from "./client/client.component";
import { EffectuerPaiementComponent } from "./client-effectuer-paiement/effectuer-paiement.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "clientHome", component: ClientComponent },
  { path: "effectuer-paiement", component: EffectuerPaiementComponent },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
