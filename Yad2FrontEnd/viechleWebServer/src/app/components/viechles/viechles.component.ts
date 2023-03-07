import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';
import { Viechle } from 'src/app/models/Viechles';
import { ViechleService } from 'src/app/services/viechle.service';

@Component({
  selector: 'app-viechles',
  templateUrl: './viechles.component.html',
  styleUrls: ['./viechles.component.css']
})
export class ViechlesComponent implements OnInit{


  viechels:Viechle[];
  newViechle :Viechle= new Viechle();
  updViechle = []
  update=false;
  manuf:string
  killo:number
  color:string
  owners:number
  year1:number
  year2:number
  cost1:number
  cost2:number

  constructor(private viechleService:ViechleService){

  }

  ngOnInit(): void {
    this.getAll()
  }

  
  public getAll()
  {
    this.viechleService.getViechles().subscribe((viechles)=>{
      this.viechels = viechles;
  })
  }
  public addViechle()
  {
    this.viechleService.addViechle(this.newViechle).subscribe((viechle)=>{
      alert(viechle.manuf+" was added successfully")
      this.newViechle = new Viechle();
      this.getAll();
      this.update=false
    })
  }

  public delViechle(viechle:Viechle)
  {
    
 this.viechleService.delViechle(viechle.id).subscribe(() => {
    alert(`${viechle.manuf} was deleted successfully`);
    this.getAll();
  });
  }
  
  public UpdateViechle(viechle:Viechle)
  {
    this.update=true;
    this.newViechle.manuf=viechle.manuf;
    this.newViechle.id=viechle.id;
    this.newViechle.color=viechle.color;
    this.newViechle.cost=viechle.cost;
    this.newViechle.killo=viechle.killo;
    this.newViechle.year=viechle.year;
    this.newViechle.numberOfOwners=viechle.numberOfOwners;
    this.viechleService.delViechle(viechle.id).subscribe(() => {
      this.getAll();
    });
  }
  public addAfterUpdateViechle()
  {
    this.viechleService.addViechle(this.newViechle).subscribe((viechle)=>{
      alert(viechle.manuf+" was updated successfully")
      this.newViechle = new Viechle();
      this.getAll();
      this.update=false
    })
  }

  public getByManuf(manuf:string)
  {
    this.viechleService.getByManufViechle(manuf).subscribe((viechles)=>{
      this.viechels = viechles;
        if(this.viechels.length=== 0){
    alert("Enter correct Manufacture")
    this.getAll()
  }
  this.manuf='';
  })
  }

  public getByColor(color:string)
  {
    this.viechleService.getByColorViechle(color).subscribe((viechles)=>{
      this.viechels = viechles;
        if(this.viechels.length=== 0){
    alert("Color Not Founded")
    this.getAll()
  }
  this.color='';
  })
  }

  public getByKillo(killo:number)
  {
    this.viechleService.getByKilloViechle(killo).subscribe((viechles)=>{
      this.viechels = viechles;
        if(this.viechels.length=== 0){
    alert("Killo Not Founded")
    this.getAll()
  }
  this.killo= null;
  })
  }

  public getByOwners(owners:number)
  {
    this.viechleService.getByOwnersViechle(owners).subscribe((viechles)=>{
      this.viechels = viechles;
        if(this.viechels.length=== 0){
    alert("Enter correct Number")
    this.getAll()
  }
  this.owners=null;
  })
  }

  public getByCost(cost1:number,cost2:number)
  {
    this.viechleService.getByCostViechle(cost1,cost2).subscribe((viechles)=>{
      this.viechels = viechles;
        if(this.viechels.length=== 0){
    alert("Cost Not Founded")
    this.getAll()
  }
  this.cost1=null;
  this.cost2=null;
  })
  }

  public getByYear(year1:number,year2:number)
  {
    this.viechleService.getByYearViechle(year1,year2).subscribe((viechles)=>{
      this.viechels = viechles;
        if(this.viechels.length=== 0){
    alert("Year Not Founded")
    this.getAll()
  }
  this.year1=null;
  this.year2=null
  })
  }

}


