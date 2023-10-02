import './style/_general.scss';

const numbers: string[] = ['4', '10', '5', '2', '3'];

function createCards():void {
  numbers.map((number) => {
    const card: HTMLDivElement = document.createElement('div');
    const heading: HTMLHeadingElement = document.createElement('h2');

    card.className = 'card';
    card.id = number;

    heading.innerHTML = number;

    card.appendChild(heading);
    cardContainer.appendChild(card);
  });
};

const app: HTMLDivElement = document.querySelector('#app') as HTMLDivElement;
const main: HTMLElement = document.querySelector('.main') as HTMLElement;

const resultContainer: HTMLDivElement = document.createElement('div') as HTMLDivElement;
const cardContainer: HTMLDivElement = document.createElement('div') as HTMLDivElement;

resultContainer.className = 'resultContainer';
cardContainer.className = 'cardContainer';

resultContainer.innerHTML = 'Result Container';

main.append(resultContainer, cardContainer);
app.appendChild(main);

createCards();