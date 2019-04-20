import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user;
  public password;

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  // FIXME arreglar para que tome los datos de la BD
  login() {
    if (this.user === 'Luis' && this.password === 'ok') {
      this.router.navigate(['/main']);
    } else {
      this.failedLogin();
    }
  }

  async failedLogin() {
    const alert = await this.alertController.create({
      header: 'Restaurateur Waiter',
      subHeader: 'Acceso denegado',
      message: 'El usuario o la clave son incorrectos.',
      buttons: ['OK']
    });
    await alert.present();
  }

}
