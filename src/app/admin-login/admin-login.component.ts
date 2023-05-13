import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-admin-login",
  templateUrl: "./admin-login.component.html",
  styleUrls: ["./admin-login.component.css"],
})
export class AdminLoginComponent implements OnInit {
  errorMessage: string = "";
  successMessage: string = "";
  hidden: boolean;
  name: String = "mohamed";
  email: String = "";
  password: String = "";
  role: String = "CLIENT";

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.hidden = true;
    this.errorMessage = "";
    this.successMessage = "";
    this.name = "";
    this.email = "";
    this.password = "12345678";
    this.role = "CLIENT";
  }

  login() {
    this.hidden = false;
    if (this.email === "mohamed@gmail.com") {
      this.router.navigate(["/"]);
    } else {
      this.router.navigate(["/login"]);
    }
  }
  onSubmit(f: NgForm) {
    this.hidden = false;
    if (this.email === "mohamed@gmail.com") {
      this.router.navigate(["/"]);
      this.successMessage = "Welcome";
    } else {
      this.router.navigate(["/login"]);
      this.successMessage = "error";
    }
  }
}
