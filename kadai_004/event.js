

  $(window).on('load', function() {
    console.log('loadイベントが発生しました');
  });


$(function() {
  $(window).on('scroll', (e) =>{
    if(e.type === 'scroll'){
        console.log('scrollイベントが発生しました');
    }
  });
});