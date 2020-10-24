if (window.matchMedia("(min-width: 400px)").matches) {


	var section3cards = document.getElementsByClassName('section3__article')[0].children
	var workflowCards = document.getElementsByClassName('workflow-card')
	var partners = document.getElementsByClassName('section5__partner')[0].children
	var footerCol1 = document.getElementsByClassName('footer__colomn1')[0].children
	var footerCol2 = document.getElementsByClassName('footer__colomn2')[0].children
	var footerCol3 = document.getElementsByClassName('footer__colomn3')[0].children
	var socialMedias = document.getElementsByClassName('footer__social-media')[0].children


	var timelineection1 = new TimelineMax();
	var timelineSection2 = new TimelineMax();
	var timelineSection3 = new TimelineMax();
	var timelineSection4 = new TimelineMax();
	var timelineSection5 = new TimelineMax();
	var timelineSection6 = new TimelineMax();


	ScrollTrigger.defaults({
		// markers : true,
		toggleActions: "play pause resume none",
	})
	ScrollTrigger.create({
		trigger: '.section1',
		start: "center center",
		onEnter: () => section1Animation(timelineection1),
		once: true,

	})
	ScrollTrigger.create({
		trigger: '.section2',
		start: "center center",
		onEnter: () => section2Animation(timelineSection2),
		once: true,
	})
	ScrollTrigger.create({
		trigger: '.section3',
		start: "center center",
		onEnter: () => section3Animation(timelineSection3),
		once: true,
	})
	ScrollTrigger.create({
		trigger: '.section4',
		start: "top center",
		onEnter: () => section4Animation(timelineSection4),
		once: true,
	})
	ScrollTrigger.create({
		trigger: '.section5',
		start: "top center",
		onEnter: () => section5Animation(timelineSection5),
		once: true,
	})
	ScrollTrigger.create({
		trigger: '.section6',
		start: "center center",
		onEnter: () => section6Animation(timelineSection6),
		once: true,
	})


	function section1Animation(timeLine) {
		timeLine.resume()
		timeLine.to('.section1', 0.5, {
			visibility: 'visible'
		}, "-=0.5")
		timeLine.from('.container', 1, {
				backgroundPosition: '0px -500px',
				ease: Elastic.easeOut.config(0.2, 0.40)
			})
			.from('.section1__image', 1, {
				scale: 0,
				ease: Elastic.easeOut.config(0.5, 0.20)
			}, "-=0.5")
			.from('.section1__title', 0.5, {
				opacity: 0,
				y: 500,
				ease: Elastic.easeOut.config(0.5, 0.20)
			}, "-=0.5")
			.from('.section1__text', 1, {
				scale: 0,
				ease: Elastic.easeOut.config(0.5, 0.20)
			}, "-=0.2")
			.from(document.getElementsByClassName('section1__group-btn')[0], 1, {
				opacity: 0,
				scale: 0,
				ease: Elastic.easeOut.config(0.5, 0.20)
			}, "-=0.5")

	}

	function section2Animation(timeLine) {
		timeLine.resume()
		timeLine.to('.section2', 0.5, {
			visibility: 'visible'
		}, "-=0.5")
		timeLine.from('.section2__title', 1, {
				opacity: 0,
				y: 200,
				ease: Elastic.easeOut.config(0.5, 0.20)
			})
			.from('.section2__text', 1, {
				scale: 0,
				ease: Elastic.easeOut.config(0.5, 0.20)
			}, "-=0.5")
	}

	function section3Animation(timeLine) {
		timeLine.resume()
		timeLine.to('.section3', 0.5, {
			visibility: 'visible'
		}, "-=0.5")
		timeLine.from('.section3__image', 1, {
			opacity: 0,
			x: -500,
			ease: Elastic.easeOut.config(0.4, 0.10)
		}, "-=0.5")
		for (var card of section3cards) {
			timeLine.from(card.getElementsByClassName('card__title')[0], 0.6, {
					scale: 0,
					x: 200,
					ease: Elastic.easeOut.config(0.5, 0.20)
				}, "-=0.45")
				.from(card.getElementsByClassName('card__text')[0], 0.6, {
					scale: 0,
					x: 200,
					ease: Elastic.easeOut.config(0.5, 0.20)
				}, "-=0.45")
		}
	}

	function section4Animation(timeLine) {
		timeLine.resume()
		timeLine.to('.section4', 0.5, {
			visibility: 'visible'
		}, "-=0.5")
		timeLine.from('.section4__title', 1, {
				opacity: 0,
				y: 500,
				ease: Elastic.easeOut.config(0.5, 0.20)
			}, "-=0.5")
			.from('.section4__text', 1, {
				opacity: 0,
				x: 200,
				ease: Elastic.easeOut.config(0.5, 0.20)
			}, "-=0.5")
			.from('.section4__image', 1, {
				opacity: 0,
				scale: 0,
				ease: Elastic.easeOut.config(0.5, 0.20)
			}, "-=0.5")
	}

	function section5Animation(timeLine) {
		timeLine.resume()
		timeLine.to('.section5', 0.5, {
			visibility: 'visible'
		}, "-=0.5")
		timeLine.from('.section5__title', 1, {
				opacity: 0,
				y: 500,
				ease: Elastic.easeOut.config(0.5, 0.20)
			}, "-=0.5")
			.from('.section5__text', 1, {
				opacity: 0,
				x: 200,
				ease: Elastic.easeOut.config(0.5, 0.20)
			}, "-=0.5")
		for (var card of workflowCards) {
			timeLine.from(card.getElementsByClassName('workflow-card__image'), 0.7, {
					opacity: 0,
					scale: 0,
					ease: Elastic.easeOut.config(0.5, 0.20)
				}, "-=0.45")
				.from(card.getElementsByClassName('workflow-card__title'), 0.5, {
					opacity: 0,
					y: 500,
					ease: Elastic.easeOut.config(0.4, 0.40)
				}, "-=0.45")
				.from(card.getElementsByClassName('workflow-card__text'), 0.5, {
					opacity: 0,
					y: 500,
					ease: Elastic.easeOut.config(0.4, 0.40)
				}, "-=0.45")
		}
		for (const partner of partners) {
			timeLine.from(partner, 0.8, {
				opacity: 0,
				x: 250,
				ease: Elastic.easeOut.config(0.4, 0.25)
			}, "-=0.65")
		}
	}

	function section6Animation(timeLine) {
		timeLine.resume()
		timeLine.to('.section6', 0.5, {
			visibility: 'visible'
		}, "-=0.5")
		timeLine.from('.section6__title', 0.5, {
				opacity: 0,
				y: 500,
				ease: Elastic.easeOut.config(0.5, 0.20)
			}, "-=0.5")
			.from('.section6__text', 1, {
				scale: 0,
				ease: Elastic.easeOut.config(0.5, 0.20)
			}, "-=0.2")
			.from(document.getElementsByClassName('section6__group-btn')[0], 1, {
				opacity: 0,
				scale: 0,
				ease: Elastic.easeOut.config(0.5, 0.20)
			}, "-=0.5")
		footerAnimation(timeLine)
	}

	function footerAnimation(timeLine) {
		timeLine.resume()
		timeLine.to('.footer', 0.5, {
			visibility: 'visible'
		}, "-=0.5")
		timeLine.from('.footer', 0.5, {
			opacity: 0,
			ease: Elastic.easeOut.config(0.5, 0.20)
		}, "-=0.5")
		timeLine.from('.footer__image', 0.5, {
			opacity: 0,
			x: -200,
			ease: Elastic.easeOut.config(0.5, 0.20)
		}, "-=0.5")
		for (const link of footerCol1) {
			timeLine.from(link, 0.5, {
				opacity: 0,
				y: 200,
				ease: Elastic.easeOut.config(0.35, 0.40)
			}, "-=0.35")
		}
		for (const link of footerCol2) {
			if (window.matchMedia("(min-width: 400px)").matches) {


				var section3cards = document.getElementsByClassName('section3__article')[0].children
				var workflowCards = document.getElementsByClassName('workflow-card')
				var partners = document.getElementsByClassName('section5__partner')[0].children
				var footerCol1 = document.getElementsByClassName('footer__colomn1')[0].children
				var footerCol2 = document.getElementsByClassName('footer__colomn2')[0].children
				var footerCol3 = document.getElementsByClassName('footer__colomn3')[0].children
				var socialMedias = document.getElementsByClassName('footer__social-media')[0].children


				var timelineection1 = new TimelineMax();
				var timelineSection2 = new TimelineMax();
				var timelineSection3 = new TimelineMax();
				var timelineSection4 = new TimelineMax();
				var timelineSection5 = new TimelineMax();
				var timelineSection6 = new TimelineMax();


				ScrollTrigger.defaults({
					// markers : true,
					toggleActions: "play pause resume none",
				})
				ScrollTrigger.create({
					trigger: '.section1',
					start: "center center",
					onEnter: () => section1Animation(timelineection1),
					once: true,

				})
				ScrollTrigger.create({
					trigger: '.section2',
					start: "center center",
					onEnter: () => section2Animation(timelineSection2),
					once: true,
				})
				ScrollTrigger.create({
					trigger: '.section3',
					start: "center center",
					onEnter: () => section3Animation(timelineSection3),
					once: true,
				})
				ScrollTrigger.create({
					trigger: '.section4',
					start: "top center",
					onEnter: () => section4Animation(timelineSection4),
					once: true,
				})
				ScrollTrigger.create({
					trigger: '.section5',
					start: "top center",
					onEnter: () => section5Animation(timelineSection5),
					once: true,
				})
				ScrollTrigger.create({
					trigger: '.section6',
					start: "center center",
					onEnter: () => section6Animation(timelineSection6),
					once: true,
				})


				function section1Animation(timeLine) {
					timeLine.resume()
					timeLine.to('.section1', 0.5, {
						visibility: 'visible'
					}, "-=0.5")
					timeLine.from('.container', 1, {
							backgroundPosition: '0px -500px',
							ease: Elastic.easeOut.config(0.2, 0.40)
						})
						.from('.section1__image', 1, {
							scale: 0,
							ease: Elastic.easeOut.config(0.5, 0.20)
						}, "-=0.5")
						.from('.section1__title', 0.5, {
							opacity: 0,
							y: 500,
							ease: Elastic.easeOut.config(0.5, 0.20)
						}, "-=0.5")
						.from('.section1__text', 1, {
							scale: 0,
							ease: Elastic.easeOut.config(0.5, 0.20)
						}, "-=0.2")
						.from(document.getElementsByClassName('section1__group-btn')[0], 1, {
							opacity: 0,
							scale: 0,
							ease: Elastic.easeOut.config(0.5, 0.20)
						}, "-=0.5")

				}

				function section2Animation(timeLine) {
					timeLine.resume()
					timeLine.to('.section2', 0.5, {
						visibility: 'visible'
					}, "-=0.5")
					timeLine.from('.section2__title', 1, {
							opacity: 0,
							y: 200,
							ease: Elastic.easeOut.config(0.5, 0.20)
						})
						.from('.section2__text', 1, {
							scale: 0,
							ease: Elastic.easeOut.config(0.5, 0.20)
						}, "-=0.5")
				}

				function section3Animation(timeLine) {
					timeLine.resume()
					timeLine.to('.section3', 0.5, {
						visibility: 'visible'
					}, "-=0.5")
					timeLine.from('.section3__image', 1, {
						opacity: 0,
						x: -500,
						ease: Elastic.easeOut.config(0.4, 0.10)
					}, "-=0.5")
					for (var card of section3cards) {
						timeLine.from(card.getElementsByClassName('card__title')[0], 0.6, {
								scale: 0,
								x: 200,
								ease: Elastic.easeOut.config(0.5, 0.20)
							}, "-=0.45")
							.from(card.getElementsByClassName('card__text')[0], 0.6, {
								scale: 0,
								x: 200,
								ease: Elastic.easeOut.config(0.5, 0.20)
							}, "-=0.45")
					}
				}

				function section4Animation(timeLine) {
					timeLine.resume()
					timeLine.to('.section4', 0.5, {
						visibility: 'visible'
					}, "-=0.5")
					timeLine.from('.section4__title', 1, {
							opacity: 0,
							y: 500,
							ease: Elastic.easeOut.config(0.5, 0.20)
						}, "-=0.5")
						.from('.section4__text', 1, {
							opacity: 0,
							x: 200,
							ease: Elastic.easeOut.config(0.5, 0.20)
						}, "-=0.5")
						.from('.section4__image', 1, {
							opacity: 0,
							scale: 0,
							ease: Elastic.easeOut.config(0.5, 0.20)
						}, "-=0.5")
				}

				function section5Animation(timeLine) {
					timeLine.resume()
					timeLine.to('.section5', 0.5, {
						visibility: 'visible'
					}, "-=0.5")
					timeLine.from('.section5__title', 1, {
							opacity: 0,
							y: 500,
							ease: Elastic.easeOut.config(0.5, 0.20)
						}, "-=0.5")
						.from('.section5__text', 1, {
							opacity: 0,
							x: 200,
							ease: Elastic.easeOut.config(0.5, 0.20)
						}, "-=0.5")
					for (var card of workflowCards) {
						timeLine.from(card.getElementsByClassName('workflow-card__image'), 0.7, {
								opacity: 0,
								scale: 0,
								ease: Elastic.easeOut.config(0.5, 0.20)
							}, "-=0.45")
							.from(card.getElementsByClassName('workflow-card__title'), 0.5, {
								opacity: 0,
								y: 500,
								ease: Elastic.easeOut.config(0.4, 0.40)
							}, "-=0.45")
							.from(card.getElementsByClassName('workflow-card__text'), 0.5, {
								opacity: 0,
								y: 500,
								ease: Elastic.easeOut.config(0.4, 0.40)
							}, "-=0.45")
					}
					for (const partner of partners) {
						timeLine.from(partner, 0.8, {
							opacity: 0,
							x: 250,
							ease: Elastic.easeOut.config(0.4, 0.25)
						}, "-=0.65")
					}
				}

				function section6Animation(timeLine) {
					timeLine.resume()
					timeLine.to('.section6', 0.5, {
						visibility: 'visible'
					}, "-=0.5")
					timeLine.from('.section6__title', 0.5, {
							opacity: 0,
							y: 500,
							ease: Elastic.easeOut.config(0.5, 0.20)
						}, "-=0.5")
						.from('.section6__text', 1, {
							scale: 0,
							ease: Elastic.easeOut.config(0.5, 0.20)
						}, "-=0.2")
						.from(document.getElementsByClassName('section6__group-btn')[0], 1, {
							opacity: 0,
							scale: 0,
							ease: Elastic.easeOut.config(0.5, 0.20)
						}, "-=0.5")
					footerAnimation(timeLine)
				}

				function footerAnimation(timeLine) {
					timeLine.resume()
					timeLine.to('.footer', 0.5, {
						visibility: 'visible'
					}, "-=0.5")
					timeLine.from('.footer', 0.5, {
						opacity: 0,
						ease: Elastic.easeOut.config(0.5, 0.20)
					}, "-=0.5")
					timeLine.from('.footer__image', 0.5, {
						opacity: 0,
						x: -200,
						ease: Elastic.easeOut.config(0.5, 0.20)
					}, "-=0.5")
					for (const link of footerCol1) {
						timeLine.from(link, 0.5, {
							opacity: 0,
							y: 200,
							ease: Elastic.easeOut.config(0.35, 0.40)
						}, "-=0.35")
					}
					for (const link of footerCol2) {
						timeLine.from(link, 0.5, {
							opacity: 0,
							y: 200,
							ease: Elastic.easeOut.config(0.35, 0.40)
						}, "-=0.35")
					}
					for (const link of footerCol3) {
						timeLine.from(link, 0.5, {
							opacity: 0,
							y: 200,
							ease: Elastic.easeOut.config(0.35, 0.40)
						}, "-=0.35")
					}
					for (const socialMedia of socialMedias) {
						timeLine.from(socialMedia, 0.5, {
							opacity: 0,
							x: 250,
							ease: Elastic.easeOut.config(0.35, 0.40)
						}, "-=0.35")
					}
				}
			}
			timeLine.from(link, 0.5, {
				opacity: 0,
				y: 200,
				ease: Elastic.easeOut.config(0.35, 0.40)
			}, "-=0.35")
		}
		for (const link of footerCol3) {
			timeLine.from(link, 0.5, {
				opacity: 0,
				y: 200,
				ease: Elastic.easeOut.config(0.35, 0.40)
			}, "-=0.35")
		}
		for (const socialMedia of socialMedias) {
			timeLine.from(socialMedia, 0.5, {
				opacity: 0,
				x: 250,
				ease: Elastic.easeOut.config(0.35, 0.40)
			}, "-=0.35")
		}
	}
}