export interface Product {
    productId: number;
    productName: string;
    unitPrice: number;
    quantityInStock: number;
    dateSupplied: Date;
  }
  
export interface Supplier {
    supplierId: number;
    supplierName: string;
    contactPhone?: string;
  }

export interface ProductSupplier {
    productId: number;
    productName: string;
    unitPrice: number;
    quantityInStock: number;
    dateSupplied: Date;
    supplierId: number;
    supplierName: string;
    contactPhone?: string;
  }