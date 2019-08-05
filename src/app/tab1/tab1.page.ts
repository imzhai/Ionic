import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  // Obligatoire d'initier les service de camera avec le provider.
  providers: [Camera]
})
export class Tab1Page implements OnInit {
photo: string;
photos: string[] = [];

  constructor(
    private camera: Camera,
    private alertController: AlertController
    ) {}

  ngOnInit(){}

  takePicture(){
  let options: CameraOptions = {
    // On va stocker les photos sous forme de chaine de caractère et pas de fichier
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 640,
      targetHeight: 480,
      saveToPhotoAlbum: true,
      cameraDirection: this.camera.Direction.FRONT,
      correctOrientation: true
  }

    this.camera.getPicture(options).then(photo =>{  
    // On créée une modale et une fois qu'elle est prête, on l'affiche
    // this.alertController.create({message: data}).then(alert => alert.present());
    this.photo = 'data:image/jpg;base64,'+photo;
    this.photos.push(this.photo);
  });
}

 

}
