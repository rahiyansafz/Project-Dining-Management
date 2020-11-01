import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { FoodMenu } from "../breakfast";
import { LunchMenu } from "../lunch";
import { DinnerMenu } from "../dinner";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  toggleBreakfast = false;
  toggleLunch = false;
  toggleDinner = false;

  withEgg = false;
  withEgg2 = false;
  withEgg3 = false;

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;

  today: number = Date.now();

  lunch: any;
  dinner: any;
  breakfast: any;
  todaysMeal;
  dupursMeal;
  raatsMeal;

  user: string;

  constructor(private route: ActivatedRoute, private location: Location) {
    this.breakfast = new FoodMenu().breakfast;
    this.lunch = new LunchMenu().lunch;
    this.dinner = new DinnerMenu().dinner;
  }

  ngOnInit() {
    const d = new Date();
    const dayIndex = d.getDay();

    this.todaysMeal = this.breakfast[dayIndex];
    this.dupursMeal = this.lunch[dayIndex];
    this.raatsMeal = this.dinner[dayIndex];

    console.log(this.breakfast[dayIndex]);
    console.log(this.lunch[dayIndex]);
    console.log(this.dinner[dayIndex]);

    this.user = this.route.snapshot.queryParams.user;
  }

  countStar(star) {
    this.selectedValue = star;
    console.log([star]);
  }

  brk = "";
  lnch = "";
  dnr = "";

  dim1: string = "";
  dim2 = "";
  dim3 = "";

  onToggleBreakfast() {
    this.toggleBreakfast = !this.toggleBreakfast;
    console.log(this.toggleBreakfast);

    if (this.toggleBreakfast) {
      this.brk = " ⚪ You are in for the Breakfast!";
    } else {
      this.withEgg = false;
      this.brk = "";
      this.dim1 = "";
    }
  }

  onToggleLunch() {
    this.toggleLunch = !this.toggleLunch;
    console.log(this.toggleLunch);

    if (this.toggleLunch) {
      this.lnch = " ⚪ You are in for the lunch!";
    } else {
      this.withEgg2 = false;
      this.lnch = "";
      this.dim2 = "";
    }
  }

  onToggleDinner() {
    this.toggleDinner = !this.toggleDinner;
    console.log(this.toggleDinner);

    if (this.toggleDinner) {
      this.dnr = " ⚪ You are in for the dinner!";
    } else {
      this.withEgg3 = false;
      this.dnr = "";
      this.dim3 = "";
    }
  }

  myEgg() {
    if (this.toggleBreakfast === true) {
      this.withEgg = !this.withEgg;
      if (this.withEgg === true) {
        this.dim1 = "with an egg";
      } else {
        this.dim1 = "";
      }
    }
  }

  myEgg2() {
    if (this.toggleLunch === true) {
      this.withEgg2 = !this.withEgg2;
      if ((this.withEgg2 = true)) {
        this.dim2 = "with an egg";
      } else {
        this.dim2 = "";
      }
    }
  }

  myEgg3() {
    if (this.toggleDinner === true) {
      this.withEgg3 = !this.withEgg3;
      if ((this.withEgg3 = true)) {
        this.dim3 = "with an egg";
      } else {
        this.dim3 = "";
      }
    }
  }
}
