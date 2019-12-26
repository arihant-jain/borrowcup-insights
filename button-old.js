// JavaScript Document
const documentStyle = document.documentElement.style;
const element = document.querySelector('.awesome');
const dimensions = element.getBoundingClientRect();
const { width, height } = dimensions;

element.addEventListener('mousemove', e => {
  const x = e.clientX - dimensions.left;
  const y = e.clientY - dimensions.top;
  const dx = x - width / 2;
  const dy = y - height / 2;

  documentStyle.setProperty('--rx', `${dy / -5}deg`);
  documentStyle.setProperty('--ry', `${dx / 10}deg`);
});

element.addEventListener('mouseleave', e => {
  documentStyle.setProperty('--rx', '0');
  documentStyle.setProperty('--ry', '0');
  documentStyle.setProperty('--ty', '0');
});

element.addEventListener('mousedown', e => {
  documentStyle.setProperty('--tz', '-24px');
});

element.addEventListener('mouseup', e => {
  documentStyle.setProperty('--tz', '-12px');
});