import { PipeTransform, Pipe} from '@angular/core'


@Pipe({
    name:'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform{

    transform( texto: string, truncarEm: number ): string{
        if(texto.length > truncarEm ){
            return texto.substr(0,truncarEm) + '...'
        }
            return texto
        
    }

}