export interface Categoria {
    productos: any;
    total:      number;
    categorias: CategoriaElement[];
}

export interface CategoriaElement {
    _id:     string;
    nombre:  string;
    usuario: Usuario;
}

export interface Usuario {
    _id:    string;
    nombre: string;
}