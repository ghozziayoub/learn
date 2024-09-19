import { CategoriesService } from './../../categories.service';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css',
})
export class PropertiesComponent {
  categoriesList: any[] = [];

  constructor(private categoriesService: CategoriesService) {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoriesService.getAllCategories().subscribe({
      next: (result) => {
        this.categoriesList = result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  propertiesList = [
    {
      title: '18 Old Street Miami, OR 97219',
      category: { id: 2, name: 'Villa House' },
      price: '2.264.000',
      imageUrl: 'assets/images/property-01.jpg',
      bedrooms: 8,
      bathrooms: 8,
      area: 545,
      floor: 3,
      parkingSpots: 6,
    },
  ];

  displayedList = this.propertiesList;

  displayByCategory(categoryId: number) {
    this.displayedList = [];

    if (categoryId == 0) {
      this.displayedList = this.propertiesList;
    } else {
      for (let i = 0; i < this.propertiesList.length; i++) {
        const property = this.propertiesList[i];

        if (property.category.id == categoryId) {
          this.displayedList.push(property);
        }
      }
    }
  }
}
