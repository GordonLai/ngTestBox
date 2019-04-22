import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "../app/components/main/main.component";

const routes: Routes = [
  { path: "topic", component: MainComponent },
  { path: "", component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
