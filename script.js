let i = 0;
let row, col;

function horse(row, col, name) {
  // верх квадрата
  if ((row - name[2] === 2) && (col - name[3] === 1)) return true;
  if ((row - name[2] === 2) && (name[3] - col === 1)) return true;
  // низ квадрата
  if ((name[2] - row === 2) && (col - name[3] === -1)) return true;
  if ((name[2] - row === 2) && (name[3] - col === -1)) return true;
  // левая часть квадрата
  if ((name[2] - row === -1) && (col - name[3] === 2)) return true;
  if ((name[2] - row === 1) && (name[3] - col === -2)) return true;
  // правая часть квадрата
  if ((name[2] - row === -1) && (name[3] - col === 2)) return true;
  if ((name[2] - row === 1) && (name[3] - col === 2)) return true;
  return false;
}

document.querySelector('.cont').addEventListener('click', function (e) {
  const name = e.target.getAttribute('class').split('');
  //console.log(document.querySelector(`.${name.join('')}`).innerHTML);
  if (name[0] === 'r') { 
  if (i === 0) {
    document.querySelector(`.${name.join('')}`).innerHTML = `<span>${i++}</span>`;
    row = name[2];
    col = name[3];
  } else {
    if ((document.querySelector(`.${name.join('')}`).innerHTML === '') &&
      horse(row, col, name)) {
      document.querySelector(`.${name.join('')}`).innerHTML = `<span>${i++}</span>`;
      row = name[2];
      col = name[3];
    };
  }
  }
})
