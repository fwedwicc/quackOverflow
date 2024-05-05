// Actionsssss
const messageInput = document.getElementById('message');
const sendBtn = document.getElementById('send-btn');
const chat = document.getElementById('chat');
const time = document.querySelector('.time');
const quack = new Audio('./assets/sounds/quack.mp3');
const bloop = new Audio('./assets/sounds/bloop.mp3');

// Timeeererist for Initial Quack

const updateTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  time.textContent = `${hours}:${minutes}`;
};

// updateTime function to set the initial time
updateTime();


function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}


// Miracle
function main() {
  const messageValue = messageInput.value;

  const chatContainer = document.createElement('div');
  chatContainer.classList.add('chat', 'chat-end', 'lg:px-64', 'px-4');

  const chatImage = document.createElement('div');
  chatImage.classList.add('chat-image', 'avatar');

  const chatImageInner = document.createElement('div');
  chatImageInner.classList.add('w-10', 'rounded-full');

  const chatImageImg = document.createElement('img');
  chatImageImg.alt = 'Tailwind CSS chat bubble component';
  chatImageImg.src = './assets/images/chad-profile.png';

  chatImageInner.appendChild(chatImageImg);
  chatImage.appendChild(chatImageInner);
  chatContainer.appendChild(chatImage);

  const chatHeader = document.createElement('div');
  chatHeader.classList.add('chat-header', 'text-base-content');
  chatHeader.textContent = 'You';

  const chatTime = document.createElement('time');
  chatTime.classList.add('text-xs', 'opacity-50', 'pl-2');

  // Timerist for message
  const updateTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    chatTime.textContent = `${hours}:${minutes}`;
  };

  updateTime();

  chatHeader.appendChild(chatTime);
  chatContainer.appendChild(chatHeader);

  const chatUl = document.createElement('ul');
  chatContainer.appendChild(chatUl);

  const chatBubble = document.createElement('li');
  chatBubble.classList.add('chat-bubble', 'pr-4', 'lg:max-w-[30rem]', 'max-w-[17rem]', 'chat-bubble-secondary', 'text-secondary-content');
  chatBubble.id = 'message';
  chatUl.appendChild(chatBubble);

  if (messageValue === '') {
    const quackEmoji = new Image();
    quackEmoji.src = './assets/images/rubber-duck-icon.png';
    quackEmoji.classList.add('w-7', 'h-auto');
    chatBubble.innerHTML = ''; 
    chatBubble.appendChild(quackEmoji); 
    quack.play();
  } else {
    chatBubble.textContent = messageValue;
  }

  const chatFooter = document.createElement('div');
  chatFooter.classList.add('chat-footer', 'opacity-50');
  chatFooter.textContent = 'Delivered';
  chatContainer.appendChild(chatFooter);

  document.body.appendChild(chatContainer);

  messageInput.value = '';

  setTimeout(function () {
    // Container for Quack
    const quackContainer = document.createElement('div');
    quackContainer.classList.add('chat', 'chat-start', 'lg:px-64', 'px-4');

    const quackImage = document.createElement('div');
    quackImage.classList.add('chat-image', 'avatar');

    const quackImageInner = document.createElement('div');
    quackImageInner.classList.add('w-10', 'rounded-full');

    const quackImageImg = document.createElement('img');
    quackImageImg.alt = 'quackOverflow Profile';
    quackImageImg.src = './assets/images/rd-right-view.jpg';

    quackImageInner.appendChild(quackImageImg);
    quackImage.appendChild(quackImageInner);
    quackContainer.appendChild(quackImage);

    const quackHeader = document.createElement('div');
    quackHeader.classList.add('chat-header', 'text-base-content');
    quackHeader.textContent = 'Quack Overflow';

    const quackTime = document.createElement('time');
    quackTime.classList.add('text-xs', 'opacity-50', 'pl-2');

    // Timerist for quack
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      quackTime.textContent = `${hours}:${minutes}`;
    };

    updateTime();

    quackHeader.appendChild(quackTime);
    quackContainer.appendChild(quackHeader);

    const quackUl = document.createElement('ul');
    quackContainer.appendChild(quackUl);

    // chat bubble for quackerist
    const quackBubble = document.createElement('li');
    quackBubble.classList.add('chat-bubble', 'pr-6', 'chat-bubble-primary', 'text-primary-content');

    // loader elementttttt
    const loader = document.createElement('span');
    loader.classList.add('loading', 'loading-dots', 'loading-md', 'pt-2');
    quackBubble.appendChild(loader);

    // Append ng quackBubble element sa quackUl element
    quackUl.appendChild(quackBubble);

    // typing loader for 3 seconds
    setTimeout(() => {
      // QUackk!!!!!!
      quackBubble.textContent = 'Quack!';
    }, 2000);

    const quackFooter = document.createElement('div');
    quackFooter.classList.add('chat-footer', 'opacity-50');
    quackFooter.textContent = 'Typing';
    quackContainer.appendChild(quackFooter);

    setTimeout(() => {
      // Puter element with the current time
      const updateQuackTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        quackFooter.textContent = `Seen at ${hours}:${minutes}`;
      };
      updateQuackTime();
    }, 2000);

    document.body.appendChild(quackContainer);
  }, 400);

  setTimeout(function () {
    scrollToBottom();
  }, 500); // Adjust the delay as needed
}


messageInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    // Calling Miracle
    main();
    // Message Sound
    bloop.play();
    // Quack Sound
    setTimeout(() => {
      quack.play();
    }, 2000);

  }
});

sendBtn.addEventListener('click', function () {
  // Calling Miracle
  main();
  // Message Sound
  bloop.play();
  // Quack Sound
  setTimeout(() => {
    quack.play();
  }, 2000);
});

function enableMute() { 
  quack.muted = true;
  bloop.muted = true;
}

