import { useEffect } from "react"
import gsap from "gsap"

function eventsCleanUp(selector) {
  const old_element = document.querySelector(selector)
  const new_element = old_element.cloneNode(true)
  old_element.parentNode.replaceChild(new_element, old_element)
}

// eslint-disable-next-line react/display-name
export const HeroAnimatedSvg = () => {
  useEffect(() => {
    var myLib = new MyLib()
    myLib.init()

    function MyLib() {
      this.init = function () {
        this.initEvents()
      }

      this.initEvents = function () {
        this.pulseAnimation()
        this.svgDashLineAnimation()
        this.svgDashLineAnimationRev()
        this.svgDashLineAnimationConsumer()
        this.dashLineWayfinding()
        this.dashLineWebsites()
        this.dashLineMobile()
        this.dashLineLoyalty()
        this.dashLineBigdata()
        this.dashLineMedia()
        this.dashLineSpecialty()
        this.dashLineReservation()
        this.dashLineAnalytic()
        this.dashLineCms()
        this.dashLineIntranet()
        this.dashLineSales()
        this.dashLineTenant()
        this.mouseEnter()
      }

      this.pulseAnimation = function () {
        gsap
          .timeline({ repeat: -1, repeatDelay: 2 })
          .set("#pulse_blue", { scale: 0, transformOrigin: "center center" })

          .set("#pulse_orange", { scale: 0, transformOrigin: "center center" })
          .to("#pulse_blue", { duration: 1.8, scale: 1.8, ease: "circ.out" }, "-=1")
          .to("#pulse_orange", { duration: 1.8, scale: 1.8, ease: "circ.out" }, "-=1.8")

          .to("#pulse_blue", { duration: 1, alpha: 0, ease: "circ.out" }, 1.6)
          .to("#pulse_orange", { duration: 1, alpha: 0, ease: "circ.out" }, 2)
      }

      this.dashLineTenant = () => {
        this.lineTenant = [...document.querySelectorAll("[data-path-line-tenant]")].map(
          eltenant => {
            const totalLength = eltenant.getTotalLength()
            const tl = gsap
              .timeline({ repeat: -1, paused: true })
              .set(eltenant, { strokeDashoffset: 0 })
            tl.to(eltenant, { duration: 10, strokeDashoffset: totalLength, ease: "none" })
            return tl
          },
        )
      }

      this.dashLineSales = () => {
        this.lineSales = [...document.querySelectorAll("[data-path-line-sales]")].map(elsales => {
          const totalLength = elsales.getTotalLength()
          const tl = gsap
            .timeline({ repeat: -1, paused: true })
            .set(elsales, { strokeDashoffset: 0 })
          tl.to(elsales, { duration: 10, strokeDashoffset: totalLength, ease: "none" })
          return tl
        })
      }

      this.dashLineIntranet = () => {
        this.lineIntranet = [...document.querySelectorAll("[data-path-line-intranet]")].map(
          elintranet => {
            const totalLength = elintranet.getTotalLength()
            const tl = gsap
              .timeline({ repeat: -1, paused: true })
              .set(elintranet, { strokeDashoffset: 0 })
            tl.to(elintranet, { duration: 10, strokeDashoffset: totalLength, ease: "none" })
            return tl
          },
        )
      }

      this.dashLineCms = () => {
        this.lineCms = [...document.querySelectorAll("[data-path-line-cms]")].map(elcms => {
          const totalLength = elcms.getTotalLength()
          const tl = gsap.timeline({ repeat: -1, paused: true }).set(elcms, { strokeDashoffset: 0 })
          tl.to(elcms, { duration: 10, strokeDashoffset: totalLength, ease: "none" })
          return tl
        })
      }

      this.dashLineAnalytic = () => {
        this.lineAnalytic = [...document.querySelectorAll("[data-path-line-analytic]")].map(
          elanalytic => {
            const totalLength = elanalytic.getTotalLength()
            const tl = gsap
              .timeline({ repeat: -1, paused: true })
              .set(elanalytic, { strokeDashoffset: 0 })
            tl.to(elanalytic, { duration: 10, strokeDashoffset: totalLength, ease: "none" })
            return tl
          },
        )
      }

      this.dashLineReservation = () => {
        this.lineReservation = [...document.querySelectorAll("[data-path-line-reservation]")].map(
          elreservation => {
            const totalLength = elreservation.getTotalLength()
            const tl = gsap
              .timeline({ repeat: -1, paused: true })
              .set(elreservation, { strokeDashoffset: 0 })
            tl.to(elreservation, { duration: 10, strokeDashoffset: totalLength, ease: "none" })
            return tl
          },
        )
      }

      this.dashLineSpecialty = () => {
        this.lineSpecialty = [...document.querySelectorAll("[data-path-line-specialty]")].map(
          elspecialty => {
            const totalLength = elspecialty.getTotalLength()
            const tl = gsap
              .timeline({ repeat: -1, paused: true })
              .set(elspecialty, { strokeDashoffset: 0 })
            tl.to(elspecialty, { duration: 10, strokeDashoffset: totalLength, ease: "none" })
            return tl
          },
        )
      }

      this.dashLineMedia = () => {
        this.lineMedia = [...document.querySelectorAll("[data-path-line-media]")].map(elmedia => {
          const totalLength = elmedia.getTotalLength()
          const tl = gsap
            .timeline({ repeat: -1, paused: true })
            .set(elmedia, { strokeDashoffset: 0 })
          tl.to(elmedia, { duration: 10, strokeDashoffset: totalLength, ease: "none" })
          return tl
        })
      }

      this.dashLineBigdata = () => {
        this.lineBigdata = [...document.querySelectorAll("[data-path-line-bigdata]")].map(
          elbigdata => {
            const totalLength = elbigdata.getTotalLength()
            const tl = gsap
              .timeline({ repeat: -1, paused: true })
              .set(elbigdata, { strokeDashoffset: 0 })
            tl.to(elbigdata, { duration: 10, strokeDashoffset: totalLength, ease: "none" })
            return tl
          },
        )
      }

      this.dashLineLoyalty = () => {
        this.lineLoyalty = [...document.querySelectorAll("[data-path-line-loyalty]")].map(
          elloyalty => {
            const totalLength = elloyalty.getTotalLength()
            const tl = gsap
              .timeline({ repeat: -1, paused: true })
              .set(elloyalty, { strokeDashoffset: 0 })
            tl.to(elloyalty, { duration: 10, strokeDashoffset: totalLength, ease: "none" })
            return tl
          },
        )
      }

      this.dashLineMobile = () => {
        this.lineMobile = [...document.querySelectorAll("[data-path-line-mobile]")].map(
          elmobile => {
            const totalLength = elmobile.getTotalLength()
            const tl = gsap
              .timeline({ repeat: -1, paused: true })
              .set(elmobile, { strokeDashoffset: 0 })
            tl.to(elmobile, { duration: 10, strokeDashoffset: totalLength, ease: "none" })
            return tl
          },
        )
      }

      this.dashLineWebsites = () => {
        this.lineWebsites = [...document.querySelectorAll("[data-path-line-websites]")].map(
          elwebsites => {
            const totalLength = elwebsites.getTotalLength()
            const tl = gsap
              .timeline({ repeat: -1, paused: true })
              .set(elwebsites, { strokeDashoffset: 0 })
            tl.to(elwebsites, { duration: 10, strokeDashoffset: totalLength, ease: "none" })
            return tl
          },
        )
      }

      this.dashLineWayfinding = () => {
        this.lineWayfinding = [...document.querySelectorAll("[data-path-line-wayfinding]")].map(
          elwayfinding => {
            const totalLength = elwayfinding.getTotalLength()
            const tl = gsap
              .timeline({ repeat: -1, paused: true })
              .set(elwayfinding, { strokeDashoffset: 0 })
            tl.to(elwayfinding, { duration: 10, strokeDashoffset: totalLength, ease: "none" })
            return tl
          },
        )
      }

      this.svgDashLineAnimation = () => {
        this.allLinesAnimation = [...document.querySelectorAll("[data-path-line-man]")].map(el => {
          const totalLength = el.getTotalLength()

          const tl = gsap.timeline({ repeat: -1, paused: true }).set(el, { strokeDashoffset: 0 })
          tl.to(el, { duration: 10, strokeDashoffset: totalLength, ease: "none" })

          return tl
        })
      }

      this.svgDashLineAnimationRev = () => {
        this.allLinesAnimationRev = [...document.querySelectorAll("[data-path-line-rev]")].map(
          elr => {
            const totalLength = elr.getTotalLength()

            const tlr = gsap
              .timeline({ repeat: -1, paused: true })
              .set(elr, { strokeDashoffset: 0 })
            tlr.to(elr, { duration: 10, strokeDashoffset: totalLength, ease: "none" })

            return tlr
          },
        )
      }

      this.svgDashLineAnimationConsumer = () => {
        this.allLinesAnimationConsumer = [...document.querySelectorAll("[data-path-line]")].map(
          elc => {
            const totalLength = elc.getTotalLength()

            const tlc = gsap
              .timeline({ repeat: -1, paused: true })
              .set(elc, { strokeDashoffset: 0 })
            tlc.to(elc, { duration: 10, strokeDashoffset: totalLength, ease: "none" })

            return tlc
          },
        )
      }

      this.mouseEnter = function () {
        this.consumerInteraction()
        this.revenueGeneration()
        this.revenueMonetize()
        this.iconWayfinding()
        this.iconWebsites()
        this.iconMobileapp()
        this.iconLoyalty()
        this.iconBigdata()
        this.iconMediasales()
        this.iconSpecialleasing()
        this.iconReservation()
        this.iconAnalityc()
        this.iconCms()
        this.iconIntranet()
        this.iconSalesreporting()
        this.iconTenant()
        this.clickEvents()
      }

      this.play = () => {}

      this.paused = () => {
        this.allLinesAnimation.forEach(el => {
          el.pause()
        })

        this.allLinesAnimationRev.forEach(elr => {
          elr.pause()
        })

        this.allLinesAnimationConsumer.forEach(elc => {
          elc.pause()
        })

        this.lineWayfinding.forEach(elwayfinding => {
          elwayfinding.pause()
        })

        this.lineWebsites.forEach(elwebsites => {
          elwebsites.pause()
        })

        this.lineMobile.forEach(elmobile => {
          elmobile.pause()
        })

        this.lineLoyalty.forEach(elloyalty => {
          elloyalty.pause()
        })

        this.lineBigdata.forEach(elbigdata => {
          elbigdata.pause()
        })

        this.lineMedia.forEach(elmedia => {
          elmedia.pause()
        })

        this.lineSpecialty.forEach(elspecialty => {
          elspecialty.pause()
        })

        this.lineReservation.forEach(elreservation => {
          elreservation.pause()
        })

        this.lineAnalytic.forEach(elanalytic => {
          elanalytic.pause()
        })

        this.lineCms.forEach(elcms => {
          elcms.pause()
        })

        this.lineIntranet.forEach(elintranet => {
          elintranet.pause()
        })

        this.lineSales.forEach(elsales => {
          elsales.pause()
        })

        this.lineTenant.forEach(eltenant => {
          eltenant.pause()
        })
      }

      this.iconTenant = function () {
        var isAnimated = false
        let timeout
        document.querySelector("#Tenant-Engagement").style.cursor = "pointer"

        const circleOval = document.querySelectorAll("[data-icon-tenant] #Oval")
        const circleIcon = document.querySelectorAll("[data-icon-tenant] #Icon path")

        document.querySelector("#Tenant-Engagement").addEventListener(
          "mouseenter",
          function () {
            this.play()
            this.lineTenant.forEach(eltenant => {
              eltenant.play()
            })
            if (timeout != null) {
              clearTimeout(timeout)
            }
            timeout = setTimeout(function () {
              if (!isAnimated) {
                isAnimated = true
                gsap.to(circleOval, { duration: 0.3, fill: "#28A396", stroke: "#28A396" })
                gsap.to([circleIcon], { duration: 0.3, stroke: "#fff" })
              }
            })
          }.bind(this),
        )

        document.querySelector("#Tenant-Engagement").addEventListener(
          "mouseleave",
          function () {
            if (timeout != null) {
              clearTimeout(timeout)
              timeout = null
              this.paused()
              isAnimated = false
              gsap.to(circleOval, { duration: 0.3, fill: "#ffffff", stroke: "#28A396" })
              gsap.to([circleIcon], { duration: 0.3, stroke: "#28A396" })
            }
          }.bind(this),
        )
      }

      this.iconSalesreporting = function () {
        var isAnimated = false
        let timeout
        document.querySelector("#Sales-Reporting").style.cursor = "pointer"

        const circleOval = document.querySelectorAll("[data-icon-sales] #Oval circle")
        const circleIcon = document.querySelectorAll("[data-icon-sales] #Icon polyline")
        const circleLine = document.querySelectorAll("[data-icon-sales] #Icon line")

        document.querySelector("#Sales-Reporting").addEventListener(
          "mouseenter",
          function () {
            this.play()
            this.lineSales.forEach(elsales => {
              elsales.play()
            })
            if (timeout != null) {
              clearTimeout(timeout)
            }
            timeout = setTimeout(function () {
              if (!isAnimated) {
                isAnimated = true
                gsap.to(circleOval, { duration: 0.3, fill: "#28A396", stroke: "#28A396" })
                gsap.to([circleIcon], { duration: 0.3, stroke: "#fff" })
                gsap.to([circleLine], { duration: 0.3, stroke: "#fff" })
              }
            })
          }.bind(this),
        )

        document.querySelector("#Sales-Reporting").addEventListener(
          "mouseleave",
          function () {
            if (timeout != null) {
              clearTimeout(timeout)
              timeout = null
              this.paused()
              isAnimated = false
              gsap.to(circleOval, { duration: 0.3, fill: "#ffffff", stroke: "#28A396" })
              gsap.to([circleIcon], { duration: 0.3, stroke: "#28A396" })
              gsap.to([circleLine], { duration: 0.3, stroke: "#28A396" })
            }
          }.bind(this),
        )
      }

      this.iconIntranet = function () {
        var isAnimated = false
        let timeout
        document.querySelector("#Intranet").style.cursor = "pointer"

        const circleOval = document.querySelectorAll("[data-icon-intranet] #Oval circle")
        const circleIcon = document.querySelectorAll("[data-icon-intranet] #Icon path")
        const circleLine = document.querySelectorAll("[data-icon-intranet] #Icon line")

        document.querySelector("#Intranet").addEventListener(
          "mouseenter",
          function () {
            this.play()
            this.lineIntranet.forEach(elintranet => {
              elintranet.play()
            })
            if (timeout != null) {
              clearTimeout(timeout)
            }
            timeout = setTimeout(function () {
              if (!isAnimated) {
                isAnimated = true
                gsap.to(circleOval, { duration: 0.3, fill: "#28A396", stroke: "#28A396" })
                gsap.to([circleIcon], { duration: 0.3, stroke: "#fff" })
                gsap.to([circleLine], { duration: 0.3, stroke: "#fff" })
              }
            })
          }.bind(this),
        )

        document.querySelector("#Intranet").addEventListener(
          "mouseleave",
          function () {
            if (timeout != null) {
              clearTimeout(timeout)
              timeout = null
              this.paused()
              isAnimated = false
              gsap.to(circleOval, { duration: 0.3, fill: "#ffffff", stroke: "#28A396" })
              gsap.to([circleIcon], { duration: 0.3, stroke: "#28A396" })
              gsap.to([circleLine], { duration: 0.3, stroke: "#28A396" })
            }
          }.bind(this),
        )
      }

      this.iconCms = function () {
        var isAnimated = false
        let timeout
        document.querySelector("#CMS").style.cursor = "pointer"

        const circleOval = document.querySelectorAll("[data-icon-cms] #Oval circle")
        const circleIcon = document.querySelectorAll("[data-icon-cms] #Icon path")
        const circleLine = document.querySelectorAll("[data-icon-cms] #Icon circle")
        const circlePolyline = document.querySelectorAll("[data-icon-cms] #Icon polygon")

        document.querySelector("#CMS").addEventListener(
          "mouseenter",
          function () {
            this.play()
            this.lineCms.forEach(elcms => {
              elcms.play()
            })
            if (timeout != null) {
              clearTimeout(timeout)
            }
            timeout = setTimeout(function () {
              if (!isAnimated) {
                isAnimated = true
                gsap.to(circleOval, { duration: 0.3, fill: "#28A396", stroke: "#28A396" })
                gsap.to([circleIcon, circlePolyline], { duration: 0.3, stroke: "#fff" })
                gsap.to([circleLine], { duration: 0.3, stroke: "#fff" })
              }
            })
          }.bind(this),
        )

        document.querySelector("#CMS").addEventListener(
          "mouseleave",
          function () {
            if (timeout != null) {
              clearTimeout(timeout)
              timeout = null
              this.paused()
              isAnimated = false
              gsap.to(circleOval, { duration: 0.3, fill: "#ffffff", stroke: "#28A396" })
              gsap.to([circleIcon, circlePolyline], { duration: 0.3, stroke: "#28A396" })
              gsap.to([circleLine], { duration: 0.3, stroke: "#28A396" })
            }
          }.bind(this),
        )
      }

      this.iconAnalityc = function () {
        var isAnimated = false
        let timeout
        document.querySelector("#Analytics").style.cursor = "pointer"

        const circleOval = document.querySelectorAll("[data-icon-analytics] #Oval circle")
        const circleIcon = document.querySelectorAll("[data-icon-analytics] #Icon path")
        const circleLine = document.querySelectorAll("[data-icon-analytics] #Icon line")
        const circlePolyline = document.querySelectorAll("[data-icon-analytics] #Icon polyline")

        document.querySelector("#Analytics").addEventListener(
          "mouseenter",
          function () {
            this.play()
            this.lineAnalytic.forEach(elanalytic => {
              elanalytic.play()
            })
            if (timeout != null) {
              clearTimeout(timeout)
            }
            timeout = setTimeout(function () {
              if (!isAnimated) {
                isAnimated = true
                gsap.to(circleOval, { duration: 0.3, fill: "#28A396", stroke: "#28A396" })
                gsap.to([circleIcon, circlePolyline], { duration: 0.3, stroke: "#fff" })
                gsap.to([circleLine], { duration: 0.3, stroke: "#fff" })
              }
            })
          }.bind(this),
        )

        document.querySelector("#Analytics").addEventListener(
          "mouseleave",
          function () {
            if (timeout != null) {
              clearTimeout(timeout)
              timeout = null
              this.paused()
              isAnimated = false
              gsap.to(circleOval, { duration: 0.3, fill: "#ffffff", stroke: "#28A396" })
              gsap.to([circleIcon, circlePolyline], { duration: 0.3, stroke: "#28A396" })
              gsap.to([circleLine], { duration: 0.3, stroke: "#28A396" })
            }
          }.bind(this),
        )
      }

      this.iconReservation = function () {
        var isAnimated = false
        let timeout
        document.querySelector("#Calendar-Reservations").style.cursor = "pointer"

        const circlereservationOval = document.querySelectorAll(
          "[data-icon-reservation] #Oval circle",
        )
        const circlereservationIcon = document.querySelectorAll(
          "[data-icon-reservation] #Icon path",
        )
        const circlereservationPolygon = document.querySelectorAll(
          "[data-icon-reservation] #Icon polygon",
        )
        const circlereservationLine = document.querySelectorAll(
          "[data-icon-reservation] #Icon line",
        )
        const circlereservationPolyline = document.querySelectorAll(
          "[data-icon-reservation] #Icon polyline",
        )

        document.querySelector("#Calendar-Reservations").addEventListener(
          "mouseenter",
          function () {
            this.play()
            this.lineReservation.forEach(elreservation => {
              elreservation.play()
            })
            if (timeout != null) {
              clearTimeout(timeout)
            }
            timeout = setTimeout(function () {
              if (!isAnimated) {
                isAnimated = true
                gsap.to(circlereservationOval, {
                  duration: 0.3,
                  fill: "#FF9B00",
                  stroke: "#FF9B00",
                })
                gsap.to([circlereservationIcon, circlereservationPolyline], {
                  duration: 0.3,
                  stroke: "#fff",
                })
                gsap.to([circlereservationLine, circlereservationPolygon], {
                  duration: 0.3,
                  stroke: "#fff",
                })
              }
            })
          }.bind(this),
        )

        document.querySelector("#Calendar-Reservations").addEventListener(
          "mouseleave",
          function () {
            if (timeout != null) {
              clearTimeout(timeout)
              timeout = null
              this.paused()
              isAnimated = false
              gsap.to(circlereservationOval, {
                duration: 0.3,
                fill: "#ffffff",
                stroke: "#FF9B00",
                alpha: 1,
              })
              gsap.to([circlereservationIcon, circlereservationPolyline], {
                duration: 0.3,
                stroke: "#FF9B00",
              })
              gsap.to([circlereservationLine, circlereservationPolygon], {
                duration: 0.3,
                stroke: "#FF9B00",
              })
            }
          }.bind(this),
        )
      }

      this.iconSpecialleasing = function () {
        var isAnimated = false
        let timeout
        document.querySelector("#Specialty-LEasing").style.cursor = "pointer"

        const circlespecialtyOval = document.querySelectorAll("[data-icon-specialty] #Oval circle")
        const circlespecialtyIcon = document.querySelectorAll("[data-icon-specialty] #Icon path")
        const circlespecialtyPolygon = document.querySelectorAll(
          "[data-icon-specialty] #Icon ellipse",
        )
        const circlespecialtyLine = document.querySelectorAll("[data-icon-specialty] #Icon line")

        document.querySelector("#Specialty-LEasing").addEventListener(
          "mouseenter",
          function () {
            this.play()
            this.lineSpecialty.forEach(elspecialty => {
              elspecialty.play()
            })
            if (timeout != null) {
              clearTimeout(timeout)
            }
            timeout = setTimeout(function () {
              if (!isAnimated) {
                isAnimated = true
                gsap.to(circlespecialtyOval, { duration: 0.3, fill: "#FF9B00", stroke: "#FF9B00" })
                gsap.to(circlespecialtyIcon, { duration: 0.3, stroke: "#fff" })
                gsap.to([circlespecialtyLine, circlespecialtyPolygon], {
                  duration: 0.3,
                  stroke: "#fff",
                })
              }
            })
          }.bind(this),
        )

        document.querySelector("#Specialty-LEasing").addEventListener(
          "mouseleave",
          function () {
            if (timeout != null) {
              clearTimeout(timeout)
              timeout = null
              this.paused()
              isAnimated = false
              gsap.to(circlespecialtyOval, { duration: 0.3, fill: "#ffffff", stroke: "#FF9B00" })
              gsap.to(circlespecialtyIcon, { duration: 0.3, stroke: "#FF9B00" })
              gsap.to([circlespecialtyLine, circlespecialtyPolygon], {
                duration: 0.3,
                stroke: "#FF9B00",
              })
            }
          }.bind(this),
        )
      }

      this.iconMediasales = function () {
        var isAnimated = false
        let timeout
        document.querySelector("#Media-Sales").style.cursor = "pointer"

        const circlemediaOval = document.querySelectorAll("[data-icon-mediasales] #Oval circle")
        const circlemediaIcon = document.querySelectorAll("[data-icon-mediasales] #Icon path")
        const circlemediaPolygon = document.querySelectorAll("[data-icon-mediasales] #Icon polygon")
        const circlemediaLine = document.querySelectorAll("[data-icon-mediasales] #Icon line")

        document.querySelector("#Media-Sales").addEventListener(
          "mouseenter",
          function () {
            this.play()
            this.lineMedia.forEach(elmedia => {
              elmedia.play()
            })
            if (timeout != null) {
              clearTimeout(timeout)
            }
            timeout = setTimeout(function () {
              if (!isAnimated) {
                isAnimated = true
                gsap.to(circlemediaOval, { duration: 0.3, fill: "#FF9B00", stroke: "#FF9B00" })
                gsap.to(circlemediaIcon, { duration: 0.3, stroke: "#fff" })
                gsap.to([circlemediaLine, circlemediaPolygon], { duration: 0.3, stroke: "#fff" })
              }
            })
          }.bind(this),
        )

        document.querySelector("#Media-Sales").addEventListener(
          "mouseleave",
          function () {
            if (timeout != null) {
              clearTimeout(timeout)
              timeout = null
              this.paused()
              isAnimated = false
              gsap.to(circlemediaOval, { duration: 0.3, fill: "#ffffff", stroke: "#FF9B00" })
              gsap.to(circlemediaIcon, { duration: 0.3, stroke: "#FF9B00" })
              gsap.to([circlemediaLine, circlemediaPolygon], { duration: 0.3, stroke: "#FF9B00" })
            }
          }.bind(this),
        )
      }

      this.iconBigdata = function () {
        var isAnimated = false
        let timeout
        document.querySelector("#Big-Data").style.cursor = "pointer"

        const circlebigdataOval = document.querySelectorAll("[data-icon-bigdata] #Oval circle")
        const circlebigdataIcon = document.querySelectorAll("[data-icon-bigdata] #Icon path")

        document.querySelector("#Big-Data").addEventListener(
          "mouseenter",
          function () {
            this.play()
            this.lineBigdata.forEach(elbigdata => {
              elbigdata.play()
            })
            if (timeout != null) {
              clearTimeout(timeout)
            }
            timeout = setTimeout(function () {
              if (!isAnimated) {
                isAnimated = true
                gsap.to(circlebigdataOval, { duration: 0.3, fill: "#63BBD4", stroke: "#63BBD4" })
                gsap.to(circlebigdataIcon, { duration: 0.3, stroke: "#fff" })
              }
            })
          }.bind(this),
        )

        document.querySelector("#Big-Data").addEventListener(
          "mouseleave",
          function () {
            if (timeout != null) {
              clearTimeout(timeout)
              timeout = null
              this.paused()
              isAnimated = false
              gsap.to(circlebigdataOval, { duration: 0.3, fill: "#ffffff", stroke: "#63BBD4" })
              gsap.to(circlebigdataIcon, { duration: 0.3, stroke: "#63BBD4" })
            }
          }.bind(this),
        )
      }

      this.iconLoyalty = function () {
        var isAnimated = false
        let timeout
        document.querySelector("#Loyalty").style.cursor = "pointer"

        const circleloyaltyOval = document.querySelectorAll("[data-icon-loyalty] #Oval circle")
        const circleloyaltyIcon = document.querySelectorAll("[data-icon-loyalty] #Icon path")
        const circleloyaltyPolygon = document.querySelectorAll("[data-icon-loyalty] #Icon polygon")

        document.querySelector("#Loyalty").addEventListener(
          "mouseenter",
          function () {
            this.play()
            this.lineLoyalty.forEach(elloyalty => {
              elloyalty.play()
            })
            if (timeout != null) {
              clearTimeout(timeout)
            }
            timeout = setTimeout(function () {
              if (!isAnimated) {
                isAnimated = true
                gsap.to(circleloyaltyOval, { duration: 0.3, fill: "#63BBD4", stroke: "#63BBD4" })
                gsap.to([circleloyaltyIcon, circleloyaltyPolygon], {
                  duration: 0.3,
                  stroke: "#fff",
                })
              }
            })
          }.bind(this),
        )

        document.querySelector("#Loyalty").addEventListener(
          "mouseleave",
          function () {
            if (timeout != null) {
              clearTimeout(timeout)
              timeout = null
              this.paused()
              isAnimated = false
              gsap.to(circleloyaltyOval, { duration: 0.3, fill: "#ffffff", stroke: "#63BBD4" })
              gsap.to([circleloyaltyIcon, circleloyaltyPolygon], {
                duration: 0.3,
                stroke: "#63BBD4",
              })
            }
          }.bind(this),
        )
      }

      this.iconMobileapp = function () {
        var isAnimated = false
        let timeout
        document.querySelector("#Mobile-Apps").style.cursor = "pointer"

        const circlemobileOval = document.querySelectorAll("[data-icon-mobile] #Oval circle")
        const circlemobileIcon = document.querySelectorAll("[data-icon-mobile] #Icon path")
        const circlemobileLine = document.querySelectorAll("[data-icon-mobile] #Icon line")

        document.querySelector("#Mobile-Apps").addEventListener(
          "mouseenter",
          function () {
            this.play()
            this.lineMobile.forEach(elmobile => {
              elmobile.play()
            })
            if (timeout != null) {
              clearTimeout(timeout)
            }
            timeout = setTimeout(function () {
              if (!isAnimated) {
                isAnimated = true
                gsap.to(circlemobileOval, { duration: 0.3, fill: "#63BBD4", stroke: "#63BBD4" })
                gsap.to([circlemobileLine, circlemobileIcon], { duration: 0.3, stroke: "#fff" })
              }
            })
          }.bind(this),
        )

        document.querySelector("#Mobile-Apps").addEventListener(
          "mouseleave",
          function () {
            if (timeout != null) {
              clearTimeout(timeout)
              timeout = null
              this.paused()
              isAnimated = false
              gsap.to(circlemobileOval, { duration: 0.3, fill: "#ffffff", stroke: "#63BBD4" })
              gsap.to([circlemobileLine, circlemobileIcon], { duration: 0.3, stroke: "#63BBD4" })
            }
          }.bind(this),
        )
      }

      this.iconWebsites = function () {
        var isAnimated = false
        let timeout
        document.querySelector("#Websites").style.cursor = "pointer"

        const circleWebsitesOval = document.querySelectorAll("[data-icon-websites] #Oval circle")
        const circleWebsitesIcon = document.querySelectorAll("[data-icon-websites] #Icon path")
        const circleWebsitestext = document.querySelectorAll("[data-icon-websites] #Icon text")

        document.querySelector("#Websites").addEventListener(
          "mouseenter",
          function () {
            this.play()
            this.lineWebsites.forEach(elwebsites => {
              elwebsites.play()
            })
            if (timeout != null) {
              clearTimeout(timeout)
            }
            timeout = setTimeout(function () {
              if (!isAnimated) {
                isAnimated = true
                gsap.to(circleWebsitesOval, { duration: 0.3, fill: "#63BBD4", stroke: "#63BBD4" })
                gsap.to(circleWebsitesIcon, { duration: 0.3, stroke: "#fff" })
                gsap.to(circleWebsitestext, { duration: 0.3, fill: "#fff" })
              }
            })
          }.bind(this),
        )

        document.querySelector("#Websites").addEventListener(
          "mouseleave",
          function () {
            if (timeout != null) {
              clearTimeout(timeout)
              timeout = null
              this.paused()
              isAnimated = false
              gsap.to(circleWebsitesOval, { duration: 0.3, fill: "#ffffff", stroke: "#63BBD4" })
              gsap.to(circleWebsitesIcon, { duration: 0.3, stroke: "#63BBD4" })
              gsap.to(circleWebsitestext, { duration: 0.3, fill: "#63BBD4" })
            }
          }.bind(this),
        )
      }

      this.iconWayfinding = function () {
        var isAnimated = false
        let timeout
        document.querySelector("#Wayfinding").style.cursor = "pointer"

        const circlewayfindingOval = document.querySelectorAll("[data-icon-wayfinding] #Oval path")
        const circlewayfindingIcon = document.querySelectorAll("[data-icon-wayfinding] #Icon path")
        const circlewayfindingText = document.querySelectorAll("[data-icon-wayfinding] #Icon text")

        document.querySelector("#Wayfinding").addEventListener(
          "mouseenter",
          function () {
            this.play()
            this.lineWayfinding.forEach(elwayfinding => {
              elwayfinding.play()
            })
            if (timeout != null) {
              clearTimeout(timeout)
            }
            timeout = setTimeout(function () {
              if (!isAnimated) {
                isAnimated = true
                gsap.to(circlewayfindingOval, { duration: 0.3, fill: "#63BBD4", stroke: "#63BBD4" })
                gsap.to(circlewayfindingIcon, { duration: 0.3, stroke: "#fff" })
                gsap.to(circlewayfindingText, { duration: 0.3, fill: "#fff" })
              }
            })
          }.bind(this),
        )

        document.querySelector("#Wayfinding").addEventListener(
          "mouseleave",
          function () {
            if (timeout != null) {
              clearTimeout(timeout)
              timeout = null
              this.paused()
              isAnimated = false
              gsap.to(circlewayfindingOval, { duration: 0.3, fill: "#ffffff", stroke: "#63BBD4" })
              gsap.to(circlewayfindingIcon, { duration: 0.3, stroke: "#63BBD4" })
              gsap.to(circlewayfindingText, { duration: 0.3, fill: "#63BBD4" })
            }
          }.bind(this),
        )
      }

      this.revenueMonetize = function () {
      }
      this.revenueGeneration = function () {
      }
      this.consumerInteraction = function () {
      }

      this.clickEvents = function () {
        document
          .querySelector(
            "#Connect , #Big-Data , #Loyalty , #Mobile-Apps , #Websites , #Wayfinding ",
          )
          .addEventListener(
            "click",
            function (e) {
              e.preventDefault()
              this.scrollToanimation("#connect")
            }.bind(this),
          )
        document
          .querySelector(
            "#Manage , #Analytics , #CMS , #Intranet , #Sales-Reporting , #Tenant-Engagement ",
          )
          .addEventListener(
            "click",
            function (e) {
              e.preventDefault()
              this.scrollToanimation("#hyperin-manage")
            }.bind(this),
          )
        document
          .querySelector("#Monetize , #Media-Sales , #Specialty-LEasing , #Calendar-Reservations")
          .addEventListener(
            "click",
            function (e) {
              e.preventDefault()
              this.scrollToanimation("#monetize")
            }.bind(this),
          )
      }

      this.scrollToanimation = target => {
        gsap.to(window, {
          scrollTo: {
            y: target,
          },
          duration: 1,
          ease: "power4.inOut",
        })
      }
    }

    return () => {
      const cleanUpSelectorList = [
        "#Tenant-Engagement",
        "#Sales-Reporting",
        "#Intranet",
        "#CMS",
        "#Analytics",
        "#Calendar-Reservations",
        "#Specialty-LEasing",
        "#Media-Sales",
        "#Big-Data",
        "#Loyalty",
        "#Mobile-Apps",
        "#Websites",
        "#Wayfinding",
        "#Connect , #Big-Data , #Loyalty , #Mobile-Apps , #Websites , #Wayfinding ",
        "#Monetize , #Media-Sales , #Specialty-LEasing , #Calendar-Reservations",
      ]
      cleanUpSelectorList.forEach(selector => {
        eventsCleanUp(selector)
      })
    }
  }, [])

  return (
    <svg
      width="760px"
      height="1100px"
      id="svg-animation"
      viewBox="330 0 900 795"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <radialGradient
          cx="783.49999"
          cy="416.49999"
          fx="783.49999"
          fy="416.49999"
          r="251.09721"
          id="radialGradient-1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#000000" offset="0%" id="stop4" />
          <stop stopColor="#000000" stopOpacity="0.667413245" offset="65.8497671%" id="stop6" />
          <stop stopColor="#FFFFFF" stopOpacity="0.288819426" offset="100%" id="stop8" />
        </radialGradient>

        <radialGradient
          cx="784"
          cy="417"
          fx="784"
          fy="417"
          r="168.58092"
          id="radialGradient-3"
          gradientUnits="userSpaceOnUse"
          fr="0"
          spreadMethod="pad"
        >
          <stop
            stopColor="#000000"
            offset="0"
            id="stop14"
            style={{ stopColor: "#000000", stopOpacity: "0.26080239" }}
          />
          <stop
            stopColor="#000000"
            stopOpacity="0.332956594"
            offset="0.67792273"
            id="stop16"
            style={{ stopColor: "#000000", stopOpacity: "0.03044021" }}
          />
          <stop
            stopColor="#5D5D5D"
            stopOpacity="0.587515771"
            offset="1"
            id="stop18"
            style={{ stopColor: "#5d5d5d", stopOpacity: "0.54770374" }}
          />
        </radialGradient>
        <radialGradient
          cx="50%"
          cy="50%"
          fx="50%"
          fy="50%"
          r="51.6023897%"
          gradientTransform="translate(0.500000,0.500000),rotate(-90.000000),scale(1.000000,1.058592),translate(-0.500000,-0.500000)"
          id="radialGradient-33"
        >
          <stop stopColor="#000000" offset="0%" id="stop4144" />
          <stop stopColor="#000000" stopOpacity="0" offset="65.8497671%" id="stop4146" />
          <stop stopColor="#FFFFFF" stopOpacity="0.288819426" offset="100%" id="stop4148" />
        </radialGradient>
        <radialGradient
          xlinkHref="#radialGradient-3"
          id="radialGradient4417"
          cx="784"
          cy="417"
          fx="784"
          fy="417"
          r="187"
          gradientUnits="userSpaceOnUse"
        />

        <filter
          x="-1.3%"
          y="-0.4%"
          width="102.6%"
          height="100.9%"
          filterUnits="objectBoundingBox"
          id="filter-2"
        >
          <feGaussianBlur stdDeviation="0" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <filter
          x="-7.0%"
          y="-2.3%"
          width="114.0%"
          height="104.7%"
          filterUnits="objectBoundingBox"
          id="filter-3"
        >
          <feGaussianBlur
            stdDeviation="5.5"
            in="SourceAlpha"
            result="shadowBlurInner1"
          ></feGaussianBlur>
          <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            type="matrix"
            in="shadowInnerInner1"
          ></feColorMatrix>
        </filter>

        <filter
          x="-0.7%"
          y="-0.7%"
          width="101.3%"
          height="101.4%"
          filterUnits="objectBoundingBox"
          id="filter-5"
        >
          <feGaussianBlur stdDeviation="0" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <filter
          x="-3.1%"
          y="-3.4%"
          width="106.1%"
          height="106.7%"
          filterUnits="objectBoundingBox"
          id="filter-6"
        >
          <feGaussianBlur
            stdDeviation="5.5"
            in="SourceAlpha"
            result="shadowBlurInner1"
          ></feGaussianBlur>
          <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            type="matrix"
            in="shadowInnerInner1"
          ></feColorMatrix>
        </filter>

        <filter
          x="-0.4%"
          y="-1.3%"
          width="100.8%"
          height="102.6%"
          filterUnits="objectBoundingBox"
          id="filter-8"
        >
          <feGaussianBlur stdDeviation="0" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <filter
          x="-2.2%"
          y="-7.0%"
          width="104.3%"
          height="114.0%"
          filterUnits="objectBoundingBox"
          id="filter-9"
        >
          <feGaussianBlur
            stdDeviation="5.5"
            in="SourceAlpha"
            result="shadowBlurInner1"
          ></feGaussianBlur>
          <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            type="matrix"
            in="shadowInnerInner1"
          ></feColorMatrix>
        </filter>

        <filter
          x="-0.4%"
          y="-2.0%"
          width="100.8%"
          height="104.0%"
          filterUnits="objectBoundingBox"
          id="filter-11"
        >
          <feGaussianBlur stdDeviation="0" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <filter
          x="-2.2%"
          y="-11.7%"
          width="104.5%"
          height="123.4%"
          filterUnits="objectBoundingBox"
          id="filter-12"
        >
          <feGaussianBlur
            stdDeviation="5.5"
            in="SourceAlpha"
            result="shadowBlurInner1"
          ></feGaussianBlur>
          <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            type="matrix"
            in="shadowInnerInner1"
          ></feColorMatrix>
        </filter>

        <filter
          x="-0.6%"
          y="-0.7%"
          width="101.2%"
          height="101.5%"
          filterUnits="objectBoundingBox"
          id="filter-14"
        >
          <feGaussianBlur stdDeviation="0" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <filter
          x="-2.9%"
          y="-3.5%"
          width="105.9%"
          height="107.0%"
          filterUnits="objectBoundingBox"
          id="filter-15"
        >
          <feGaussianBlur
            stdDeviation="5.5"
            in="SourceAlpha"
            result="shadowBlurInner1"
          ></feGaussianBlur>
          <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            type="matrix"
            in="shadowInnerInner1"
          ></feColorMatrix>
        </filter>

        <filter
          x="-1.0%"
          y="-0.5%"
          width="102.1%"
          height="101.0%"
          filterUnits="objectBoundingBox"
          id="filter-17"
        >
          <feGaussianBlur stdDeviation="0" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <filter
          x="-5.2%"
          y="-2.4%"
          width="110.5%"
          height="104.9%"
          filterUnits="objectBoundingBox"
          id="filter-18"
        >
          <feGaussianBlur
            stdDeviation="5.5"
            in="SourceAlpha"
            result="shadowBlurInner1"
          ></feGaussianBlur>
          <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            type="matrix"
            in="shadowInnerInner1"
          ></feColorMatrix>
        </filter>

        <filter
          x="-17.0%"
          y="-0.3%"
          width="134.1%"
          height="100.6%"
          filterUnits="objectBoundingBox"
          id="filter-20"
        >
          <feGaussianBlur stdDeviation="0" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <filter
          x="-117.0%"
          y="-2.1%"
          width="334.1%"
          height="104.1%"
          filterUnits="objectBoundingBox"
          id="filter-21"
        >
          <feGaussianBlur
            stdDeviation="5.5"
            in="SourceAlpha"
            result="shadowBlurInner1"
          ></feGaussianBlur>
          <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            type="matrix"
            in="shadowInnerInner1"
          ></feColorMatrix>
        </filter>

        <filter
          x="-1.1%"
          y="-0.5%"
          width="102.2%"
          height="101.0%"
          filterUnits="objectBoundingBox"
          id="filter-23"
        >
          <feGaussianBlur stdDeviation="0" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <filter
          x="-5.5%"
          y="-2.4%"
          width="110.9%"
          height="104.9%"
          filterUnits="objectBoundingBox"
          id="filter-24"
        >
          <feGaussianBlur
            stdDeviation="5.5"
            in="SourceAlpha"
            result="shadowBlurInner1"
          ></feGaussianBlur>
          <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            type="matrix"
            in="shadowInnerInner1"
          ></feColorMatrix>
        </filter>

        <filter
          x="-0.6%"
          y="-0.8%"
          width="101.3%"
          height="101.6%"
          filterUnits="objectBoundingBox"
          id="filter-26"
        >
          <feGaussianBlur stdDeviation="0" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <filter
          x="-3.1%"
          y="-3.7%"
          width="106.1%"
          height="107.4%"
          filterUnits="objectBoundingBox"
          id="filter-27"
        >
          <feGaussianBlur
            stdDeviation="5.5"
            in="SourceAlpha"
            result="shadowBlurInner1"
          ></feGaussianBlur>
          <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            type="matrix"
            in="shadowInnerInner1"
          ></feColorMatrix>
        </filter>

        <filter
          x="-0.4%"
          y="-2.1%"
          width="100.8%"
          height="104.3%"
          filterUnits="objectBoundingBox"
          id="filter-29"
        >
          <feGaussianBlur stdDeviation="0" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <filter
          x="-2.2%"
          y="-12.5%"
          width="104.5%"
          height="125.0%"
          filterUnits="objectBoundingBox"
          id="filter-30"
        >
          <feGaussianBlur
            stdDeviation="5.5"
            in="SourceAlpha"
            result="shadowBlurInner1"
          ></feGaussianBlur>
          <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            type="matrix"
            in="shadowInnerInner1"
          ></feColorMatrix>
        </filter>

        <filter
          x="-0.4%"
          y="-1.5%"
          width="100.8%"
          height="103.0%"
          filterUnits="objectBoundingBox"
          id="filter-32"
        >
          <feGaussianBlur stdDeviation="0" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <filter
          x="-2.1%"
          y="-8.3%"
          width="104.3%"
          height="116.6%"
          filterUnits="objectBoundingBox"
          id="filter-33"
        >
          <feGaussianBlur
            stdDeviation="5.5"
            in="SourceAlpha"
            result="shadowBlurInner1"
          ></feGaussianBlur>
          <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            type="matrix"
            in="shadowInnerInner1"
          ></feColorMatrix>
        </filter>

        <filter
          x="-0.6%"
          y="-0.7%"
          width="101.2%"
          height="101.3%"
          filterUnits="objectBoundingBox"
          id="filter-35"
        >
          <feGaussianBlur stdDeviation="0" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <filter
          x="-2.8%"
          y="-3.1%"
          width="105.6%"
          height="106.2%"
          filterUnits="objectBoundingBox"
          id="filter-36"
        >
          <feGaussianBlur
            stdDeviation="5.5"
            in="SourceAlpha"
            result="shadowBlurInner1"
          ></feGaussianBlur>
          <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            type="matrix"
            in="shadowInnerInner1"
          ></feColorMatrix>
        </filter>

        <filter
          x="-1.4%"
          y="-0.4%"
          width="102.8%"
          height="100.9%"
          filterUnits="objectBoundingBox"
          id="filter-38"
        >
          <feGaussianBlur stdDeviation="0" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <filter
          x="-7.5%"
          y="-2.3%"
          width="114.9%"
          height="104.7%"
          filterUnits="objectBoundingBox"
          id="filter-39"
        >
          <feGaussianBlur
            stdDeviation="5.5"
            in="SourceAlpha"
            result="shadowBlurInner1"
          ></feGaussianBlur>
          <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            type="matrix"
            in="shadowInnerInner1"
          ></feColorMatrix>
        </filter>
        <radialGradient
          cx="50%"
          cy="50%"
          fx="50%"
          fy="50%"
          r="50.0052338%"
          gradientTransform="translate(0.500000,0.500000),rotate(-90.828980),scale(1.000000,0.998974),translate(-0.500000,-0.500000)"
          id="radialGradient-40"
        >
          <stop stopColor="#FFFFFF" stopOpacity="0" offset="0%"></stop>
          <stop stopColor="#FFFFFF" stopOpacity="0" offset="92.4926418%"></stop>
          <stop stopColor="#63BBD4" offset="100%"></stop>
        </radialGradient>
        <filter
          x="-0.8%"
          y="-0.8%"
          width="101.6%"
          height="101.6%"
          filterUnits="objectBoundingBox"
          id="filter-41"
        >
          <feGaussianBlur stdDeviation="2" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <radialGradient
          cx="50%"
          cy="50%"
          fx="50%"
          fy="50%"
          r="50%"
          gradientTransform="translate(0.500000,0.500000),rotate(-90.000000),scale(1.000000,1.000906),translate(-0.500000,-0.500000)"
          id="radialGradient-42"
        >
          <stop stopColor="#7B766F" stopOpacity="0" offset="0%"></stop>
          <stop stopColor="#FFFFFF" stopOpacity="0" offset="91.7718624%"></stop>
          <stop stopColor="#FF9B00" offset="100%"></stop>
        </radialGradient>
        <filter
          x="-1.0%"
          y="-1.0%"
          width="101.9%"
          height="101.9%"
          filterUnits="objectBoundingBox"
          id="filter-43"
        >
          <feGaussianBlur stdDeviation="2" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="50%" id="radialGradient-44">
          <stop stopColor="#FFFFFF" stopOpacity="0" offset="0%"></stop>
          <stop stopColor="#FFFFFF" stopOpacity="0" offset="81.1103993%"></stop>
          <stop stopColor="#28A396" offset="100%"></stop>
        </radialGradient>
        <filter
          x="-1.6%"
          y="-1.6%"
          width="103.2%"
          height="103.2%"
          filterUnits="objectBoundingBox"
          id="filter-45"
        >
          <feGaussianBlur stdDeviation="2" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <circle id="path-46" cx="66" cy="55" r="55"></circle>
        <filter
          x="-6.4%"
          y="-4.5%"
          width="112.7%"
          height="112.7%"
          filterUnits="objectBoundingBox"
          id="filter-47"
        >
          <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="2"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <rect id="path-48" x="0" y="89" width="131" height="31"></rect>
        <filter
          x="-6.1%"
          y="-22.6%"
          width="112.2%"
          height="151.6%"
          filterUnits="objectBoundingBox"
          id="filter-49"
        >
          <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="2.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <circle id="path-50" cx="55" cy="55" r="55"></circle>
        <filter
          x="-7.7%"
          y="-5.9%"
          width="115.5%"
          height="115.5%"
          filterUnits="objectBoundingBox"
          id="filter-51"
        >
          <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="2.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.0957952113 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <rect id="path-52" x="0" y="88.2992126" width="110" height="37.7007874"></rect>
        <filter
          x="-4.5%"
          y="-10.6%"
          width="109.1%"
          height="126.5%"
          filterUnits="objectBoundingBox"
          id="filter-53"
        >
          <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="1.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <circle id="path-54" cx="66" cy="55" r="55"></circle>
        <filter
          x="-7.7%"
          y="-5.9%"
          width="115.5%"
          height="115.5%"
          filterUnits="objectBoundingBox"
          id="filter-55"
        >
          <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="2.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <rect id="path-56" x="0" y="89" width="131" height="31"></rect>
        <filter
          x="-6.1%"
          y="-22.6%"
          width="112.2%"
          height="151.6%"
          filterUnits="objectBoundingBox"
          id="filter-57"
        >
          <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="2.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <circle id="path-58" cx="66" cy="55" r="55"></circle>
        <filter
          x="-7.7%"
          y="-5.9%"
          width="115.5%"
          height="115.5%"
          filterUnits="objectBoundingBox"
          id="filter-59"
        >
          <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="2.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0.64421369   0 0 0 0 0.64421369   0 0 0 0 0.64421369  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <rect id="path-60" x="14" y="88" width="101" height="31"></rect>
        <filter
          x="-6.1%"
          y="-22.6%"
          width="112.2%"
          height="151.6%"
          filterUnits="objectBoundingBox"
          id="filter-61"
        >
          <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="2.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <circle id="path-62" cx="57" cy="55" r="55"></circle>
        <filter
          x="-5.5%"
          y="-5.5%"
          width="110.9%"
          height="110.9%"
          filterUnits="objectBoundingBox"
          id="filter-63"
        >
          <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="2"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0.430207626   0 0 0 0 0.425912908   0 0 0 0 0.425912908  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <rect id="path-64" x="0" y="89" width="114" height="31"></rect>
        <filter
          x="-7.0%"
          y="-22.6%"
          width="114.0%"
          height="151.6%"
          filterUnits="objectBoundingBox"
          id="filter-65"
        >
          <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="2.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <circle id="path-66" cx="66" cy="55" r="55"></circle>
        <filter
          x="-7.7%"
          y="-5.9%"
          width="115.5%"
          height="115.5%"
          filterUnits="objectBoundingBox"
          id="filter-67"
        >
          <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="2.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <rect id="path-68" x="0" y="89" width="131" height="31"></rect>
        <filter
          x="-6.1%"
          y="-22.6%"
          width="112.2%"
          height="151.6%"
          filterUnits="objectBoundingBox"
          id="filter-69"
        >
          <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="2.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <path
          d="M66,110 C94.1811013,110 117.411895,88.8052149 120.621524,61.4865026 C120.871469,59.3590999 121,57.1945599 121,55 C121,24.6243388 96.3756612,0 66,0 C35.6243388,0 11,24.6243388 11,55 C11,85.3756612 35.6243388,110 66,110 Z"
          id="path-70"
        ></path>
        <filter
          x="-7.7%"
          y="-5.9%"
          width="115.5%"
          height="115.5%"
          filterUnits="objectBoundingBox"
          id="filter-71"
        >
          <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="2.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <rect id="path-72" x="0" y="87" width="131" height="40"></rect>
        <filter
          x="-6.1%"
          y="-17.5%"
          width="112.2%"
          height="140.0%"
          filterUnits="objectBoundingBox"
          id="filter-73"
        >
          <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="2.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <circle id="path-74" cx="66" cy="55" r="55"></circle>
        <filter
          x="-7.7%"
          y="-5.9%"
          width="115.5%"
          height="115.5%"
          filterUnits="objectBoundingBox"
          id="filter-75"
        >
          <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="2.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <rect id="path-76" x="0" y="89" width="131" height="31"></rect>
        <filter
          x="-6.1%"
          y="-22.6%"
          width="112.2%"
          height="151.6%"
          filterUnits="objectBoundingBox"
          id="filter-77"
        >
          <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="2.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <filter
          x="-5.5%"
          y="-5.2%"
          width="110.9%"
          height="110.3%"
          filterUnits="objectBoundingBox"
          id="filter-78"
        >
          <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="1"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
          ></feColorMatrix>
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
        <circle id="path-79" cx="55" cy="55" r="55"></circle>
        <filter
          x="-4.5%"
          y="-3.6%"
          width="109.1%"
          height="109.1%"
          filterUnits="objectBoundingBox"
          id="filter-80"
        >
          <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="1.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <rect id="path-81" x="0" y="89" width="110" height="31"></rect>
        <filter
          x="-4.5%"
          y="-12.9%"
          width="109.1%"
          height="132.3%"
          filterUnits="objectBoundingBox"
          id="filter-82"
        >
          <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="1.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <circle id="path-83" cx="56" cy="55" r="55"></circle>
        <filter
          x="-6.4%"
          y="-4.5%"
          width="112.7%"
          height="112.7%"
          filterUnits="objectBoundingBox"
          id="filter-84"
        >
          <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="2"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <rect id="path-85" x="0" y="89" width="110" height="38"></rect>
        <filter
          x="-5.9%"
          y="-14.5%"
          width="111.8%"
          height="134.2%"
          filterUnits="objectBoundingBox"
          id="filter-86"
        >
          <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="2"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <circle id="path-87" cx="55" cy="55" r="55"></circle>
        <filter
          x="-4.5%"
          y="-3.6%"
          width="109.1%"
          height="109.1%"
          filterUnits="objectBoundingBox"
          id="filter-88"
        >
          <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="1.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <rect id="path-89" x="0" y="89" width="110" height="31"></rect>
        <filter
          x="-4.5%"
          y="-12.9%"
          width="109.1%"
          height="132.3%"
          filterUnits="objectBoundingBox"
          id="filter-90"
        >
          <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="1.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <circle id="path-91" cx="55" cy="55" r="55"></circle>
        <filter
          x="-1.8%"
          y="-0.9%"
          width="103.6%"
          height="103.6%"
          filterUnits="objectBoundingBox"
          id="filter-92"
        >
          <feGaussianBlur stdDeviation="0" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <filter
          x="-3.2%"
          y="-2.3%"
          width="106.4%"
          height="106.4%"
          filterUnits="objectBoundingBox"
          id="filter-93"
        >
          <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="1"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <rect id="path-94" x="0" y="89" width="110" height="31"></rect>
        <filter
          x="-5.5%"
          y="-16.1%"
          width="110.9%"
          height="138.7%"
          filterUnits="objectBoundingBox"
          id="filter-95"
        >
          <feGaussianBlur stdDeviation="1" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <filter
          x="-7.3%"
          y="-22.6%"
          width="114.5%"
          height="151.6%"
          filterUnits="objectBoundingBox"
          id="filter-96"
        >
          <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur
            stdDeviation="1.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          ></feGaussianBlur>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0"
            type="matrix"
            in="shadowBlurOuter1"
          ></feColorMatrix>
        </filter>
        <filter
          x="0.0%"
          y="0.0%"
          width="100.0%"
          height="100.0%"
          filterUnits="objectBoundingBox"
          id="filter-97"
        >
          <feGaussianBlur stdDeviation="0" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <filter
          x="0.0%"
          y="0.0%"
          width="100.0%"
          height="100.0%"
          filterUnits="objectBoundingBox"
          id="filter-98"
        >
          <feGaussianBlur stdDeviation="0" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <filter
          x="0.0%"
          y="0.0%"
          width="100.0%"
          height="100.0%"
          filterUnits="objectBoundingBox"
          id="filter-99"
        >
          <feGaussianBlur stdDeviation="0" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <filter
          x="-2.7%"
          y="-2.7%"
          width="105.4%"
          height="105.4%"
          filterUnits="objectBoundingBox"
          id="filter-100"
        >
          <feGaussianBlur stdDeviation="2" in="SourceGraphic"></feGaussianBlur>
        </filter>
      </defs>
      <g id="Platform-Framework" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="Circle-connectors"
          transform="translate(446.000000, 56.000000)"
          style={{ display: "none" }}
        >
          <circle id="Oval" stroke="#63BBD4" cx="341" cy="341" r="340.5"></circle>
          <circle id="Oval" stroke="#FF9B00" cx="341.5" cy="341.5" r="293"></circle>
          <circle id="Oval" stroke="#28A396" cx="341" cy="341" r="159.5"></circle>
        </g>
        <g
          id="Connectors"
          transform="translate(445.000000, 77.000000)"
          strokeDasharray="8"
          strokeLinecap="square"
        >
          <g id="Line-8" filter="url(#filter-2)">
            <path
              style={{ stroke: "#28a396", strokeWidth: "3" }}
              d="M232.5,0.5 L337.5,314.5"
              id="path-1"
              data-path-line-man
              data-path-line-tenant
            ></path>
          </g>
          <g id="Line-8" filter="url(#filter-5)">
            <path
              style={{ stroke: "#28a396", strokeWidth: "3" }}
              d="M87.5,72.5 L335.5,297.5"
              id="path-4"
              data-path-line-man
              data-path-line-sales
            ></path>
          </g>
          <g id="Line-8-Copy" filter="url(#filter-8)">
            <path
              style={{ stroke: "#28a396", strokeWidth: "3" }}
              d="M0.5,210.5 L340.5,314.5"
              id="path-7"
              data-path-line-man
              data-path-line-intranet
            ></path>
          </g>
          <g id="Line-8-Copy-2" filter="url(#filter-11)">
            <path
              style={{ stroke: "#28a396", strokeWidth: "3" }}
              d="M14.5,368.5 L337.5,307.5"
              id="path-10"
              data-path-line-man
              data-path-line-cms
            ></path>
          </g>
          <g id="Line-8-Copy-3" filter="url(#filter-14)">
            <path
              style={{ stroke: "#28a396", strokeWidth: "3" }}
              d="M75.5,512.5 L334.5,294.5"
              id="path-13"
              data-path-line-man
              data-path-line-analytic
            ></path>
          </g>
          <g id="Line-8-Copy-4" filter="url(#filter-17)">
            <path
              style={{ stroke: "#ff9b00", strokeWidth: "3" }}
              d="M192.5,604.5 L334.5,297.5"
              id="path-16"
              data-path-line-rev
              data-path-line-reservation
            ></path>
          </g>
          <g id="Line-8-Copy-6" filter="url(#filter-20)">
            <path
              style={{ stroke: "#ff9b00", strokeWidth: "3" }}
              d="M340.5,636.5 L335.5,297.5"
              id="path-19"
              data-path-line-rev
              data-path-line-specialty
            ></path>
          </g>
          <g id="Line-8-Copy-6" filter="url(#filter-23)">
            <path
              style={{ stroke: "#ff9b00", strokeWidth: "3" }}
              d="M471.5,604.5 L335.5,297.5"
              id="path-22"
              data-path-line-rev
              data-path-line-media
            ></path>
          </g>
          <g id="Line-8-Copy-7" filter="url(#filter-26)">
            <path
              style={{ stroke: "#63bbd4", strokeWidth: "3" }}
              d="M585.5,512.5 L337.5,307.5"
              id="path-25"
              data-path-line
              data-path-line-bigdata
            ></path>
          </g>
          <g id="Line-8-Copy-8" filter="url(#filter-29)">
            <path
              style={{ stroke: "#63bbd4", strokeWidth: "3" }}
              d="M659.5,364.5 L335.5,307.5"
              id="path-28"
              data-path-line
              data-path-line-loyalty
            ></path>
          </g>
          <g id="Line-8-Copy-9" filter="url(#filter-32)">
            <path
              style={{ stroke: "#63bbd4", strokeWidth: "3" }}
              d="M676.5,220.5 L334.5,307.5"
              id="path-31"
              data-path-line
              data-path-line-mobile
            ></path>
          </g>
          <g id="Line-8-Copy-10" filter="url(#filter-35)">
            <path
              style={{ stroke: "#63bbd4", strokeWidth: "3" }}
              d="M609.5,64.5 L337.5,307.5"
              id="path-34"
              data-path-line
              data-path-line-websites
            ></path>
          </g>
          <g id="Line-8-Copy-11" filter="url(#filter-38)">
            <path
              style={{ stroke: "#63bbd4", strokeWidth: "3" }}
              d="M438.5,0.5 L340.5,314.5"
              id="path-37"
              data-path-line
              data-path-line-wayfinding
            ></path>
          </g>
        </g>

        {/* <!--<g id="Pulses" transform="translate(421.000000, 31.000000)" strokeWidth="58">
          <circle id="pulse_blue" stroke="#000" fill="url(#radialGradient-40)" filter="url(#filter-41)" cx="365.5" cy="365.5" r="370"></circle>
          <circle id="pulse_orange" stroke="#5d5d5d" fill="url(#radialGradient-42)" filter="url(#filter-43)" cx="365.587243" cy="365.587243" r="370"></circle>
          <circle id="pulse_green" stroke="#28A396" fill="url(#radialGradient-44)" filter="url(#filter-45)" cx="366" cy="366" r="370"></circle>

        </g>--> */}
        {/* <g transform="translate(0, -22)">
          <path
            id="pulse_bluee"
            style={{
              display: "inline",
              fill: "url(#radialGradient-1)",
              fillOpacity: "0.5",
              fillRule: "evenodd",
              stroke: "none",
              strokeWidth: "1",
            }}
            d="M 783.5,178 C 651.78009,178 545,284.78009 545,416.5 545,548.21991 651.78009,655 783.5,655 915.21991,655 1022,548.21991 1022,416.5 1022,284.78009 915.21991,178 783.5,178 Z"
          />
          <path
            id="pulse_orangee"
            style={{
              fill: "url(#radialGradient4417)",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "none",
              strokeWidth: 1,
            }}
            d="m 784,230 c -103.27725,0 -187,83.72275 -187,187 0,103.27725 83.72275,187 187,187 103.27725,0 187,-83.72275 187,-187 0,-103.27725 -83.72275,-187 -187,-187 z"
          />
        </g> */}

        <g id="Monetize" transform="translate(574.000000, 620.000000)">
          <g id="Calendar-Reservations">
            <g data-icon-monetize data-icon-reservation>
              <g id="Oval">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-47)"
                  xlinkHref="#path-46"
                ></use>
                <circle
                  stroke="#FF9B00"
                  strokeWidth="1"
                  strokeLinejoin="square"
                  fill="#ffffff"
                  fillRule="evenodd"
                  cx="66"
                  cy="55"
                  r="53.5"
                ></circle>
              </g>
              <g id="Icon" transform="translate(34.000000, 27.000000)" stroke="#FF9B00">
                <line x1="17" y1="5" x2="38" y2="5" id="Stroke-1" strokeWidth="3"></line>
                <polyline
                  id="Stroke-2"
                  strokeWidth="3"
                  points="30 48 0 48 0 5 6.39609917 5"
                ></polyline>
                <polyline id="Stroke-4" strokeWidth="3" points="48 5 53 5 53 19"></polyline>
                <g id="Group-23">
                  <path
                    d="M11.4375065,11.8754529 L11.4375065,11.8754529 C9.99060073,11.8754529 8.81747221,10.7061007 8.81747221,9.26385248 L8.81747221,2.61160044 C8.81747221,1.16935223 9.99060073,0 11.4375065,0 C12.8844123,0 14.0575408,1.16935223 14.0575408,2.61160044 L14.0575408,9.26385248 C14.0575408,10.7061007 12.8844123,11.8754529 11.4375065,11.8754529 Z"
                    id="Stroke-5"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M42.875743,11.8754529 L42.875743,11.8754529 C41.4283643,11.8754529 40.2557087,10.7061007 40.2557087,9.26385248 L40.2557087,2.61160044 C40.2557087,1.16935223 41.4283643,0 42.875743,0 C44.3226488,0 45.4957773,1.16935223 45.4957773,2.61160044 L45.4957773,9.26385248 C45.4957773,10.7061007 44.3226488,11.8754529 42.875743,11.8754529 Z"
                    id="Stroke-7"
                    strokeWidth="3"
                  ></path>
                  <line
                    x1="0"
                    y1="16.5228857"
                    x2="54.3133441"
                    y2="16.5228857"
                    id="Stroke-9"
                    strokeWidth="3"
                  ></line>
                  <path
                    d="M11.8761648,23.1206056 L5.05963093,23.1206056 L5.05963093,29.9151972 C5.05963093,29.9151972 5.05963093,29.9151972 5.05963093,29.9151972 L11.8761648,29.9151972 L11.8761648,23.1206056 C11.8761648,23.1206056 11.8761648,23.1206056 11.8761648,23.1206056 Z"
                    id="Stroke-11"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M25.2872792,23.1206056 L18.4707453,23.1206056 L18.4707453,29.9151972 C18.4707453,29.9151972 25.2872792,29.9151972 25.2872792,29.9151972 L25.2872792,23.1206056 C25.2872792,23.1206056 25.2872792,23.1206056 25.2872792,23.1206056 Z"
                    id="Stroke-13"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M11.8761648,36.146605 L5.05963093,36.146605 L5.05963093,42.9411966 L5.05963093,42.9411966 L11.8761648,42.9411966 L11.8761648,42.9411966 L11.8761648,36.146605 C11.8761648,36.146605 11.8761648,36.146605 11.8761648,36.146605 Z"
                    id="Stroke-15"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M25.2872792,36.146605 L18.4707453,36.146605 L18.4707453,42.9411966 L18.4707453,42.9411966 L25.2872792,42.9411966 L25.2872792,42.9411966 L25.2872792,36.146605 C25.2872792,36.146605 25.2872792,36.146605 25.2872792,36.146605 Z"
                    id="Stroke-17"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M64,39.1596312 C64,48.4602469 56.4358981,56 47.1052472,56 C37.7745963,56 30.2104944,48.4602469 30.2104944,39.1596312 C30.2104944,29.8590155 37.7745963,22.3192624 47.1052472,22.3192624 C56.4358981,22.3192624 64,29.8590155 64,39.1596312 Z"
                    id="Stroke-19"
                    strokeWidth="3"
                  ></path>
                  <polygon
                    id="Stroke-21"
                    strokeWidth="3"
                    points="45.1731078 47.807606 56.6121747 36.3205232 53.2067448 32.9006039 45.4572877 40.682617 40.9141927 36.1206822 37.2245829 39.8257519"
                  ></polygon>
                </g>
              </g>
            </g>
            <g data-text-monetize>
              <g id="Rectangle">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-49)"
                  xlinkHref="#path-48"
                ></use>
                <use fill="#ffffff" fillRule="evenodd" xlinkHref="#path-48"></use>
              </g>
              <text
                id="Reservations"
                fontFamily="Roboto-Bold, Roboto"
                fontSize="20"
                fontWeight="medium"
                // lineSpacing="14"
                letterSpacing="1"
                fill="#FF9B00"
              >
                <tspan x="1" y="115">
                  Reservations
                </tspan>
              </text>
            </g>
          </g>
          <g id="Specialty-LEasing" transform="translate(152.000000, 40.000000)">
            <g data-icon-monetize data-icon-specialty>
              <g id="Oval">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-51)"
                  xlinkHref="#path-50"
                ></use>
                <circle
                  stroke="#FF9B00"
                  strokeWidth="1"
                  strokeLinejoin="square"
                  fill="#ffffff"
                  fillRule="evenodd"
                  cx="55"
                  cy="55"
                  r="53.5"
                ></circle>
              </g>
              <g
                id="Icon"
                transform="translate(15.000000, 26.787402)"
                stroke="#FF9B00"
                strokeWidth="3"
              >
                <line
                  x1="33.5"
                  y1="24.3070866"
                  x2="44.5"
                  y2="24.3070866"
                  id="Line-3"
                  strokeLinecap="round"
                ></line>
                <line
                  x1="36.2916667"
                  y1="31.2519685"
                  x2="42.7083333"
                  y2="31.2519685"
                  id="Line-3-Copy"
                  strokeLinecap="round"
                ></line>
                <line
                  x1="36.2916667"
                  y1="18.3543307"
                  x2="42.7083333"
                  y2="18.3543307"
                  id="Line-3-Copy-2"
                  strokeLinecap="round"
                ></line>
                <ellipse id="Oval" cx="25" cy="24.8031496" rx="23.5" ry="23.3031496"></ellipse>
                <path
                  d="M36,8.92913386 C32.2694209,13.0482738 30,18.4938403 30,24.4647502 C30,30.2845246 32.1559879,35.605214 35.7195366,39.6850394 M44.5039684,45.5179707 C47.6781902,46.8690163 51.2082526,47.6220472 54.9274535,47.6220472 C68.7746386,47.6220472 80,37.1835838 80,24.3070866 C80,11.4305894 68.7746386,0.992125984 54.9274535,0.992125984 C51.0102294,0.992125984 47.3028207,1.82747969 44,3.31706809"
                  id="Shape"
                  strokeLinecap="round"
                ></path>
              </g>
            </g>
            <g data-text-monetize>
              <g id="Rectangle">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-53)"
                  xlinkHref="#path-52"
                ></use>
                <use fill="#ffffff" fillRule="evenodd" xlinkHref="#path-52"></use>
              </g>
              <text
                id="Specialty-Leasing"
                fontFamily="Roboto-Bold, Roboto"
                fontSize="20"
                fontWeight="medium"
                // lineSpacing="17"
                letterSpacing="1"
                fill="#FF9B00"
              >
                <tspan x="8" y="107">
                  Specialty
                </tspan>
                <tspan x="17" y="125">
                  Leasing
                </tspan>
              </text>
            </g>
          </g>
          <g id="Media-Sales" transform="translate(282.000000, 11.000000)">
            <g data-icon-monetize data-icon-mediasales>
              <g id="Oval">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-55)"
                  xlinkHref="#path-54"
                ></use>
                <circle
                  stroke="#FF9B00"
                  strokeWidth="1"
                  strokeLinejoin="square"
                  fill="#ffffff"
                  fillRule="evenodd"
                  cx="66"
                  cy="55"
                  r="53.5"
                ></circle>
              </g>
              <g
                id="Icon"
                transform="translate(37.000000, 22.000000)"
                stroke="#FF9B00"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              >
                <path
                  d="M45,42 L45,52.7972603 C45,55.109589 43.3176839,57 41.2596505,57 L2,57"
                  id="Stroke-116"
                ></path>
                <path
                  d="M0,49 L0,4.37037037 C0,1.96581197 2.02464789,0 4.50117371,0 L40.4988263,0 C42.9724178,0 45,1.96581197 45,4.37037037 L45,16"
                  id="Stroke-118"
                ></path>
                <polygon id="Stroke-120" points="30 12 16 18 16 6"></polygon>
                <line x1="8" y1="26.5" x2="20" y2="26.5" id="Stroke-122"></line>
                <line x1="8" y1="41.5" x2="20" y2="41.5" id="Stroke-124"></line>
                <line x1="9" y1="33.5" x2="18" y2="33.5" id="Stroke-126"></line>
                <line
                  x1="55.9643233"
                  y1="17.1958275"
                  x2="55.9643233"
                  y2="39.0458275"
                  id="Stroke-128"
                ></line>
                <path
                  d="M56,18 L56,38 L54.6925752,37.0918001 C50.4469217,34.1417837 44.942524,32.2273767 39,31.6360666 L39,31.6360666 L39,24.3639334 L39,24.3639334 C44.942524,23.7726233 50.4469217,21.8582163 54.6925752,18.9081999 L56,18 Z"
                  id="Stroke-130"
                ></path>
                <path
                  d="M30.598511,23 L27.7992555,23 C26.2507312,23 25,23.9841897 25,25.201581 L25,31.798419 C25,33.0158103 26.2507312,34 27.7992555,34 L39,34 L39,23 L36.1970221,23"
                  id="Stroke-132"
                ></path>
                <path
                  d="M27,34 L30.2875301,41.5966222 C30.6465132,42.430872 31.7536929,43 33.0082446,43 L33.1102714,43 C34.9051872,43 36.2504294,41.8652789 35.8990038,40.6457188 C35.4191,38.9842891 35.7516317,37.2592302 36.8474751,35.7427337 L38,34.1484682"
                  id="Stroke-134"
                ></path>
                <line x1="30.372" y1="28.5" x2="32.628" y2="28.5" id="Stroke-136"></line>
              </g>
            </g>
            <g data-text-monetize>
              <g id="Rectangle">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-57)"
                  xlinkHref="#path-56"
                ></use>
                <use fill="#ffffff" fillRule="evenodd" xlinkHref="#path-56"></use>
              </g>
              <text
                fontFamily="Roboto-Bold, Roboto"
                fontSize="20"
                fontWeight="medium"
                // lineSpacing="14"
                letterSpacing="1.28571429"
                fill="#FF9B00"
              >
                <tspan x="4" y="112">
                  Media Sales
                </tspan>
              </text>
            </g>
          </g>
        </g>
        <g id="Connect" transform="translate(819.000000, 25.000000)">
          
          <g id="Big-Data" transform="translate(151.000000, 506.000000)">
            <g data-icon-consumer data-icon-bigdata>
              <g id="Oval">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-59)"
                  xlinkHref="#path-58"
                  className="consumer-line-circle"
                ></use>
                <circle
                  stroke="#63BBD4"
                  strokeWidth="1"
                  strokeLinejoin="square"
                  fill="#ffffff"
                  fillRule="evenodd"
                  cx="66"
                  cy="55"
                  r="53.5"
                ></circle>
              </g>
              <g
                id="Icon"
                transform="translate(35.000000, 18.000000)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              >
                <path
                  d="M16.3425814,9 C15.3510253,10.7578005 14.6851628,12.7177837 14.4221954,14.8038338 L14.3015682,14.8038338 C6.39565742,14.8038338 0,21.1071778 0,28.9019169 C0,36.6966559 6.39565742,43 14.3015682,43 L20,43"
                  id="Stroke-57"
                  stroke="#63BBD4"
                ></path>
                <path
                  d="M41.904904,43 L47.6304307,43 C55.5739325,43 62,36.5918344 62,28.6674727 C62,22.8928692 58.5724408,17.9162636 53.6444154,15.6649421 C53.7486481,15.2345068 53.7898564,14.7847261 53.7898564,14.3325273 C53.7898564,10.9349904 51.0385978,8.19036104 47.6304307,8.19036104 C46.934738,8.19036104 46.2366213,8.313688 45.6209211,8.53857834 C42.8478464,3.441064 37.4301697,0 31.2101436,0 C28.2213313,0 25.4167444,0.7955798 23,2.18844899"
                  id="Stroke-59"
                  stroke="#63BBD4"
                ></path>
                <path
                  d="M45,31 C45,32.5401575 43.6129903,33.9409449 41.2915226,35.0015748 C38.6398144,36.2393701 34.7894559,37 30.5012231,37 C26.2129903,37 22.3601856,36.2393701 19.7084774,35.0015748 C17.3894559,33.9409449 16,32.5401575 16,31 C16,27.6787402 22.4849431,25 30.5012231,25 C38.5175032,25 45,27.6787402 45,31 Z"
                  id="Stroke-61"
                  stroke="#63BBD4"
                ></path>
                <path
                  d="M20,35.153 C22.5800748,36.203 26.3287997,36.847 30.5011901,36.847 C34.6712003,36.847 38.4199252,36.203 41,35.153"
                  id="Stroke-63"
                  stroke="#FFFFFF"
                ></path>
                <path
                  d="M45,31 L45,39.0003374 C45,42.3214105 38.5175032,45 30.5012231,45 C22.4849431,45 16,42.3214105 16,39.0003374 L16,31 C16,32.5400709 17.3894559,33.9407795 19.7084774,35.0013498 C22.3601856,36.2390754 26.2129903,36.9996626 30.5012231,36.9996626 C34.7894559,36.9996626 38.6398144,36.2390754 41.2915226,35.0013498 C43.6129903,33.9407795 45,32.5400709 45,31 Z"
                  id="Stroke-65"
                  stroke="#63BBD4"
                ></path>
                <path
                  d="M45,38 L45,46.5717901 C45,50.1300827 38.5175032,53 30.5012231,53 C22.4849431,53 16,50.1300827 16,46.5717901 L16,38 C16,39.6500759 17.3894559,41.1508352 19.7084774,42.2871605 C22.3601856,43.6132951 26.2129903,44.4282099 30.5012231,44.4282099 C34.7894559,44.4282099 38.6398144,43.6132951 41.2915226,42.2871605 C43.6129903,41.1508352 45,39.6500759 45,38 Z"
                  id="Stroke-65-Copy"
                  stroke="#63BBD4"
                  fill="#ffffff"
                ></path>
                <path
                  d="M45,47 C45,48.5401575 43.6105441,49.9385827 41.2915226,50.9992126 C38.6398144,52.2393701 34.7870097,53 30.4987769,53 C26.2129903,53 22.3601856,52.2393701 19.7084774,50.9992126 C17.3870097,49.9385827 16,48.5401575 16,47"
                  id="Stroke-67"
                  stroke="#FFFFFF"
                ></path>
                <path
                  d="M20,51.153 C22.5800748,52.203 26.3287997,52.847 30.5011901,52.847 C34.6712003,52.847 38.4199252,52.203 41,51.153"
                  id="Stroke-69"
                  stroke="#FFFFFF"
                ></path>
                <path
                  d="M45,47 L45,55.0003374 C45,58.3214105 38.5175032,61 30.5012231,61 C22.4849431,61 16,58.3214105 16,55.0003374 L16,47 C16,48.5400709 17.3894559,49.9407795 19.7084774,50.9989877 C22.3601856,52.2390754 26.2129903,52.9996626 30.5012231,52.9996626 C34.7894559,52.9996626 38.6398144,52.2390754 41.2915226,50.9989877 C43.6129903,49.9407795 45,48.5400709 45,47 Z"
                  id="Stroke-71"
                  stroke="#63BBD4"
                ></path>
              </g>
            </g>
            <g data-text-consumer>
              <g id="Rectangle">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-61)"
                  xlinkHref="#path-60"
                ></use>
                <use fill="#ffffff" fillRule="evenodd" xlinkHref="#path-60"></use>
              </g>
              <text
                fontFamily="Roboto-Bold, Roboto"
                fontSize="20"
                fontWeight="medium"
                letterSpacing="1"
                fill="#63BBD4"
              >
                <tspan x="24" y="110">
                  Big Data
                </tspan>
              </text>
            </g>
          </g>
          <g id="Loyalty" transform="translate(235.000000, 359.000000)">
            <g data-icon-consumer data-icon-loyalty>
              <g id="Oval">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-63)"
                  xlinkHref="#path-62"
                ></use>
                <circle
                  stroke="#63BBD4"
                  strokeWidth="1"
                  strokeLinejoin="square"
                  fill="#ffffff"
                  fillRule="evenodd"
                  cx="57"
                  cy="55"
                  r="53.5"
                ></circle>
              </g>
              <g
                id="Icon"
                transform="translate(26.000000, 18.000000)"
                stroke="#63BBD4"
                strokeWidth="3"
              >
                <path
                  d="M39.7247145,38.9999498 C39.7247145,34.2144642 35.8181116,30.3328479 30.9961753,30.3328479 C26.1767675,30.3328479 22.2676362,34.2144642 22.2676362,38.9999498 C22.2676362,43.7854353 26.1767675,47.6670516 30.9961753,47.6670516 C35.8181116,47.6670516 39.7247145,43.7854353 39.7247145,38.9999498 Z"
                  id="Stroke-42"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M22.2683947,65 L15.7219904,65 L15.7219904,62.8332245 C15.7219904,54.4573694 22.561706,47.6657963 30.9969339,47.6657963 C36.0606963,47.6657963 40.5494782,50.1133002 43.3287677,53.8817815 C45.1792255,56.3908457 46.2718774,59.4854897 46.2718774,62.8332245 L46.2718774,65 L30.9969339,65"
                  id="Stroke-44"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <polygon
                  id="Fill-46"
                  points="30.9964282 0 33.8334562 5.70693005 40.1725199 6.6208423 35.5857383 11.0623554 36.6679558 17.3342037 30.9964282 14.3715212 25.3249006 17.3342037 26.407118 11.0623554 21.8203365 6.6208423 28.1594001 5.70693005"
                ></polygon>
                <polygon
                  id="Fill-48"
                  points="9.17609171 15.166675 12.0131198 20.8736051 18.3521834 21.7875173 13.7654018 26.2290304 14.8476193 32.5008788 9.17609171 29.5381962 3.5045641 32.5008788 4.58678158 26.2290304 0 21.7875173 6.33906363 20.8736051"
                ></polygon>
                <polygon
                  id="Fill-50"
                  points="52.8167646 15.166675 55.6537927 20.8736051 61.9928563 21.7875173 57.4060748 26.2290304 58.4882922 32.5008788 52.8167646 29.5381962 47.145237 32.5008788 48.2274545 26.2290304 43.6406729 21.7875173 49.9797366 20.8736051"
                ></polygon>
              </g>
            </g>

            <g data-text-consumer>
              <g id="Rectangle">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-65)"
                  xlinkHref="#path-64"
                ></use>
                <use fill="#ffffff" fillRule="evenodd" xlinkHref="#path-64"></use>
              </g>
              <text
                fontFamily="Roboto-Bold, Roboto"
                fontSize="20"
                fontWeight="medium"
                letterSpacing="1"
                fill="#63BBD4"
              >
                <tspan x="24" y="110">
                  Loyalty
                </tspan>
              </text>
            </g>
          </g>
          <g id="Websites" transform="translate(169.000000, 60.000000)">
            <g data-icon-consumer data-icon-websites>
              <g id="Oval">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-67)"
                  xlinkHref="#path-66"
                ></use>
                <circle
                  stroke="#63BBD4"
                  strokeWidth="1"
                  strokeLinejoin="square"
                  fill="#ffffff"
                  fillRule="evenodd"
                  cx="66"
                  cy="55"
                  r="53.5"
                ></circle>
              </g>
              <g id="Icon" transform="translate(36.000000, 26.000000)">
                <path
                  d="M55.4384563,47.7066023 L3.95882668,47.7066023 C1.77105404,47.7066023 0,45.9264097 0,43.7299849 L0,39.7555019 L59.3994091,39.7555019 L59.3994091,43.7299849 C59.3994091,45.9264097 57.6262289,47.7066023 55.4384563,47.7066023 Z"
                  id="Stroke-35"
                  stroke="#63BBD4"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M1.97920073,39.7555019 L1.97920073,3.97448293 C1.97920073,1.78019268 3.75238088,0 5.94015352,0 L53.4588303,0 C55.646603,0 57.417657,1.78019268 57.417657,3.97448293 L57.417657,31.8044016"
                  id="Stroke-36"
                  stroke="#63BBD4"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <text
                  id="&lt;/&gt;"
                  fontFamily="Roboto-Bold, Roboto"
                  fontSize="28"
                  fontWeight="medium"
                  fill="#63BBD4"
                >
                  <tspan x="17.0321043" y="24.8533001">
                    &lt;/&gt;
                  </tspan>
                </text>
              </g>
            </g>

            <g data-text-consumer>
              <g id="Rectangle">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-69)"
                  xlinkHref="#path-68"
                ></use>
                <use fill="#ffffff" fillRule="evenodd" xlinkHref="#path-68"></use>
              </g>
              <text
                fontFamily="Roboto-Bold, Roboto"
                fontSize="20"
                fontWeight="medium"
                letterSpacing="1.28571429"
                fill="#63BBD4"
                data-text-consumer
              >
                <tspan x="20" y="112">
                  Websites
                </tspan>
              </text>
            </g>
          </g>
          <g id="Wayfinding">
            <g data-icon-consumer data-icon-wayfinding>
              <g id="Oval">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-71)"
                  xlinkHref="#path-70"
                ></use>
                <path
                  stroke="#63BBD4"
                  strokeWidth="1"
                  d="M66,1.5 C80.7736171,1.5 94.1486171,7.48819147 103.830213,17.1697872 C113.511809,26.8513829 119.5,40.2263829 119.5,55 C119.5,57.1353417 119.374971,59.2414761 119.131771,61.311474 C117.5619,74.6734079 111.067059,86.5285809 101.513011,95.0142512 C92.0664919,103.404418 79.6282836,108.5 66,108.5 C51.2263829,108.5 37.8513829,102.511809 28.1697872,92.8302128 C18.4881915,83.1486171 12.5,69.7736171 12.5,55 C12.5,40.2263829 18.4881915,26.8513829 28.1697872,17.1697872 C37.8513829,7.48819147 51.2263829,1.5 66,1.5 Z"
                  strokeLinejoin="square"
                  fill="#ffffff"
                  fillRule="evenodd"
                ></path>
              </g>
              <g id="Icon" transform="translate(50.000000, 14.000000)">
                <path
                  d="M29.999283,54.8731762 C29.999283,55.7728301 29.999522,58.0496726 30,61.7037037 C30,63.7908202 30,65.8895857 30,68 L0,68 C0,66.3084077 0,64.4190533 0,62.3319367 L0,5.66806329 C0,2.53738848 0.889037227,0 1.98599445,0 L27.8039223,0 C28.9008795,0 29.7899167,2.53738848 29.7899167,5.66806329 L30,50 L6,50"
                  id="Stroke-23"
                  stroke="#63BBD4"
                  strokeWidth="3"
                  strokeLinecap="round"
                ></path>
                <text
                  id="i"
                  fontFamily="Roboto-Bold, Roboto"
                  fontSize="28"
                  fontWeight="medium"
                  letterSpacing="1.55555556"
                  fill="#63BBD4"
                >
                  <tspan x="12" y="39">
                    i
                  </tspan>
                </text>
              </g>
            </g>

            <g data-text-consumer data-icon-wayfinding>
              <g id="Rectangle-Copy-3">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-73)"
                  xlinkHref="#path-72"
                ></use>
                <use fill="#ffffff" fillRule="evenodd" xlinkHref="#path-72"></use>
              </g>
              <text
                fontFamily="Roboto-Bold, Roboto"
                fontSize="20"
                fontWeight="medium"
                // lineSpacing="14"
                letterSpacing="1"
                fill="#63BBD4"
              >
                <tspan x="11" y="115">
                  Wayfinding
                </tspan>
              </text>
            </g>
          </g>
          <g id="Mobile-Apps" transform="translate(235.000000, 212.000000)">
            <g data-icon-consumer data-icon-mobile>
              <g id="Oval">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-75)"
                  xlinkHref="#path-74"
                ></use>
                <circle
                  stroke="#63BBD4"
                  strokeWidth="1"
                  strokeLinejoin="square"
                  fill="#ffffff"
                  fillRule="evenodd"
                  cx="66"
                  cy="55"
                  r="53.5"
                ></circle>
              </g>
              <g
                id="Icon"
                transform="translate(44.000000, 16.000000)"
                stroke="#63BBD4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              >
                <path
                  d="M44,52.798801 L44,57.1992007 C44,62.0612226 40.0610437,66 35.1988009,66 L8.79820139,66 C3.93595858,66 0,62.0612226 0,57.1992007 L0,8.80079935 C0,3.93877736 3.93595858,0 8.79820139,0 L35.1988009,0 C40.0610437,0 44,3.93877736 44,8.80079935 L44,43.9980016"
                  id="Stroke-4"
                ></path>
                <path
                  d="M30.070285,9 L12.929715,9 C10.2073351,9 8,6.79291553 8,4.07084469 L8,0 L35,0 L35,4.07084469 C35,6.79291553 32.7926649,9 30.070285,9 Z"
                  id="Stroke-6"
                ></path>
                <path
                  d="M25.983649,44 L16.016351,44 C13.8250443,44 11.9694781,42.2228927 11.6607167,39.8302511 L10,27 L32,27 L30.3392833,39.8302511 C30.0305219,42.2228927 28.171958,44 25.983649,44 Z"
                  id="Stroke-8"
                ></path>
                <line x1="13" y1="27" x2="17" y2="20" id="Stroke-10"></line>
                <line x1="30" y1="27" x2="26" y2="20" id="Stroke-12"></line>
                <line x1="9" y1="57.5" x2="36" y2="57.5" id="Stroke-14"></line>
                <line x1="8" y1="26.5" x2="35" y2="26.5" id="Stroke-16"></line>
              </g>
            </g>
            <g data-text-consumer>
              <g id="Rectangle">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-77)"
                  xlinkHref="#path-76"
                ></use>
                <use fill="#ffffff" fillRule="evenodd" xlinkHref="#path-76"></use>
              </g>
              <text
                fontFamily="Roboto-Bold, Roboto"
                fontSize="20"
                fontWeight="medium"
                // lineSpacing="14"
                letterSpacing="1"
                fill="#63BBD4"
              >
                <tspan x="5" y="112">
                  Mobile Apps
                </tspan>
              </text>
            </g>
          </g>
        </g>
        <g id="Manage" transform="translate(55.000000, 25.000000)">
          <g
            id="Tenant-Engagement"
            filter="url(#filter-78)"
            transform="translate(564.000000, 0.000000)"
          >
            <g data-icon-manage data-icon-tenant>
              <circle
                id="Oval"
                stroke="#28A396"
                strokeWidth="1"
                fill="#ffffff"
                cx="60"
                cy="55"
                r="53.5"
              ></circle>
              <g
                id="Icon"
                transform="translate(22.000000, 12.000000)"
                stroke="#28A396"
                strokeLinecap="round"
                strokeWidth="3"
              >
                <path
                  d="M20,43 C20,39.1349942 16.8670336,36 13,36 C9.13499421,36 6,39.1349942 6,43 C6,46.8650058 9.13499421,50 13,50 C16.8670336,50 20,46.8650058 20,43 Z"
                  id="Stroke-42"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M71,42 C71,38.1349942 67.8670336,35 64,35 C60.1349942,35 57,38.1349942 57,42 C57,45.8650058 60.1349942,49 64,49 C67.8670336,49 71,45.8650058 71,42 Z"
                  id="Stroke-42-Copy"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M5.35714286,65 L0,65 L0,63.25 C0,56.485226 5.59716934,51 12.5,51 C16.6438471,51 20.3171683,52.9767308 22.5915544,56.0203514 C24.1058462,58.0468014 25,60.5461961 25,63.25 L25,65 L12.5,65"
                  id="Stroke-44"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M56.3571429,64 L51,64 L51,62.25 C51,55.485226 56.5971693,50 63.5,50 C67.6438471,50 71.3171683,51.9767308 73.5915544,55.0203514 C75.1058462,57.0468014 76,59.5461961 76,62.25 L76,64 L63.5,64"
                  id="Stroke-44-Copy"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M45,6.5 C45,2.91106605 42.0908169,0 38.5,0 C34.911066,0 32,2.91106605 32,6.5 C32,10.088934 34.911066,13 38.5,13 C42.0908169,13 45,10.088934 45,6.5 Z"
                  id="Stroke-42"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M32.9285714,26 L28,26 L28,24.375 C28,18.0934241 33.1493958,13 39.5,13 C43.3123393,13 46.6917948,14.8355357 48.78423,17.6617548 C50.1773785,19.5434585 51,21.864325 51,24.375 L51,26 L39.5,26"
                  id="Stroke-44"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M24,11 C15.1536558,15.1271232 8.69844426,22.8377695 7,32 M34,64.2876335 C35.6447502,64.5670191 37.3336261,64.7123665 39.055601,64.7123665 C40.7387916,64.7123665 42.3903573,64.5734927 44,64.3063073 M70,30 C67.9911619,21.2454188 61.6074155,13.9326168 53,10"
                  id="Shape"
                ></path>
              </g>
            </g>
            <g data-text-manage>
              <rect id="Rectangle" fill="#ffffff" x="0" y="88" width="128" height="46"></rect>
              <text
                fontFamily="Roboto-Bold, Roboto"
                fontSize="20"
                fontWeight="medium"
                // lineSpacing="14"
                letterSpacing="1"
                fill="#28A396"
              >
                <tspan x="28.425293" y="106">
                  Tenant
                </tspan>
                <tspan x="4" y="126">
                  Engagement
                </tspan>
              </text>
            </g>
          </g>
          <g id="CMS" transform="translate(352.000000, 362.000000)">
            <g data-icon-manage data-icon-cms>
              <g id="Oval">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-80)"
                  xlinkHref="#path-79"
                ></use>
                <circle
                  stroke="#28A396"
                  strokeWidth="1"
                  strokeLinejoin="square"
                  fill="#ffffff"
                  fillRule="evenodd"
                  cx="55"
                  cy="55"
                  r="53.5"
                ></circle>
              </g>
              <g id="Icon" transform="translate(22.000000, 21.000000)">
                <path
                  d="M51.3657213,47 C60.0078886,47 67,39.9956022 67,31.3324721 C67,25.0230883 63.269327,19.5844099 57.9092238,17.1221483 C58.020087,16.6519158 58.0664948,16.15843 58.0664948,15.6675279 C58.0664948,11.9521742 55.0731904,8.95250399 51.3657213,8.95250399 C50.6051487,8.95250399 49.8471543,9.08685614 49.1768192,9.33230718 C46.1628891,3.76186026 40.2665179,0 33.4987109,0 C24.387309,0 16.8615077,6.82612281 15.7657675,15.6675279 L15.6317005,15.6675279 C6.98953323,15.6675279 0,22.6719257 0,31.3324721 C0,39.9956022 6.98953323,47 15.6317005,47"
                  id="Stroke-144"
                  stroke="#28A396"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M49,34 L16,34 L16,27.2493377 C16,26.0067707 16.9843014,25 18.1991366,25 L46.8008634,25 C48.0156986,25 49,26.0067707 49,27.2493377 L49,34 Z"
                  id="Stroke-146"
                  stroke="#28A396"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <circle
                  id="pulse_greene"
                  stroke="#28A396"
                  fill="#FFFFFF"
                  cx="42"
                  cy="30"
                  r="1"
                ></circle>
                {/* <circle
                  id="pulse_orangee"
                  stroke="#28A396"
                  fill="#FFFFFF"
                  cx="46"
                  cy="30"
                  r="1"
                ></circle> */}
                {/* <circle
                  id="pulse_bluee"
                  stroke="#28A396"
                  strokeWidth="3"
                  cx="32.5"
                  cy="45.5"
                  r="2"
                ></circle> */}
                <path
                  d="M49,38.3643369 L49,55.8191159 C49,57.0238681 48.0156986,58 46.8008634,58 L18.1991366,58 C16.9843014,58 16,57.0238681 16,55.8191159 L16,34 L49,34"
                  id="Stroke-148"
                  stroke="#28A396"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <polygon
                  id="Stroke-150"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="45 30 45 30"
                ></polygon>
                <polygon
                  id="Stroke-152"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="41 30 41 30"
                ></polygon>
                <path
                  d="M40,43.605449 L37.8767923,39.894551 L37.8092698,39.9323915 C36.3937979,40.7573158 34.6232077,39.7255298 34.6232077,38.0782038 L34.6232077,38 L30.3742914,38 L30.3742914,38.0782038 C30.3742914,39.7255298 28.6062021,40.7573158 27.1882294,39.9323915 L27.1232077,39.894551 L25,43.605449 L25.0650217,43.6432896 C26.4804935,44.4682139 26.4804935,46.5292634 25.0650217,47.3541877 L25,47.394551 L27.1232077,51.105449 L27.1882294,51.0676085 C28.6062021,50.2426842 30.3742914,51.2719475 30.3742914,52.9217962 L30.3742914,53 L34.6232077,53 L34.6232077,52.9217962 C34.6232077,51.2719475 36.3937979,50.2426842 37.8092698,51.0676085 L37.8767923,51.105449 L40,47.394551 L39.9349783,47.3541877 C38.5170057,46.5292634 38.5170057,44.4682139 39.9349783,43.6432896 L40,43.605449 Z"
                  id="Stroke-154"
                  stroke="#28A396"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </g>
            <g data-text-manage>
              <g id="Rectangle">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-82)"
                  xlinkHref="#path-81"
                ></use>
                <use fill="#ffffff" fillRule="evenodd" xlinkHref="#path-81"></use>
              </g>
              <text
                fontFamily="Roboto-Bold, Roboto"
                fontSize="20"
                fontWeight="medium"
                fill="#28A396"
              >
                <tspan x="34" y="112">
                  CMS
                </tspan>
              </text>
            </g>
          </g>
          <g id="Sales-Reporting" transform="translate(422.000000, 69.000000)">
            <g data-icon-manage data-icon-sales>
              <g id="Oval">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-84)"
                  xlinkHref="#path-83"
                ></use>
                <circle
                  stroke="#28A396"
                  strokeWidth="1"
                  strokeLinejoin="square"
                  fill="#ffffff"
                  fillRule="evenodd"
                  cx="56"
                  cy="55"
                  r="53.5"
                ></circle>
              </g>
              <g
                id="Icon"
                transform="translate(31.000000, 25.000000)"
                stroke="#28A396"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              >
                <polyline
                  id="Stroke-96"
                  points="1 28 15.332617 15.9090909 28.0727209 26.2727273 44 9"
                ></polyline>
                <polyline id="Stroke-98" points="38 8 45 8 45 15"></polyline>
                <polyline id="Stroke-100" points="1 15 1 48 49 48"></polyline>
                <line x1="1" y1="0" x2="1" y2="7" id="Stroke-102"></line>
                <line x1="45" y1="48" x2="45" y2="25" id="Stroke-104"></line>
                <line x1="12" y1="27" x2="12" y2="48" id="Stroke-106"></line>
                <line x1="24" y1="37" x2="24" y2="48" id="Stroke-108"></line>
                <line
                  x1="35.5"
                  y1="31.6071429"
                  x2="35.5"
                  y2="47.3928571"
                  id="Stroke-108-Copy"
                ></line>
              </g>
            </g>

            <g data-text-manage>
              <g id="Rectangle">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-86)"
                  xlinkHref="#path-85"
                ></use>
                <use fill="#ffffff" fillRule="evenodd" xlinkHref="#path-85"></use>
              </g>
              <text
                fontFamily="Roboto-Bold, Roboto"
                fontSize="20"
                fontWeight="medium"
                // lineSpacing="14"
                letterSpacing="1.28571429"
                fill="#28A396"
              >
                <tspan x="26" y="106">
                  Sales
                </tspan>
                <tspan x="4" y="122">
                  Reporting
                </tspan>
              </text>
            </g>
          </g>
          <g id="Analytics" transform="translate(396.000000, 496.000000)">
            <g data-icon-manage data-icon-analytics>
              <g id="Oval">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-88)"
                  xlinkHref="#path-87"
                ></use>
                <circle
                  stroke="#28A396"
                  strokeWidth="1"
                  strokeLinejoin="square"
                  fill="#ffffff"
                  fillRule="evenodd"
                  cx="55"
                  cy="55"
                  r="53.5"
                ></circle>
              </g>
              <g id="Icon">
                <polyline
                  transform="translate(19.000000, 25.000000)"
                  stroke="#28A396"
                  id="Stroke-1"
                  points="0 24 5 23.7142857 16.4666667 23.7142857 23 24 28 18 31 30 36 21 40 27 44 24 48 23.7142857"
                ></polyline>
                <path
                  transform="translate(19.000000, 25.000000)"
                  stroke="#28A396"
                  strokeLinecap="round"
                  strokeWidth="3"
                  d="M16,19.75 C17.9738329,12.4173333 24.9357337,7 33.2193846,7 C43.0401926,7 51,14.61175 51,24 C51,33.3896667 43.0401926,41 33.2193846,41 C24.9371991,41 17.9767637,35.5840833 16.0014654,28.2556667"
                ></path>
                <path
                  transform="translate(19.000000, 25.000000)"
                  stroke="#28A396"
                  strokeLinecap="round"
                  strokeWidth="3"
                  d="M9,19.7703529 C11.0131765,8.53270588 20.9096471,0 32.8122353,0 C46.1703529,0 57,10.7449412 57,24 C57,37.2550588 46.1703529,48 32.8122353,48 C20.9096471,48 11.0131765,39.4672941 9,28.2296471"
                ></path>
                <line
                  transform="translate(19.000000, 25.000000)"
                  stroke="#28A396"
                  strokeLinecap="round"
                  strokeWidth="3"
                  x1="60"
                  y1="24.5"
                  x2="72"
                  y2="24.5"
                  id="Stroke-7"
                ></line>
                <path
                  transform="translate(19.000000, 25.000000)"
                  stroke="#28A396"
                  strokeLinecap="round"
                  strokeWidth="3"
                  d="M51,47.4059481 L64.9053874,61.575647 C65.4606373,62.141451 66.3609657,62.141451 66.9162155,61.575647 L70.5814325,57.8407621 C71.1395225,57.272064 71.1395225,56.3517282 70.5814325,55.7830301 L53.1301145,38"
                ></path>
              </g>
            </g>
            <g data-text-manage>
              <g id="Rectangle">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-90)"
                  xlinkHref="#path-89"
                ></use>
                <use fill="#ffffff" fillRule="evenodd" xlinkHref="#path-89"></use>
              </g>

              <text
                fontFamily="Roboto-Bold, Roboto"
                fontSize="20"
                fontWeight="medium"
                letterSpacing="1"
                fill="#28A396"
              >
                <tspan x="10" y="111">
                  Analytics
                </tspan>
              </text>
            </g>
          </g>
          <g id="Intranet" transform="translate(336.000000, 208.000000)">
            <g data-icon-manage data-icon-intranet>
              <g id="Oval" filter="url(#filter-92)">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-93)"
                  xlinkHref="#path-91"
                ></use>
                <circle
                  stroke="#28A396"
                  strokeWidth="1"
                  strokeLinejoin="square"
                  fill="#ffffff"
                  fillRule="evenodd"
                  cx="55"
                  cy="55"
                  r="53.5"
                ></circle>
              </g>
              <g id="Icon" transform="translate(17.000000, 12.000000)">
                <line
                  x1="11.4782609"
                  y1="71.7141536"
                  x2="25.826087"
                  y2="71.7141536"
                  id="Stroke-163"
                  stroke="#28A396"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></line>
                <path
                  d="M56.146161,12.3636364 L60.6887142,12.3636364 C63.197102,12.3636364 65.2312673,14.9341373 65.2312673,18.1038961 L65.2312673,32.4545455"
                  id="Stroke-165"
                  stroke="#28A396"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M11.2950971,34 L11.2950971,19.6493506 C11.2950971,16.4795918 14.6536136,13.9090909 18.7950971,13.9090909 L26.2950971,13.9090909"
                  id="Stroke-167"
                  stroke="#28A396"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12.9130435,40.1489362 L14.3478261,40.1489362 L20.923913,40.1489362 L32.8804348,40.1489362 C34.5293837,40.1489362 35.8695652,41.4323571 35.8695652,43.0185014 L35.8695652,60.2358927 C35.8695652,61.8188836 34.5293837,63.1054579 32.8804348,63.1054579 L2.98913043,63.1054579 C1.34018156,63.1054579 0,61.8188836 0,60.2358927 L0,43.0185014 C0,41.4323571 1.34018156,40.1489362 2.98913043,40.1489362 C4.21135266,40.1489362 5.12801932,40.1489362 5.73913043,40.1489362"
                  id="Stroke-171"
                  stroke="#28A396"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <line
                  x1="18.6521739"
                  y1="63.1054579"
                  x2="18.6521739"
                  y2="71.7141536"
                  id="Stroke-173"
                  stroke="#28A396"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></line>
                <path
                  d="M75.4227567,64.0297872 L75.4227567,66.018997 C75.4227567,68.2200447 73.7975098,70 71.7877706,70 L60.8851712,70 C58.8777908,70 57.2525439,68.2200447 57.2525439,66.018997 L57.2525439,44.1299391 C57.2525439,41.9288914 58.8777908,40.1489362 60.8851712,40.1489362 L71.7877706,40.1489362 C73.7975098,40.1489362 75.4227567,41.9288914 75.4227567,44.1299391 L75.4227567,57.5118959"
                  id="Stroke-175"
                  stroke="#28A396"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M69.8847562,42.7446809 L62.7927909,42.7446809 C61.8829885,42.7446809 61.146161,42.0113439 61.146161,41.1080873 L61.146161,40.1489362 L71.5291397,40.1489362 L71.5291397,41.1080873 C71.5291397,42.0113439 70.7945585,42.7446809 69.8847562,42.7446809 Z"
                  id="Stroke-177"
                  stroke="#28A396"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <line
                  x1="61.146161"
                  y1="66.106383"
                  x2="71.5291397"
                  y2="66.106383"
                  id="Stroke-179"
                  stroke="#28A396"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></line>
                <path
                  d="M56.146161,14.5105298 C56.146161,16.0516304 55.446161,17.4563732 54.321161,18.4623337 C53.196161,19.4657214 51.621161,20.0909091 49.896161,20.0909091 L33.646161,20.0909091 C29.496161,20.0909091 26.146161,17.0987555 26.146161,13.3939394 C26.146161,9.68912327 29.496161,6.6969697 33.646161,6.6969697 C33.646161,2.99215358 36.996161,0 41.146161,0 C45.296161,0 48.646161,2.99215358 48.646161,6.6969697 L48.646161,8.93015053 L49.896161,8.93015053 C53.346161,8.93015053 56.146161,11.4309014 56.146161,14.5105298 Z"
                  id="Stroke-183"
                  stroke="#28A396"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </g>
            <g data-text-manage>
              <g id="Rectangle" filter="url(#filter-95)">
                <use
                  fill="#ffffff"
                  fillOpacity="1"
                  filter="url(#filter-96)"
                  xlinkHref="#path-94"
                ></use>
                <use fill="#ffffff" fillRule="evenodd" xlinkHref="#path-94"></use>
              </g>
              <text
                fontFamily="Roboto-Bold, Roboto"
                fontSize="20"
                fontWeight="medium"
                letterSpacing="1.05555556"
                fill="#28A396"
              >
                <tspan x="15" y="112">
                  Intranet
                </tspan>
              </text>
            </g>
          </g>
        </g>
        <g id="Core" transform="translate(659.000000, 268.000000)">
          <g id="Group-2">
            <path
              d="M127,254 C140.269865,254 158.77314,249.752818 182.509827,241.258455 C165.741576,83.3770484 152.89273,3.56619845 143.963291,1.82590539 C137.717481,0.608635129 132.06305,0 127,0 C108.799743,0 91.4936766,3.82848643 75.8432043,10.7240563 C31.179876,30.4026381 0,75.0600939 0,127 C0,172.489485 23.9163067,212.393018 59.8607474,234.822426 C79.338981,246.976885 102.349322,254 127,254 Z"
              id="Oval"
              style={{ fillRule: "nonzero", fill: "#28a396" }}
            ></path>
            <path
              d="M127,254 C167.758535,254 204.032587,234.799648 227.270747,204.950354 C236.244491,193.423627 216.857286,148.770629 169.109134,70.9913598 C161.326255,58.3134538 138.969783,60.7908208 102.039715,78.4234608 L52.320877,208.294961 C49.1449583,210.05361 47.0379993,212.288623 46,215 C44.9620007,217.711377 44.9605764,220.983711 45.9957271,224.817002 C52.0054491,229.469496 56.6271225,232.804637 59.8607474,234.822426 C79.338981,246.976885 102.349322,254 127,254 Z"
              id="Oval"
              style={{ fillRule: "nonzero", fill: "#ff9b00" }}
            ></path>
            <path
              d="M210.794881,222.43498 C237.282434,199.159636 254,165.032116 254,127 C254,56.8598368 197.140163,0 127,0 C125.091956,0 131.404855,3.31151131 132,8 C132.595145,12.6884887 127.874324,15.3919399 129,20 C129.202709,20.8298076 128.773154,21.1249782 129,22 C141.088577,68.6297871 188.43022,177.720882 197,212 C197.930149,215.720598 197.357946,219.37285 199,221 C202.759696,224.725572 208.271168,224.652635 210.794881,222.43498 Z"
              id="Oval"
              style={{ fillRule: "nonzero", fill: "#63bbd4" }}
            ></path>

            <circle
              id="Oval"
              style={{ fillRule: "nonzero", fill: "#0b0b0b" }}
              cx="127"
              cy="127"
              r="112"
            ></circle>
            <g transform="translate(-657.000000, -290.000000)">
              <path
                style={{
                  display: "inline",
                  fill: "#ffffff",
                  fillRule: "evenodd",
                  stroke: "none",
                  strokeWidth: "0.156489",
                }}
                d="m 816.50096,437.91307 0.0854,-40.86335 7.90605,-0.0349 -0.0281,3.1434 h -3.91221 l 0.0372,34.68706 3.93069,0.009 0.0122,3.0696 z m 45.66053,0.0803 0.0691,-3.11152 h 3.91221 l -0.005,-34.69101 -3.9066,-0.0264 -0.008,-3.1402 7.91436,-0.0242 v 41 z m -138.79554,-6.26275 c 1.38199,0.17693 3.30628,0.41826 4.5971,-0.0815 1.08404,-0.41199 1.8806,-2.08003 1.06697,-4.36088 l -7.92601,-20.72075 6.81511,-0.0303 5.11772,15.38543 4.85437,-15.37001 6.50236,0.0403 c 0,0 -9.57892,26.33332 -10.09529,27.24395 -2.67226,3.92457 -6.62366,3.55403 -10.97545,3.07162 0.0187,-0.75531 0.0328,-3.80869 0.0431,-5.17786 z m 23.10784,-25.18152 5.94944,0.012 c 0,0 -0.0213,2.20798 -0.0213,2.82932 1.91411,-3.15408 5.81463,-3.86914 8.98189,-3.29478 6.46271,1.77449 8.10126,7.0181 8.10126,12.0433 0,5.5981 -2.78315,11.6759 -10.29215,11.6759 -2.26814,0 -4.7203,-1.22136 -6.46192,-3.29379 l 0.0401,10.60029 -6.34631,0.007 z m 13.37627,18.15028 c 0.90464,-0.37798 2.05824,-1.6669 2.54378,-2.68989 1.40735,-2.96518 0.82796,-8.24782 -1.20642,-9.95963 -1.70881,-1.43788 -4.75997,-1.62602 -6.4767,-0.31179 -2.26894,1.73697 -2.83416,7.60874 -1.22126,10.79163 0.49888,0.9845 1.77844,1.97153 2.7095,2.27019 0.85322,0.27369 2.78592,0.26099 3.6511,-0.10051 z m 15.17007,1.82362 c -1.98363,-1.88567 -3.08691,-5.50803 -3.05198,-8.81357 0.0642,-6.07885 3.73872,-11.71634 11.63109,-11.71634 4.29154,0 6.72093,1.4631 8.70519,4.35471 2.0445,3.52736 2.21636,5.47408 2.21636,9.06959 l -16.26267,-0.0495 c 0.1003,4.83457 3.19473,5.73811 5.33932,5.73811 2.11668,0 4.19049,-1.1111 4.95553,-2.90632 l 5.63256,0.0367 c -1.92063,6.16422 -6.17211,7.62928 -10.66457,7.62928 -3.22867,0 -6.23563,-1.18939 -8.50083,-3.34274 z m 8.33199,-15.84164 c -3.03935,0 -4.94715,2.0358 -5.10807,4.7422 l 9.96103,0.0275 c -0.47529,-3.10668 -2.2389,-4.76965 -4.85296,-4.76965 z m 46.79605,-3.42985 h 3.92504 v 22.60093 h -3.92504 z m 8.85035,-0.0836 h 3.92918 l 0.003,3.49473 c 2.12379,-3.37098 4.84786,-4.01406 7.75471,-4.01406 7.00562,0 7.81233,5.07272 7.86706,8.64543 l -0.0182,14.6152 -4.07595,-0.0557 0.0467,-14.26714 c -0.005,-4.06792 -2.07186,-5.59171 -4.65926,-5.59171 -3.24058,0 -6.85814,2.08245 -6.85814,6.89872 l 0.0749,12.95743 -4.07483,0.0126 z m -140.99643,22.0878 -0.003,-31.35736 6.28914,0.0184 c 0,0 -0.0548,8.1668 -0.0548,11.78776 2.31816,-3.00497 3.93437,-3.69351 6.91925,-3.71144 9.16512,-0.0551 8.05524,8.22235 8.08729,11.60548 0.0367,3.87183 0.11005,11.61548 0.11005,11.61548 l -6.46349,0.0499 -0.0356,-12.3456 c 0.14929,-3.71331 -0.73598,-5.92562 -3.97366,-5.92562 -4.05366,0 -4.59348,3.852 -4.59477,6.26072 l 0.0119,12.01602 z m 100.1344,-22.68556 h 5.93033 l -0.003,4.06632 c 0.98778,-2.12941 3.81219,-5.40034 8.69172,-4.52566 l -0.0171,5.99799 c -4.53617,-1.41091 -8.31121,1.3527 -8.31121,5.76936 0,5.50909 0.0363,11.29739 0.0363,11.29739 l -6.36604,-0.049 z m 31.90582,-7.9835 h 4.13676 v 4.96411 h -4.13676 z"
                id="path1962"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
