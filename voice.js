const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e) => { texts.appendChild(p);

    const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('');

    p.innerText = text;
    texts.appendChild(p);

    if (e.results[0].isFinal) {
        if (text.includes('hello')) {
          p = document.createElement('p');
          p.classList.add('replay');
          p.innerText = 'hi';
          texts.appendChild(p);
        }
    if (text.includes('how are you')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'I am fine';
      texts.appendChild(p);
    }
    if(text.includes('what is your name') ||text.includes("what's is your name")) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'My Name is natasha, yours?';
      texts.appendChild(p);
    }
    if (text.includes('open my YouTube channel')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'opening youtube channel';
      texts.appendChild(p);
      console.log('opening youtube');
      window.open("https://www.youtube.com");
    }
    
    p = document.createElement('p');
  }
});

recognition.addEventListener('end', () => {
  recognition.start();
});

recognition.start();
