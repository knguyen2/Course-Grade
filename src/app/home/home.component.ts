import { Component, OnInit } from '@angular/core';
import { Studentlist } from './../shared/studentlist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  students = [
    {viewValue:'Van Anthony'},
    {viewValue: 'Caroline Alexander'},
    {viewValue: 'Nancy Charles'},
    {viewValue: 'Kim Nguyen'},
    {viewValue: 'Tin Nguyen'}
  ];

  info: Studentlist = {
    name: '',
    course: '',
    score: '',
    grade: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('Info', this.info);
  }
}
