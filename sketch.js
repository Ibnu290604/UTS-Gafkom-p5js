let isDay = true;
let button;

function setup() {
  createCanvas(800, 600);

  // tombol untuk mengubah siang dan malam
  button = createButton('Ganti Siang/Malam');
  button.position(10, 10);
  button.mousePressed(toggleDayNight);
}

function draw() {
  // Pergantian warna langit dari siang ke malam
  let bgColor = isDay ? color(135, 206, 235) : color(25, 25, 112);
  background(bgColor);

  // Matahari atau Bulan di tengah gunung
  if (isDay) {
    fill(255, 204, 0); // warna matahari saat siang
  } else {
    fill(255); // warna bulan saat malam
  }
  ellipse(400, 250, 80, 80); // posisi matahari/bulan di tengah gunung

  // Gunung yang lebih besar dan lebih dekat ke jalan
  fill(139, 69, 19); // warna gunung tetap sama
  triangle(100, 500, 300, 250, 500, 500); // gunung kiri
  triangle(300, 500, 500, 300, 700, 500); // gunung kanan
  
  // Jalan
  fill(50);
  rect(0, 500, width, 100);
  
  // Garis jalan
  stroke(255);
  strokeWeight(4);
  for (let i = 0; i < width; i += 40) {
    line(i, 550, i + 20, 550);
  }

  // Burung
  drawBird(200, 150);
  drawBird(300, 120);
  drawBird(400, 140);
  drawBird(500, 140);
}

function drawBird(x, y) {
  stroke(0);
  line(x, y, x + 15, y - 10); // sayap kiri
  line(x + 15, y - 10, x + 30, y); // sayap kanan
}

// Fungsi untuk mengganti siang dan malam
function toggleDayNight() {
  isDay = !isDay;
}
