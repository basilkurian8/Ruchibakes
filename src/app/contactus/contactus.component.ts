
import { Component, OnInit } from '@angular/core';
import { faAddressBook, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  mobile=faMobile
  address=faAddressBook
  email=faEnvelope

  


  constructor() { }

  ngOnInit(): void {

  
  }


}
