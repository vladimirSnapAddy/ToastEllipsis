import { Component } from '@angular/core';
import { ToastButton, ToastController, ToastOptions } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private toastController: ToastController) {}

  async showToast(): Promise<void> {
    let options: ToastOptions = {
      duration: 50000,
      message: 'This is a very long message that has a lot of it written on it and repeated. This is a very long message that has a lot of it written on it and repeated. This is a very long message that has a lot of it written on it and repeated.'
    };

    // display error details button
    this.addErrorDetailsButton(options);

    // display close button
    const closeButton: ToastButton = {
      icon: 'close-outline',
      role: 'cancel',
      side: 'end',
      handler: () => console.log('toast dismissed')
    };
    options.buttons.push(closeButton);

    const toast = await this.toastController.create(options);

    // show toast
    await toast.present();
  }

  private async addErrorDetailsButton(opts: ToastOptions): Promise<void> {
    const toastClass = 'my-error-toast';

    if (opts.cssClass) {
      Array.isArray(opts.cssClass) ? opts.cssClass.push(toastClass) : (opts.cssClass = [opts.cssClass, toastClass]);
    } else {
      opts.cssClass = toastClass;
    }

    const errorDetailsButton: ToastButton = {
      side: 'end',
      text: 'More details',
      handler: () => console.log('Clicked on more details')
    };
    opts.buttons ? opts.buttons.push(errorDetailsButton) : (opts.buttons = [errorDetailsButton]);
  }

}
