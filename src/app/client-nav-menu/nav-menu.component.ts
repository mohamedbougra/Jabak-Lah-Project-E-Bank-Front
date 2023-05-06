import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-nav-menu",
  templateUrl: "./nav-menu.component.html",
  styleUrls: ["./nav-menu.component.css"],
})
export class NavMenuComponent implements OnInit {
  doesHaveaccount: Boolean = false;

  isLoggedIn: Boolean = false;
  constructor(private router: Router) {}

  numTel = window.sessionStorage.getItem("username");

  ngOnInit(): void {}

  onLogout() {
    this.router.navigate(["/"]);
    window.location.reload();
  }
}
