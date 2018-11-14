import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  { HeroesService } from './aqservice.service';



@Component({
  selector: 'app-admin2',
  templateUrl: './admin2.component.html',
  styleUrls: ['./admin2.component.css']
})
export class Admin2Component implements OnInit {


  todayForm: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder,private HttpClient: HttpClient ) { }

  ngOnInit() {
    this.todayForm = this.formBuilder.group({
            District: [''],
            Value: [''],
            Date: [''],
        });
  }

  onSubmit() {
    //  const newHero: Hero = { name } as Hero;
    // this.heroesService.addHero(newHero)
    //   .subscribe(hero => this.heroes.push(hero));
  }
    }
  // District = ['Brunei-Muara', 'Tutong', 'Belait', 'Temburong'];
  // model = new AQ_form(1,'1-1-1', 'Brunei-Muara', 1);
  // submitted = false;
  // onSubmit() { this.submitted = true; }
  // get diagnostic() {return JSON.stringify(this.model);}

  // newAQform{
  //   this.model = new AQ_form( 2,'' , '' ,);
  // }
}
