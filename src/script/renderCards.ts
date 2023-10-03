import { handleDrop } from "../service/cards";

const numbers: string[] = ['4', '10', '5', '2', '3'];
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
    card.id = number;

    heading.innerHTML = number;

    card.appendChild(heading);
    cardContainer.appendChild(card);

    card.addEventListener('dragstart', (e: DragEvent) => {
      e.dataTransfer?.setData('text/plain', card.id);
    });
  });
};