import {Component, OnInit, ViewChild} from '@angular/core';
import {HotelService} from "../service/hotel.service";
import {Hotel} from "../classes/hotel";
import {Client} from "../classes/client";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  success : boolean = false;
  error : boolean = false;
  h : Hotel = new Hotel();
  hotels : Array<Hotel>=[];
  @ViewChild('closebutton') closebuttonelement : any;
  constructor(private hs : HotelService) { }

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels() :void{
    this.hs.loadHotels().subscribe(
      data=>{
        this.hotels=data;
        console.log(data);
      }
    )
  }
  submitForm() : void {
    console.log(this.h);
    if(this.h.id == undefined){
      this.hs.addHotel(this.h).subscribe(
        data => {
          console.log(data);
          this.closebuttonelement.nativeElement.click();
          this.loadHotels();
          this.success = true;

        }
      )
    }else {
      this.hs.editHotel(this.h).subscribe(
        data =>{
          console.log(data);
          this.closebuttonelement.nativeElement.click();
          this.loadHotels();
          this.success = true;
        },
        error =>{
          this.error=true;
        }
      )
    }
  }

  delete(id? : number) : void{
    if(confirm("Etes vous sur ?")){
      this.hs.deleteHotel(id).subscribe(
        data => {

          this.loadHotels();
          this.success = true;
        }
      )
    }
  }

  edit(id? : number):void {
    this.hs.getHotel(id).subscribe(
      data => {
        this.h = data;
        console.log(data);

      },
      error => {
        console.log( error )
        this.error = true;
      }
    )

  }
  resetForm(){
    this.error = false;
    this.success = false;
    this.h = new Hotel();
  }


}
