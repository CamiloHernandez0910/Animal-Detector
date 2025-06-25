const imageInput = document.getElementById('imageInput');
const cameraButton = document.getElementById('cameraButton');
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const preview = document.getElementById('preview');
const result = document.getElementById('result');

let model;

// Diccionario simple para traducir
const traducciones = {
  "lion": "león",
  "tiger": "tigre",
  "gorilla": "gorila",
  "dog": "perro",
  "cat": "gato",
  "elephant": "elefante",
  "zebra": "cebra",
  "monkey": "mono",
  "horse": "caballo",
  "deer": "ciervo",
  "fox": "zorro",
  "bear": "oso",
  "snake": "serpiente"
};

// Clasifica imagen o canvas
async function clasificarImagen(imgElement) {
  const predictions = await model.classify(imgElement);
  if (predictions.length > 0) {
    const top = predictions[0];
    const traduccion = Object.entries(traducciones).find(([en, es]) =>
      top.className.toLowerCase().includes(en)
    );
    const nombre = traduccion ? traduccion[1] : top.className;
    result.textContent = `Este parece ser un: ${nombre} (${(top.probability * 100).toFixed(2)}%)`;
  } else {
    result.textContent = "No se pudo reconocer el animal.";
  }
}

// Modo imagen
imageInput.addEventListener('change', event => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    preview.src = reader.result;
    preview.style.display = 'block';
    video.style.display = 'none';

    preview.onload = () => {
      clasificarImagen(preview);
    };
  };
  reader.readAsDataURL(file);
});

// Modo cámara
cameraButton.addEventListener('click', async () => {
  preview.style.display = 'none';
  video.style.display = 'block';

  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;

  video.onloadedmetadata = () => {
    setInterval(() => {
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
      clasificarImagen(canvas);
    }, 2500); // cada 2.5 segundos
  };
});

// Cargar modelo
mobilenet.load().then(loadedModel => {
  model = loadedModel;
  result.textContent = "Modelo cargado. Sube una imagen o usa la cámara.";
});
