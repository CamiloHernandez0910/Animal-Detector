# 🐾 Detector de Animales con TensorFlow\.js y Cámara Web

Este proyecto detecta animales a partir de una imagen cargada o de la cámara web en vivo utilizando el modelo preentrenado **MobileNet** de TensorFlow\.js. Los resultados se traducen automáticamente al español si el animal está en el diccionario incorporado.

---

## 🤠 Características

* Carga de imagen desde el dispositivo
* Detección en vivo con cámara web
* Traducción automática del nombre del animal al español
* Precisión de predicción mostrada en pantalla

---

## 🚀 Tecnologías utilizadas

* HTML5 + JavaScript
* [TensorFlow.js](https://www.tensorflow.org/js)
* [@tensorflow-models/mobilenet](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet)
* API WebRTC (`navigator.mediaDevices.getUserMedia`)

---

## 📆 Estructura del proyecto

```
📆 Animal-Detector
├── index.html
├── script.js
└── README.md
```

---

## 📊 Diccionario de traducción (ejemplos)

```
lion      ➔ león
tiger     ➔ tigre
dog       ➔ perro
elephant  ➔ elefante
monkey    ➔ mono
```

---

## 📅 Instrucciones de uso

1. Clona el repositorio:

```bash
git clone https://github.com/CamiloHernandez0910/Animal-Detector.git
cd Animal-Detector
```

2. Abre `index.html` en tu navegador o usa un servidor local:

3. Haz clic en "Usar Cámara" o carga una imagen.

4. Observa el resultado traducido.

---

## 👨‍💻 Contribuciones
¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos:
1. Haz un **fork** del repositorio
2. Crea una nueva rama (`git checkout -b feature-nueva`)
3. Realiza los cambios y haz **commit** (`git commit -m 'Agrega nueva funcionalidad'`)
4. Haz **push** a tu rama (`git push origin feature-nueva`)
5. Abre un **Pull Request**

---
**Desarrollado con ❤️ por [HERTUQ](https://github.com/CamiloHernandez0910)** 🚀

