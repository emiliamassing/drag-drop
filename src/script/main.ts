import '../style/_general.scss';
import { renderCards } from './renderCards';
const resultContainer: HTMLDivElement = document.querySelector('.resultContainer') as HTMLDivElement;

resultContainer.addEventListener('dragover', (e: DragEvent) => {
  e.preventDefault();
});

resultContainer.addEventListener('drop', (e: DragEvent) => {
  e.preventDefault();

  const draggedCardId = e.dataTransfer?.getData('text/plain');

  if(draggedCardId) {
    const draggedCard = document.getElementById(draggedCardId);

    if(draggedCard) {
      resultContainer.appendChild(draggedCard);
    }
  };
  
});

renderCards();