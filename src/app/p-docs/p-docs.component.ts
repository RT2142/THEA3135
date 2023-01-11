import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-docs',
  templateUrl: './p-docs.component.html',
  styleUrls: ['./p-docs.component.css']
})
export class PDOCSComponent implements OnInit {

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
