class ProductComponent {
  private readonly iva = 0.21;

  constructor(
    public nombreProducto: string,
    private precioBase: number
  ) {}

  obtenerPrecioFinal(): number {
    return this.precioBase * (1 + this.iva);
  }
}

const producto = new ProductComponent("Teclado", 50);
console.log(producto.nombreProducto);
console.log(producto.obtenerPrecioFinal());

// Si descomentas esta línea, TypeScript marcará un error:
// console.log(producto.precioBase);