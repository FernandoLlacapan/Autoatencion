import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dbPath = '/products';  // Ruta a la colección de productos

  constructor(private db: AngularFireDatabase) { }

  // Obtener todos los productos
  getAllProducts() {
    return this.db.list(this.dbPath).snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  // Agregar un nuevo producto
  addProduct(product: any) {
    return this.db.list(this.dbPath).push(product);
  }

  // Actualizar un producto
  updateProduct(key: string, product: any) {
    return this.db.list(this.dbPath).update(key, product);
  }

  // Eliminar un producto
  deleteProduct(key: string) {
    return this.db.list(this.dbPath).remove(key);
  }
}