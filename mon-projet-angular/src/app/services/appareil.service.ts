export class AppareilService {
  appareils = [
    {
      name: 'Machine a laver',
      status: 'eteint',
    },
    {
      name: 'Television',
      status: 'allume',
    },
    {
      name: 'Ordinateur',
      status: 'eteint',
    },
  ];

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allume';
    }
  }
  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'eteint';
    }
  }
  switchOnOne(index: number) {
    this.appareils[index].status = 'allume';
  }
  switchOffOne(index: number) {
    this.appareils[index].status = 'eteint';
  }
}
