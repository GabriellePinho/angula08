import { Component } from '@angular/core';

@Component({
  selector: 'app-fotolist',
  templateUrl: './fotolist.component.html',
  styleUrls: ['./fotolist.component.css']
})
export class FotolistComponent {
  
  /* Meu array de fotos */
  minhasFotos = [
    {titulo: 'Aurora', url: 'https://cdn.pixabay.com/photo/2023/04/11/16/04/solar-wind-7917659_1280.jpg'},
    {titulo: 'Fogos', url: 'https://cdn.pixabay.com/photo/2023/07/27/03/27/fireworks-8152353_640.jpg'},
    {titulo: 'Animal', url: 'https://cdn.pixabay.com/photo/2023/05/30/15/39/fox-squirrel-8028963_640.jpg'},
    {titulo: 'Passáro', url: 'https://cdn.pixabay.com/photo/2023/06/18/04/57/grey-capped-flycatcher-8071233_640.jpg'},
    {titulo: 'Sapo', url: 'https://cdn.pixabay.com/photo/2023/07/26/15/38/frog-8151540_640.jpg'},
    {titulo: 'Bicicleta', url: 'https://cdn.pixabay.com/photo/2023/07/28/15/14/wall-8155414_640.jpg'},

  ]
}
