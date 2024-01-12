import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit{

  dataExpot: any[]= [];
  constructor(private serviceSevice: ServicesService){}
ngOnInit(): void {
  this.dataExpot = this.serviceSevice.elements
}

onExportExcel(){
  const ws = XLSX.utils.json_to_sheet(this.dataExpot);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb , ws, 'placeholder');

  XLSX.writeFile(wb , 'Liste.xlsx')
}

}
