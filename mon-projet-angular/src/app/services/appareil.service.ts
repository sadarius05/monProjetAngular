import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AppareilService {
  appareilSubject = new Subject<any[]>();
  private appareils!: any[];

  constructor(private httpClient: HttpClient) {}

  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }
  getAppareilById(id: number): any {
    const appareil = this.appareils.find((appareilObject) => {
      return appareilObject.id === id;
    });
    return appareil;
  }

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allume';
    }
    this.emitAppareilSubject();
  }
  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'eteint';
    }
    this.emitAppareilSubject();
  }
  switchOnOne(index: number) {
    this.appareils[index].status = 'allume';
    this.emitAppareilSubject();
  }
  switchOffOne(index: number) {
    this.appareils[index].status = 'eteint';
    this.emitAppareilSubject();
  }

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: '',
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[this.appareils.length - 1].id + 1;

    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }
  saveAppareilsToServer() {
    this.httpClient
      .put(
        'https://base-de-donnees-projet-angular-default-rtdb.firebaseio.com/appareils.json',
        this.appareils
      )
      .subscribe({
        next: (value) => console.log('Enregistrement termine !' + value),
        error: (erreur) => console.log('erreur !' + erreur),
      });
  }

  getAppareilsFromServer() {
    this.httpClient
      .get<any[]>(
        'https://base-de-donnees-projet-angular-default-rtdb.firebaseio.com/appareils.json'
      )
      .subscribe({
        next: (response) => {
          (this.appareils = response), this.emitAppareilSubject();
        },
        error: (erreur) =>
          console.log('Erreur au chargement des donnees !' + erreur),
      });
  }
}
