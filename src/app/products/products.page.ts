import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Si usas Firestore
import { Observable } from 'rxjs';

interface Product {
  key?: string;
  name: string;
  price: number;
  photo: string;
  quantity: number;
  categoryId: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private collectionName = 'products';

  constructor(private firestore: AngularFirestore) {}

  getAllProducts(): Observable<Product[]> {
    return this.firestore.collection<Product>(this.collectionName).valueChanges({ idField: 'key' });
  }

  addProduct(product: Product) {
    return this.firestore.collection(this.collectionName).add(product);
  }

  updateProduct(key: string, product: Product) {
    return this.firestore.collection(this.collectionName).doc(key).update(product);
  }

  deleteProduct(key: string) {
    return this.firestore.collection(this.collectionName).doc(key).delete();
  }
}
