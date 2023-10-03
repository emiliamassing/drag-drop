import { handleDrop } from '../service/cardService';
import '../style/_general.scss';
import { renderCards } from './renderCards';
const resultContainer: HTMLDivElement = document.querySelector('.resultContainer') as HTMLDivElement;

resultContainer.addEventListener('dragover', (e: DragEvent) => {
  e.preventDefault();
});

resultContainer.addEventListener('drop', (e: DragEvent) => {
  handleDrop(e, resultContainer);
});

renderCards();