(function () {
var $ = function (s, r) { return (r || document).querySelector(s); };
var T = [
{ q: '\u201cProfessional, responsive and truly committed to their clients. Rahman & Associates gave us the clarity and confidence we needed.\u201d', w: '\u2014 Dato\u2019 Tan, Managing Director', img: 'assets/images/03-lawyer-testimonial-portrait.webp', alt: 'Dato\u2019 Tan, Managing Director' },
{ q: '\u201cRahman & Associates provided exceptional legal support with professionalism and care. Highly recommended!\u201d', w: '\u2014 Sarah Lim, Director, XYZ Holdings Sdn Bhd', img: 'https://randomuser.me/api/portraits/women/21.jpg', alt: 'Sarah Lim, Director, XYZ Holdings Sdn Bhd' },
{ q: '\u201cClear advice, prompt communication and a genuinely client-first approach. They made a complex matter feel manageable.\u201d', w: '\u2014 Encik Ahmad Zaki, Property Developer', img: 'https://randomuser.me/api/portraits/men/54.jpg', alt: 'Encik Ahmad Zaki, Property Developer' }
];
var q = $('#tc-q');
if (q) {
var i = 0, img = $('#tc-img'), ph = $('#tc-ph'), w = $('#tc-w'), dots = $('#tc-dots'), spans = [];
T.forEach(function (t, k) {
var b = document.createElement('button'), d = document.createElement('span');
b.type = 'button'; b.setAttribute('aria-label', 'Show testimonial ' + (k + 1));
b.style.cssText = 'width:28px;height:28px;display:flex;align-items:center;justify-content:center;background:none;border:0;padding:0;cursor:pointer';
d.style.cssText = 'width:10px;height:10px;border-radius:50%;border:1px solid #c9a36a';
b.appendChild(d); b.onclick = function () { show(k); }; dots.appendChild(b); spans.push(d);
});
var show = function (k) {
i = (k + T.length) % T.length; var t = T[i];
q.textContent = t.q; w.textContent = t.w;
if (t.img) { img.src = t.img; img.alt = t.alt; img.hidden = false; ph.hidden = true; } else { img.hidden = true; ph.hidden = false; }
spans.forEach(function (d, j) { d.style.background = j === i ? '#c9a36a' : 'transparent'; });
};
$('.tc-prev').onclick = function () { show(i - 1); };
$('.tc-next').onclick = function () { show(i + 1); };
show(0);
}
var chips = document.querySelectorAll('.chip');
if (chips.length) {
var cards = document.querySelectorAll('a.card[data-k]');
chips.forEach(function (c) {
c.onclick = function () {
var k = +c.dataset.k;
chips.forEach(function (x) { var on = x === c; x.style.background = on ? '#c9a36a' : 'transparent'; x.style.color = on ? '#1a130a' : '#e3c795'; });
cards.forEach(function (a) { a.hidden = !(k === 0 || +a.dataset.k === k); });
};
});
}
var f = $('#req');
if (f) {
var btn = $('button', f), msg = document.createElement('p');
msg.className = 'mu'; msg.setAttribute('role', 'status'); msg.style.cssText = 'margin:0;font-size:13px'; f.appendChild(msg);
btn.onclick = function () {
var e = f.querySelectorAll('input,select,textarea');
var n = e[0].value.trim(), m = e[1].value.trim(), p = e[2].value.trim(), a = e[3].value, t = e[4].value.trim();
if (!n || !/\S+@\S+\.\S+/.test(m) || !t) { msg.textContent = 'Please enter your name, a valid email and a short message.'; return; }
msg.textContent = 'Opening your email app to send your request\u2026';
location.href = 'mailto:enquiry@rahman-associates.com.my?subject=' + encodeURIComponent('Consultation request: ' + a) + '&body=' + encodeURIComponent('Name: ' + n + '\nEmail: ' + m + '\nPhone: ' + p + '\nPractice area: ' + a + '\n\n' + t);
};
}
})();