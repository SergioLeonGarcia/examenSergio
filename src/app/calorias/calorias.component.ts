import { Component } from '@angular/core';
import { faThumbsUp, faThumbsDown, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

interface Caloria {
  comida: string;
  calorias: number;
  liked?: boolean;
  disliked?: boolean;
}

@Component({
  selector: 'app-calorias',
  templateUrl: './calorias.component.html',
  styleUrls: ['./calorias.component.css']
})
export class CaloriasComponent {
  comida: string = '';
  calorias: number = 0;
  caloriasList: Caloria[] = [];
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faTrashAlt = faTrashAlt;

  addCaloria() {
    if (this.comida && this.calorias) {
      this.caloriasList.push({ comida: this.comida, calorias: this.calorias });
      this.comida = '';
      this.calorias = 0;
    }
  }

  like(item: Caloria) {
    item.liked = !item.liked;
    if (item.liked) item.disliked = false;
  }

  dislike(item: Caloria) {
    item.disliked = !item.disliked;
    if (item.disliked) item.liked = false;
  }

  remove(item: Caloria) {
    this.caloriasList = this.caloriasList.filter(i => i !== item);
  }

  removeAll() {
    this.caloriasList = [];
  }
}
