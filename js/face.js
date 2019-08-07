var ja_face = new JAFace();

function JAFace() {
  var JAF = {};

  init();

  return JAF;

  function init() {
    loadGlobals();
    loadCanvases();
    var load_mouth = loadMouth();
    load_mouth.then(function(r) {
      // when in doubt...
      // having some serious issues preloading so we're gonna do this instead.
      setTimeout(function() {
        frameUpdate();
      }, 1000);
      // console.log(r);
      var load_eyes = loadEyes();
      load_eyes.then(function(e) {
        resetEyes();
      }, function(e) {
        console.error(e);
      });
    }, function(e) {
      console.error(e);
    })
  }

  function loadGlobals() {
    JAF.frames = 10;
    JAF.index = 0;
    JAF.direction = 'up';
  }

  function loadCanvases() {
    JAF.cvs_mouth = document.getElementById("mouth");
    JAF.ctx_mouth = JAF.cvs_mouth.getContext("2d");
    JAF.cvs_eye_l = document.getElementById("eye-l");
    JAF.ctx_eye_l = JAF.cvs_eye_l.getContext("2d");
    JAF.cvs_eye_r = document.getElementById("eye-r");
    JAF.ctx_eye_r = JAF.cvs_eye_r.getContext("2d");
    JAF.width = 800;
    JAF.height = 668;
  }

  function loadMouth() {
    JAF.images = {
      mouth: {},
      eyes: {}
    };

    return new Promise(function(res, rej) {
      var url = "/img/man/",
          prefix = "ja-face-",
          file_type = "png",
          frames = JAF.frames,
          total_frames = frames,
          loaded = 0;

      for(var i = 0; i < frames; i++) {
        var mouth_file_name = url + prefix + "mouth-0" + i + "." + file_type;
        var mouth_img = new Image();
        mouth_img.setAttribute("data-mouth-index", i);
        JAF.images.mouth[i] = mouth_img;
        // mouth_img.onload = (function(value) {
        //   return function(e) {
        //     loaded++;
        //     JAF.images.mouth[e.target.getAttribute("data-mouth-index")] = e.target;
        //     if(loaded === total_frames) res(JAF.images);
        //   }
        // })(i);

        mouth_img.src = mouth_file_name;
        mouth_img.crossOrigin = "Anonymous";
        mouth_img.onerror = function(e) {
          rej("cannot load images.");
        };
      }

      res(JAF.images);
    });
  }

  function loadEyes() {
    return new Promise(function(res, rej) {
      var url = "/img/man/",
          prefix = "ja-face-",
          file_type = "png",
          eyes = "left right".split(" "),
          dirs = "up down left right".split(" "),
          frames = JAF.frames,
          total_frames = frames * eyes.length * dirs.length,
          loaded = 0;

      for(var i = 0; i < frames; i++) {
        for(var e = 0; e < eyes.length; e++) {
          for(var d = 0; d < dirs.length; d++) {
            var name = eyes[e] + "_" + dirs[d];
            if(!JAF.images.eyes[name]) JAF.images.eyes[name] = {};
            var file_name = url + prefix + eyes[e] + "-eye-" + dirs[d] + "-0" + i + "." + file_type;
            var img = new Image();
            img.setAttribute("data-eye-type", name);
            img.setAttribute("data-eye-index", i);
            img.src = file_name;
            img.crossOrigin = "Anonymous";
            JAF.images.eyes[name][i] = img;
            // img.onload = (function(val1, val2, val3) {
            //   return function(e) {
            //     loaded++;
            //     JAF.images.eyes[e.target.getAttribute("data-eye-type")][e.target.getAttribute("data-eye-index")] = e.target;
            //     if(loaded === total_frames) res(JAF.images);
            //   }
            // })(i, e, d);

            img.onerror = function(e) {
              rej("cannot load images.");
            };
          }
        }
      }

      res(JAF.images);

    });
  }

  function frameUpdate() {
    drawParts();
    updateIndex();
    window.requestAnimationFrame(function() {
      frameUpdate();
    });
  }

  function drawImage(context, image, x, y) {
    if(image) {
      context.clearRect(0, 0, JAF.width, JAF.height);
      context.drawImage(image, x, y)
    }
  }

  function drawParts() {
    drawImage(JAF.ctx_mouth, JAF.images.mouth[JAF.index], JAF.width / 4, JAF.height / 2);
    if(JAF.left_eye)  drawImage(JAF.ctx_eye_l, JAF.left_eye[JAF.index], 200, 0);
    if(JAF.right_eye) drawImage(JAF.ctx_eye_r, JAF.right_eye[JAF.index], JAF.width / 2, 0);
  }

  function updateIndex() {
    if(JAF.direction === 'up') {
      if(JAF.index < JAF.frames - 1) {
        JAF.index++;
      } else {
        JAF.direction = 'down';
        JAF.index--;
      }
    } else {
      if(JAF.index > 0) {
        JAF.index--;
      } else {
        resetEyes();
        JAF.direction = 'up';
        JAF.index++;
      }
    }
  }

  function resetEyes() {
    var dirs = "left right up down".split(" ");
    JAF.left_eye = JAF.images.eyes["left_" + dirs[Math.floor(Math.random() * dirs.length)]];
    JAF.right_eye = JAF.images.eyes["right_" + dirs[Math.floor(Math.random() * dirs.length)]];
  }
}
