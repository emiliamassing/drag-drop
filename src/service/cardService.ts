export function handleDrop(e: DragEvent, container: HTMLDivElement) {
    const draggedCardId = e.dataTransfer?.getData('text/plain');
    e.preventDefault();

    if(draggedCardId) {
        const draggedCard = document.getElementById(draggedCardId);

        if(draggedCard) {
            container.appendChild(draggedCard);
        };
    };
};

export function calculateSum(container: HTMLDivElement): number {
    let sum = 0;
    const cardsInContainer = container.querySelectorAll('.card');
  
    cardsInContainer.forEach((card) => {
        const cardValue = +card.id;
  
        if(!isNaN(cardValue)) {
            sum += cardValue; 
        };
    });
  
    return sum;
};