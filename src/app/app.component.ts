import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-profile';
  isFixedNavbar:any;
 @HostBinding('class.navbar-opened') navbarOpened = false;
  constructor() { }

  ngOnInit(): void {
  }


  loadMenuBurger(){
    var x = document.getElementById("myTopnav");
    if(x?.className === "topnav"){
       x.className += " responsive";
      }else{
        x!.className = " topnav";
      }
  }
}
