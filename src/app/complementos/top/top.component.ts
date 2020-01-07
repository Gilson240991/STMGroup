import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
mensaje:String = "Seguridad y Salud en el Trabajo y Medio Ambiente Group - STM Group"
  constructor() { }

  ngOnInit() {
  }

}
