import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Dropdown, DropdownItem, DropdownModule } from 'primeng/dropdown';

interface City {
  name: string;
  code: string;
} 

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [FormsModule,DropdownModule,CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent implements OnInit{
  cities: City[] | undefined;

  selectedCity: City | undefined;
  ngOnInit() {
    debugger;
    this.cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
  }

}

