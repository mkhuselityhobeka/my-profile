import { Component, OnInit } from '@angular/core';
import { EmailTemplateDTO } from 'src/app/data/EmailTemplate';
import { EmailServicesService } from 'src/app/services/email-services.service';
import { ResumeServiceService } from 'src/app/services/resume-service.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  emailTemplate: EmailTemplateDTO = new EmailTemplateDTO();
  submitted = false;



  constructor(private emailServicesService: EmailServicesService, private resumeService:ResumeServiceService) { }

  ngOnInit(): void {
  }
//send email contact form section
  postmailMessage(){
    this.emailServicesService.sendMail(this.emailTemplate).subscribe(data =>{
      console.log(data)
      this.emailTemplate = new EmailTemplateDTO();
    },
    error => console.log(error));
  }

  // display resume
  displayResume(){
    this.resumeService.displayResume()
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
