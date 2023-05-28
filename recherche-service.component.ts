import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';
import { ChequeService } from '../cheque.service';
import { Cheque } from '../cheque';
import { Compte } from '../compte';

@Component({
  selector: 'app-recherche-service',
  templateUrl: './recherche-service.component.html',
  styleUrls: ['./recherche-service.component.css']
})
export class RechercheServiceComponent implements OnInit {

  ngOnInit(): void {
    let data=this.localStore.getData('role');
    if(data=="0"){
      this.router.navigate(["/"]);
    }else if(data=="1"){
      this.router.navigate(["/agence"]);
    }else if(data=="2"){
      this.router.navigate(["/rechercheservice"]);
    }else if(data=="3"){
      this.router.navigate(["/administrateur"]);
    }else{
      this.router.navigate(["/client"]);
    }
  }

  

  constructor(private us: ChequeService, private router :Router,private localStore:LocalService){}
  status: boolean = false;
  clickEvent(){
      this.status = !this.status; }

      Deconnexion(){
        this.localStore.saveData('role',"0");
        location.reload();
      }


     
      numCheque!:Number;
      numBordereau!:Number;
      numCompte!:Number;
      checkInfo!: Cheque;
      compte!:Compte;
    
      
    
    
      rechercher() {
        var numCh = this.numCheque;
        var numBor = this.numBordereau;
        var numCo = this.numCompte;
        this.us.chequeExistant(numCh).subscribe((test:Boolean) => {
          console.log(test);
          if (test == false) {
            alert("Numero de chèque introuvable");
          } else {
            this.us.bordreauExistant(numBor).subscribe(res => {
              if (res == null) {
                alert("Numero de bordereau introuvable");
              } else {
                this.us.compteExistant(numCo).subscribe(res => {
                  if (res == null) {
                    alert("Numero de compte introuvable");
                  } else {
                    this.compte=res;
                    this.us.rechercherCheque(numCh, numBor, numCo).subscribe((cheque: Cheque) => {
                      console.log("Hi");
                      console.log(cheque);
                      this.checkInfo = cheque;
                    });
                  }
                }, (error) => {
                  console.log(error);
                });
              }
            });
          }
        });
      }
      
    
        imprimer(){
          this.router.navigate(["/imprimerService"], { state: { data: this.checkInfo }});
        }
        
      


}
