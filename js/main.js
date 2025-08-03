function sendMail(event) {
  event.preventDefault();
  const player1 = document.getElementById('player1').value.trim();
  const player2 = document.getElementById('player2').value.trim();
  const homecourt = document.getElementById('homecourt').value;
  const subject = `Home Court ${player1} ${player2}`;
  const body = `Player 1: ${player1}\nPlayer 2: ${player2}\nHome Court: ${homecourt}`;
  window.location.href = `mailto:homecourtsignup@beachbakyard.com?cc=wayne@rwysolutions.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}