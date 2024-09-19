import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule, RouterLink, NavbarComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  name = 'ALI';

  users = ['nour', 'ryhem', 'amen', 'nouha'];

  usersDetails = [
    { name: 'ali', age: 50, isHappy: true },
    { name: 'salah', age: 35, isHappy: true },
    { name: 'mohamed', age: 48, isHappy: true },
    { name: 'farhat', age: 25, isHappy: false },
  ];

  // 1
  nameList = [
    'Time',
    'Past',
    'Future',
    'Dev',
    'Fly',
    'Flying',
    'Soar',
    'Soaring',
    'Power',
    'Falling',
    'Fall',
    'Jump',
    'Cliff',
    'Mountain',
    'Rend',
    'Red',
    'Blue',
    'Green',
    'Yellow',
  ];

  addRandomName() {
    this.users.push(
      this.nameList[Math.floor(Math.random() * this.nameList.length)]
    );
  }

  removeUserName(indice: number) {
    this.users.splice(indice, 1);
  }
}
