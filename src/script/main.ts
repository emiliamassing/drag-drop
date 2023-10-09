import { calculateSum, handleDrop } from '../service/cardService';
import '../style/_general.scss';
import { renderCards } from './renderCards';
import { renderSummary } from './renderSummary';
const dropContainer: HTMLDivElement = document.querySelector('.dropContainer') as HTMLDivElement;

dropContainer.addEventListener('dragover', (e: DragEvent) => {
  e.preventDefault();
});

dropContainer.addEventListener('drop', (e: DragEvent) => {
  handleDrop(e, dropContainer);
  
  const sum = calculateSum(dropContainer);
  renderSummary(sum);
});

dropContainer.addEventListener('dragend', (e: DragEvent) => {
  e.preventDefault();

  const sum = calculateSum(dropContainer);
  renderSummary(sum);
});

renderCards();