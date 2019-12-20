document.addEventListener('DOMContentLoaded', init)

function init(){
  document.querySelector('#num1').addEventListener('click', play)
  document.querySelector('#num2').addEventListener('click', play)
  document.querySelector('#num3').addEventListener('click', play)
  document.querySelector('#num4').addEventListener('click', play)
  document.querySelector('#num5').addEventListener('click', play)
  document.querySelector('#num6').addEventListener('click', play)
  document.querySelector('#num7').addEventListener('click', play)
  document.querySelector('#num8').addEventListener('click', play)
  document.querySelector('#num9').addEventListener('click', play)
  document.querySelector('#num10').addEventListener('click', play)
  document.querySelector('#num11').addEventListener('click', play)
  document.querySelector('#num12').addEventListener('click', play)
}

function play(ev){
  let p=ev.currentTarget
  ev.preventDefault()
  let src='sounds/'+p.getAttribute('data-file')

  let audio=document.getElementById('a')
  console.log(src)
  audio.src=src
  audio.play()
}
