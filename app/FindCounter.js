let heroes = require('../data/data.json')

export default class FindCounter {
  static find(list) {
    let advantages = {};
    let lineup = list.map((item) => item.hero)
    for (let enemy in heroes) {
      for (let hero of lineup) {
        if (lineup.indexOf(enemy) > -1) continue;

        if (!(enemy in advantages)) 
          advantages[enemy] = 0;

        advantages[enemy] += heroes[hero]['matchups'][enemy][0];
      }
    }

    var sortable = [];
    for (hero in advantages) {
      sortable.push([hero, advantages[hero]]);
    }

    let sorted = sortable.sort(function (a, b) {
      return a[1] - b[1];
    });
    
    return sorted;
  }

  static filter(advantages, roles) {
    return advantages.filter((hero) => {
      let heroRoles = heroes[hero[0]].roles;
      return heroRoles.some(role => roles.indexOf(role) > -1);
    });
  }
}