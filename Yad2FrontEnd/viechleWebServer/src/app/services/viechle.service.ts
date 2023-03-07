import { Injectable } from '@angular/core';
import { Viechle } from '../models/Viechles';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ViechleService {

  SERVER_BASE_URL = "http://127.0.0.1:1234/viechles/"
  ADD_URL = this.SERVER_BASE_URL+"add"
  GET_URL = this.SERVER_BASE_URL+"all"
  GETBYMANUF_URL=this.SERVER_BASE_URL+"manuf/"
  GETBYKILLO_URL=this.SERVER_BASE_URL+"killo/"
  GETBYOWNERS_URL=this.SERVER_BASE_URL+"owners/"
  GETBYYEAR_URL=this.SERVER_BASE_URL+"year/"
  GETBYCOST_URL=this.SERVER_BASE_URL+"cost/"
  GETBYCOLOR_URL=this.SERVER_BASE_URL+"color/"
  constructor(private httpClient : HttpClient) { }

  public getViechles()
  {
    return this.httpClient.get<Viechle[]>(this.GET_URL,{withCredentials:false})
  }

  public addViechle(viechle : Viechle)
  {
    return this.httpClient.post<Viechle>(this.ADD_URL,viechle,{withCredentials:false});
  }

  public delViechle(id:number)
  {
   const DEL_URL = this.SERVER_BASE_URL+id;
    return this.httpClient.delete<Viechle>(DEL_URL,{withCredentials:false});
    
  }

  public getByManufViechle(manuf:string)
  {
   const URL = this.GETBYMANUF_URL+manuf;
    return this.httpClient.get<Viechle[]>(URL,{withCredentials:false});
    
  }

  public getByKilloViechle(killo:number)
  {
   const URL = this.GETBYKILLO_URL+killo;
    return this.httpClient.get<Viechle[]>(URL,{withCredentials:false});
    
  }

  public getByOwnersViechle(owners:number)
  {
   const URL = this.GETBYOWNERS_URL+owners;
    return this.httpClient.get<Viechle[]>(URL,{withCredentials:false});
    
  }

  public getByColorViechle(color:string)
  {
   const URL = this.GETBYCOLOR_URL+color;
    return this.httpClient.get<Viechle[]>(URL,{withCredentials:false});
    
  }

  public getByCostViechle(cost1:number,cost2:number)
  {
   const URL = this.GETBYCOST_URL+cost1+'/'+cost2;
    return this.httpClient.get<Viechle[]>(URL,{withCredentials:false});
    
  }
  public getByYearViechle(year1:number,year2:number)
  {
   const URL = this.GETBYYEAR_URL+year1+'/'+year2;
    return this.httpClient.get<Viechle[]>(URL,{withCredentials:false});
    
  }

  
  
}
