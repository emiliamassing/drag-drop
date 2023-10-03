import { Card } from "../models/Card";
import { handleDrop } from "../service/cardService";

let numbers: Card[] = [
  new Card('4'),
  new Card('10'),
  new Card('5'),
  new Card('2'),
  new Card('3') 
];
const cardContainer: HTMLDivElement = document.querySelector('.cardContainer') as HTMLDivElement;

cardContainer.addEventListener('dragover', (e: DragEvent) => {
  e.preventDefault();
});

cardContainer.addEventListener('drop', (e: DragEvent) => {
  handleDrop(e, cardContainer);
});

export function renderCards():void {
  numbers.map((number) => {
    const card: HTMLDivElement = document.createElement('div');
    const heading: HTMLHeadingElement = document.createElement('h2');

    card.draggable = true;
    card.className = 'card';

    card.id = number.value;

    heading.innerHTML = number.value;

    card.append(heading);
    cardContainer.appendChild(card);

    card.addEventListener('dragstart', (e: DragEvent) => {
      e.dataTransfer?.setData('text/plain', card.id);
    });
  });
};