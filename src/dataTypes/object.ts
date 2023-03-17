// Object
const obj: {name: string, age?: number, hometown: string} = {
    name: "Bình",
    age: 20,
    hometown: "Hà Nội"
}

// Interface
interface Book {
    authors: {id: number, name: string, slug:string}[],
    book_cover: string,
    categories: {id: number, name: string, is_leaf: boolean},
    current_seller: Seller[],
    description: string,
    images: Image[]
}

interface Seller {
    id: number,
    sku: string,
    name: string,
    link: string,
    logo: string,
    price: number,
    product_id: string,
    store_id: number,
    is_best_store: boolean,
    is_offline_installment_supported?: string
}

// Type alias
type Image = {
    base_url: string,
    is_gallery: boolean,
    label: string
}

type User = {
    username: string,
    password: string,
    email: string
}

enum ROLE {STAFF, MANAGER}

type Admin = User & {
    is_admin: boolean,
    role: ROLE.STAFF | ROLE.MANAGER
}

// Properties
// interface User {
//     username: string,
//     password: string,
//     email: string,
// }
// // Methods
// interface User {
//     login: () => void,
//     logout: () => void
// }

// enum ROLE {STAFF, MANAGER}

// interface Admin extends User {
//     is_admin: boolean,
//     role: ROLE.STAFF | ROLE.MANAGER
// }

type list_price = {
    name: string,
    origin_price: number,
    quantity_sold: quantity_sold[]
}
 type quantity_sold ={
     text: string,
     value: number,
 }

 type rating_everage ={ 
     short_description: string,
     specifications:specifications[]
 }
 type specifications ={
     name: string,
     attributes:attributes[]
 }
 type attributes ={
     code: string,
     name: string,
     value: string
 }