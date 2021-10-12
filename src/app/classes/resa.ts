import {Client} from "./client";
import {Hotel} from "./hotel";

export class Resa {
  id : number | undefined;
  client : Client | undefined;
  hotel : Hotel | undefined;
  datedeb : Date | undefined;
  datefin : Date | undefined;
  numChambre : number | undefined;

  constructor(_id?:number, _client?:Client, _hotel?:Hotel, _dateDeb?:Date, _dateFin?:Date, _numChambre? : number) {
    this.id = _id;
    this.client = _client;
    this.hotel = _hotel;
    this.datedeb = _dateDeb;
    this.datefin = _dateFin;
    this.numChambre = _numChambre;
  }
}
