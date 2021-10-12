import {Component, OnInit, ViewChild} from '@angular/core';
import {Resa} from "../classes/resa";
import {ResaService} from "../service/resa.service";
import {ClientService} from "../service/client.service";
import {HotelService} from "../service/hotel.service";
import {Client} from "../classes/client";
import {Hotel} from "../classes/hotel";



@Component({
  selector: 'app-resa',
  templateUrl: './resa.component.html',
  styleUrls: ['./resa.component.css']
})
export class ResaComponent implements OnInit {

  r : Resa = new Resa();
  reservations : Array<Resa>=[];
  clients : Array<Client>=[];
  hotels : Array<Hotel>=[];
  @ViewChild( 'closebutton' ) closebuttonelement: any;
  success : boolean = false;
  error : boolean = false;
  search : string ="";
  clientArechercher : string = "";
  errormessage : string = "";
  constructor(private rs : ResaService, private cs : ClientService, private hs : HotelService) { }

  ngOnInit(): void {
    this.loadResa();
    this.cs.loadClients(this.search).subscribe(
      data=>{
        this.clients = data;

      }
    )
    this.hs.loadHotels().subscribe(
      data=>{
        this.hotels = data;
      }
    )
  }


  loadResa() : void {
    this.rs.loadResa(this.clientArechercher).subscribe(
      data=>{
        this.reservations = data;
      }
    )

  }
  delete( id? : number ): void{
    if( confirm( "Êtes vous sur ?" ) ){
      this.rs.deleteResa( id ).subscribe(
        data => {
          this.loadResa();
          this.success = true;
        }
      );
    }
  }

  resetForm(){
    this.error = false;
    this.success = false;
    this.r = new Resa();
  }

  edit( id? : number ): void{
    this.rs.getResa( id ).subscribe(
      data => {
        this.r = data;
        console.log(data);
      } ,
      error => {
        console.log( error )
        this.error = true;
      }
    );
  }


  submitForm() : void {

    if( this.r.id == undefined ){
      this.rs.addResa( this.r ).subscribe(
        data => {
          console.log( data );
          this.closebuttonelement.nativeElement.click();
          this.loadResa();
          this.success = true;
        },
        error1 => {
        this.errormessage = error1.error.message;
          this.error = true;
        }
      )
    }else{

      this.rs.editResa( this.r ).subscribe(
        data => {

          this.closebuttonelement.nativeElement.click();
          this.loadResa();
          this.success = true;
        },
         error => {
          this.error = true;
        }

      )
    }


    console.log( this.r );

  }
  checkClient( c1 : Client , c2 : Client ): boolean{
    return c1 != undefined && c2 != undefined && c1.id == c2.id;
  }

  checkHotel( c1 : Hotel , c2 : Hotel ): boolean{
    return c1 != undefined && c2 != undefined && c1.id == c2.id;
  }
}
