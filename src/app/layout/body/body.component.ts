import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
 
    private _master = '';
    
  
    
      @Input()
  set master(master: string) {
  this._master = (master && master.trim()) || '<no name set>';
     // console.log(master)
  }

    get master(): string { 
         console.log(this._master)
        return this._master; }
 
 
    
  constructor() { }

  ngOnInit() {
  }

}
