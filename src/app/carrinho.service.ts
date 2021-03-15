import { ItemCarrinho } from './shared/item_carrinho.model'


export class CarrinhoService {

    public items: ItemCarrinho[] = []

    public exibirItens(): ItemCarrinho[] {
        return this.items
    }

}


