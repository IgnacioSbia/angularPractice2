import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  buttonstate: boolean = false;
  accepted = 'ACCEPTED';
  showMessage(){
    if(this.buttonstate == !true){
      console.log('Ive been clicked')
    this.buttonstate = true
    }else{
      this.buttonstate = false
    }
    
  } 
}
