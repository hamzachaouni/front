import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../../services/jarwis.service';


@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  login:any = "../assets/login.jpg";

  public form = {
    email: null,
  };

  image = "https://www.planwallpaper.com/static/images/95173766a548557b034587f5b0b8bb63--wallpaper-iphone-winter-pinapple-wallpap_tgcuPDN.jpg"


  constructor(
    private jarwis: JarwisService,

  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.jarwis.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      //error => this.notfy.error(error.error.error)
      /*data => console.log(data),
      error => console.log(error)*/
    );
  }

  handleResponse(res) {
    console.log(res);
    this.form.email = null;
  }

}
