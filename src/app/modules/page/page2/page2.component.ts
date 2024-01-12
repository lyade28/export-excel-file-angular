import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component  implements OnInit{
 
 elms: any  = [];
constructor(private servicesService : ServicesService){}

ngOnInit(): void {
    this.elms = this.servicesService.elements
}
}
