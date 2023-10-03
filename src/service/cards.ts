export function handleDrop(e: DragEvent, container: HTMLDivElement) {
    const draggedCardId = e.dataTransfer?.getData('text/plain');
    e.preventDefault();

    if(draggedCardId) {
        const draggedCard = document.getElementById(draggedCardId);

        if(draggedCard) {
            container.appendChild(draggedCard);
        }
    };
};