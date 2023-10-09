const summaryContainer: HTMLDivElement = document.querySelector('.summaryContainer') as HTMLDivElement;

export function renderSummary(summary: number) {
    if(summaryContainer) {
        summaryContainer.innerHTML = `The summary of all cards are: ${JSON.stringify(summary)}`;
    }
}