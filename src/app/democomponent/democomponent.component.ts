import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  { AQ } from '../AQ';
import  { HeroesService } from '../admin2/aqservice.service';

@Component({
  selector: 'app-democomponent',
  templateUrl: './democomponent.component.html',
  styleUrls: ['./democomponent.component.css']
})
export class DemocomponentComponent implements OnInit {

  constructor(private HttpClient: HttpClient) { }
  data_aq : AQ[]
  ngOnInit() {
  }
  connectAPI(){
  	this.HttpClient.get('http://202.160.1.102:8084/api/aq').subscribe(data =>{
  		this.data_aq = data['data']
  	})
  }

  getHeroes(): void {
    this.HeroesService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
