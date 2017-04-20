﻿var thumbnail = [
   'https://cdn.rawgit.com/k7ae95/as5g/r001/img/thumbnail/empty/1.svg',
   'https://cdn.rawgit.com/k7ae95/as5g/r001/img/thumbnail/empty/2.svg',
   'https://cdn.rawgit.com/k7ae95/as5g/r001/img/thumbnail/empty/3.svg',
   'https://cdn.rawgit.com/k7ae95/as5g/r001/img/thumbnail/empty/4.svg',
   'https://cdn.rawgit.com/k7ae95/as5g/r001/img/thumbnail/empty/5.svg',
   'https://cdn.rawgit.com/k7ae95/as5g/r001/img/thumbnail/empty/6.svg',
   'https://cdn.rawgit.com/k7ae95/as5g/r001/img/thumbnail/empty/7.svg',
   'https://cdn.rawgit.com/k7ae95/as5g/r001/img/thumbnail/empty/8.svg'
];

var month = [
   'Jan', 'Feb', 'Mar', ' Apr', ' May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

$(document).ready(function () {
   init();
});

function init() {
   initBlogIndexPost();
}

var initBlogIndexPost = function () {
   var max = $(thumbnail).length;

   $('.blog-index .timestamp').each(function (index, value) {
      //m/d/yyyy
      var date = $(this).find('.content').text().split('/');

      $(this).find('.day').text(date[1]);
      $(this).find('.month').text(month[parseInt(date[0] - 1)]);
      $(this).find('.year').text(date[2]);
   });

   $('.blog-index .thumbnail').each(function (index, value) {
      var url;

      if ($(this).hasClass('no-image')) {
         url = thumbnail[Math.floor(Math.random() * max)];
      }
      else {
         url = $(this).attr('thumbnailUrl');
         url = url.replace('/s72-c/', '/s480/');
      }

      $(this).css('background-image', 'url(' + url + ')');
   });
}
