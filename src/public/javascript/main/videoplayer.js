// Code By Webdevtrick ( https://webdevtrick.com )

$(document).ready(function () {
   const $seleccionArchivos = document.querySelector("#selectVideoPublication"),
   $imagenPrevisualizacion = document.querySelector("#previewVideoUser");

   $seleccionArchivos.addEventListener("change", () => {

   const archivos = $seleccionArchivos.files;

   $(".preview").show();
   $("#viewImagen").hide();
   $("#viewVideo").show();
   $(".controlsVideo").show();
   $(".optionViewPreview").show();
   $(".divClosePublication").show();


   if (!archivos || !archivos.length) {
       $imagenPrevisualizacion.src = "";
       return;
   }
   const primerArchivo = archivos[0];
   const objectURL = URL.createObjectURL(primerArchivo);
   $imagenPrevisualizacion.src = objectURL;
   });
    'use strict';

    var play_pause     = $('.playButton'),
        container      = $('#videoContainer'),
        playIcon       = $('.playButton .playPause'),
        video          = $('video'),
        play           = $('.play'),
        volume         = $('.volume .icon'),
        intensity      = $('.intensity'),
        progressBar    = $('.progressBar'),
        progress       = $('.progressBar .progress'),
        timer          = $('.intialTime'),
        vidDuration    = $('.fullTime'),
        expandButton   = $('.scale'),
        overlayScreen  = $('.overlay'),
        overlayButton  = $('.overlay .button'),
        update;


    $(window).resize(function () { resizeVid(); });

    resizeVid();

    updateplayer();

    play_pause.add(video).click(function () { playVid(); });

    progressBar.click(function () {skip(); });

    volume.click(function () { toggleMute(); });
  
    expandButton.click(function () {

       $(this).toggleClass('active');

       if ($(this).hasClass('active')) {
         $('#controls').addClass('is-visible');
         fullScreen();
      } else {
         $('#controls').removeClass('is-visible');
         exitTheFullScreen();
      }
   });

    volumeIntesity.click(function () { changeVolume(); });

    overlayButton.click(function () { playVid();});
  
    vidDuration.text(getFormatedFullTime());


    function playVid() {
        if (video.get(0).paused) {
            video.get(0).play();
            overlayScreen.hide();
            update = setInterval(updateplayer, 1);

        } else {
            video.get(0).pause();
            overlayScreen.show();
            clearInterval(update);
        }
    }
  
    function updateplayer() {
        var percentage = (video[0].currentTime / video[0].duration) * 100;
        progress.css({'width': percentage + '%'});
        timer.text(getFormatedTime());
        vidDuration.text(getFormatedFullTime());
        if (video[0].paused) {
            overlayButton.css({
               'background': 'url(../../iconos/videoplayer/videoPlay.svg)',
               'background-size': '100% 100%'
            });
        }
    }

    function getTimeState() {

      var mouseX = event.pageX - progressBar.offset().left,
          width  = progressBar.outerWidth();

       var currentSeconeds = Math.round((mouseX / width) * video[0].duration);
       var currentMinutes  = Math.floor(currentSeconeds/60);

       if (currentMinutes > 0) {
          currentSeconeds -= currentMinutes * 60;
       }
       if (currentSeconeds.toString().length === 1) {
           currentSeconeds = "0" + currentSeconeds;
        }
        if (currentMinutes.toString().length === 1) {
            currentMinutes = "0" + currentMinutes;
        }

        timeState.css('left', (mouseX / width) * progressBar.width() + 18 + 'px');

        return currentMinutes + ':' + currentSeconeds;

    }

    function skip() {
        var mouseX = event.pageX - progressBar.offset().left,
            width  = progressBar.outerWidth();
       video[0].currentTime = (mouseX / width) * video[0].duration;
       updateplayer();
    }

    function getFormatedFullTime() {

         var totalSeconeds = Math.round(video[0].duration);
         var totalMinutes  = Math.floor(totalSeconeds/60);
         if (totalMinutes > 0) {
            totalSeconeds -= totalMinutes * 60;
         }
         if (totalSeconeds.toString().length === 1) {
             totalSeconeds = "0" + totalSeconeds;
          }
          if (totalMinutes.toString().length === 1) {
              totalMinutes = "0" + totalMinutes;
          }
        return totalMinutes + ':' + totalSeconeds;
    }

     function getFormatedTime() {
         var seconeds = Math.round(video[0].currentTime);
         var minutes  = Math.floor(seconeds / 60);

          if (minutes > 0) {
            seconeds -= minutes * 60;
         }
         if (seconeds.toString().length === 1) {
             seconeds = "0" + seconeds;
          }
          if (minutes.toString().length === 1) {
              minutes = "0" + minutes;
          }
         return minutes + ':' + seconeds;
     }

    function toggleMute() {
        if (!video[0].muted) {
           video[0].muted = true;
           volume.css({
              'background': 'url(../../iconos/videoplayer/volumenMute.svg)',
              'background-size': '100% 100%'
           });
           intensity.hide();
        } else {
           video[0].muted = false;
           volume.css({
              'background': 'url(../../iconos/videoplayer/volumeActive.svg)',
              'background-size': '100% 100%'
           });
           intensity.show();
        }
    }


    function resizeVid() {
       if (container.width() < 600) {
          container.addClass('small');
       } else {
          container.removeClass('small');
       }
    }



});