import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
 
/*criando nosso tradutor*/

httpOptions={
  headers: new HttpHeaders({'Content-type' : 'application/json'})
};



     nameButton="Enviar";
     dados = {
      titulo: "",
      url:""
     };
 /*injeção de dependencia - é quando nossa aplicação depende de uma ferramenta para realizar alguma tarefa
 para fazer a injeção de dependencia precisamos do construtor
 Boa pratica - usar o construtor somente para injeção de dependencia*/

 constructor(private http:HttpClient){}

     /*Método de cadastro */
     cadastro(form:any){
      /*console.logo(form.value); */
      /*document.write(form.value.titulo +" <br>"+ form.value.url);*/
     /*  this.dados = form.value */

     this.http.post('http://localhost:3000/fotos',form.value, this.httpOptions).subscribe();
     }
}
