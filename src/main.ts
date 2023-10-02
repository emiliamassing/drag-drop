import './style/_general.scss';

const app: HTMLDivElement = document.querySelector('#app') as HTMLDivElement;
const main: HTMLElement = document.querySelector('.main') as HTMLElement;

const resultContainer: HTMLDivElement = document.createElement('div') as HTMLDivElement;

resultContainer.className = 'resultContainer';

resultContainer.innerHTML = 'Result Container';

main.appendChild(resultContainer);
app.appendChild(main);



