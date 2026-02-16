const pages = [

  // 🌅 SÁNG
  { bg: "Assets/morning.gif", text: "Chào em, lần đầu mình gặp nhau chắc cũng được một năm rồi nhỉ. Cũng là sau Tết." },
  { bg: "Assets/morning.gif", text: "Cảm ơn em vì đã đến với cuộc đời anh, làm cho nó sinh động hơn bao giờ hết. ☀️" },
  { bg: "Assets/morning.gif", text: "Có em bên cạnh anh vui lắm, cảm giác luôn có một người luôn bên cạnh." },
  { bg: "Assets/morning.gif", text: "Cũng đã có những kỉ niệm đẹp cho riêng mình, cùng được ăn ngon, cùng được chơi game." },
  { bg: "Assets/morning.gif", text: "Và điều đó khiến anh càng thêm cố gắng phấn đấu, để có thể tìm thấy niềm vui trong cuộc sống... Cùng em." },

  // 🌇 CHIỀU
  { bg: "Assets/afternoon.gif", text: "Rồi có những ngày mình không hiểu nhau, càng làm anh cảm thấy muốn từ bỏ." },
  { bg: "Assets/afternoon.gif", text: "Những lần im lặng đến đau lòng, vì sự ngu ngơ của cả hai đứa." },
  { bg: "Assets/afternoon.gif", text: "Có những lời nói khiến tim nhói đau." },
  { bg: "Assets/afternoon.gif", text: "Nhưng sau tất cả, mình vẫn ở lại." },
  { bg: "Assets/afternoon.gif", text: "Vì tình yêu chưa từng muốn buông bỏ, cảm ơn em rất nhiều." },
  { bg: "Assets/afternoon.gif", text: "Mong rằng hai đứa sẽ luôn vui vẻ, có một tình yêu thật trọn vẹn em nha." },

  // 🌙 TỐI
  { bg: "Assets/night.gif", text: "Năm mới đến rồi..." },
  { bg: "Assets/night.gif", text: "Chúc em thật nhiều sức khỏe." },
  { bg: "Assets/night.gif", text: "Chúc em luôn may mắn và bình an." },
  { bg: "Assets/night.gif", text: "Dù có giông bão, mình vẫn cùng nhau bước tiếp." },
  { bg: "Assets/night.gif", text: "Hãy nhớ... đủ nắng hoa sẽ nở 🌸. Anh yêu em. Nhiều..." },

  // 📧 Trang email
  { 
    bg: "Assets/night.gif",
    text: "Hãy nói cho anh dự định của em trong năm nay nha.\n\nBấm nút bên dưới nhé 💌",
    isEmailPage: true
  }
];

let current = 0;
let startX = 0;

const page = document.getElementById("page");
const textEl = document.getElementById("text");
const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const bgm = document.getElementById("bgm");
const openMailBtn = document.getElementById("openMailBtn");

function showPage(index) {

  textEl.classList.remove("show");
  openMailBtn.style.display = "none";

  setTimeout(() => {
    page.style.backgroundImage = `url('${pages[index].bg}')`;
    textEl.innerText = pages[index].text;
    textEl.classList.add("show");

    // 👉 Nếu là trang email thì hiện nút
    if (pages[index].isEmailPage) {
      openMailBtn.style.display = "block";
    }

  }, 200);
}

function nextPage() {
  if (current < pages.length - 1) {
    current++;
    showPage(current);
  }
}

startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  page.style.display = "flex";
  bgm.play();
  showPage(current);
});

page.addEventListener("click", nextPage);

page.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

page.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    nextPage();
  }
});

// 📧 Mở email (chỉ gửi cho bạn)
const receiverEmail = "nguyenquyphat2711@gmail.com";

openMailBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // không cho click lan sang page

  const subject = encodeURIComponent("Lời nhắn năm mới 💖");
  const body = encodeURIComponent("SimCute năm 2026 sẽ trở thành hình mẫu như này: ");

  const mailtoLink = `mailto:${receiverEmail}?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
});
