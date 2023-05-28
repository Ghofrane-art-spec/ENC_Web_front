import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cheque } from 'src/app/cheque';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-imprimerservice',
  templateUrl: './imprimerservice.component.html',
  styleUrls: ['./imprimerservice.component.css']
})
export class ImprimerserviceComponent {
  checkInfo!: Cheque;
  constructor(private router: Router,private localStore:LocalService) { }
  ngOnInit(): void {
    this.checkInfo = history.state.data;
    let data=this.localStore.getData('role');
      if(data=="0"){
        this.router.navigate(["/"]);
      }else if(data=="1"){
        this.router.navigate(["/agence"]);
      }else if(data=="2"){
        this.router.navigate(["/imprimerService"]);
      }else if(data=="3"){
        this.router.navigate(["/administrateur"]);
      }else{
        this.router.navigate(["/client"]);
      }
  }
  Deconnexion(){
    this.localStore.saveData('role',"0");
    location.reload();
  }
  printPage() {
    window.print();
  }
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

}
