import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name = "Ashvini"
  public image = "/assets/car.png"

  onClick(){
    console.log("Thankyou for Booking")
    alert('Car is Booked')
  }


  title = 'my-first-app';
}
