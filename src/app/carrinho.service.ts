import { ItemCarrinho } from './shared/item_carrinho.model'
import { Oferta } from './shared/oferta.model'


export class CarrinhoService {

    public items: ItemCarrinho[] = []

    public exibirItens(): ItemCarrinho[] {
        return this.items
    }

    public incluirItem(oferta: Oferta): void {
       let itemCarrinho: ItemCarrinho = new ItemCarrinho(
           oferta.id,
           oferta.imagens[0],
           oferta.titulo,
           oferta.descricao_oferta,
           oferta.valor,
           1
       )

       console.log(itemCarrinho)
    }

}


