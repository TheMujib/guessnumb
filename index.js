const myNumb = Math.trunc(Math.random() * 50) * 2;

document.querySelector('.number').textContent = myNumb;

document.querySelector('.checkans').addEventListener('click', function () {
  document.querySelector('.ans').textContent = myNumb / 2;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#fff';
  document.querySelector('body').style.color = '#000';
});

document.querySelector('.again').addEventListener('click', function () {
  const myNumb = Math.trunc(Math.random() * 50) * 2;
  document.querySelector('.number').textContent = myNumb;
  document.querySelector('.ans').textContent = '?';
  document.querySelector('.checkans').addEventListener('click', function () {
    document.querySelector('.ans').textContent = myNumb / 2;
  });
  document.querySelector('body').style.backgroundColor = '#000';
  document.querySelector('body').style.color = '#fff';
});
