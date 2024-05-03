// Actionsssss
const messageInput = document.getElementById('message');
const sendBtn = document.getElementById('send-btn');
const chat = document.getElementById('chat');

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
  chatImageImg.src = 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg';

  chatImageInner.appendChild(chatImageImg);
  chatImage.appendChild(chatImageInner);
  chatContainer.appendChild(chatImage);

  const chatHeader = document.createElement('div');
  chatHeader.classList.add('chat-header');
  chatHeader.textContent = 'Your Name';

  const chatTime = document.createElement('time');
  chatTime.classList.add('text-xs', 'opacity-50', 'pl-2');
  chatTime.textContent = '12:45';

  chatHeader.appendChild(chatTime);
  chatContainer.appendChild(chatHeader);

  const chatUl = document.createElement('ul');
  chatContainer.appendChild(chatUl);

  const chatBubble = document.createElement('li');
  chatBubble.classList.add('chat-bubble', 'pr-6', 'lg:max-w-[30rem]', 'max-w-[17rem]');
  chatBubble.textContent = messageValue;
  chatBubble.id = 'message';
  chatUl.appendChild(chatBubble);

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
    quackImageImg.alt = 'Tailwind CSS chat bubble component';
    quackImageImg.src = 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg';

    quackImageInner.appendChild(quackImageImg);
    quackImage.appendChild(quackImageInner);
    quackContainer.appendChild(quackImage);

    const quackHeader = document.createElement('div');
    quackHeader.classList.add('chat-header');
    quackHeader.textContent = 'Quack Overflow';

    const quackTime = document.createElement('time');
    quackTime.classList.add('text-xs', 'opacity-50', 'pl-2');
    quackTime.textContent = '12:45';

    quackHeader.appendChild(quackTime);
    quackContainer.appendChild(quackHeader);

    const quackUl = document.createElement('ul');
    quackContainer.appendChild(quackUl);

    const quackBubble = document.createElement('li');
    quackBubble.classList.add('chat-bubble', 'pr-6');

    // Create the loader element
    const loader = document.createElement('span');
    loader.classList.add('loading', 'loading-dots', 'loading-md', 'pt-2');
    quackBubble.appendChild(loader);

    // Append the quackBubble element to the quackUl element
    quackUl.appendChild(quackBubble);

    // Show the loader for 3 seconds
    setTimeout(() => {
      // Set the text content of the quackBubble element to 'quack'
      quackBubble.textContent = 'Quack!';

    }, 2000);

    const quackFooter = document.createElement('div');
    quackFooter.classList.add('chat-footer', 'opacity-50');
    quackFooter.textContent = 'Seen at';
    quackContainer.appendChild(quackFooter);

    document.body.appendChild(quackContainer);
  }, 400);

  setTimeout(function () {
    scrollToBottom();
  }, 500); // Adjust the delay as needed
}


messageInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    main();
  }
});

sendBtn.addEventListener('click', function () {
  main();
});