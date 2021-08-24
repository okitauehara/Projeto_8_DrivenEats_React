import Pratos from "./Pratos.js";
import Bebidas from "./Bebidas.js";
import Sobremesas from "./Sobremesas.js";

export default function Menu() {
    return (
        <div className="menu">
            <Pratos />
            <Bebidas />
            <Sobremesas />
        </div>
    );
}