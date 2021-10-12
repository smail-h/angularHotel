import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ClientService} from "../service/client.service";
import {Client} from "../classes/client";


new HttpHeaders({'Authorization':environment.apiBasicAuth});

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  success : boolean = false;
  error : boolean = false;
  c : Client = new Client();
  clients : Array<Client>=[];
  search : String = "";
  @ViewChild('closebutton') closebuttonelement : any;

  constructor(private cs : ClientService) { }

  ngOnInit(): void {
this.loadClients();

  }

loadClients() : void {
    this.cs.loadClients(this.search).subscribe(
      data=>{
        this.clients=data;
        console.log(data);
      }
    )
  }

  submitForm() : void {
    console.log(this.c);
    if(this.c.id == undefined){
      this.cs.addClient(this.c).subscribe(
        data => {
          console.log(data);
          this.closebuttonelement.nativeElement.click();
          this.loadClients();
          this.success = true;

        }
      )
    }else {
      this.cs.editClient(this.c).subscribe(
        data =>{
          console.log(data);
          this.closebuttonelement.nativeElement.click();
          this.loadClients();
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
    this.cs.deleteClient(id).subscribe(
      data => {

        this.loadClients();
        this.success = true;
      }
    )
    }
  }

  edit(id? : number):void {
    this.cs.getClient(id).subscribe(
      data => {
        this.c = data;
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
    this.c = new Client();
  }



}
