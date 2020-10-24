"use strict";

if (window.matchMedia("(min-width: 400px)").matches) {
  var section1Animation = function section1Animation(timeLine) {
    timeLine.resume();
    timeLine.to('.section1', 0.5, {
      visibility: 'visible'
    }, "-=0.5");
    timeLine.from('.container', 1, {
      backgroundPosition: '0px -500px',
      ease: Elastic.easeOut.config(0.2, 0.40)
    }).from('.section1__image', 1, {
      scale: 0,
      ease: Elastic.easeOut.config(0.5, 0.20)
    }, "-=0.5").from('.section1__title', 0.5, {
      opacity: 0,
      y: 500,
      ease: Elastic.easeOut.config(0.5, 0.20)
    }, "-=0.5").from('.section1__text', 1, {
      scale: 0,
      ease: Elastic.easeOut.config(0.5, 0.20)
    }, "-=0.2").from(document.getElementsByClassName('section1__group-btn')[0], 1, {
      opacity: 0,
      scale: 0,
      ease: Elastic.easeOut.config(0.5, 0.20)
    }, "-=0.5");
  };

  var section2Animation = function section2Animation(timeLine) {
    timeLine.resume();
    timeLine.to('.section2', 0.5, {
      visibility: 'visible'
    }, "-=0.5");
    timeLine.from('.section2__title', 1, {
      opacity: 0,
      y: 200,
      ease: Elastic.easeOut.config(0.5, 0.20)
    }).from('.section2__text', 1, {
      scale: 0,
      ease: Elastic.easeOut.config(0.5, 0.20)
    }, "-=0.5");
  };

  var section3Animation = function section3Animation(timeLine) {
    timeLine.resume();
    timeLine.to('.section3', 0.5, {
      visibility: 'visible'
    }, "-=0.5");
    timeLine.from('.section3__image', 1, {
      opacity: 0,
      x: -500,
      ease: Elastic.easeOut.config(0.4, 0.10)
    }, "-=0.5");
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = section3cards[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var card = _step.value;
        timeLine.from(card.getElementsByClassName('card__title')[0], 0.6, {
          scale: 0,
          x: 200,
          ease: Elastic.easeOut.config(0.5, 0.20)
        }, "-=0.45").from(card.getElementsByClassName('card__text')[0], 0.6, {
          scale: 0,
          x: 200,
          ease: Elastic.easeOut.config(0.5, 0.20)
        }, "-=0.45");
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  var section4Animation = function section4Animation(timeLine) {
    timeLine.resume();
    timeLine.to('.section4', 0.5, {
      visibility: 'visible'
    }, "-=0.5");
    timeLine.from('.section4__title', 1, {
      opacity: 0,
      y: 500,
      ease: Elastic.easeOut.config(0.5, 0.20)
    }, "-=0.5").from('.section4__text', 1, {
      opacity: 0,
      x: 200,
      ease: Elastic.easeOut.config(0.5, 0.20)
    }, "-=0.5").from('.section4__image', 1, {
      opacity: 0,
      scale: 0,
      ease: Elastic.easeOut.config(0.5, 0.20)
    }, "-=0.5");
  };

  var section5Animation = function section5Animation(timeLine) {
    timeLine.resume();
    timeLine.to('.section5', 0.5, {
      visibility: 'visible'
    }, "-=0.5");
    timeLine.from('.section5__title', 1, {
      opacity: 0,
      y: 500,
      ease: Elastic.easeOut.config(0.5, 0.20)
    }, "-=0.5").from('.section5__text', 1, {
      opacity: 0,
      x: 200,
      ease: Elastic.easeOut.config(0.5, 0.20)
    }, "-=0.5");
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = workflowCards[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var card = _step2.value;
        timeLine.from(card.getElementsByClassName('workflow-card__image'), 0.7, {
          opacity: 0,
          scale: 0,
          ease: Elastic.easeOut.config(0.5, 0.20)
        }, "-=0.45").from(card.getElementsByClassName('workflow-card__title'), 0.5, {
          opacity: 0,
          y: 500,
          ease: Elastic.easeOut.config(0.4, 0.40)
        }, "-=0.45").from(card.getElementsByClassName('workflow-card__text'), 0.5, {
          opacity: 0,
          y: 500,
          ease: Elastic.easeOut.config(0.4, 0.40)
        }, "-=0.45");
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = partners[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var partner = _step3.value;
        timeLine.from(partner, 0.8, {
          opacity: 0,
          x: 250,
          ease: Elastic.easeOut.config(0.4, 0.25)
        }, "-=0.65");
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  };

  var section6Animation = function section6Animation(timeLine) {
    timeLine.resume();
    timeLine.to('.section6', 0.5, {
      visibility: 'visible'
    }, "-=0.5");
    timeLine.from('.section6__title', 0.5, {
      opacity: 0,
      y: 500,
      ease: Elastic.easeOut.config(0.5, 0.20)
    }, "-=0.5").from('.section6__text', 1, {
      scale: 0,
      ease: Elastic.easeOut.config(0.5, 0.20)
    }, "-=0.2").from(document.getElementsByClassName('section6__group-btn')[0], 1, {
      opacity: 0,
      scale: 0,
      ease: Elastic.easeOut.config(0.5, 0.20)
    }, "-=0.5");
    footerAnimation(timeLine);
  };

  var footerAnimation = function footerAnimation(timeLine) {
    timeLine.resume();
    timeLine.to('.footer', 0.5, {
      visibility: 'visible'
    }, "-=0.5");
    timeLine.from('.footer', 0.5, {
      opacity: 0,
      ease: Elastic.easeOut.config(0.5, 0.20)
    }, "-=0.5");
    timeLine.from('.footer__image', 0.5, {
      opacity: 0,
      x: -200,
      ease: Elastic.easeOut.config(0.5, 0.20)
    }, "-=0.5");
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = footerCol1[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var link = _step4.value;
        timeLine.from(link, 0.5, {
          opacity: 0,
          y: 200,
          ease: Elastic.easeOut.config(0.35, 0.40)
        }, "-=0.35");
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
          _iterator4["return"]();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = footerCol2[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var _link = _step5.value;

        if (window.matchMedia("(min-width: 400px)").matches) {
          var section3cards;
          var workflowCards;
          var partners;
          var footerCol1;
          var footerCol2;
          var footerCol3;
          var socialMedias;
          var timelineection1;
          var timelineSection2;
          var timelineSection3;
          var timelineSection4;
          var timelineSection5;
          var timelineSection6;

          (function () {
            var section1Animation = function section1Animation(timeLine) {
              timeLine.resume();
              timeLine.to('.section1', 0.5, {
                visibility: 'visible'
              }, "-=0.5");
              timeLine.from('.container', 1, {
                backgroundPosition: '0px -500px',
                ease: Elastic.easeOut.config(0.2, 0.40)
              }).from('.section1__image', 1, {
                scale: 0,
                ease: Elastic.easeOut.config(0.5, 0.20)
              }, "-=0.5").from('.section1__title', 0.5, {
                opacity: 0,
                y: 500,
                ease: Elastic.easeOut.config(0.5, 0.20)
              }, "-=0.5").from('.section1__text', 1, {
                scale: 0,
                ease: Elastic.easeOut.config(0.5, 0.20)
              }, "-=0.2").from(document.getElementsByClassName('section1__group-btn')[0], 1, {
                opacity: 0,
                scale: 0,
                ease: Elastic.easeOut.config(0.5, 0.20)
              }, "-=0.5");
            };

            var section2Animation = function section2Animation(timeLine) {
              timeLine.resume();
              timeLine.to('.section2', 0.5, {
                visibility: 'visible'
              }, "-=0.5");
              timeLine.from('.section2__title', 1, {
                opacity: 0,
                y: 200,
                ease: Elastic.easeOut.config(0.5, 0.20)
              }).from('.section2__text', 1, {
                scale: 0,
                ease: Elastic.easeOut.config(0.5, 0.20)
              }, "-=0.5");
            };

            var section3Animation = function section3Animation(timeLine) {
              timeLine.resume();
              timeLine.to('.section3', 0.5, {
                visibility: 'visible'
              }, "-=0.5");
              timeLine.from('.section3__image', 1, {
                opacity: 0,
                x: -500,
                ease: Elastic.easeOut.config(0.4, 0.10)
              }, "-=0.5");
              var _iteratorNormalCompletion8 = true;
              var _didIteratorError8 = false;
              var _iteratorError8 = undefined;

              try {
                for (var _iterator8 = section3cards[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                  var card = _step8.value;
                  timeLine.from(card.getElementsByClassName('card__title')[0], 0.6, {
                    scale: 0,
                    x: 200,
                    ease: Elastic.easeOut.config(0.5, 0.20)
                  }, "-=0.45").from(card.getElementsByClassName('card__text')[0], 0.6, {
                    scale: 0,
                    x: 200,
                    ease: Elastic.easeOut.config(0.5, 0.20)
                  }, "-=0.45");
                }
              } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
                    _iterator8["return"]();
                  }
                } finally {
                  if (_didIteratorError8) {
                    throw _iteratorError8;
                  }
                }
              }
            };

            var section4Animation = function section4Animation(timeLine) {
              timeLine.resume();
              timeLine.to('.section4', 0.5, {
                visibility: 'visible'
              }, "-=0.5");
              timeLine.from('.section4__title', 1, {
                opacity: 0,
                y: 500,
                ease: Elastic.easeOut.config(0.5, 0.20)
              }, "-=0.5").from('.section4__text', 1, {
                opacity: 0,
                x: 200,
                ease: Elastic.easeOut.config(0.5, 0.20)
              }, "-=0.5").from('.section4__image', 1, {
                opacity: 0,
                scale: 0,
                ease: Elastic.easeOut.config(0.5, 0.20)
              }, "-=0.5");
            };

            var section5Animation = function section5Animation(timeLine) {
              timeLine.resume();
              timeLine.to('.section5', 0.5, {
                visibility: 'visible'
              }, "-=0.5");
              timeLine.from('.section5__title', 1, {
                opacity: 0,
                y: 500,
                ease: Elastic.easeOut.config(0.5, 0.20)
              }, "-=0.5").from('.section5__text', 1, {
                opacity: 0,
                x: 200,
                ease: Elastic.easeOut.config(0.5, 0.20)
              }, "-=0.5");
              var _iteratorNormalCompletion9 = true;
              var _didIteratorError9 = false;
              var _iteratorError9 = undefined;

              try {
                for (var _iterator9 = workflowCards[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                  var card = _step9.value;
                  timeLine.from(card.getElementsByClassName('workflow-card__image'), 0.7, {
                    opacity: 0,
                    scale: 0,
                    ease: Elastic.easeOut.config(0.5, 0.20)
                  }, "-=0.45").from(card.getElementsByClassName('workflow-card__title'), 0.5, {
                    opacity: 0,
                    y: 500,
                    ease: Elastic.easeOut.config(0.4, 0.40)
                  }, "-=0.45").from(card.getElementsByClassName('workflow-card__text'), 0.5, {
                    opacity: 0,
                    y: 500,
                    ease: Elastic.easeOut.config(0.4, 0.40)
                  }, "-=0.45");
                }
              } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
                    _iterator9["return"]();
                  }
                } finally {
                  if (_didIteratorError9) {
                    throw _iteratorError9;
                  }
                }
              }

              var _iteratorNormalCompletion10 = true;
              var _didIteratorError10 = false;
              var _iteratorError10 = undefined;

              try {
                for (var _iterator10 = partners[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                  var partner = _step10.value;
                  timeLine.from(partner, 0.8, {
                    opacity: 0,
                    x: 250,
                    ease: Elastic.easeOut.config(0.4, 0.25)
                  }, "-=0.65");
                }
              } catch (err) {
                _didIteratorError10 = true;
                _iteratorError10 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
                    _iterator10["return"]();
                  }
                } finally {
                  if (_didIteratorError10) {
                    throw _iteratorError10;
                  }
                }
              }
            };

            var section6Animation = function section6Animation(timeLine) {
              timeLine.resume();
              timeLine.to('.section6', 0.5, {
                visibility: 'visible'
              }, "-=0.5");
              timeLine.from('.section6__title', 0.5, {
                opacity: 0,
                y: 500,
                ease: Elastic.easeOut.config(0.5, 0.20)
              }, "-=0.5").from('.section6__text', 1, {
                scale: 0,
                ease: Elastic.easeOut.config(0.5, 0.20)
              }, "-=0.2").from(document.getElementsByClassName('section6__group-btn')[0], 1, {
                opacity: 0,
                scale: 0,
                ease: Elastic.easeOut.config(0.5, 0.20)
              }, "-=0.5");
              footerAnimation(timeLine);
            };

            var footerAnimation = function footerAnimation(timeLine) {
              timeLine.resume();
              timeLine.to('.footer', 0.5, {
                visibility: 'visible'
              }, "-=0.5");
              timeLine.from('.footer', 0.5, {
                opacity: 0,
                ease: Elastic.easeOut.config(0.5, 0.20)
              }, "-=0.5");
              timeLine.from('.footer__image', 0.5, {
                opacity: 0,
                x: -200,
                ease: Elastic.easeOut.config(0.5, 0.20)
              }, "-=0.5");
              var _iteratorNormalCompletion11 = true;
              var _didIteratorError11 = false;
              var _iteratorError11 = undefined;

              try {
                for (var _iterator11 = footerCol1[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                  var _link2 = _step11.value;
                  timeLine.from(_link2, 0.5, {
                    opacity: 0,
                    y: 200,
                    ease: Elastic.easeOut.config(0.35, 0.40)
                  }, "-=0.35");
                }
              } catch (err) {
                _didIteratorError11 = true;
                _iteratorError11 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
                    _iterator11["return"]();
                  }
                } finally {
                  if (_didIteratorError11) {
                    throw _iteratorError11;
                  }
                }
              }

              var _iteratorNormalCompletion12 = true;
              var _didIteratorError12 = false;
              var _iteratorError12 = undefined;

              try {
                for (var _iterator12 = footerCol2[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                  var _link3 = _step12.value;
                  timeLine.from(_link3, 0.5, {
                    opacity: 0,
                    y: 200,
                    ease: Elastic.easeOut.config(0.35, 0.40)
                  }, "-=0.35");
                }
              } catch (err) {
                _didIteratorError12 = true;
                _iteratorError12 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
                    _iterator12["return"]();
                  }
                } finally {
                  if (_didIteratorError12) {
                    throw _iteratorError12;
                  }
                }
              }

              var _iteratorNormalCompletion13 = true;
              var _didIteratorError13 = false;
              var _iteratorError13 = undefined;

              try {
                for (var _iterator13 = footerCol3[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                  var _link4 = _step13.value;
                  timeLine.from(_link4, 0.5, {
                    opacity: 0,
                    y: 200,
                    ease: Elastic.easeOut.config(0.35, 0.40)
                  }, "-=0.35");
                }
              } catch (err) {
                _didIteratorError13 = true;
                _iteratorError13 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
                    _iterator13["return"]();
                  }
                } finally {
                  if (_didIteratorError13) {
                    throw _iteratorError13;
                  }
                }
              }

              var _iteratorNormalCompletion14 = true;
              var _didIteratorError14 = false;
              var _iteratorError14 = undefined;

              try {
                for (var _iterator14 = socialMedias[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                  var socialMedia = _step14.value;
                  timeLine.from(socialMedia, 0.5, {
                    opacity: 0,
                    x: 250,
                    ease: Elastic.easeOut.config(0.35, 0.40)
                  }, "-=0.35");
                }
              } catch (err) {
                _didIteratorError14 = true;
                _iteratorError14 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
                    _iterator14["return"]();
                  }
                } finally {
                  if (_didIteratorError14) {
                    throw _iteratorError14;
                  }
                }
              }
            };

            section3cards = document.getElementsByClassName('section3__article')[0].children;
            workflowCards = document.getElementsByClassName('workflow-card');
            partners = document.getElementsByClassName('section5__partner')[0].children;
            footerCol1 = document.getElementsByClassName('footer__colomn1')[0].children;
            footerCol2 = document.getElementsByClassName('footer__colomn2')[0].children;
            footerCol3 = document.getElementsByClassName('footer__colomn3')[0].children;
            socialMedias = document.getElementsByClassName('footer__social-media')[0].children;
            timelineection1 = new TimelineMax();
            timelineSection2 = new TimelineMax();
            timelineSection3 = new TimelineMax();
            timelineSection4 = new TimelineMax();
            timelineSection5 = new TimelineMax();
            timelineSection6 = new TimelineMax();
            ScrollTrigger.defaults({
              // markers : true,
              toggleActions: "play pause resume none"
            });
            ScrollTrigger.create({
              trigger: '.section1',
              start: "center center",
              onEnter: function onEnter() {
                return section1Animation(timelineection1);
              },
              once: true
            });
            ScrollTrigger.create({
              trigger: '.section2',
              start: "center center",
              onEnter: function onEnter() {
                return section2Animation(timelineSection2);
              },
              once: true
            });
            ScrollTrigger.create({
              trigger: '.section3',
              start: "center center",
              onEnter: function onEnter() {
                return section3Animation(timelineSection3);
              },
              once: true
            });
            ScrollTrigger.create({
              trigger: '.section4',
              start: "top center",
              onEnter: function onEnter() {
                return section4Animation(timelineSection4);
              },
              once: true
            });
            ScrollTrigger.create({
              trigger: '.section5',
              start: "top center",
              onEnter: function onEnter() {
                return section5Animation(timelineSection5);
              },
              once: true
            });
            ScrollTrigger.create({
              trigger: '.section6',
              start: "center center",
              onEnter: function onEnter() {
                return section6Animation(timelineSection6);
              },
              once: true
            });
          })();
        }

        timeLine.from(_link, 0.5, {
          opacity: 0,
          y: 200,
          ease: Elastic.easeOut.config(0.35, 0.40)
        }, "-=0.35");
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
          _iterator5["return"]();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }

    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = footerCol3[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var _link5 = _step6.value;
        timeLine.from(_link5, 0.5, {
          opacity: 0,
          y: 200,
          ease: Elastic.easeOut.config(0.35, 0.40)
        }, "-=0.35");
      }
    } catch (err) {
      _didIteratorError6 = true;
      _iteratorError6 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
          _iterator6["return"]();
        }
      } finally {
        if (_didIteratorError6) {
          throw _iteratorError6;
        }
      }
    }

    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
      for (var _iterator7 = socialMedias[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
        var socialMedia = _step7.value;
        timeLine.from(socialMedia, 0.5, {
          opacity: 0,
          x: 250,
          ease: Elastic.easeOut.config(0.35, 0.40)
        }, "-=0.35");
      }
    } catch (err) {
      _didIteratorError7 = true;
      _iteratorError7 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
          _iterator7["return"]();
        }
      } finally {
        if (_didIteratorError7) {
          throw _iteratorError7;
        }
      }
    }
  };

  var section3cards = document.getElementsByClassName('section3__article')[0].children;
  var workflowCards = document.getElementsByClassName('workflow-card');
  var partners = document.getElementsByClassName('section5__partner')[0].children;
  var footerCol1 = document.getElementsByClassName('footer__colomn1')[0].children;
  var footerCol2 = document.getElementsByClassName('footer__colomn2')[0].children;
  var footerCol3 = document.getElementsByClassName('footer__colomn3')[0].children;
  var socialMedias = document.getElementsByClassName('footer__social-media')[0].children;
  var timelineection1 = new TimelineMax();
  var timelineSection2 = new TimelineMax();
  var timelineSection3 = new TimelineMax();
  var timelineSection4 = new TimelineMax();
  var timelineSection5 = new TimelineMax();
  var timelineSection6 = new TimelineMax();
  ScrollTrigger.defaults({
    // markers : true,
    toggleActions: "play pause resume none"
  });
  ScrollTrigger.create({
    trigger: '.section1',
    start: "center center",
    onEnter: function onEnter() {
      return section1Animation(timelineection1);
    },
    once: true
  });
  ScrollTrigger.create({
    trigger: '.section2',
    start: "center center",
    onEnter: function onEnter() {
      return section2Animation(timelineSection2);
    },
    once: true
  });
  ScrollTrigger.create({
    trigger: '.section3',
    start: "center center",
    onEnter: function onEnter() {
      return section3Animation(timelineSection3);
    },
    once: true
  });
  ScrollTrigger.create({
    trigger: '.section4',
    start: "top center",
    onEnter: function onEnter() {
      return section4Animation(timelineSection4);
    },
    once: true
  });
  ScrollTrigger.create({
    trigger: '.section5',
    start: "top center",
    onEnter: function onEnter() {
      return section5Animation(timelineSection5);
    },
    once: true
  });
  ScrollTrigger.create({
    trigger: '.section6',
    start: "center center",
    onEnter: function onEnter() {
      return section6Animation(timelineSection6);
    },
    once: true
  });
}