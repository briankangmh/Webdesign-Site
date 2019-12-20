// <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
let mode = 1
let images=[]
let lenum = 0
// images.push('images/1.png')
// images.push('images/2.png')
// images.push('images/3.png')
// images.push('images/4.png')
// images.push('images/5.png')
// images.push('images/6.png')
// images.push('images/7.png')
// images.push('images/8.png')
images[0] = 'images/1.png'
images[1] = 'images/2.png'
images[2] = 'images/3.png'
images[3] = 'images/4.png'
images[4] = 'images/5.png'
images[5] = 'images/6.png'
images[6] = 'images/7.png'
images[7] = 'images/8.png'
images.push('images/woman.jpg')
images.push('images/sky.jpg')
images.push('images/leaves.jpg')

$(document).ready(function(){

  let lighttoggle = $('#togglemode');

  lighttoggle.click(function(){
    if (mode==1){
      $('html').css('background-image', 'linear-gradient(#58515E, #1D1A1F)');
      lighttoggle.html('Day Mode')
      $('h2 a').css('color', '#F2F2F2')
      // $('h2 a').css('transition', 'all 0.2s ease-in-out')
      $('h2 a:hover').css('color', '#999999')
      $('h4').css('color', '#F2F2F2')
      $('.profilepic').css('box-shadow', '5px 5px 8px black')
      $('.picture-wrap img').css('box-shadow', '6px 6px 15px black')
      $('#togglemode').css('background-color', '#fff0e6')
      $('#togglemode').css('color', '#4c4c4c')
      mode=0
      // alert(mode)
    }
    else{
      $('html').css('background-image', 'linear-gradient(#ffffff, #ffe0cc)');
      lighttoggle.html('Night Mode')
      $('h2 a').css('color', '#4c4c4c')
      $('h4').css('color', '#4c4c4c')
      $('.profilepic').css('box-shadow', '5px 5px 8px gray')
      $('.picture-wrap img').css('box-shadow', '6px 6px 15px gray')
      $('#togglemode').css('background-color', '#58515E')
      $('#togglemode').css('color', '#fff')
      mode=1
      // alert(mode)
    }
  })

  // $('.lightbox').fancybox()

  // $(document).on('scroll', function(){
  //   console.log(lenum)
  //   lenum+=1
  //   if (lenum%30==0){
  //     changeimg()
  //   }
  // })


})//end of document ready

function randind(arr){
  let result=Math.floor(Math.random()*arr.length)
  return result
}

function changeimg(){
  console.log('//////////////')
  let indices=[]
  for (let i=0; i<images.length; i++){
    indices.push(i)
  }
  console.log(indices)

  let bb=indices.splice(randind(indices), 1)
  console.log(indices, bb)
  $('#link1').attr('href', images[bb])
  // $('#div1').css('background-image', `url(${images[bb]})`)
  $('#img1').attr('src', images[bb])

  bb=indices.splice(randind(indices), 1)
  console.log(indices, bb)
  $('#link2').attr('href', images[bb])
  $('#img2').attr('src', images[bb])

  bb=indices.splice(randind(indices), 1)
  console.log(indices, bb)
  $('#link3').attr('href', images[bb])
  $('#img3').attr('src', images[bb])

  bb=indices.splice(randind(indices), 1)
  console.log(indices, bb)
  $('#link4').attr('href', images[bb])
  $('#img4').attr('src', images[bb])

  bb=indices.splice(randind(indices), 1)
  console.log(indices, bb)
  $('#link4').attr('href', images[bb])
  $('#img4').attr('src', images[bb])

  bb=indices.splice(randind(indices), 1)
  console.log(indices, bb)
  $('#link5').attr('href', images[bb])
  $('#img5').attr('src', images[bb])

  bb=indices.splice(randind(indices), 1)
  console.log(indices, bb)
  $('#link6').attr('href', images[bb])
  $('#img6').attr('src', images[bb])

  bb=indices.splice(randind(indices), 1)
  console.log(indices, bb)
  $('#link7').attr('href', images[bb])
  $('#img7').attr('src', images[bb])

  bb=indices.splice(randind(indices), 1)
  console.log(indices, bb)
  $('#link8').attr('href', images[bb])
  $('#img8').attr('src', images[bb])

  bb=indices.splice(randind(indices), 1)
  console.log(indices, bb)
  $('#link8').attr('href', images[bb])
  $('#img8').attr('src', images[bb])

  bb=indices.splice(randind(indices), 1)
  console.log(indices, bb)
  $('#link9').attr('href', images[bb])
  $('#img9').attr('src', images[bb])

  bb=indices.splice(randind(indices), 1)
  console.log(indices, bb)
  $('#link10').attr('href', images[bb])
  $('#img10').attr('src', images[bb])

  bb=indices.splice(randind(indices), 1)
  console.log(indices, bb)
  $('#link11').attr('href', images[bb])
  $('#img11').attr('src', images[bb])
  // if (i==9){
  //   i=-1
  // }
  // i+=1
  setTimeout("changeimg()", 3000)
}

window.onload=changeimg;
// window.onload=positionwindow;
