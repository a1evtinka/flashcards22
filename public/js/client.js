let currentFlashCard = 0;
let flashcardCount = 0;
let flashcardList;

const [flashcardContainer] = document.getElementsByClassName('flashcard');
const [answerForm] = document.getElementsByClassName('flashcard');

answerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (flashcardCount <= currentFlashCard) { return; }
  currentFlashCard += 1;
  flashcardContainer.innerHTML = form(flashcardList[currentFlashCard].question);
  console.log(currentFlashCard);
});

function form(question = '') {
  return `<form>
  <div class="form-group">
    <label for="question">${question}</label>
    <input type="text" class="form-control" id="question" placeholder="Введите ответ">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>`;
}

const [divContainer] = document.getElementsByClassName('topic');
divContainer.addEventListener('click',
  async (event) => {
    // event.preventDefault();
    let topic_id = Number(event.target.dataset.topic_id);
    if (!isNaN(topic_id) && topic_id > 0) {
      const response = await fetch(`/topic/${topic_id}`, { method: 'GET' });
      if (response.status === 200) {
        const { data:flashcards } = await response.json();
        flashcardList = flashcards;
        flashcardCount = flashcards.length - 1;
        if (flashcards.length > 0) {
          flashcardContainer.innerHTML = form(flashcards[currentFlashCard].question);
        }
      }
    }
  }
);
