import { Injectable } from '@angular/core';
import { Player } from './player';

@Injectable()
export class GameService {

  public players: Player[] = [];

  constructor() { }

  getPlayers() {
    this.createOponent();
    return this.players;
  }

  createPlayer(name: string): void {
    let player = new Player();
    player.bot = false;
    player.name = name;
    this.players.push(player);
  }

  createOponent(): void {
    let player = new Player();
    player.name = 'Bot';
    this.players.push(player);
  }

}
