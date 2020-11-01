import { Component, OnInit } from "@angular/core";
import { ListModel } from "../list";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { INFO } from "../mock-list";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"]
})
export class LogInComponent implements OnInit {
  // INFO: ListModel[]

  wrong = "";

  userInfo: ListModel = {
    username: "",
    password: ""
  };

  list: ListModel[] = INFO;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {}

  route2Dashboard() {
    let passed: boolean;
    for (const item of this.list) {
      if (
        item.username === this.userInfo.username &&
        item.password === this.userInfo.password
      ) {
        console.log(this.userInfo);
        passed = true;
      } else {
        console.log("not matched");
      }
    }

    if (passed === true) {
      this.router.navigateByUrl(`/dashboard?user=${this.userInfo.username}`);
    } else {
      this.wrong = "wrong username or password!!!";
    }
  }
}
