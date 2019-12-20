let mode = 1

$(document).ready(function(){

  let lighttoggle = $('#togglemode');

  lighttoggle.click(function(){
    if (mode==1){
      $('html').css('background-image', 'linear-gradient(#58515E, #1D1A1F)');
      lighttoggle.html('Day Mode')
      $('h2 a').css('color', '#F2F2F2')
      // $('h2 a').css('transition', 'all 0.2s ease-in-out')
      $('h2 a:hover').css('color', '#999999')
      $('h2 a').css('color', '#F2F2F2')
      $('label').css('color', '#F2F2F2')
      $('legend').css('color', '#F2F2F2')
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
      $('label').css('color', '#4c4c4c')
      $('legend').css('color', '#4c4c4c')
      $('.profilepic').css('box-shadow', '5px 5px 8px gray')
      $('.picture-wrap img').css('box-shadow', '6px 6px 15px gray')
      $('#togglemode').css('background-color', '#58515E')
      $('#togglemode').css('color', '#fff')
      mode=1
      // alert(mode)
    }
  })

  $('#name').submit(function(e){
    e.preventDefault()
  })
  $('.confirmationpara').hide()
  $('#lesubmit').click(function(e){
    e.preventDefault()
    let name=$('#name').val()
    let email=$('#email').val()
    let lesize=$('input[name="size"]:checked').val()
    let date=$('#date').val()
    // alert(shoe)
    console.log('size')
    $('#nameresult').html(name)
    $('#emailresult').html(email)
    $('#sizeresult').html(lesize)
    $('#dateresult').html(date)
    $('.confirmationpara').show()
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
