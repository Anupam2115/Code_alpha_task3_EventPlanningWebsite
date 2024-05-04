const addEventBtn = document.getElementById('addEventBtn');
const addEventModal = document.getElementById('addEventModal');
const cancelAddEvent = document.getElementById('cancelAddEvent');
const addEventForm = document.getElementById('addEventForm');
const eventGrid = document.getElementById('eventGrid');

addEventBtn.addEventListener('click', () => {
  addEventModal.classList.remove('hidden');
});

cancelAddEvent.addEventListener('click', () => {
  addEventModal.classList.add('hidden');
});

addEventForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const eventTitle = document.getElementById('eventTitle').value;
  const eventDate = document.getElementById('eventDate').value;
  const eventImage = document.getElementById('eventImage').value || 'https://picsum.photos/600/400';

  const eventCard = `
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <img class="w-full h-48 object-cover" src="${eventImage}" alt="Event image for ${eventTitle}">
      <div class="p-4">
        <h2 class="text-xl font-bold text-gray-800 mb-2">${eventTitle}</h2>
        <p class="text-gray-600 mb-4">${eventDate}</p>
        <button class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Register</button>
      </div>
    </div>
  `;

  eventGrid.insertAdjacentHTML('beforeend', eventCard);

  addEventModal.classList.add('hidden');
  addEventForm.reset();
});