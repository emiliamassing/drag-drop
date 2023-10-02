import '../style/_general.scss';
import { createCards } from './printCards';

const resultContainer: HTMLDivElement = document.querySelector('.resultContainer') as HTMLDivElement;

resultContainer.addEventListener('dragover', (e: DragEvent) => {
  e.preventDefault();
});

resultContainer.addEventListener('drop', (e: DragEvent) => {
  e.preventDefault();

});


createCards();