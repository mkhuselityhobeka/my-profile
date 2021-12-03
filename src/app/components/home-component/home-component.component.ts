import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //open chat form
   openChatForm() {
    document.getElementById("myForm")!.style.display="block"
    
  }
  //open chat form
  closeChatForm() {

    document.getElementById("myForm")!.style.display="none"
    
  }

}
