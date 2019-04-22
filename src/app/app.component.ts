import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
declare var JSMpeg: any; // 這邊用 var

class ClientMqtt {
  // 建構子
  constructor(selector) {
    this.height = "1000";
    this.width = "2000";
    this.el = this.elSort(selector);
  }

  // 功能
  subscribe() {
    return "test" + this.height;
  }

  elSort(ele) {
    const chose = document.querySelector(ele);
    return [chose];
  }
}

let td = new ClientMqtt("body");
console.log(td);

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";
  clients = td.subscribe();
  routerUnit = "";
  form = {
    selector: "",
    list: []
  };
  co2 = require("../assets/CO2.json");
  topic = require("../assets/Topic.json");
  camer = require("../assets/Camera.json");

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // https://jsmpeg.com/jsmpeg.min.js
  }

  // 當路由變化時
  onActivate(e) {
    // console.log(e.constructor.name, location.pathname);
    this.routerUnit = location.pathname;
    var canvas = document.getElementById("video-canvas");
    var url = "https://phoboslab.org/files/jsmpeg/big-buck-bunny.mpg";
    var player = new JSMpeg.Player(url, { canvas: canvas });
  }

  // 切換時
  co2Change() {
    const data = this.camer;
    const selects = this.form.selector.split("/");
    let result = [];
    // console.log(selects, data);
    data.CameraStreamInfo.forEach(item => {
      if (item.CameraName.indexOf(selects[0]) < 0) return;
      const checkData = {
        CameraName: "攝影機名稱 : " + item.CameraName,
        StreamUrl:
          "攝影機位置 : " +
          item.StreamUrl.replace(
            "http://10.2.23.35/mobile_ccc/media_show/show_mcam/",
            ""
          )
      };
      // console.log(checkData);
      result.push(checkData);
    });
    this.form.list = result;
  }
}
