import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http.get<any>('http://localhost:3000/categories');
  }
  getCategoryById(id: any) {
    return this.http.get<any>('http://localhost:3000/categories/' + id);
  }
  addCategory(category: any) {
    return this.http.post<any>('http://localhost:3000/categories', category);
  }
  updateCategory(id: any, category: any) {
    return this.http.patch<any>(
      'http://localhost:3000/categories/' + id,
      category
    );
  }
  deleteCategory(id: any) {
    return this.http.delete<any>('http://localhost:3000/categories/' + id);
  }
}
