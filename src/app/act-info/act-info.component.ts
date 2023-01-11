import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-act-info',
  templateUrl: './act-info.component.html',
  styleUrls: ['./act-info.component.css']
})
export class ActInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  login(){
    var i = prompt('password');
    if(i == 'THEA3135'){
      var x = document.getElementById("myDIV");
      x.style.display="block";
      var y = document.getElementById("b");
      y.style.display="none";
    }else{
      alert("WRONG PASSWORD");
    }
  }
}
