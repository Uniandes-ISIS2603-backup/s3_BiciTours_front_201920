import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('id')!=window.location.pathname.split('/')[2]){
      document.getElementById("comp1").style.display="none";
      document.getElementById("comp2").style.display="none";
      document.getElementById("comp3").style.display="none";
    }
    else{
      document.getElementById("comp1").style.display="";
      document.getElementById("comp2").style.display="";
      document.getElementById("comp3").style.display="";
    }
  }

}
