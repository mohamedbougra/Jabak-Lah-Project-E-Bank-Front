import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-client-new-password",
  templateUrl: "./client-new-password.component.html",
  styleUrls: ["./client-new-password.component.css"],
})
export class ClientNewPasswordComponent implements OnInit {
  confimedPassword: String = "";
  password: String = "";
  constructor() {}

  ngOnInit() {}
}
