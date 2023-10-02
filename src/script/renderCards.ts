const numbers: string[] = ['4', '10', '5', '2', '3'];
const app: HTMLDivElement = document.querySelector('#app') as HTMLDivElement;
const main: HTMLElement = document.querySelector('.main') as HTMLElement;

const cardContainer: HTMLDivElement = document.createElement('div') as HTMLDivElement;
cardContainer.className = 'cardContainer';

main.append(cardContainer);
app.appendChild(main);

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