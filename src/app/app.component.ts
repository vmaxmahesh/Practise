import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data={
    title :'Mahesh'
  };


  changeInput=(newTitle:string)=>{
      this.data.title=newTitle;
  }
}
